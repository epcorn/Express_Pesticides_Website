"use client";

import Footer from "@/components/Footer";
import { FaPenNib } from "react-icons/fa";

export default function BlogsPage() {
  return (
    <main className="pt-32"> {/* Padding for tall navbar */}
      
      {/* Page Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-blue-600">Blogs</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Insights, tips, and news from our pest control experts.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20" style={{ minHeight: 'calc(100vh - 450px)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <FaPenNib className="text-8xl text-blue-300 mb-6" />
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            We are working hard to bring you helpful articles and pest control insights. Please check back later!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
