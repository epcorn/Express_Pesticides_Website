"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaLeaf, FaStar, FaEye, FaBullseye, FaFlag } from "react-icons/fa"; // Placeholder icons


export default function AboutPage() {
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

  const certificates = [
    {
      name: "ISO Certificate 1",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236911/Express_Pesticides_Website/ABOUT_US_IMAGES/ISO_Certificate_-1_gpcxxh.png",
    },
    {
      name: "ISO Certificate 2",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236881/Express_Pesticides_Website/ABOUT_US_IMAGES/ISO_Certificate_-2_wjx9vd.jpg",
    },
    {
      name: "ISO Certificate 3",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236885/Express_Pesticides_Website/ABOUT_US_IMAGES/ISO_Certificate_-3_pn8us9.png",
    },
    {
      name: "IPCA Membership Certificate",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236879/Express_Pesticides_Website/ABOUT_US_IMAGES/IPCA_Certificate_kw7o96.png",
    },
    {
      name: "MSME Certificate",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236879/Express_Pesticides_Website/ABOUT_US_IMAGES/MSME_Certificated_mtuuyk.png",
    },
    {
      name: "NPMA Certificate",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236883/Express_Pesticides_Website/ABOUT_US_IMAGES/NPMA_Certificate_ui3elm.png",
    },
    {
      name: "PMP-VAM Certificate",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236881/Express_Pesticides_Website/ABOUT_US_IMAGES/PMP_VAM_Certificate_gicrn9.png",
    },
    {
      name: "IGBC Certificate",
      src: "https://res.cloudinary.com/epcorn/image/upload/v1762236878/Express_Pesticides_Website/ABOUT_US_IMAGES/Express_Pesticides_Pvt_Ltd_IGBC_otg9gb.png",
    },
  ];

  return (
    <main className="pt-32">
      {/* Section 1: About Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-blue-600">Express Pesticides</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Express Pesticides, we believe that true progress begins with
              protection — protection of health, homes, and habitats. Founded with
              a vision to redefine pest management through innovation and
              integrity, Express Pesticides stands at the forefront of smart-eco
              solutions designed for a dependable, safer, and healthier world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With years of expertise and a commitment to excellence, we focus on
              a comprehensive integrated pest management approach through the
              offered services to residential, commercial, and industrial clients
              across India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of constantly trained professionals, certified applicators,
              and quality assurance specialists work hand-in-hand to uphold
              Express Pesticide's pledge: Zero compromise on safety, service, and
              satisfaction.
            </p>
          </div>
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
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
              src="https://res.cloudinary.com/epcorn/image/upload/v1761741752/Express_Pesticides_Website/ABOUT_US_IMAGES/Sustaintability_at_express_mtmiuv.webp"
              alt="Eco-friendly pest control"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sustainability at{" "}
              <span className="text-blue-600">Express Pesticides</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Express Pesticides, sustainability is not just a practice — it’s
              our purpose. We are dedicated to reducing environmental impact
              through responsible pest management solutions that balance efficacy
              with ecology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our integrated pest management approach emphasizes prevention,
              monitoring, and the use of least-toxic methods, ensuring long-term
              control while protecting biodiversity and human health.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commitment */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Commitment</h2>
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

      {/* Section 4: Certificates (Horizontal scroll row) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Certifications & Accreditations
          </h2>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 min-w-max px-2">
              {certificates.map((cert) => (
                <div
                  key={cert.name}
                  className="relative w-[300px] h-[380px] flex-shrink-0 rounded-lg overflow-hidden shadow-md border bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={cert.src}
                    alt={cert.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 p-2 text-center rounded">
                    <p className="font-semibold text-gray-800 text-sm">{cert.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Swipe or scroll horizontally to view all certificates →
          </p>
        </div>
      </section>

      {/* Section 5: Vision */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <FaEye className="text-5xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be a leading provider of sustainable pest management and hygiene
            solutions in India by integrating technology, science, and
            environmental responsibility.
          </p>
        </div>
      </section>

      {/* Section 6: Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <FaBullseye className="text-5xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver reliable, effective, and environmentally conscious pest
            control services that safeguard communities while promoting health,
            hygiene, and sustainability.
          </p>
        </div>
      </section>

      {/* Section 7: Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FaFlag className="text-5xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Our Process — The Express Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-5xl font-bold text-blue-600 mb-4">{step.step}</h3>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Express Pesticides?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoosePoints.map((point) => (
              <div
                key={point.name}
                className="bg-blue-500 rounded-lg p-6 shadow hover:bg-blue-400 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                <p className="text-base">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
