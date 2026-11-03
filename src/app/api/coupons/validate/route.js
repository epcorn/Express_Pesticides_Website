import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConn";
import Coupon from "@/model/couponModal";

export async function POST(request) {
  try {
    await dbConnect();
    const { couponCode, userIdentifier, orderAmount } = await request.json();

    if (!couponCode) {
      return NextResponse.json({ success: false, message: "Coupon code is required" }, { status: 400 });
    }

    // Find coupon by code
    const coupon = await Coupon.findOne({ couponCode: couponCode.toUpperCase() });
    if (!coupon || !coupon.isActive) {
      return NextResponse.json({ success: false, message: "Invalid or inactive coupon code" }, { status: 400 });
    }

    // Check Expiry Date
    if (new Date() > new Date(coupon.expiryDate)) {
      return NextResponse.json({ success: false, message: "This coupon has expired" }, { status: 400 });
    }

    // Check Minimum Purchase Amount
    if (orderAmount < coupon.minPurchaseAmount) {
      return NextResponse.json({
        success: false,
        message: `Minimum purchase amount of ₹${coupon.minPurchaseAmount} required for this coupon`,
      }, { status: 400 });
    }

    // Check Assigned User Restriction
    if (coupon.assignedTo && coupon.assignedTo.length > 0) {
      if (!userIdentifier) {
        return NextResponse.json({ success: false, message: "Please provide your email or phone number to use this coupon" }, { status: 400 });
      }

      const normalizedUser = userIdentifier.trim().toLowerCase();
      const userRecord = coupon.assignedTo.find((entry) => entry.user === normalizedUser);

      if (!userRecord) {
        return NextResponse.json({ success: false, message: "This coupon is not valid for your account" }, { status: 400 });
      }

      if (userRecord.used) {
        return NextResponse.json({ success: false, message: "You have already used this coupon" }, { status: 400 });
      }
    }

    // Calculate Discount Amount
    let discountAmount = 0;
    if (coupon.discountType === "percentage") {
      discountAmount = (orderAmount * coupon.discountValue) / 100;
    } else {
      discountAmount = Math.min(coupon.discountValue, orderAmount);
    }

    return NextResponse.json({
      success: true,
      coupon,
      discountAmount,
      message: "Coupon applied successfully!",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message || "Server error" }, { status: 500 });
  }
}