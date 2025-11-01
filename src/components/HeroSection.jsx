"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/epcorn/image/upload/v1761743794/Express_Pesticides_Website/HOMEPAGE_IMAGES/Latest_banner_smhi0q.png",
  "https://res.cloudinary.com/epcorn/image/upload/v1761742885/Express_Pesticides_Website/HOMEPAGE_IMAGES/Banner_5_wzdsac.png",
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
        h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen 
        bg-gray-50 flex items-center justify-center
        overflow-hidden
        mt-0 mb-0
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
                object-contain sm:object-contain md:object-cover 
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
