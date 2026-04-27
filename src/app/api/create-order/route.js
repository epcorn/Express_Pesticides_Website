import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// This POST function runs when your frontend calls '/api/create-order'
export async function POST(req) {
  // 1. Get the amount (e.g., 1000) from the modal's fetch request
  const { amount } = await req.json();

  // 2. Initialize Razorpay using your *secret* keys from .env.local
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID_TEST,
    key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
  });

  // 3. Set up the order options
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${new Date().getTime()}`,
    
  };

  try {
    // 4. Tell Razorpay's servers to create the order
    console.log("payment procesing....")
    const order = await razorpay.orders.create(options);
    
    // 5. Send the order details (like the new 'order.id') back to the frontend
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}