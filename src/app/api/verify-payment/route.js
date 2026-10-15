export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import axios from "axios";

import { servicesData } from "@/app/services/lib/ServiceData";
import dbConnect from "@/lib/dbConn";
import ServiceBooking from "@/model/serviceBookingModal";

const GST_RATE = 0.18;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_TEST,
  key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
});

// Prevent user-provided values from injecting HTML into emails.
function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

// Calculate the service cost using server-side pricing.
function calculateServiceCost(formData) {
  const category = servicesData[formData.category];

  if (!category) {
    throw new Error("Invalid service category");
  }

  let cost;

  if (category.perSqFt) {
    const area = Number(formData.area);

    if (!Number.isFinite(area) || area <= 0) {
      throw new Error("Invalid service area");
    }

    cost = area * Number(category.rate);
  } else {
    const pricing = formData.subcategory
      ? category[formData.subcategory]
      : category;

    const bhkPricing = pricing?.[formData.bhkType];

    cost = Number(bhkPricing?.[formData.serviceType] ?? 0);
  }

  if (!Number.isFinite(cost) || cost <= 0) {
    throw new Error("Invalid service pricing");
  }

  return Number(cost.toFixed(2));
}

// Build a simple booking confirmation email.
function buildInvoiceHtml(formData, serviceAmount, gstAmt, amountPaid) {
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
      <img
        src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png"
        alt="Express Pesticides"
        style="width:180px"
      />

      <h2 style="color:#16a34a">Payment Successful</h2>
      <p>Hello ${escapeHtml(formData.name)},</p>
      <p>Thank you for booking your service with Express Pesticides.</p>

      <h3>Booking Summary</h3>
      <p><b>Service:</b> ${escapeHtml(formData.category)}</p>
      <p><b>Property Type:</b> ${escapeHtml(formData.bhkType || "Property")}</p>
      <p><b>Service Type:</b> ${escapeHtml(formData.serviceType)}</p>
      <p><b>Service Address:</b> ${address}</p>

      <hr />
      <p>Service Cost: ₹${serviceAmount.toFixed(2)}</p>
      <p>GST (18%): ₹${gstAmt.toFixed(2)}</p>
      <h3>Total Paid: ₹${amountPaid.toFixed(2)}</h3>

      <p>Thank you for choosing Express Pesticides.</p>
    </div>
  `;
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

    // 1. Verify the Razorpay signature.
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest();

    let receivedSignature;

    try {
      receivedSignature = Buffer.from(razorpay_signature, "hex");
    } catch {
      return NextResponse.json(
        { message: "Invalid payment signature" },
        { status: 400 },
      );
    }

    if (
      receivedSignature.length !== expectedSignature.length ||
      !crypto.timingSafeEqual(expectedSignature, receivedSignature)
    ) {
      return NextResponse.json(
        { message: "Payment signature verification failed" },
        { status: 400 },
      );
    }

    // 2. Calculate service cost and GST on the server.
    let serviceAmount;
    let gstAmt;

    try {
      serviceAmount = calculateServiceCost(formData);
      gstAmt = Number((serviceAmount * GST_RATE).toFixed(2));
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // 3. Verify the actual payment with Razorpay.
    const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);

    if (
      paymentDetails.order_id !== razorpay_order_id ||
      paymentDetails.status !== "captured"
    ) {
      return NextResponse.json(
        { message: "Payment is not captured for this order" },
        { status: 400 },
      );
    }

    const expectedAmount = Math.round((serviceAmount + gstAmt) * 100);

    if (paymentDetails.amount !== expectedAmount) {
      return NextResponse.json(
        { message: "Payment amount does not match the service cost" },
        { status: 400 },
      );
    }

    // 4. Connect to MongoDB and prevent duplicate bookings.
    await dbConnect();

    const existingBooking = await ServiceBooking.findOne({
      orderId: razorpay_order_id,
    });

    if (existingBooking) {
      return NextResponse.json({
        success: true,
        message: "Booking already exists",
        bookingId: existingBooking._id,
      });
    }

    console.log("Calculated serviceAmount:", serviceAmount);
    console.log("Calculated gstAmt:", gstAmt);
    console.log(
      "Schema fields:",
      ServiceBooking.schema.path("serviceAmount")?.instance,
      ServiceBooking.schema.path("gstAmt")?.instance,
    );

    // 5. Save booking and calculated amounts.
    const newBooking = await ServiceBooking.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,

      serviceAmount,
      gstAmt,
      amountPaid: paymentDetails.amount / 100,
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

    console.log("Saved amounts:", {
      serviceAmount: newBooking.serviceAmount,
      gstAmt: newBooking.gstAmt,
    });

    // 6. Send email and SMS without blocking booking success.
    const amountPaid = paymentDetails.amount / 100;

    const notifications = [];

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && formData.email) {
      notifications.push(
        transporter.sendMail({
          from: `"Express Pesticides" <${process.env.EMAIL_USER}>`,
          to: formData.email,
          bcc: "exteam.epcorn@gmail.com",
          subject: `Service Booking Confirmed - ${razorpay_order_id}`,
          html: buildInvoiceHtml(formData, serviceAmount, gstAmt, amountPaid),
        }),
      );
    }

    if (
      process.env.TEXT_BEE_DEVICE_ID &&
      process.env.TEXT_BEE_API &&
      formData.phone
    ) {
      notifications.push(
        axios.post(
          `https://api.textbee.dev/api/v1/gateway/devices/${process.env.TEXT_BEE_DEVICE_ID}/send-sms`,
          {
            recipients: [String(formData.phone)],
            message: `Hi ${formData.name}, your ${formData.serviceType} service booking with Express Pesticides is confirmed. Amount paid: Rs. ${amountPaid.toFixed(2)}.`,
          },
          {
            headers: {
              "x-api-key": process.env.TEXT_BEE_API,
            },
          },
        ),
      );
    }

    await Promise.allSettled(notifications);

    // 7. Return the saved booking.
    return NextResponse.json(
      {
        success: true,
        message: "Payment verified and booking saved",
        bookingId: newBooking._id,
        serviceAmount,
        gstAmt,
        amountPaid,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to verify payment or save booking" },
      { status: 500 },
    );
  }
}
