import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import dbConnect from "@/lib/dbConn";
import Coupon from "@/model/couponModal";
import { calculateServiceCost, evaluateCoupon, buildPricing } from "@/lib/pricing";

export async function POST(req) {
  try {
    const { formData, couponCode, userIdentifier } = await req.json();

    if (!formData || typeof formData !== "object") {
      return NextResponse.json({ error: "Missing booking details" }, { status: 400 });
    }

    let serviceAmount;
    try {
      serviceAmount = calculateServiceCost(formData);
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }

    let discount = 0;
    let appliedCode = "NONE";

    if (couponCode) {
      await dbConnect();
      const coupon = await Coupon.findOne({ couponCode: String(couponCode).toUpperCase() });
      const result = evaluateCoupon(coupon, serviceAmount, userIdentifier);
      if (!result.ok) {
        return NextResponse.json({ error: result.message }, { status: 400 });
      }
      discount = result.discount;
      appliedCode = coupon.couponCode;
    }

    const pricing = buildPricing(serviceAmount, discount);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID_TEST,
      key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
    });

    const order = await razorpay.orders.create({
      amount: pricing.paise,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        appliedCoupon: appliedCode,
        userIdentifier: String(userIdentifier ?? "").trim().toLowerCase(),
        serviceAmount: String(pricing.serviceAmount),
        discountAmount: String(pricing.discountAmount),
        gstAmt: String(pricing.gstAmt),
      },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Failed to process order setup" }, { status: 500 });
  }
}