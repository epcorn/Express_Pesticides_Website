"use client";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      {icon && <img src={icon} alt={title} className="w-16 h-16 mb-4" />}
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
