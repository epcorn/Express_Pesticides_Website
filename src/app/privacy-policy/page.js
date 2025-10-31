"use client";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(
      today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
        <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: {date}</p>

          <p className="mb-4">
            <strong>Express Pesticides</strong> is committed to safeguarding your privacy.
            We only collect the data necessary to process bookings, provide services,
            and enhance your experience on our platform.
          </p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Personal details such as name, email, and phone number.</li>
              <li>Service address and preferred appointment date.</li>
              <li>Payment details for secure transactions.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              How We Use Your Data
            </h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>To confirm and provide your requested services.</li>
              <li>To send booking confirmations, updates, and invoices.</li>
              <li>To improve our customer experience and support.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Data Protection</h2>
            <p className="mb-4">
              We implement secure systems and encryption to ensure your data remains
              confidential and protected from unauthorized access.
            </p>

            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:info@expresspesticides.com" className="text-blue-600">
                info@expresspesticides.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
