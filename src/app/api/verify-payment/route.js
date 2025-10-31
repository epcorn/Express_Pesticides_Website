import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";

// ✅ Hostinger SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Razorpay setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Function to build the HTML invoice
function buildInvoiceHtml(formData, paymentDetails, status) {
  const isSuccess = status === "Success";
  const fullAddress = [
    formData.address1,
    formData.address2,
    formData.address3,
    formData.location,
    formData.city,
  ]
    .filter(Boolean)
    .join(", ");
  const amountPaid = (paymentDetails.amount / 100).toLocaleString("en-IN");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <h1 style="color: ${isSuccess ? "#22c55e" : "#ef4444"}; text-align: center;">
        Payment ${status}
      </h1>
      <p style="font-size: 16px;">Hi ${formData.name},</p>
      <p style="font-size: 16px;">
        ${
          isSuccess
            ? `Thank you for your booking! Your payment was successful and your service is confirmed.`
            : `We're sorry, but your payment verification failed for Order ID: ${paymentDetails.order_id}. Please contact support.`
        }
      </p>

      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333;">Order Summary</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td><strong>Service:</strong></td><td style="text-align: right;">${formData.service}</td></tr>
        <tr><td><strong>Service Type:</strong></td><td style="text-align: right;">${formData.serviceType}</td></tr>
        ${
          formData.serviceType === "contract-based"
            ? `
              <tr><td><strong>Duration:</strong></td><td style="text-align: right;">${formData.duration}</td></tr>
              <tr><td><strong>Frequency:</strong></td><td style="text-align: right;">${formData.frequency}</td></tr>
            `
            : ""
        }
        <tr><td><strong>Address:</strong></td><td style="text-align: right;">${fullAddress}</td></tr>
        <tr><td><strong>Total Paid:</strong></td><td style="text-align: right; font-weight: bold; color: #3B82F6;">₹ ${amountPaid}</td></tr>
      </table>

      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333;">Payment Details</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td><strong>Order ID:</strong></td><td style="text-align: right;">${paymentDetails.order_id}</td></tr>
        <tr><td><strong>Payment ID:</strong></td><td style="text-align: right;">${paymentDetails.id || "N/A"}</td></tr>
        <tr><td><strong>Payment Method:</strong></td><td style="text-align: right;">${paymentDetails.method || "N/A"}</td></tr>
        <tr><td><strong>Status:</strong></td><td style="text-align: right; font-weight: bold; color: ${isSuccess ? "#22c55e" : "#ef4444"};">${paymentDetails.status || status}</td></tr>
      </table>

      <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
        If you have any questions, please contact us at info@expresspesticides.com.
      </p>
    </div>
  `;
}

// ✅ Helper: Fetch Razorpay payment with timeout
async function fetchPaymentWithTimeout(paymentId, timeoutMs = 7000) {
  return Promise.race([
    razorpay.payments.fetch(paymentId),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Razorpay fetch timeout")), timeoutMs)
    ),
  ]);
}

// ✅ Main API route
export async function POST(req) {
  console.log("🟢 Payment verification initiated...");

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, formData } = await req.json();
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_secret) {
    console.error("❌ Missing Razorpay key secret");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  let paymentStatus = "";
  let emailSubject = "";
  let paymentDetails = {};

  try {
    // Step 1: Verify signature
    const signBody = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(signBody)
      .digest("hex");

    console.log("Expected:", expectedSignature);
    console.log("Received:", razorpay_signature);

    if (expectedSignature === razorpay_signature) {
      console.log("✅ Signature verified successfully");
      paymentStatus = "Success";
      emailSubject = `Your Express Pesticides Service is Booked! (Order: ${razorpay_order_id})`;

      try {
        paymentDetails = await fetchPaymentWithTimeout(razorpay_payment_id);
        console.log("💰 Payment fetched:", paymentDetails.status);
      } catch (fetchError) {
        console.error("⚠️ Razorpay Fetch Error:", fetchError);
        paymentDetails = {
          id: razorpay_payment_id,
          order_id: razorpay_order_id,
          amount: 0,
          method: "Unknown",
          status: "Fetch Failed",
        };
      }
    } else {
      console.error("❌ Signature mismatch");
      paymentStatus = "Verification Failed";
      emailSubject = `Payment Failed for Express Pesticides (Order: ${razorpay_order_id})`;
      paymentDetails = {
        id: razorpay_payment_id,
        order_id: razorpay_order_id,
        amount: 0,
        method: "N/A",
        status: "Failed",
      };
    }

    // Step 2: Build and send invoice email
    const invoiceHtml = buildInvoiceHtml(formData, paymentDetails, paymentStatus);

    try {
      await transporter.sendMail({
        from: `"Express Pesticides" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        bcc: "info@expresspesticides.com",
        subject: emailSubject,
        html: invoiceHtml,
      });
      console.log("📧 Invoice email sent successfully to:", formData.email);
    } catch (emailErr) {
      console.error("❌ Email send failed:", emailErr);
    }

    // Step 3: Respond immediately
    if (paymentStatus === "Success") {
      console.log("✅ Payment verified completely");
      return NextResponse.json(
        { success: true, message: "Payment verified and email sent" },
        { status: 200 }
      );
    } else {
      console.log("❌ Payment verification failed");
      return NextResponse.json(
        { success: false, message: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("🔥 Main API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
