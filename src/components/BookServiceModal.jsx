"use client";

import { useState, useEffect } from "react";
import { ReceiptIndianRupee, X } from "lucide-react";
import { servicesData } from "../app/services/lib/ServiceData.js";
import { holidays, mockPincodes } from "@/data/bookservicemodelData.js";
import { toast } from "@/lib/toast.js";
import { getCoupons } from "@/app/actions/coupon.js";
import useCouponStore from "@/store/couponStore.js";

const PREFERRED_TIME_SLOTS = [
  "9–11 AM",
  "11–12 AM",
  "12–1 PM",
  "1–3 PM",
  "3–5 PM",
  "5–7 PM",
];

export default function BookServiceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [acceptCondition, setAcceptCondition] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isPincodeValid, setIsPincodeValid] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState("idle");
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [coupons, setCoupons] = useState([])
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const initialFormState = {
    category: "",
    subcategory: "",
    bhkType: "",
    serviceType: "single",
    name: "",
    email: "",
    phone: "",
    dateOfService: "",
    firstServiceDate: "",
    preferredTime: "",
    preferredDay: "",
    area: "",
    serviceAddress1: "",
    serviceAddress2: "",
    serviceAddress3: "",
    serviceLocation: "",
    servicePincode: "",
    serviceCity: "",
    billName: "",
    billPhone: "",
    billEmail: "",
    billingAddress1: "",
    billingAddress2: "",
    billingAddress3: "",
    billingLocation: "",
    billingPincode: "",
    billingCity: "",
    selectedCoupon: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  // Toggle body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // 1. Get coupon validation helper from Zustand store
  const { isCouponForUser } = useCouponStore();

  // 2. Compute discount and final total dynamically
  const activeCoupon = coupons?.find((f) => f._id === selectedCoupon);

  const discountAmount = (() => {
    if (!activeCoupon) return 0;
    if (activeCoupon.discountType === "percentage") {
      return (calculatedCost * activeCoupon.discountValue) / 100;
    } else {
      return Math.min(activeCoupon.discountValue, calculatedCost);
    }
  })();

  const discountedServiceCost = Math.max(0, calculatedCost - discountAmount);
  const gstAmount = discountedServiceCost * 0.18;
  const finalTotalCost = discountedServiceCost + gstAmount;

  // 3. Handle coupon change with user assignment security check
  const handleCouponChange = (e) => {
    const couponId = e.target.value;
    if (!couponId) {
      setSelectedCoupon(null);
      return;
    }

    const foundCoupon = coupons.find((c) => c._id === couponId);
    if (!foundCoupon) return;

    if (calculatedCost < (foundCoupon.minPurchaseAmount || 0)) {
      toast.warning(`Minimum purchase of ₹${foundCoupon.minPurchaseAmount} required for this coupon.`);
      setSelectedCoupon(null);
      return;
    }

    // Check if user email or phone is required & valid for this coupon
    const userIdentifier = formData.email || formData.phone;
    const check = isCouponForUser(foundCoupon, userIdentifier);

    if (!check.allowed) {
      toast.warning(check.message);
      setSelectedCoupon(null);
      return;
    }

    setSelectedCoupon(couponId);
  };

  // Handle Input Changes & Validations
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "dateOfService" || name === "firstServiceDate") {
      const now = new Date();
      const tomorrow = new Date(now.setDate(now.getDate() + 1))
        .toISOString()
        .split("T")[0];
      const checkDate = new Date(value);

      if (holidays.includes(value.slice(5))) {
        toast.warning("Oops! It's a holiday. Choose another date.");
        setFormData((prev) => ({ ...prev, [name]: "" }));
        return;
      }
      if (value === tomorrow && now.getHours() >= 14) {
        toast.warning("After 2 PM, next day appointments are unavailable.");
        setFormData((prev) => ({ ...prev, [name]: "" }));
        return;
      }
      if (checkDate.getDay() === 1) {
        toast.warning("Monday is off. Please select another day.");
        setFormData((prev) => ({ ...prev, [name]: "" }));
        return;
      }
    }
  };

  // Pincode Lookup API
  useEffect(() => {
    if (formData.servicePincode.length !== 6) return;

    async function verifyPincode() {
      try {
        const res = await fetch(`/api/pincode?code=${formData.servicePincode}`);
        const data = await res.json();
        const info = Array.isArray(data) ? data[0] : data;

        if (!mockPincodes.includes(formData.servicePincode)) {
          alert("Area is not serviceable");
          setFormData((prev) => ({
            ...prev,
            servicePincode: "",
            serviceLocation: "",
            serviceCity: "",
          }));
          return;
        }

        if (info?.subDistrict && info?.district) {
          const city =
            info.subDistrict.split(" ")[0] === info.district
              ? info.place.split(" ")[0]
              : info.subDistrict.split(/[ (]/)[0];
          setFormData((prev) => ({
            ...prev,
            serviceLocation: city,
            serviceCity: info.district,
          }));
        }
      } catch (err) {
        console.error("Pincode lookup failed:", err);
      }
    }
    verifyPincode();
  }, [formData.servicePincode]);

  useEffect(() => {
    if (activeCoupon && calculatedCost < (activeCoupon.minPurchaseAmount || 0)) {
      setSelectedCoupon(null);
      toast.warning("Coupon removed: order no longer meets the minimum amount.");
    }
  }, [calculatedCost]);

  // Dynamic Cost Calculation
  useEffect(() => {
    const { category, subcategory, bhkType, serviceType, area } = formData;
    if (!category || !serviceType) return setCalculatedCost(0);

    const catData = servicesData[category];
    if (!catData) return setCalculatedCost(0);

    if (catData.perSqFt) {
      setCalculatedCost((parseFloat(area) || 0) * catData.rate);
      return;
    }

    const pricing = subcategory
      ? catData[subcategory]?.[bhkType]
      : catData[bhkType];
    setCalculatedCost(pricing?.[serviceType] || 0);
  }, [formData]);

  // Sync Billing Address
  useEffect(() => {
    if (!sameAsShipping) return;
    setFormData((prev) => ({
      ...prev,
      billName: prev.name,
      billPhone: prev.phone,
      billEmail: prev.email,
      billingAddress1: prev.serviceAddress1,
      billingAddress2: prev.serviceAddress2,
      billingAddress3: prev.serviceAddress3,
      billingLocation: prev.serviceLocation,
      billingPincode: prev.servicePincode,
      billingCity: prev.serviceCity,
    }));
  }, [
    sameAsShipping,
    formData.name,
    formData.phone,
    formData.email,
    formData.serviceAddress1,
    formData.serviceAddress2,
    formData.serviceAddress3,
    formData.serviceLocation,
    formData.servicePincode,
    formData.serviceCity,
  ]);

  // Manual Pincode Verification Step
  const handlePincodeCheck = () => {
    setPincodeStatus("loading");
    setTimeout(() => {
      if (mockPincodes.includes(pincode)) {
        setIsPincodeValid(true);
        setPincodeStatus("idle");
      } else {
        setIsPincodeValid(false);
        setPincodeStatus("invalid");
      }
    }, 800);
  };

  // Payment Execution Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(calculatedCost > 0)) {
      return setSubmitMessage("Please select valid service options.");
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,                                   // server computes the price
          couponCode: activeCoupon?.couponCode,
          userIdentifier: formData.email.trim().toLowerCase(),
        }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Failed to create order");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_TEST,
        amount: orderData.amount,
        currency: "INR",
        name: "Express Pesticides",
        image:
          "https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png",
        description: `Payment for ${formData.category}`,
        order_id: orderData.id,
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: "#3B82F6" },
        handler: async function (response) {
          setSubmitMessage("Verifying payment...");
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, formData }),
            });
            const result = await verifyRes.json().catch(() => ({}));

            if (verifyRes.ok) {
              toast.success("Payment successful! Your service is booked.");
              setSubmitMessage("Success! Service booked.");
              setTimeout(() => {
                setIsOpen(false);
                setSubmitMessage("");
              }, 2500);
            } else {
              setSubmitMessage(`Payment validation failed: ${result.message || "Unknown error"}`);
            }
          } catch (err) {
            setSubmitMessage(`Payment validation failed: ${err.message}`);
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setSubmitMessage("Payment cancelled");
            setIsSubmitting(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  const categories = Object.keys(servicesData);
  const bhkOptions =
    formData.category &&
    (formData.subcategory
      ? Object.keys(servicesData[formData.category][formData.subcategory] || {})
      : Object.keys(servicesData[formData.category] || {}).filter(
        (k) => k.includes("BHK") || k.includes("RK"),
      ));
  const minDate = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];


  useEffect(() => {
    async function loadCoupons() {
      try {
        const res = await getCoupons();
        if (res?.success) {
          setCoupons(res.coupons.filter(c => c.isActive) || []);
        } else {
          setCoupons([]);
        }
      } catch (error) {
        console.error("Failed to fetch coupons:", error);
        setCoupons([]); // Safe fallback to array
      }
    }

    loadCoupons();
  }, []);

  //load coupon from stor

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 bg-blue-600 text-white font-bold py-3 px-4 rounded-l-lg shadow-lg hover:bg-blue-700 transition-all cursor-pointer"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
        Book a Service
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b z-10">
              <h2 className="text-xl font-bold">Book Your Service</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="border rounded-full p-1 text-red-600 hover:bg-red-100 transition-all">
                <X size={22} />
              </button>
            </div>

            <div className="p-6">
              {!isPincodeValid ? (
                <div className="space-y-3">
                  <label className="font-medium block">Enter Pincode:</label>
                  <input
                    type="number"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter 6-digit pincode"
                  />
                  <button
                    onClick={handlePincodeCheck}
                    disabled={pincodeStatus === "loading"}
                    className="w-full bg-blue-600 text-white py-2 rounded font-medium">
                    {pincodeStatus === "loading"
                      ? "Checking..."
                      : "Check Availability"}
                  </button>
                  {pincodeStatus === "invalid" && (
                    <p className="text-red-600 text-sm text-center">
                      Sorry, we do not service this pincode yet.
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  {/* Pincode Success Banner */}
                  <div className="bg-green-50 border border-green-300 p-2.5 rounded flex justify-between items-center">
                    <span>
                      Pincode: <strong>{pincode}</strong> (Serviceable)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsPincodeValid(false)}
                      className="text-blue-600 underline text-xs">
                      Change
                    </button>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block font-medium mb-1">
                      Service Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required>
                      <option value="">-- Select Category --</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Area or Property Type */}
                  {formData.category === "Civil Work" ? (
                    <div>
                      <label className="block font-medium mb-1">
                        Area (sq.ft)
                      </label>
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Enter total area"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  ) : (
                    bhkOptions?.length > 0 && (
                      <div>
                        <label className="block font-medium mb-1">
                          Property Type
                        </label>
                        <select
                          name="bhkType"
                          value={formData.bhkType}
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required>
                          <option value="">-- Select --</option>
                          {bhkOptions.map((bhk) => (
                            <option key={bhk} value={bhk}>
                              {bhk}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                  )}

                  {/* Service Type */}
                  <div>
                    <label className="block font-medium mb-1">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full p-2 border rounded">
                      <option value="single">Single Contract Service</option>
                      <option value="annual">
                        Annual Contract Service (Includes 3 free visits)
                      </option>
                    </select>
                  </div>

                  {/* Dates & Times */}
                  {formData.serviceType === "single" ? (
                    <div>
                      <label className="block font-medium mb-1">
                        Date of Service
                      </label>
                      <input
                        type="date"
                        name="dateOfService"
                        value={formData.dateOfService}
                        min={minDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-medium mb-1">
                          First Service Date
                        </label>
                        <input
                          type="date"
                          name="firstServiceDate"
                          min={minDate}
                          value={formData.firstServiceDate}
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-1">
                          Preferred Day
                        </label>
                        <select
                          name="preferredDay"
                          value={formData.preferredDay}
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required>
                          <option value="">-- Select Day --</option>
                          {[
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday",
                          ].map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block font-medium mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required>
                      <option value="">-- Select Time Slot --</option>
                      {PREFERRED_TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Address Block */}
                  <div className="border-t pt-4 space-y-2">
                    <h3 className="font-semibold text-base text-blue-700">
                      Ship To (Service Address)
                    </h3>
                    <input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 rounded w-full"
                      required
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                      />
                    </div>
                    <input
                      name="serviceAddress1"
                      placeholder="Address Line 1 (Building/Office)"
                      value={formData.serviceAddress1}
                      onChange={handleChange}
                      className="border p-2 rounded w-full"
                      required
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        name="serviceAddress2"
                        placeholder="Flat/Office No"
                        value={formData.serviceAddress2}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                      />
                      <input
                        name="serviceAddress3"
                        placeholder="Road/Lane Name"
                        value={formData.serviceAddress3}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="number"
                        name="servicePincode"
                        placeholder="Pincode"
                        value={formData.servicePincode}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                      />
                      <input
                        name="serviceLocation"
                        placeholder="Location"
                        value={formData.serviceLocation}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                      />
                      <input
                        name="serviceCity"
                        placeholder="City"
                        value={formData.serviceCity}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                      />
                    </div>
                  </div>

                  {/* Billing Address Block */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-base text-blue-700">
                        Bill To (Billing Address)
                      </h3>
                      <label className="flex items-center space-x-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsShipping}
                          onChange={(e) => setSameAsShipping(e.target.checked)}
                        />
                        <span>Same as Service Address</span>
                      </label>
                    </div>

                    {!sameAsShipping && (
                      <div className="space-y-2">
                        <input
                          name="billName"
                          placeholder="Full Name"
                          value={formData.billName}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          required
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            name="billPhone"
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.billPhone}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                          />
                          <input
                            name="billEmail"
                            type="email"
                            placeholder="Email Address"
                            value={formData.billEmail}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                          />
                        </div>
                        <input
                          name="billingAddress1"
                          placeholder="Address Line 1"
                          value={formData.billingAddress1}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                          required
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="number"
                            name="billingPincode"
                            placeholder="Pincode"
                            value={formData.billingPincode}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                          />
                          <input
                            name="billingLocation"
                            placeholder="Location"
                            value={formData.billingLocation}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                          />
                          <input
                            name="billingCity"
                            placeholder="City"
                            value={formData.billingCity}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Coupon Selection Section */}
                  <div className="border p-3 rounded-lg bg-gray-50 space-y-2">
                    <label className="block font-medium text-xs text-gray-700">Apply Coupon</label>
                    <div className="flex gap-2 items-center">
                      <select
                        name="couponSelect"
                        id="couponSelect"
                        value={selectedCoupon || ""}
                        onChange={handleCouponChange}
                        className="w-full p-2 border rounded text-xs bg-white"
                      >
                        <option value="">Select Coupon</option>
                        {coupons?.map((co) => (
                          <option key={co._id} value={co._id}>
                            {co.couponCode} ({co.discountType === "percentage" ? `${co.discountValue}% OFF` : `₹${co.discountValue} OFF`})
                          </option>
                        ))}
                      </select>
                    </div>

                    {activeCoupon && (
                      <p className="flex items-center gap-1.5 text-xs text-green-700 font-medium">
                        <ReceiptIndianRupee size={14} />
                        <strong>{activeCoupon.couponCode}</strong> applied successfully!
                      </p>
                    )}
                  </div>

                  {/* Cost Summary & Actions */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Service Cost:</span>
                        <span>₹ {calculatedCost.toFixed(2)}</span>
                      </div>

                      {activeCoupon && (
                        <div className="flex justify-between text-green-600 font-medium">
                          <span>Discount ({activeCoupon.couponCode}):</span>
                          <span>-₹ {discountAmount.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between border-b pb-1">
                        <span>GST (18%):</span>
                        <span>+₹ {gstAmount.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between text-sm font-bold pt-1 text-blue-600">
                        <span>Total Estimated Cost:</span>
                        <span>
                          ₹{" "}
                          {finalTotalCost.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>

                    {submitMessage && (
                      <p
                        className={`text-center text-xs font-semibold ${submitMessage.includes("Error") || submitMessage.includes("failed") ? "text-red-600" : "text-green-600"}`}>
                        {submitMessage}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-xs">
                      <input
                        type="checkbox"
                        id="termsAccept"
                        checked={acceptCondition}
                        onChange={(e) => setAcceptCondition(e.target.checked)}
                      />
                      <label htmlFor="termsAccept">
                        I hereby accept all service conditions and policies.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !acceptCondition}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium disabled:opacity-50">
                      {isSubmitting ? "Processing..." : "Proceed to Payment"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
