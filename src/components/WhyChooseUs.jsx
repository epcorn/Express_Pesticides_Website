"use client";

import ServiceCard from "./ServiceCard";

const features = [
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761997367/Express_Pesticides_Website/WhyChooseUs/Service_image_uc9nrs.jpg",
    name: "Expert Team",
    description: "Trained and certified professionals.",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761997364/Express_Pesticides_Website/WhyChooseUs/Igbc_logo_ebk7l6.jpg",
    name: "Safe-Eco Solutions",
    description: "Safe for people, pets, and the planet.",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761997367/Express_Pesticides_Website/WhyChooseUs/Reasarch_ozvfao.jpg",
    name: "Advanced Technology",
    description: "Digital reports, QR tracking & smart monitoring.",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761997366/Express_Pesticides_Website/WhyChooseUs/QR_scan_c12jlp.png",
    name: "Customized Plans",
    description: "Tailored treatments for every need.",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1761997364/Express_Pesticides_Website/WhyChooseUs/Handshake_wjf4rt.avif",
    name: "Dependable Service",
    description: "Proven results and long-term protection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12 md:py-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
          Why Choose Express Pesticides
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          At Express Pesticides, we blend science, technology, and technique to deliver smarter pest and hygiene solutions.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
          >
            <ServiceCard name={feature.name} logo={feature.logo} />
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Tagline */}
      <div className="mt-10 sm:mt-12 text-center px-4 sm:px-6">
        <p className="text-blue-600 font-semibold text-lg sm:text-xl">
          Express Pesticides — Smart. Safe. Sustainable.
        </p>
      </div>
    </section>
  );
}
