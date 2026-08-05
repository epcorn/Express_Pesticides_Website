"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import {
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaEye,
  FaBullseye,
  FaFlag,
} from "react-icons/fa";

export default function AboutPage() {
  const coreValues = [
    { name: "Integrity", desc: "Doing what’s right, every time." },
    { name: "Innovation", desc: "Adopting modern, science-based solutions." },
    { name: "Sustainability", desc: "Caring for people and the planet." },
    { name: "Excellence", desc: "Delivering results continuously." },
    {
      name: "Trust",
      desc: "Building long-term relationships through transparency.",
    },
  ];

  const processSteps = [
    {
      step: "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905649/express_pesticides/About_us/The_Express_Approach/Inspection_Identification_jx3ven.png",
      title: "Inspection & Identification",
      desc: "We begin with a detailed property inspection to identify pest activity, breeding / harborages areas, and entry points. Our subject matter experts identify the pests and assess the infestation level to plan the right management approach.",
    },
    {
      step: "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905648/express_pesticides/About_us/The_Express_Approach/Target_treatment_mr0gub.png",
      title: "Targeted Treatment",
      desc: "Based on our findings, we apply a precise treatment plan using advanced tools and safe-eco products. From spraying and fogging to gel baiting, every method is customised for maximum effectiveness with minimum disruption.",
    },
    {
      step: "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905649/express_pesticides/About_us/The_Express_Approach/Prevention_Maintence_a6a1mh.png",
      title: "Prevention & Maintenance",
      desc: "Once the pests are eliminated, our team manages to maintain a pest-free environment through regular monitoring, proofing vulnerable areas, and giving simple preventive tips for lasting protection from pests.",
    },
  ];

  const whyChoosePoints = [
    { name: "Expert Team", desc: "Trained and certified professionals." },
    {
      name: "Safe-Eco Solutions",
      desc: "Safe for people, pets, and the planet.",
    },
    {
      name: "Advanced Technology",
      desc: "Digital reports, QR tracking & smart monitoring.",
    },
    { name: "Customized Plans", desc: "Customized treatments for every need." },
    {
      name: "Dependable Service",
      desc: "Proven results and long-term protection.",
    },
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
    <main className="">
      {/* Section 1: About Us */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 sm:gap-5 lg:gap-12 items-center">
          <div className="md:col-span-2 flex justify-center items-center gap-2 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              About <span className="text-blue-600">Express Pesticides</span>
            </h1>
            <div className="w-24 h-24 flex-shrink-0 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-50 [background-clip:padding-box,border-box] [background-origin:border-box] animate-spin"></div>

              <div className="w-[calc(100%-12px)] h-[calc(100%-12px)] relative rounded-full overflow-hidden z-10 bg-gray-400">
                <Image
                  src="https://res.cloudinary.com/djc8opvcg/image/upload/v1785905365/express_pesticides/About_us/50_years_vci7ox.png"
                  fill
                  alt="50+year"
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Express Pesticides is a trusted name in integrated pest
              management, delivering smart, eco-conscious solutions that protect
              health, homes, and businesses. We serve residential, commercial,
              and industrial clients across India with safe, effective, and
              reliable pest management services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Backed by trained professionals, certified technicians, and a
              strong commitment to quality, we focus on innovative solutions and
              customer satisfaction. Our promise is simple—providing dependable
              pest management with zero compromise on safety, service, and
              excellence.
            </p>
          </div>
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg shadow-zinc-600">
            <Image
              src="https://res.cloudinary.com/epcorn/image/upload/v1761741739/Express_Pesticides_Website/ABOUT_US_IMAGES/about_us_picture_erxqjz.jpg"
              alt="Express Pesticides Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: CMD's Msg */}
      <section className="pt-20 p-5">
        <div className="relative bg-[#0A1649] text-white rounded-2xl">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content Column */}
            <div className="col-span-1 md:col-span-2 order-2 md:order-1 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                Message from <span className="text-blue-400">CMD</span>
              </h2>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                “Established in 1972 by Mr. Felix J. Quadros, Epcorn has over
                50+ years of expertise in delivering reliable pest management
                solutions. Driven by a commitment to protecting health,
                property, and the environment, our highly trained team provides
                safe, compliant, and customer-focused services. With experience
                across residential, commercial, industrial, and government
                sectors, Epcorn continues to build lasting trust through
                quality, innovation, and professional excellence.”
              </p>
            </div>

            {/* Image & Caption Column */}
            <div className="order-1 md:order-2 flex flex-col items-center md:items-end justify-self-center md:justify-self-end w-full max-w-sm">
              <div className="w-full aspect-square relative rounded-lg overflow-hidden bg-white shadow-lg shadow-black/40">
                <Image
                  src="https://res.cloudinary.com/djc8opvcg/image/upload/v1785905366/express_pesticides/About_us/Flex_sir_wz8ae2.png"
                  alt="Mr. Felix J. Quadros - Founder, Chairman & Managing Director"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </div>
              <p className="mt-3 w-full text-center md:text-right font-medium">
                Mr. Felix J. Quadros
              </p>
              <p className="z-10 font-semibold text-sm md:text-base lg:text-lg text-center md:text-right w-full">
                <span className="text-green-400">Founder</span>,{" "}
                <span className="text-white">Chairman</span> &{" "}
                <span className="text-amber-400">Managing Director</span>
              </p>
            </div>
          </div>

          {/* Decorative Triangle Corner Accent */}
          <div className="absolute h-0 w-0 border-x-[30px] border-b-[60px] -rotate-45 border-x-transparent border-b-[#0A1649] bg-transparent -bottom-5 right-10" />
        </div>
      </section>
      {/* Section 3: comprehensive page */}
      <section className="pt-20 bg-blue-50 pb-5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Heading spanning full width */}

          {/* Text Content Column */}
          <div className="flex flex-col justify-between h-full">
            <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Comprehensive Pest Management Solution
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              With over five decades of expertise, Express Pesticides provides
              comprehensive pest management solutions for residential,
              commercial, and industrial sectors. Our integrated approach
              combines scientific methods, skilled professionals, and
              eco-conscious practices to deliver safe, effective, and reliable
              protection against a wide range of pests, ensuring healthier and
              pest-free environments for our clients.
            </p>
          </div>

          {/* Clean 4-Image Grid Column */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {[
              "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905363/express_pesticides/About_us/Image_01_wczcsr.webp",
              "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905365/express_pesticides/About_us/Image_02_iqrhal.webp",
              "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905366/express_pesticides/About_us/Image_03_ztx2am.webp",
              "https://res.cloudinary.com/djc8opvcg/image/upload/v1785905367/express_pesticides/About_us/Image_04_dj5mpv.webp",
            ].map((img, index) => (
              <div
                key={img}
                className="relative aspect-video h-30 rounded-lg overflow-hidden border shadow-lg border-gray-100">
                <Image
                  src={img}
                  fill
                  alt={`Pest Management Solution Showcase ${index + 1}`}
                  className="object-cover"
                  sizes="(max-w-7xl) 280px, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 3: Sustainability */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg shadow-zinc-500 md:order-1">
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
              At Express Pesticides, sustainability is not just a practice —
              it’s our purpose. We are dedicated to reducing environmental
              impact through responsible pest management solutions that balance
              efficacy with ecology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our integrated pest management approach emphasizes prevention,
              monitoring, and the use of least-toxic methods, ensuring long-term
              control while protecting biodiversity and human health.
            </p>
          </div>
        </div>
      </section>
      {/* Section 4: Commitment */}
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
      {/* Section 5: Certificates (Horizontal scroll row) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Certifications & Accreditations
          </h2>

          <div className="overflow-x-auto scrollbar-hidden ">
            <div className="flex gap-8 min-w-max p-2">
              {certificates.map((cert) => (
                <div
                  key={cert.name}
                  className="relative w-72 h-96 shrink-0 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={cert.src}
                    alt={cert.name}
                    fill
                    sizes="300px"
                    className="object-contain p-4"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 p-2 text-center rounded">
                    <p className="font-semibold text-gray-800 text-sm">
                      {cert.name}
                    </p>
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
      {/* Section 6: Vision */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 bg-neutral-50 *:shadow-md">
        <div className="py-16 bg-blue-400 rounded-lg">
          <div className="max-w-5xl mx-auto text-center px-6">
            <FaEye className="text-5xl text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a leading provider of sustainable pest management and
              hygiene solutions in India by integrating technology, science, and
              environmental responsibility.
            </p>
          </div>
        </div>

        {/* Section 6: Mission */}
        <div className="py-16 bg-green-400 rounded-lg">
          <div className="max-w-5xl mx-auto text-center px-6">
            <FaBullseye className="text-5xl text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver reliable, effective, and environmentally conscious pest
              control services that safeguard communities while promoting
              health, hygiene, and sustainability.
            </p>
          </div>
        </div>
      </section>
      {/* Section 7: Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              How we work
            </span>
            <h2 className="text-4xl font-bold mt-2 text-slate-900">
              The Express Approach
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Optional: The connecting line for Desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-blue-100 -z-0"></div>

            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative group bg-white rounded-2xl shadow-sm border border-slate-100 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 z-10">
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white">
                  <Image
                    className="w-full h-full"
                    fill
                    src={step.step}
                    alt={step.title}
                  />
                </div>

                <h4 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 8: Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Express Pesticides?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoosePoints.map((point) => (
              <div
                key={point.name}
                className="bg-blue-500 rounded-lg p-6 shadow hover:bg-blue-400 transition">
                <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                <p className="text-base">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 9: Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
                Foundations
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900">
                Our Core Values
              </h3>
            </div>
            <p className="text-slate-500 mt-4 md:mt-0 max-w-sm">
              The principles that guide every technician, every treatment, and
              every customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-blue-600 transition-all duration-500 ease-in-out shadow-sm hover:shadow-2xl hover:-translate-y-2">
                {/* Subtle Icon/Number background */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-blue-600 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  {/* You can replace this with an actual Lucide or FontAwesome icon */}
                  <span className="text-lg font-black uppercase tracking-tighter">
                    {value.name.substring(0, 2)}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {value.name}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-blue-50 transition-colors duration-300">
                  {value.desc}
                </p>

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-tr-2xl rounded-bl-full opacity-20 group-hover:opacity-10 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
