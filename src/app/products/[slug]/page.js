"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaTools, FaMapPin, FaListAlt } from "react-icons/fa";
import { productData } from "@/data/productData";
import Button from "@/components/Button";

export default function ProductDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the product data based on the slug
  const product = productData[slug];
  console.log(product.name);
  // Show a "not found" message if the slug is invalid
  if (!product) {
    return (
      <main className="pt-32 min-h-screen">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Product Not Found
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Sorry, we {`couldn't`} find the product you were looking for.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // --- Main Product Page Layout ---
  return (
    <main className="bg-gray-50 pt-20 lg:pt-32">
      {/* 1. Product Header */}
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            {product.name}
          </h1>
        </div>
      </section>

      {/* 2. Intro Section (Image + Text) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4" // Use "object-contain"
            />
          </div>
          {/* Product Intro */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.intro}
              </p>
            </div>
            <Button
              onClick={() => {}}
              msg={{ info: "Product Will be available Soon" }}>
              Get Product
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Our Product? */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose {product.name}?
          </h2>
          <ul className="space-y-4">
            {product.whyChoose.map((point) => (
              <li key={point} className="flex items-start">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.howItWorks}
          </p>
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Technical Specifications
          </h2>
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-400">
              <tbody className="bg-white divide-y  divide-gray-400">
                {product.techSpecs.map((spec, index) => (
                  <tr
                    key={spec.spec}
                    className={"divide-x divide-gray-400  odd:bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 w-1/3">
                      {spec.spec}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Where to Use (IMAGE GALLERY) - UPDATED SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Where to Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {product.whereToUse.map((area) => (
              <div
                key={area.name}
                className="rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                <div className="w-full h-48 relative">
                  <Image
                    src={area.img}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="p-4 text-center font-semibold text-gray-800 bg-white flex-grow">
                  {area.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Directions for Use */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Directions for Use
          </h2>
          <ul className="space-y-4">
            {product.directionsForUse.map((step) => (
              <li key={step} className="flex items-start">
                <FaListAlt className="text-blue-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Key Advantages */}
      <section className="py-16 bg-gray-50 px-6 flex flex-col gap-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.keyAdvantages.map((adv) => (
              <div
                key={adv}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-center">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-4 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{adv}</p>
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={() => {}}
          msg={{ info: "Product Will be available Soon" }}>
          Get Product
        </Button>
      </section>

      {/* 9. Consumer Assurance */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Consumer Assurance</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {product.consumerAssurance}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
