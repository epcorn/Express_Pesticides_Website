"use client";

import ServiceCard from "@/components/ServiceCard"; // Re-using the same card component
import Link from "next/link";
import Footer from "@/components/Footer";
import { pests } from "@/data/pestliabrary";
import Image from "next/image";

export default function PestLibraryPage() {
  console.log(pests);
  return (
    <>
      <section className="py-20  bg-gradient-to-b from-gray-400 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our <span className="text-blue-600">Pest Library</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about common pests, their habitats , life cycle, and how
            to identify there infestation signs.
          </p>
        </div>
      </section>
      {/* Pest Grid Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {pests.map((pest) => (
              <Link
                key={pest.name}
                href={`/pestlibrary/${pest.name.toLowerCase().replace(/ /g, "-")}`}
                className="transform hover:-translate-y-1 transition duration-300 block text-center">
                <div>
                  {/* 1. Added relative and overflow-hidden to contain the circle */}
                  <div className="relative w-44 h-44 rounded-full overflow-hidden bg-white shadow-md mx-auto">
                    <Image
                      src={pest.logo}
                      alt={pest.name}
                      fill
                      sizes="192px"
                      className="object-contain scale-70 hover:scale-95 transition-all"
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold text-gray-800">
                    {pest.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
