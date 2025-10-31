import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer"; // 1. Import Nodemailer
import Razorpay from "razorpay";

// 2. Configure Nodemailer with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Initialize Razorpay (needed to fetch payment details)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// This "buildInvoiceHtml" function is the same as before. It's perfect.
function buildInvoiceHtml(formData, paymentDetails, status) {
  const isSuccess = status === "Success";
  const fullAddress = `${formData.address1}, ${formData.address2}, ${formData.address3}, ${formData.location}, ${formData.city}`;
  const amountPaid = (paymentDetails.amount / 100).toLocaleString('en-IN');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <h1 style="color: ${isSuccess ? '#22c55e' : '#ef4444'}; text-align: center;">
        Payment ${status}
      </h1>
      <p style="font-size: 16px;">Hi ${formData.name},</p>
      <p style="font-size: 16px;">
        ${isSuccess
          ? `Thank you for your booking! Your payment was successful and your service is confirmed.`
          : `We're sorry, but your payment verification failed for Order ID: ${paymentDetails.order_id}. Please contact support.`
        }
      </p>
      
      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333;">Order Summary</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.service}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service Type:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.serviceType}</td>
        </tr>
        ${formData.serviceType === 'contract-based' ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Duration:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.duration}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Frequency:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formData.frequency}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Address:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${fullAddress}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0;"><strong>Total Paid:</strong></td>
          <td style="padding: 10px 0; text-align: right; font-size: 18px; font-weight: bold; color: #3B82F6;">₹ ${amountPaid}</td>
        </tr>
      </table>

      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333; margin-top: 20px;">Payment Details</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Order ID:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${paymentDetails.order_id}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Payment ID:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${paymentDetails.id || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Payment Method:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right; text-transform: capitalize;">${paymentDetails.method || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Status:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right; font-weight: bold; color: ${isSuccess ? '#22c55e' : '#ef4444'};">${paymentDetails.status || status}</td>
        </tr>
      </table>
      
      <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
        If you have any questions, please contact us at info@expresspesticides.com.
      </p>
    </div>
  `;
}

// --- Main API Function ---
export async function POST(req) {
  const { 
    razorpay_order_id, 
    razorpay_payment_id, 
    razorpay_signature,
    formData, // Order Details from the modal
  } = await req.json(); 
  
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_secret) {
    return NextResponse.json({ error: "Razorpay secret not set" }, { status: 500 });
  }

  let paymentStatus = "";
  let emailSubject = "";
  let paymentDetails = {};

  try {
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      paymentStatus = "Success";
      emailSubject = `Your Express Pesticides Service is Booked! (Order: ${razorpay_order_id})`;
      
      try {
        paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
      } catch (fetchError) {
        console.error("Razorpay Fetch Error:", fetchError);
        paymentDetails = { id: razorpay_payment_id, order_id: razorpay_order_id, amount: 0, method: 'N/A', status: 'Fetch Failed' };
      }
      
      // TODO: Save booking to your database here

    } else {
      paymentStatus = "Verification Failed";
      emailSubject = `Payment Failed for Express Pesticides (Order: ${razorpay_order_id})`;
      paymentDetails = { id: razorpay_payment_id, order_id: razorpay_order_id, amount: 0, method: 'N/A', status: 'Failed' };
    }

    // Build the custom invoice HTML
    const invoiceHtml = buildInvoiceHtml(
      formData, 
      paymentDetails, 
      paymentStatus
    );

    // 3. --- THIS IS THE "SEND INVOICE" PART (using Nodemailer) ---
    try {
      await transporter.sendMail({
        from: `"Express Pesticides" <${process.env.EMAIL_USER}>`, // Your email
        to: formData.email, // The customer's email
        bcc: 'info@expresspesticides.com', // Send a copy to yourself
        subject: emailSubject,
        html: invoiceHtml,
      });
      console.log("Invoice email sent successfully!");
    } catch (emailError) {
      console.error("Email failed to send:", emailError);
    }

    // 8. Return the final response to the frontend
    if (paymentStatus === "Success") {
      return NextResponse.json({ message: "Payment verified successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
    }

  } catch (error) {
    console.error("Main API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}