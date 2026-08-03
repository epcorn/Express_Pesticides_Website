import { workServiceData } from "@/data/servicesData";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Image from "next/image";
import React from "react";

export async function WhereWeWork({ params }) {
  const { category, slug } = await params;
  const work = workServiceData[category]?.[slug] || workServiceData[slug];

  if (!work) return null;

  return (
    <div>
      {/* bg image */}
      <section>
        <div className="relative h-96 sm:h-[450px] md:h-[450px] lg:h-[450px] w-full">
          {/* Background Image */}
          <Image
            src={work.bgImg}
            alt={slug}
            fill
            priority
            className="object-cover"
          />

          {/* Perfect Center Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-white font-bold">
            <div className="max-w-4xl w-full mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight leading-tight">
                {work.title}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl mt-4 max-w-2xl mx-auto font-medium opacity-90">
                {work.slog}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted pest control  */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:p-10 text-slate-800">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Sub-slogan Heading */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {work.subSlog1}
          </h2>

          {/* Paragraph Split Rendering */}
          <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
            {work.para1
              ?.split(". ")
              .filter((sentence) => sentence.trim().length > 0) // Prevents rendering empty paragraphs
              .map((p, index) => (
                <p key={index}>{p.endsWith(".") ? p : `${p}.`}</p>
              ))}
          </div>
        </div>
      </section>

      {/* common risks */}
      <section className="bg-blue-400">
        <div className="max-w-7xl mx-auto px-6 py-12 md:p-10 text-slate-900">
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Common Risks We Help You Solve
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {work.risks.map((r, i) => (
              <li
                key={i}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm flex flex-col gap-4">
                {/* Header Row: Flex container aligning icon and title side-by-side */}
                <div className="flex items-center gap-4">
                  {/* Visual Anchor: Explicit container bounding for absolute fill images */}
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

                {/* Description Block */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* footer section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Column: Heading Text */}
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get A Quote Today
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Eliminate Pests &amp; Prevent Future Problems
            </p>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 shrink-0">
            {/* Phone Contact Block */}
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

            {/* Email Contact Block */}
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
