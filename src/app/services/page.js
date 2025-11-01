// app/services/page.js
"use client";

import Link from "next/link";
import {
  FaHospital,
  FaBriefcase,
  FaHotel,
  FaWarehouse,
  FaSchool,
  FaIndustry,
  FaHome,
  FaShoppingBag,
  FaCapsules,
  FaBuilding,
} from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    { name: "Green Shield Service", slug: "green-shield", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Green_Sheild_ghgou6.png" },
    { name: "Ratrid Service", slug: "rat-rid", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Ratrid_fpsjvx.png" },
    { name: "Anti-Termite Treatment (Pre-Construction)", slug: "anti-termite-treatment", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Anti_Termite_vhso7e.png" },
    { name: "Mosquit Service", slug: "mosquit", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Mosquit_pzudp3.png" },
    { name: "Flyban Service", slug: "flyban", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Flyban_cqavfk.png" },
    { name: "TermiProof Service", slug: "termi-proof", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682116/Express_Pesticides_Website/Termiproof_n7gexz.png" },
    { name: "BugFree Service", slug: "bug-free", logo: "https://res.cloudinary.com/epcorn/image/upload/v1761891012/Express_Pesticides_Website/Bugfree_Service_yt3rcu.png" },
    { name: "Woodsafe Service", slug: "woodsafe", logo: "https://res.cloudinary.com/epcorn/image/upload/v1760682117/Express_Pesticides_Website/Woodsafe_z4lp1y.png" },
  ];

  const workAreas = [
    { name: "Hospitals", icon: <FaHospital /> },
    { name: "Offices", icon: <FaBriefcase /> },
    { name: "Hotels & Restaurants", icon: <FaHotel /> },
    { name: "Warehouses", icon: <FaWarehouse /> },
    { name: "Schools & Colleges", icon: <FaSchool /> },
    { name: "Factories", icon: <FaIndustry /> },
    { name: "Residential Societies", icon: <FaHome /> },
    { name: "Shopping Malls", icon: <FaShoppingBag /> },
    { name: "Pharmaceutical Units", icon: <FaCapsules /> },
    { name: "Corporate Buildings", icon: <FaBuilding /> },
  ];

  return (
    <main className="pt-28">
      {/* Our Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex flex-col items-center transform hover:-translate-y-2 transition duration-300"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-full h-full object-cover scale-[1.3]"
                    style={{
                      maskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                      backgroundColor: "transparent",
                    }}
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
              <div
                key={area.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 p-6 flex flex-col items-center border border-gray-100 hover:-translate-y-2"
              >
                <div className="text-blue-600 text-4xl mb-3">{area.icon}</div>
                <p className="text-gray-800 font-semibold text-base">{area.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
