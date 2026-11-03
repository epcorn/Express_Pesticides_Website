import { NextResponse } from "next/server";
// Make sure you have a database connection utility set up
 
import Coupon from "@/model/couponModal";
import dbConnect from "@/lib/dbConn";

export async function POST(request) {
  try {
    await dbConnect(); // Establish connection to MongoDB
    
    const body = await request.json();
    const { couponCode, discountType, discountValue, expiryDate } = body;

    // Create the coupon using the schema
    const newCoupon = await Coupon.create({
      couponCode,
      discountType,
      discountValue,
      expiryDate,
    });

    return NextResponse.json({ success: true, data: newCoupon }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create coupon" }, 
      { status: 400 }
    );
  }
}
