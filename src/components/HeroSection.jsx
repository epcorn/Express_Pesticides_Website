"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/data/herosectionData";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <Image
        key={current}
        src={images[current]}
        alt={`Slide ${current + 1}`}
        width={1920}
        height={1080}
        priority
        className="w-full h-auto object-cover transition-all duration-700"
        sizes="100vw"
      />
    </section>
  );
}