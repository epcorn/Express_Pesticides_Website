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
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center"> {/* Added bg-gray-100 for background when image doesn't cover */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } flex items-center justify-center`} // Added flex for centering if image doesn't fill
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "contain" }} // Changed to "contain"
          />
        </div>
      ))}

      {/* Removed the overlay text div completely */}
    </section>
  );
}