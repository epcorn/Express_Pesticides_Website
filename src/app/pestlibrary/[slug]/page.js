"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";
import { pestData } from "@/data/pestliabrary";


export default function PestDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the pest data based on the slug
  const pest = pestData[slug];

  // Show a "not found" message if the slug is invalid
  if (!pest) {
    return (
      <main className="pt-32 min-h-screen"> {/* Adjusted padding */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Pest Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">
              Sorry, we {`couldn't`} find the pest you were looking for.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // --- Main Pest Page Layout ---
  return (
    <main className="pt-32"> {/* Adjusted padding */}
      {/* 1. Pest Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {pest.name}
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            ({pest.commonName} - <i>{pest.scientificName}</i>)
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mt-4 px-3 py-1 rounded-full">
            {pest.type}
          </span>
        </div>
      </section>

      {/* 2. Intro Section (Text + Image) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
             <h2 className="text-3xl font-bold text-blue-600 mb-4">
               Meet the {pest.name}
             </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.overview}
            </p>
          </div>
           {/* Pest Image */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg border bg-white">
            <Image
              src={pest.mainImage}
              alt={pest.name}
              fill
              className="object-contain p-4" 
            />
          </div>
        </div>
      </section>

      {/* 3. Overview & Habitat/Behavior */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Habitat and Behavior
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {pest.habitatBehavior}
          </p>
        </div>
      </section>

      {/* 4. Lifecycle Section (Image + Text) */}
       <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Lifecycle Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={pest.lifecycleImage}
              alt={`${pest.name} Lifecycle`}
              fill
              className="object-contain p-2" 
            />
          </div>
          {/* Lifecycle Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Life Cycle
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.lifecycleText}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Signs of Infestation (Text + Image) */}
       <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Signs of Infestation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pest.signsInfestationText}
            </p>
          </div>
           {/* Infestation Image */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg border bg-white">
            <Image
              src={pest.signsInfestationImage}
              alt={`Signs of ${pest.name} Infestation`}
              fill
              className="object-contain p-4" 
            />
          </div>
        </div>
      </section>

      {/* 6. Health Risks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
             <FaExclamationTriangle className="inline-block text-red-500 mr-2 mb-1" /> Health Risks
          </h2>
          <ul className="space-y-4">
            {pest.healthRisks.map((risk) => (
              <li key={risk} className="flex items-start">
                <FaExclamationTriangle className="text-red-400 w-5 h-5 mr-3 mt-1 shrink-0" />
                <span className="text-lg text-gray-800">{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Prevention Tips */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            <FaShieldAlt className="inline-block text-green-600 mr-2 mb-1" /> Prevention Tips
          </h2>
          <ul className="space-y-4">
            {pest.preventionTips.map((tip) => (
              <li key={tip} className="flex items-start">
                <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}