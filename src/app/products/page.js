"use client";

import ServiceCard from "@/components/ServiceCard"; // Re-using the same card component
import { productCategories } from "@/data/productData";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProductsPage() {

  // Products grouped by category
  

  return (
    <main className=""> {/* Adjusted padding for the tall navbar */}
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