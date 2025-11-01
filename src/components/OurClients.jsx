"use client";

import ClientLogo from "./ClientLogo";

const clients = [
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530026/Express_Pesticides_Website/TATA_gvqjek.png",
    name: "TATA",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530026/Express_Pesticides_Website/Jio_zv5jl6.jpg",
    name: "Jio",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530025/Express_Pesticides_Website/aditya-birla-group_gznen9.webp",
    name: "Aditya Birla Group",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530027/Express_Pesticides_Website/SHAPORJI_PALLONJI_seweaf.jpg",
    name: "Shapoorji Pallonji",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530025/Express_Pesticides_Website/Adani_fi9pla.png",
    name: "Adani",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530025/Express_Pesticides_Website/Hyatt-Hotels-Emblem_wghcva.png",
    name: "Hyatt Hotels",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530026/Express_Pesticides_Website/SODEXO_ejlkot.png",
    name: "Sodexo",
  },
  {
    logo: "https://res.cloudinary.com/epcorn/image/upload/v1760530025/Express_Pesticides_Website/CBRE_muzzv4.png",
    name: "CBRE",
  },
];

export default function OurClients() {
  return (
    <section className="py-10 sm:py-12 md:py-20 bg-white px-4 sm:px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
          Our Clients
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Trusted by leading companies for safe and effective pest control solutions.
        </p>
      </div>

      {/* Client Logos */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
        {clients.map((client) => (
          <ClientLogo key={client.name} logo={client.logo} name={client.name} />
        ))}
      </div>
    </section>
  );
}
