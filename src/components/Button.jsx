"use client";

import { toast } from "@/lib/toast";
import { useRef } from "react";

export default function Button({ children, msg = {}, onClick, type = "button", throttleMs = 2000 }) {
  const lastClickTime = useRef(0);

  const handleAction = (e) => {
    const now = Date.now();
    if (now - lastClickTime.current < throttleMs) return
    lastClickTime.current = now;

    if (onClick) {
      onClick();
    }

    const { info, success, error, warning } = msg;

    if (info) toast.info(info);
    if (success) toast.success(success);
    if (error) toast.error(error);
    if (warning) toast.warning(warning);
  };

  return (
    <button
      type={type}
      onClick={handleAction}
      className="mt-6 bg-blue-600 active:scale-90 text-white py-3 px-8 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
