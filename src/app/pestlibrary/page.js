"use client";

import ServiceCard from "@/components/ServiceCard"; // Re-using the same card component
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PestLibraryPage() {

  // List of all pests with their images
  const pests = [
    { 
      name: "Ant", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804700/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Ant_czljgk.png"
    },
    { 
      name: "Rat", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Rat_jcz3di.png"
    },
    { 
      name: "Cockroach", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Cockroach_rokrlj.png"
    },
    { 
      name: "Termite", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Termite_whu5uj.png"
    },
    { 
      name: "Mosquito", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Mosquitos_jnw16v.png"
    },
    { 
      name: "Flies", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804700/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Housefly_vt153s.png"
    },
    { 
      name: "Silverfish", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804702/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Silverfish_xldj0a.png"
    },
    { 
      name: "Lizard", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Lizard_apbydc.png"
    },
    { 
      name: "Bedbug", 
      logo: "https://res.cloudinary.com/epcorn/image/upload/v1761804701/Express_Pesticides_Website/PEST_INSIGHTS_IMAGES/PEST_VECTOR_IMAGES/Bedbug_am4fgb.png"
    },
  ];

  return (
    <main className="pt-32"> {/* Adjusted padding for the tall navbar */}
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our <span className="text-blue-600">Pest Library</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about common pests, their habitats , life cycle, and how to identify there infestation signs.
          </p>
        </div>
      </section>

      {/* Pest Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {pests.map((pest) => (
              <Link
                key={pest.name}
                href={`/pestlibrary/${pest.name.toLowerCase().replace(/ /g, "-")}`}
                className="transform hover:-translate-y-2 transition duration-300"
              >
                <ServiceCard {...pest} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}