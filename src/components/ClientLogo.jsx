"use client";

import Image from "next/image";

export default function ClientLogo({ logo, name }) {
  return (
    <div className="flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300">
      <div className="h-20 w-36 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={144}  // Optional: roughly match container width
          height={80}  // Optional: roughly match container height
          className="object-contain h-full w-auto"
        />
      </div>
    </div>
  );
}
