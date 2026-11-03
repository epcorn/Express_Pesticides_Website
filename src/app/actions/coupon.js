"use server";

import dbConnect from "@/lib/dbConn";
import Coupon from "@/model/couponModal";
import { revalidatePath } from "next/cache";

export async function createCoupon(formData) {
  try {
    await dbConnect();

    const couponCode = formData.get("couponCode");
    const discountType = formData.get("discountType");
    const discountValue = Number(formData.get("discountValue"));
    const expiryDate = formData.get("expiryDate");
    const minPurchaseAmount = Number(formData.get("minPurchaseAmount")) || 0;

    // Converts comma-separated string into [{ user: '...', used: false }, ...]
    const rawAssigned = formData.get("assignedTo");
    const assignedTo = rawAssigned
      ? rawAssigned
          .split(/[\s,]+/)
          .filter(Boolean)
          .map((val) => ({ user: val.trim().toLowerCase(), used: false }))
      : [];

    await Coupon.create({
      couponCode,
      discountType,
      discountValue,
      expiryDate,
      minPurchaseAmount,
      assignedTo,
    });

    revalidatePath("/admin/dashboard");

    return { success: true, message: "Coupon created successfully!" };
  } catch (error) {
    return { success: false, message: error.message || "Something went wrong" };
  }
}

export async function getCoupons() {
  try {
    await dbConnect();
    const couponsData = await Coupon.find().sort({ createdAt: -1 }).lean();

    const rawPlainCoupons = JSON.parse(JSON.stringify(couponsData));

    const coupons = rawPlainCoupons.map((coupon) => ({
      ...coupon,
      createdAt: coupon.createdAt || null,
      updatedAt: coupon.updatedAt || null,
      expiryDate: coupon.expiryDate || null,
    }));

    return { success: true, coupons };
  } catch (err) {
    return {
      success: false,
      coupons: [],
      message: err.message || "coupon fetch error",
    };
  }
}

export async function checkCoupon(data) {}
