export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import htmlPdf from "html-pdf-node";

import dbConnect from "@/lib/dbConn";
import ServiceBooking from "@/model/serviceBookingModal";
import Coupon from "@/model/couponModal";
import { expressInvoiceHtml } from "@/data/bookservicemodelData";
import { calculateServiceCost } from "@/lib/pricing";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_TEST,
  key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
});

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function buildInvoiceHtml(formData, p) {
  const address = [
    formData.serviceAddress1,
    formData.serviceAddress2,
    formData.serviceAddress3,
    formData.serviceLocation,
    formData.serviceCity,
    formData.servicePincode,
  ]
    .filter(Boolean)
    .map(escapeHtml)
    .join(", ");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:8px">
      <img src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png" alt="Express Pesticides" style="width:180px" />
      <h2 style="color:#16a34a">Payment Successful</h2>
      <p>Hello ${escapeHtml(formData.name)},</p>
      <p>Thank you for booking your service with Express Pesticides.</p>
      <h3>Booking Summary</h3>
      <p><b>Service:</b> ${escapeHtml(formData.category)}</p>
      <p><b>Property Type:</b> ${escapeHtml(formData.bhkType || "Property")}</p>
      <p><b>Service Type:</b> ${escapeHtml(formData.serviceType)}</p>
      <p><b>Service Address:</b> ${address}</p>
      <hr />
      <p>Service Cost: ₹${p.serviceAmount.toFixed(2)}</p>
      ${p.discountAmount > 0 ? `<p>Discount (${escapeHtml(p.couponCode)}): -₹${p.discountAmount.toFixed(2)}</p>` : ""}
      <p>GST (18%): ₹${p.gstAmt.toFixed(2)}</p>
      <h3>Total Paid: ₹${p.amountPaid.toFixed(2)}</h3>
      <p>Thank you for choosing Express Pesticides.</p>
    </div>`;
}

export async function POST(req) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = await req.json();

    const secret = process.env.RAZORPAY_KEY_SECRET_TEST;

    if (
      !secret ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !formData ||
      typeof formData !== "object"
    ) {
      return NextResponse.json(
        { message: "Missing required payment details" },
        { status: 400 },
      );
    }

    // 1. Verify signature
    const expected = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest();
    const received = Buffer.from(razorpay_signature, "hex");

    if (
      received.length !== expected.length ||
      !crypto.timingSafeEqual(expected, received)
    ) {
      return NextResponse.json(
        { message: "Payment signature verification failed" },
        { status: 400 },
      );
    }

    // 2. Fetch the order (created by our server) and the payment from Razorpay
    const order = await razorpay.orders.fetch(razorpay_order_id);
    let payment = await razorpay.payments.fetch(razorpay_payment_id);

    if (payment.order_id !== razorpay_order_id) {
      return NextResponse.json(
        { message: "Payment does not belong to this order" },
        { status: 400 },
      );
    }

    if (payment.status === "authorized") {
      payment = await razorpay.payments.capture(
        razorpay_payment_id,
        payment.amount,
        "INR",
      );
    }
    if (payment.status !== "captured") {
      return NextResponse.json(
        { message: `Payment not captured (status: ${payment.status})` },
        { status: 400 },
      );
    }

    // 3. Amount paid must equal the amount our server put on the order
    if (payment.amount !== order.amount) {
      return NextResponse.json(
        { message: "Payment amount does not match the order" },
        { status: 400 },
      );
    }

    // 4. Re-check that formData wasn't tampered with after the order was created
    const notes = order.notes || {};
    let serviceAmount;
    try {
      serviceAmount = calculateServiceCost(formData);
    } catch (e) {
      return NextResponse.json({ message: e.message }, { status: 400 });
    }
    if (Math.abs(serviceAmount - Number(notes.serviceAmount)) > 0.01) {
      return NextResponse.json(
        { message: "Booking details do not match the paid order" },
        { status: 400 },
      );
    }

    const discountAmount = Number(notes.discountAmount || 0);
    const gstAmt = Number(notes.gstAmt || 0);
    const amountPaid = payment.amount / 100;
    const couponCode =
      notes.appliedCoupon && notes.appliedCoupon !== "NONE"
        ? notes.appliedCoupon
        : null;

    // 5. Prevent duplicate bookings
    await dbConnect();
    const existing = await ServiceBooking.findOne({
      orderId: razorpay_order_id,
    });
    if (existing) {
      return NextResponse.json({
        success: true,
        message: "Booking already exists",
        bookingId: existing._id,
      });
    }

    // 6. Save booking
    const newBooking = await ServiceBooking.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,

      serviceAmount,
      discountAmount,
      couponCode,
      gstAmt,
      amountPaid,
      paymentStatus: "Success",

      category: formData.category,
      subcategory: formData.subcategory,
      bhkType: formData.bhkType,
      serviceType: formData.serviceType,

      name: formData.name,
      email: formData.email,
      phone: formData.phone,

      dateOfService: formData.dateOfService
        ? new Date(formData.dateOfService)
        : null,
      firstServiceDate: formData.firstServiceDate
        ? new Date(formData.firstServiceDate)
        : null,
      preferredTime: formData.preferredTime,
      preferredDay: formData.preferredDay,
      area: formData.area,

      serviceAddress1: formData.serviceAddress1,
      serviceAddress2: formData.serviceAddress2,
      serviceAddress3: formData.serviceAddress3,
      serviceLocation: formData.serviceLocation,
      servicePincode: formData.servicePincode
        ? Number(formData.servicePincode)
        : null,
      serviceCity: formData.serviceCity,

      sameAsShipping: formData.sameAsShipping,
      billName: formData.billName,
      billPhone: formData.billPhone,
      billEmail: formData.billEmail,
      billingAddress1: formData.billingAddress1,
      billingAddress2: formData.billingAddress2,
      billingAddress3: formData.billingAddress3,
      billingLocation: formData.billingLocation,
      billingPincode: formData.billingPincode
        ? Number(formData.billingPincode)
        : null,
      billingCity: formData.billingCity,
    });

    // 7. Consume the coupon (non-fatal: the payment is already captured)
    if (couponCode) {
      try {
        const userId = String(notes.userIdentifier ?? "")
          .trim()
          .toLowerCase();
        const coupon = await Coupon.findOne({ couponCode })
          .select("assignedTo")
          .lean();
        const isAssigned = coupon?.assignedTo?.length > 0;

        const filter = isAssigned
          ? {
              couponCode,
              assignedTo: { $elemMatch: { user: userId, used: false } },
            }
          : {
              couponCode,
              $or: [
                { usageLimit: null },
                { $expr: { $lt: ["$usedCount", "$usageLimit"] } },
              ],
            };

        const update = isAssigned
          ? { $set: { "assignedTo.$.used": true }, $inc: { usedCount: 1 } }
          : { $inc: { usedCount: 1 } };

        const res = await Coupon.updateOne(filter, update);
        if (res.modifiedCount === 0) {
          // Someone else took the last use between create-order and now.
          console.warn(
            `Coupon ${couponCode} could not be consumed for order ${razorpay_order_id}`,
          );
        }
      } catch (e) {
        console.error("Failed to consume coupon:", e);
      }
    }

    const invoiceData = {
      ...formData,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      serviceAmount,
      discountAmount,
      couponCode,
      gstAmt,
      amountPaid,
      createdAt: newBooking.createdAt || new Date(),
    };
    // 8. Email (never fails the booking)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && formData.email) {
      try {
        const attachments = [];
        try {
          const pdfBuffer = await htmlPdf.generatePdf(
            { content: expressInvoiceHtml({ formData: invoiceData }) },
            { format: "A4", printBackground: true },
          );
          attachments.push({
            filename: `Invoice_${razorpay_order_id}.pdf`,
            content: pdfBuffer,
            contentType: "application/pdf",
          });
        } catch (pdfErr) {
          console.error("PDF generation failed:", pdfErr);
        }

        await transporter.sendMail({
          from: `"Express Pesticides" <${process.env.EMAIL_USER}>`,
          to: formData.email,
          subject: `Service Booking Confirmed - ${razorpay_order_id}`,
          html: buildInvoiceHtml(formData, {
            serviceAmount,
            discountAmount,
            couponCode,
            gstAmt,
            amountPaid,
          }),
          attachments,
        });
      } catch (mailErr) {
        console.error("Email failed:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified and booking saved",
      bookingId: newBooking._id,
      serviceAmount,
      discountAmount,
      gstAmt,
      amountPaid,
    });
  } catch (error) {
    console.error("verify-payment error:", error);
    return NextResponse.json(
      { message: "Unable to verify payment or save booking" },
      { status: 500 },
    );
  }
}
