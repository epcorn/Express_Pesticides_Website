"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createCoupon } from "@/app/actions/coupon";
import CouponForm from "./CouponForm";
import BookedServices from "./BookedServices";

const menus = [{ label: "Coupon" }, { label: "Bookings" }];

export default function AdminDashboard() {
  const [text, setText] = useState("Bookings");
  const router = useRouter();
  // const { services, error, loading, route, fetchServices } = ServiceStore()

  const handleLogout = async () => {
    router.push("/admin/login");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="bg-neutral-300 p-2 ">
        <ul className="flex items-center gap-2">
          {menus.map((m) => {
            const isActive = m.label === text;
            return (
              <li
                key={m.label}
                className={`${isActive ? "bg-blue-900 text-white" : "bg-blue-100"} px-2 py-1 cursor-pointer `}
                onClick={() => setText(m.label)}>
                {" "}
                {m.label}
              </li>
            );
          })}
          <li className="ml-auto">
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}>
      </div>

      {text === "Coupon" ? (
        <CouponForm createCoupon={createCoupon} />
      ) : (
        <BookedServices />
      )}
    </div>
  );
}
