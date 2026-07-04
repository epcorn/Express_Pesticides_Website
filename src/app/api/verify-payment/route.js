export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import axios from "axios";
import { servicesData } from "@/app/services/lib/ServiceData";

// 🛡️ IMPORT YOUR BACKEND PRICING CONFIGURATION FILE HERE

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Updated to Live Environment Keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_TEST,
  key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
});

function buildInvoiceHtml(formData, paymentDetails, status) {
  const {
    name,
    email,
    phone,
    serviceType,
    serviceCity,
    bhkType,
    dateOfService,
    firstServiceDate,
  } = formData;
  const isSuccess = status === "Success";

  const serviceAddress = [
    formData.serviceAddress1,
    formData.serviceAddress2,
    formData.serviceAddress3,
    formData.serviceLocation,
    formData.serviceCity,
  ]
    .filter(Boolean)
    .join(", ");

  const billingAddress = [
    formData.billingAddress1,
    formData.billingAddress2,
    formData.billingAddress3,
    formData.billingLocation,
    formData.billingCity,
  ]
    .filter(Boolean)
    .join(", ");

  const isBillingSame = formData.sameAsShipping;
  const amountPaid = (paymentDetails.amount / 100).toLocaleString("en-IN");

  let schedulingHtml = "";
  if (formData.serviceType === "single") {
    schedulingHtml = `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Date of Service:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.dateOfService}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Preferred Time:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.preferredTime}</td>
      </tr>
    `;
  } else {
    schedulingHtml = `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>First Service Date:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.firstServiceDate}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Preferred Day:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.preferredDay}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Preferred Time:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.preferredTime}</td>
      </tr>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <div style="border-bottom: 1px solid lightgrey; display: flex; align-items: center; justify-content: space-between; padding: 1rem;">
        <h1 style="color: ${isSuccess ? "#22c55e" : "#ef4444"}; margin: 0;">Payment ${status}</h1>
        <img style="width: 200px; height: auto; margin-left:auto;" src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png" alt="Express Pesticides Logo"/>
      </div>
      <p style="font-size: 16px;">Hi ${name},</p>
      <p style="font-size: 16px;">
        ${isSuccess ? `Thank you for your booking! Your payment was successful and your service is confirmed.` : `Payment validation failed for Order ID: ${paymentDetails.order_id}. Please contact support.`}
      </p>
      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333;">Order Summary</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${formData.category}</td></tr>
        ${formData.bhkType ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Property Type:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${formData.bhkType}</td></tr>` : ""}
        ${formData.area ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Area:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${formData.area} sq.ft.</td></tr>` : ""}
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service Type:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${formData.serviceType}</td></tr>
        ${schedulingHtml}
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service Address:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${serviceAddress}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Billing Address:</strong></td><td style="text-align: right; padding: 10px 0; border-bottom: 1px solid #eee;">${isBillingSame ? "Same as Service Address" : billingAddress}</td></tr>
        <tr><td style="padding: 10px 0;"><strong>Total Paid:</strong></td><td style="text-align: right; padding: 10px 0; font-weight: bold; font-size: 18px; color: #3B82F6;">₹ ${amountPaid}</td></tr>
      </table>
      <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">If you have questions, contact us at info@expresspesticides.com.</p>
    </div>
  `;
}

async function fetchPaymentWithTimeout(paymentId, timeoutMs = 7000) {
  return Promise.race([
    razorpay.payments.fetch(paymentId),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Razorpay fetch timeout")), timeoutMs),
    ),
  ]);
}

export async function POST(req) {
  console.log("🟢 Live Mode verification sequence checking in...");

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = await req.json();
    const {
      name,
      email,
      phone,
      serviceType,
      preferredDay,
      serviceCity,
      bhkType,
      dateOfService,
      firstServiceDate,
    } = formData;

    // ✅ Using production key secret
    const key_secret = process.env.RAZORPAY_KEY_SECRET_TEST;

    if (!key_secret) {
      console.error("❌ Production configuration error: Missing Secret key!");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      );
    }

    // Step 1: Crypto signature token check
    const signBody = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(signBody)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.error("❌ Security signature tampering mismatch!");
      return NextResponse.json(
        { success: false, message: "Signature token parsing rejected" },
        { status: 400 },
      );
    }

    // Step 2: Live Server-side cost generation check 🛡️
    const selectedCategory = servicesData[formData.category];
    if (!selectedCategory) {
      return NextResponse.json(
        { success: false, message: "Selected category does not exist" },
        { status: 400 },
      );
    }

    let expectedServerCost = 0;
    if (selectedCategory.perSqFt) {
      const sqft = parseFloat(formData.area) || 0;
      expectedServerCost = sqft * selectedCategory.rate;
    } else if (formData.subcategory && selectedCategory[formData.subcategory]) {
      const bhkPricing =
        selectedCategory[formData.subcategory][formData.bhkType];
      expectedServerCost = bhkPricing
        ? bhkPricing[formData.serviceType] || 0
        : 0;
    } else {
      const bhkPricing = selectedCategory[formData.bhkType];
      expectedServerCost = bhkPricing
        ? bhkPricing[formData.serviceType] || 0
        : 0;
    }

    // 1.18 calculation replicates your frontend 18% GST addition setup
    const absoluteExpectedAmountInPaise = Math.round(
      1.18 * expectedServerCost * 100,
    );

    // Step 3: Call Razorpay API to match values
    let paymentDetails = await fetchPaymentWithTimeout(razorpay_payment_id);

    if (paymentDetails.amount !== absoluteExpectedAmountInPaise) {
      console.error(
        `❌ AMOUNT FRAUD ENCOUNTERED! Paid: ${paymentDetails.amount}, Computed: ${absoluteExpectedAmountInPaise}`,
      );
      return NextResponse.json(
        { success: false, message: "Payment manipulation transaction dropped" },
        { status: 400 },
      );
    }

    // Setup Messaging configuration loops
    const paymentStatus = "Success";
    const emailSubject = `Your Express Pesticides Service is Booked! (Order: ${razorpay_order_id})`;
    const invoiceHtml = buildInvoiceHtml(
      formData,
      paymentDetails,
      paymentStatus,
    );

    const SMSbody = `Hi ${name},\nYou have booked ${serviceType.toUpperCase()} service for your ${bhkType || "Property"} - ${serviceCity}, and Your service date is ${dateOfService || firstServiceDate} ${firstServiceDate ? "On Every " + preferredDay + "." : ""}.\nThanks for choosing Express Pesticides`;

    // Fire communication services concurrently
    try {
      await transporter.sendMail({
        from: `"Express Pesticides" <${process.env.EMAIL_USER}>`,
        to: email,
        bcc: "exteam.epcorn@gmail.com",
        subject: emailSubject,
        html: invoiceHtml,
      });

      await axios.post(
        `https://api.textbee.dev/api/v1/gateway/devices/${process.env.TEXT_BEE_DEVICE_ID}/send-sms`,
        { recipients: [phone.toString()], message: SMSbody },
        { headers: { "x-api-key": process.env.TEXT_BEE_API } },
      );
    } catch (msgErr) {
      console.error(
        "⚠️ Communication API non-blocking warning:",
        msgErr.message,
      );
    }

    return NextResponse.json(
      { success: true, message: "Payment secured and documented" },
      { status: 200 },
    );
  } catch (error) {
    console.error("🔥 Global Route Exception:", error);
    return NextResponse.json(
      { error: "Internal server error execution branch" },
      { status: 500 },
    );
  }
}
