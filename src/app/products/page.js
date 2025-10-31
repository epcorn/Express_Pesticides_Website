"use client";

import ServiceCard from "@/components/ServiceCard"; // Re-using the same card component
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProductsPage() {

  // Products grouped by category
  const productCategories = [
    {
      title: "Rodent Control",
      products: [
        { 
          name: "SOTO Rodent Repellent", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738048/Express_Pesticides_Website/Rodent_Repellent_Product_e16igr.png"
        },
        { 
          name: "Rodent Smart Bait Station", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738394/Express_Pesticides_Website/Rodent_Bait_station_Product_e4bkpu.png"
        },
        { 
          name: "Rat Guard", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738402/Express_Pesticides_Website/Rat_Guard_Product_z0xfc3.png"
        },
      ],
    },
    {
      title: "Insect Control",
      products: [
        { 
          name: "Cockroach Trap", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738214/Express_Pesticides_Website/Cockroach_Trap_Product_n8esto.png"
        },
        { 
          name: "Snapper", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738225/Express_Pesticides_Website/Snapper_Product_suka9f.png"
        },
        { 
          name: "Tuffbait", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738355/Express_Pesticides_Website/Tuff_bait_product_ktycdf.png"
        },
      ],
    },
    {
      title: "Termite Control",
      products: [
        { 
          name: "Tremida", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738316/Express_Pesticides_Website/Termida_Product_viy4i8.png"
        },
      ],
    },
    {
      title: "Reptile Control",
      products: [
        { 
          name: "SOTO Reptout", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738470/Express_Pesticides_Website/Repout_Repellent_Product_gl6yjg.png"
        },
      ],
    },
    {
      title: "Bird Control",
      products: [
        { 
          name: "SOTO Bird Repellent", 
          logo: "https://res.cloudinary.com/epcorn/image/upload/v1761738141/Express_Pesticides_Website/Bird_Repellent_Product_bkoe7f.png"
        },
      ],
    },
  ];

  return (
    <main className="pt-32"> {/* Adjusted padding for the tall navbar */}
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Effective, reliable, and safe solutions for all your pest problems. 
            Browse our range of products below.
          </p>
        </div>
      </section>

      {/* Looping through each product category */}
      {productCategories.map((category) => (
        <section key={category.title} className="py-16 even:bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {category.products.map((product) => (
                <Link
                  key={product.name}
                  href={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}
                  className="transform hover:-translate-y-2 transition duration-300"
                >
                  <ServiceCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <Footer />
    </main>
  );
}