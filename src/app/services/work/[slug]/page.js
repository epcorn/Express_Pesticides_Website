"use client"; // Required for Framer Motion scroll hooks

import { workServiceData } from "@/data/servicesData";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhereWeWork({ params }) {
  // Unwrap params using React.use() because it's a Client Component
  const { category, slug } = React.use(params);
  const work = workServiceData[category]?.[slug] || workServiceData[slug];

  // Setup the scroll tracking container
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Tracks as the hero section scrolls out of view
  });

  // Parallax and fade transforms based on scroll
  const bgImageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  if (!work) return null;

  return (
    <div>
      {/* 1. HERO SECTION WITH PARALLAX */}
      <section
        ref={containerRef}
        className="relative h-96 sm:h-[450px] md:h-[450px] lg:h-[450px] w-full overflow-hidden">
        {/* Background Image: Moves slightly down to create depth */}
        <motion.div
          style={{ y: bgImageY }}
          className="absolute -top-12 left-0 w-full h-[120%]">
          <Image
            src={work.bgImg}
            alt={slug}
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Text Overlay: Fades out and shifts position as you scroll */}
        <motion.div
          style={{ y: headerY, opacity: opacityFade }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-4 text-white">
          <div className="max-w-4xl w-full mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
              {work.title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mt-4 max-w-2xl mx-auto font-medium text-white/95 drop-shadow-md">
              {work.slog}
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. BODY CONTENT SECTION (Slightly shifts up over the hero) */}
      <motion.section
        style={{ y: contentY }}
        className="relative z-10 bg-white max-w-7xl mx-auto px-6 py-12 md:p-10 text-slate-800">
        <div className="flex flex-col gap-6 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {work.subSlog1}
          </h2>

          <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
            {work.para1
              ?.split(". ")
              .filter((sentence) => sentence.trim().length > 0)
              .map((p, index) => (
                <p key={index}>{p.endsWith(".") ? p : `${p}.`}</p>
              ))}
          </div>
        </div>
      </motion.section>

      {/* 3. COMMON RISKS */}
      <section className="relative z-10 bg-blue-400">
        <div className="max-w-7xl mx-auto px-6 py-12 md:p-10 text-slate-900">
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Common Risks We Help You Solve
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {work.risks.map((r, i) => (
              <li
                key={i}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={r.img}
                      alt={r.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 leading-tight">
                    {r.title}
                  </h4>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. FOOTER SECTION */}
      <section className="relative z-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get A Quote Today
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Eliminate Pests &amp; Prevent Future Problems
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 shrink-0">
            <a
              href="tel:02261386600"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 pr-6 rounded-lg border border-white/10 transition-all group">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                📞
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  Call Us
                </p>
                <p className="font-bold text-lg">02261386600</p>
              </div>
            </a>

            <a
              href="mailto:epcorn@yahoo.in"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 pr-6 rounded-lg border border-white/10 transition-all group">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                ✉️
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  Email Us
                </p>
                <p className="font-bold text-lg">epcorn@yahoo.in</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhereWeWork;
