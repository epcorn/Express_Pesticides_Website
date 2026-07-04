import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    // 1. Read the text body first to handle empty requests safely
    const text = await req.text();
    if (!text) {
      return NextResponse.json(
        { error: "Empty request body received" },
        { status: 400 },
      );
    }

    const { amount } = JSON.parse(text);

    if (!amount) {
      return NextResponse.json(
        { error: "Amount parameter is required" },
        { status: 400 },
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID_TEST,
      key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
    });

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_order_${new Date().getTime()}`,
    };

    console.log("💳 Live payment processing initiated for amount:", amount);
    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("❌ Live Order Creation Error:", error);
    return NextResponse.json(
      { error: "Failed to process order setup" },
      { status: 500 },
    );
  }
}

// key_id: process.env.RAZORPAY_KEY_ID_TEST,
// key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
