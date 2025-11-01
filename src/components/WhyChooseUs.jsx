"use client";

import { FaUsersGear, FaLeaf, FaMicrochip, FaClipboardList, FaShieldHeart } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FaUsersGear className="text-blue-600 text-5xl" />,
    title: "Expert Team",
    description: "Trained and certified professionals.",
  },
  {
    icon: <FaLeaf className="text-green-600 text-5xl" />,
    title: "Safe-Eco Solutions",
    description: "Safe for people, pets, and the planet.",
  },
  {
    icon: <FaMicrochip className="text-indigo-600 text-5xl" />,
    title: "Advanced Technology",
    description: "Digital reports, QR tracking & smart monitoring.",
  },
  {
    icon: <FaClipboardList className="text-amber-600 text-5xl" />,
    title: "Customized Plans",
    description: "Tailored treatments for every need.",
  },
  {
    icon: <FaShieldHeart className="text-red-600 text-5xl" />,
    title: "Dependable Service",
    description: "Proven results and long-term protection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-black mb-4">
          Why Choose Express Pesticides
        </h2>
        <p className="text-gray-600 text-lg">
          At Express Pesticides, we blend science, technology, and technique to deliver smarter pest and hygiene solutions.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Footer Tagline */}
      <div className="mt-12 text-center px-6">
        <p className="text-blue-600 font-semibold text-xl">
          Express Pesticides — Smart. Safe. Sustainable.
        </p>
      </div>
    </section>
  );
}
