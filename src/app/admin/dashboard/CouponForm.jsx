"use client";

import React, { useState, useEffect } from "react";
import { getCoupons } from "@/app/actions/coupon";

const getDateTime = (d) => {
  if (!d) return "N/A";
  const date = new Date(d);
  return date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
};

export default function CouponForm({ createCoupon }) {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState({ id: "", status: false })

  useEffect(() => {
    async function loadCoupons() {
      const result = await getCoupons();
      if (result.success) {
        setCoupons(result.coupons);
      }
    }
    loadCoupons();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = await createCoupon(formData);

    if (result.success) {
      setMessage(result.message);
      form.reset();

      const updated = await getCoupons();
      if (updated.success) {
        setCoupons(updated.coupons);
      }
    } else {
      setMessage(result.message);
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Create New Coupon</h2>

      {message && <p className="mb-4 text-sm font-semibold text-blue-600">{message}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-8">
        <div>
          <label className="block text-sm font-medium">Coupon Code</label>
          <input
            type="text"
            name="couponCode"
            placeholder="e.g. SAVE50"
            required
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Discount Type</label>
          <select
            name="discountType"
            required
            className="mt-1 w-full rounded border p-2 bg-white"
          >
            <option value="percentage">Percentage (%)</option>
            <option value="fixed">Fixed Amount</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Discount Value</label>
          <input
            type="number"
            name="discountValue"
            placeholder="e.g. 50"
            min="0"
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Min Purchase Amount</label>
          <input
            type="number"
            name="minPurchaseAmount"
            defaultValue="0"
            min="0"
            disabled
            className="w-full rounded border p-2 disabled:opacity-35"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium">Assign Users (Optional)</label>
          <input
            type="text"
            name="assignedTo"
            placeholder="e.g. user1@gmail.com"
            className="w-full rounded border p-2"
          />
          <span className="text-xs text-gray-500">Separate multiple emails with commas</span>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Save Coupon"}
          </button>
        </div>
      </form>

      <h3 className="text-lg font-bold mb-2">Coupons List</h3>
      <div className="overflow-auto max-h-126 ">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2 text-center w-12">#</th>
              <th className="border p-2">Coupon Code</th>
              <th className="border p-2">Discount Type</th>
              <th className="border p-2">Value</th>
              <th className="border p-2">Min Purchase Amt.</th>
              <th className="border p-2">Expiry</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.length > 0 ? (
              coupons?.map((co, idx) => {
                const isExpanded = details.id === co._id;

                return (
                  <React.Fragment key={co._id}>
                    <tr
                      onClick={() => setDetails({
                        id: isExpanded ? null : co._id,
                        status: !isExpanded
                      })}
                      className={`cursor-pointer transition-colors duration-150 ${isExpanded ? "bg-gray-100" : "hover:bg-gray-50"}`}
                    >
                      <td className="border border-gray-300 p-2 text-center">{idx + 1}</td>
                      <td className="border border-gray-300 p-2">{co.couponCode}</td>
                      <td className="border border-gray-300 p-2">{co.discountType}</td>
                      <td className="border border-gray-300 p-2">{co.discountValue}</td>
                      <td className="border border-gray-300 p-2">{co.minPurchaseAmount}</td>
                      <td className="border border-gray-300 p-2">{getDateTime(co?.expiryDate)}</td>
                      <td className="border border-gray-300 p-2">{co.isActive ? "Active" : "Used"}</td>
                    </tr>

                    {isExpanded && (
                      <tr className="bg-gray-50 animate-fade-in">
                        <td colSpan={7} className="border border-gray-300 p-2">
                          <CouponDetails assigned={co?.assignedTo} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">No coupons found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CouponDetails({ assigned }) {
  return (
    <ul>
      {assigned.length ?
        assigned.map((ass, idx) => (
          <li key={ass._id}>
            <div className="flex gap-5 items-center p-2 px-5 bg-gray-300 border-b border-b-gray-500">
              <p>{idx + 1}</p>
              <p className="">{ass.user}</p>
              <p className={`px-2 py-1 rounded-md ml-auto outline ${!ass.used ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>{!ass.used ? "Active" : "Used"}</p>
            </div>
          </li>
        )) : ""}
    </ul>
  )
}
