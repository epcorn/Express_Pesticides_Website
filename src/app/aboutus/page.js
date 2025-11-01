"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaLeaf, FaStar, FaEye, FaBullseye, FaFlag } from "react-icons/fa"; // Placeholder icons

export default function AboutPage() {
  // Removed the old placeholderImage variable

  const coreValues = [
    { name: "Integrity", desc: "Doing what’s right, every time." },
    { name: "Innovation", desc: "Adopting modern, science-based solutions." },
    { name: "Sustainability", desc: "Caring for people and the planet." },
    { name: "Excellence", desc: "Delivering results continuously." },
    { name: "Trust", desc: "Building long-term relationships through transparency." },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Inspection & Identification",
      desc: "We begin with a detailed property inspection to identify pest activity, breeding / harborages areas, and entry points. Our subject matter experts identify the pests and assess the infestation level to plan the right management approach.",
    },
    {
      step: "02",
      title: "Targeted Treatment",
      desc: "Based on our findings, we apply a precise treatment plan using advanced tools and safe-eco products. From spraying and fogging to gel baiting, every method is customised for maximum effectiveness with minimum disruption.",
    },
    {
      step: "03",
      title: "Prevention & Maintenance",
      desc: "Once the pests are eliminated, our team manages to maintain a pest-free environment through regular monitoring, proofing vulnerable areas, and giving simple preventive tips for lasting protection from pests.",
    },
  ];

  const whyChoosePoints = [
    { name: "Expert Team", desc: "Trained and certified professionals." },
    { name: "Safe-Eco Solutions", desc: "Safe for people, pets, and the planet." },
    { name: "Advanced Technology", desc: "Digital reports, QR tracking & smart monitoring." },
    { name: "Customized Plans", desc: "Customized treatments for every need." },
    { name: "Dependable Service", desc: "Proven results and long-term protection." },
  ];

  return (
    // UPDATED padding to pt-32 for the tall navbar
    <main className="pt-32">
      {/* Section 1: About Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-blue-600">Express Pesticides</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Express Pesticides, we believe that true progress begins with protection — protection of health, homes, and habitats. Founded with a vision to redefine pest management through innovation and integrity, Express Pesticides stands at the forefront of smart-eco solutions designed for a dependable, safer, and healthier world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With years of expertise and a commitment to excellence, we focus on a comprehensive integrated pest management approach through the offered services to residential, commercial, and industrial clients across India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of constantly trained professionals, certified applicators, and quality assurance specialists work hand-in-hand to uphold Express Pesticide's pledge: Zero compromise on safety, service, and satisfaction.
            </p>
          </div>
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
              // UPDATED IMAGE
              src="https://res.cloudinary.com/epcorn/image/upload/v1761741739/Express_Pesticides_Website/ABOUT_US_IMAGES/about_us_picture_erxqjz.jpg"
              alt="Express Pesticides Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Sustainability */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border md:order-1">
            <Image
              // UPDATED IMAGE
              src="https://res.cloudinary.com/epcorn/image/upload/v1761741752/Express_Pesticides_Website/ABOUT_US_IMAGES/Sustaintability_at_express_mtmiuv.webp"
              alt="Eco-friendly pest control"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sustainability at <span className="text-blue-600">Express Pesticides</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Express Pesticides, sustainability is not just a practice — it’s our purpose. We are dedicated to reducing environmental impact through responsible pest management solutions that balance efficacy with ecology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our integrated pest management approach emphasizes prevention, monitoring, and the use of least-toxic methods, ensuring long-term control while protecting biodiversity and human health. Our ESG report speaks on the different approaches taken and the impact we have initiated by constantly being focused on channelized waste recycling, integrating innovating greener techniques and investing in awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Icons (Placeholder) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaShieldAlt className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quality Assured</h3>
            </div>
            <div>
              <FaLeaf className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Eco-Friendly</h3>
            </div>
            <div>
              <FaStar className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">5-Star Service</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Certificates (Placeholder) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Certificates ISO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg border bg-gray-50">
                <Image
                  // Using the new sustainability image as a placeholder for certificates
                  src="https://res.cloudinary.com/epcorn/image/upload/v1761741752/Express_Pesticides_Website/ABOUT_US_IMAGES/Sustaintability_at_express_mtmiuv.webp"
                  alt={`ISO Certificate ${i}`}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 p-2 text-center rounded">
                  <p className="font-semibold text-gray-800">Certificate Placeholder {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <FaEye className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be India’s most trusted and innovative service provider of eco-Smart pest and hygiene solutions that ensure healthier living and working spaces.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <FaBullseye className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver sustainable, technology-driven services that exceed client expectations through professionalism, scientific excellence, and ethical practices.
              </p>
            </div>
            {/* Core Values */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <FaFlag className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Core Values</h3>
              <ul className="space-y-2">
                {coreValues.map((val) => (
                  <li key={val.name}>
                    <strong className="text-gray-800">{val.name}:</strong> 
                    <span className="text-gray-700"> {val.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                <div className="text-5xl font-extrabold text-blue-600 mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Express Pesticides</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Putting an end to your pest worries, our expert pest control services offer hygienic, odorless, and hassle-free treatments designed to protect your home and family. With eco-friendly methods, trained professionals, and a commitment to lasting results, we ensure a safe, clean, and comfortable environment for you to live pest-free.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {whyChoosePoints.map((point) => (
              <div key={point.name} className="bg-white p-4 rounded-lg shadow-md border">
                <h3 className="text-base font-bold text-blue-600">{point.name}</h3>
                {/* <p className="text-sm text-gray-600">{point.desc}</p> */}
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl font-bold text-gray-800">
            Express Pesticides — Smart. Safe. Sustainable.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}