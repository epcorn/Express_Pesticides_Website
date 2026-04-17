"use client";

import Image from "next/image";

export default function ServiceCard({ name, logo }) {
  
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      {/* Rounded Logo */}
      <div className="w-28 h-28 mb-4 relative rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
        <Image
          src={logo}
          alt={name}
          width={300}
          height={200}
          className="object-cover aspect-square"
          style={{width:"100%", height:"auto"}}
        />
      </div>

      {/* Service Name */}
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 text-center">
        {name}
      </h3>
    </div>
  );
}
