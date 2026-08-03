// app/services/page.js
"use client";

import Link from "next/link";

import Footer from "@/components/Footer";
import Image from "next/image";
import { servicesIcons, workAreas } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <main className="">
      {/* Our Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-28">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
            {servicesIcons?.map((s) => (
              <Link
                key={s.slug}
                href={`/services/pest/${s.slug}`}
                className="flex flex-col items-center transform hover:-translate-y-2 transition duration-300">
                <div className="relative w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-lg mt-4 text-center">
                  {s.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Where We <span className="text-blue-600">Work</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {workAreas.map((area) => (
              <Link
                href={`services/work/${area.slug}`}
                key={area.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 p-6 flex flex-col items-center border border-gray-100 hover:-translate-y-2">
                <div className="text-blue-600 text-4xl mb-3">{area.icon}</div>
                <p className="text-gray-800 font-semibold text-base">
                  {area.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
