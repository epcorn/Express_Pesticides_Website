import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// This POST function runs when your frontend calls '/api/create-order'
export async function POST(req) {
  // 1. Get the amount (e.g., 1000) from the modal's fetch request
  const { amount } = await req.json();
  
  // 2. Initialize Razorpay using your *secret* keys from .env.local
  // This is safe because this code only runs on the server.
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  // 3. Set up the order options
  const options = {
    amount: amount * 100, // Razorpay needs the amount in the smallest unit (paise)
                         // So, ₹1000 becomes 100000 paise
    currency: "INR",
    receipt: `receipt_order_${new Date().getTime()}`, // A unique ID for your records
  };

  try {
    // 4. Tell Razorpay's servers to create the order
    const order = await razorpay.orders.create(options);
    
    // 5. Send the order details (like the new 'order.id') back to the frontend
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}