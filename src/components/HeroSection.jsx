"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/effect-fade";
import { images } from "@/data/herosectionData";

const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function HeroSection() {
  return (
    <section className="w-full relative bg-black">
      <Swiper
        modules={[Autoplay, EffectCube]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={images.length > 1}
        className="w-full h-full"
      >
        {images.map((slide, index) => (
          <SwiperSlide key={slide.sm || index} className="w-full relative">
            
            {/* Mobile Banner Render (1920x1080 - 16:9 Aspect Ratio) */}
            <div className="block lg:hidden w-full aspect-video relative">
              <Image
                src={slide.sm}
                alt={`Slide Mobile ${index + 1}`}
                fill
                priority={index === 0}
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>

            {/* Desktop Banner Render (1920x800 - 12:5 / 2.4:1 Aspect Ratio) */}
            <div className="hidden lg:block w-full lg:aspect-[12/5] relative max-h-[85vh]">
              <Image
                src={slide.lg}
                alt={`Slide Desktop ${index + 1}`}
                fill
                priority={index === 0}
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                className="object-cover w-full h-full"
                sizes="100vw"
              />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}