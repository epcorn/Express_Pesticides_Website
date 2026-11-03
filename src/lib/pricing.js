import { servicesData } from "@/app/services/lib/ServiceData";

export const GST_RATE = 0.18;
export const round2 = (n) =>
  Math.round((Number(n) + Number.EPSILON) * 100) / 100;

export function calculateServiceCost(formData) {
  const category = servicesData[formData?.category];
  if (!category) throw new Error("Invalid service category");

  let cost;
  if (category.perSqFt) {
    const area = Number(formData.area);
    if (!Number.isFinite(area) || area <= 0)
      throw new Error("Invalid service area");
    cost = area * Number(category.rate);
  } else {
    const pricing = formData.subcategory
      ? category[formData.subcategory]
      : category;
    cost = Number(pricing?.[formData.bhkType]?.[formData.serviceType] ?? 0);
  }

  if (!Number.isFinite(cost) || cost <= 0)
    throw new Error("Invalid service pricing");
  return round2(cost);
}

// Returns { ok, message?, discount }
export function evaluateCoupon(coupon, serviceAmount, userIdentifier) {
  if (!coupon || !coupon.isActive)
    return { ok: false, message: "Coupon is invalid or inactive" };
  if (new Date() > new Date(coupon.expiryDate))
    return { ok: false, message: "Coupon has expired" };

  if (coupon.usageLimit != null && coupon.usedCount >= coupon.usageLimit)
    return { ok: false, message: "Coupon usage limit reached" };

  if (serviceAmount < (coupon.minPurchaseAmount || 0))
    return {
      ok: false,
      message: `Minimum purchase of ₹${coupon.minPurchaseAmount} required`,
    };

  if (coupon.assignedTo?.length > 0) {
    const user = String(userIdentifier ?? "")
      .trim()
      .toLowerCase();
    const rec = coupon?.assignedTo?.find((e) => e.user === user);
    if (!rec || rec?.used)
      return { ok: false, message: "Coupon is already used by this user" };
  }

  const raw =
    coupon.discountType === "percentage"
      ? (serviceAmount * coupon.discountValue) / 100
      : coupon.discountValue;

  return { ok: true, discount: round2(Math.min(raw, serviceAmount)) };
}

export function buildPricing(serviceAmount, discount = 0) {
  const discounted = round2(Math.max(0, serviceAmount - discount));
  const gstAmt = round2(discounted * GST_RATE);
  const total = round2(discounted + gstAmt);
  return {
    serviceAmount,
    discountAmount: round2(discount),
    discounted,
    gstAmt,
    total,
    paise: Math.round(total * 100),
  };
}
