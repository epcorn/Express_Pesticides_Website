"use client";

export default function TextInput({ label, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded px-4 py-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
