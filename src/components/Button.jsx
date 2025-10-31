"use client";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-6 bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
