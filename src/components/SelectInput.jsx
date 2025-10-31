"use client";

export default function SelectInput({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <select
        className="border rounded px-4 py-2"
        value={value}
        onChange={onChange}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
