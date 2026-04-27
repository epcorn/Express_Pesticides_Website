"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/data/herosectionData";



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
      className="mt-0 relative  aspect-video bg-gray-50 flex items-center justify-center overflow-hidden"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-top w-auto h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}