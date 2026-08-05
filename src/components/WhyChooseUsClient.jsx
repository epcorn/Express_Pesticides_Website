"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseUsClient({ card }) {
  const containerRef = useRef(null);

  // Track scroll relative to this section entering and exiting the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Increased pixel offsets to make parallax effect clearly visible
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Dynamic Parallax Hero Area */}
      <div className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-t from-blue-100 to-neutral-50">
        {card?.heading && (
          <motion.h2
            style={{ y: headerY, opacity: opacityFade }}
            className="text-center text-3xl md:text-5xl font-semibold underline mb-8 px-4 relative z-10"
          >
            {card.heading}
          </motion.h2>
        )}

        <section className="w-full px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Content Area (Spans 2 columns on lg screens) */}
            <motion.div
              style={{ y: contentY }}
              className="lg:col-span-2 order-2 text-left relative z-10"
            >
              {card?.subHeading && (
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-neutral-700">
                  {card.subHeading}
                </h4>
              )}
              {card?.overview && (
                <p className="ml-3 text-base md:text-lg text-neutral-600 leading-relaxed">
                  {card.overview}
                </p>
              )}
            </motion.div>

            {/* Right Image Container (Spans 1 column on lg screens) */}
            {card?.img && (
              <motion.div
                style={{ y: imageY }}
                className="relative w-full order-1 max-w-[320px] aspect-square rounded-xl shadow-2xl overflow-hidden justify-self-center border border-white/20 z-20"
              >
                <Image
                  src={card.img}
                  alt={card?.heading || "Card image"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </motion.div>
            )}
          </div>
        </section>
      </div>

      {/* Static Content Base Section */}
      <section className="relative z-20 p-5 md:p-12 bg-green-50 shadow-[0_-15px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto">
          {card?.teamTitle && (
            <h3 className="text-2xl font-bold mb-6 text-green-900 border-b pb-2">
              {card.teamTitle}
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card?.team?.map((t, index) => (
              <div
                key={t.title || index}
                className="bg-white p-6 rounded-lg shadow-sm border border-green-100"
              >
                <h4 className="text-lg font-semibold text-neutral-800">
                  {t.title}
                </h4>
                <p className="mt-2 text-neutral-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {card?.why && (
        <section className="relative z-20 p-5 md:p-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 border-b pb-2">
              Why Choose Express Pesticide
            </h3>
            <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
              {card.why}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}