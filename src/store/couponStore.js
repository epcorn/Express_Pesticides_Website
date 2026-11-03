import { create } from "zustand";

const useCouponStore = create((set, get) => ({
  appliedCoupon: null,
  discountAmount: 0,
  error: null,

  validateCoupon: async ({ couponCode, userIdentifier, orderAmount }) => {
    set({ error: null });

    try {
      const response = await fetch("/api/coupon/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          couponCode,
          userIdentifier,
          orderAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to validate coupon");
      }

      set({ appliedCoupon: data.coupon, discountAmount: data.discountAmount });
      return {
        success: true,
        coupon: data.coupon,
        discount: data.discountAmount,
        message: data.message,
      };
    } catch (err) {
      set({ error: err.message, appliedCoupon: null, discountAmount: 0 });
      return { success: false, message: err.message };
    }
  },

  // Helper check if a specific coupon object is valid for the given user identifier
  isCouponForUser: (coupon, userIdentifier) => {
    // If no users are assigned to this coupon, it's open to everyone
    if (!coupon.assignedTo || coupon.assignedTo.length === 0) {
      return { allowed: true };
    }

    if (!userIdentifier) {
      return {
        allowed: false,
        message: "Please enter your email or phone number to use this coupon.",
      };
    }

    const normalizedUser = userIdentifier.trim().toLowerCase();
    const userRecord = coupon.assignedTo.find(
      (entry) => entry.user === normalizedUser,
    );

    if (!userRecord) {
      return {
        allowed: false,
        message: "This coupon is not assigned to your account.",
      };
    }

    if (userRecord?.used) {
      return { allowed: false, message: "You have already used this coupon." };
    }

    return { allowed: true };
  },

  removeCoupon: () => set({ appliedCoupon: null, error: null }),
}));

export default useCouponStore;
