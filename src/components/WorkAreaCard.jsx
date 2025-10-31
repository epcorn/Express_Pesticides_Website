"use client";

import Image from "next/image";

export default function ServiceCard({ name, logo }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 cursor-pointer hover:scale-105">
      <div className="w-20 h-20 mb-4 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
    </div>
  );
}
