"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/epcorn/image/upload/v1762241440/Express_Pesticides_Website/HOMEPAGE_IMAGES/HERO_SECTION_IMAGES/NEW_Banner_01_oecm5h.png",
  "https://res.cloudinary.com/epcorn/image/upload/v1762241440/Express_Pesticides_Website/HOMEPAGE_IMAGES/HERO_SECTION_IMAGES/NEW_Banner_02_rr4hrr.png",
  "https://res.cloudinary.com/epcorn/image/upload/v1762241442/Express_Pesticides_Website/HOMEPAGE_IMAGES/HERO_SECTION_IMAGES/NEW_Banner_03_kzivzx.png",
  "https://res.cloudinary.com/epcorn/image/upload/v1762241443/Express_Pesticides_Website/HOMEPAGE_IMAGES/HERO_SECTION_IMAGES/NEW_Banner_04_nzdqzy.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative w-full 
        aspect-video /* THIS IS THE FIX: Replaces all h-[...] classes */
        bg-gray-50 flex items-center justify-center
        overflow-hidden
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="
                object-cover /* Keep object-cover. It will fill the 16:9 box perfectly. */
                object-center
              "
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}