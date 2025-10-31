"use client";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

export default function RefundPolicyPage() {
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
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Refund Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: {date}</p>

          <p className="mb-4">
            At <strong>Express Pesticides</strong>, we strive to deliver high-quality
            and reliable pest control services. If a cancellation is made within
            the permitted window, we ensure a smooth refund process.
          </p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Eligibility for Refund
            </h2>
            <p className="mb-4">
              Refunds are applicable only if the cancellation is made within the
              allowed window (refer to our Cancellation Policy). Once the service
              has been initiated or completed, refunds will not be processed.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Refund Processing Time
            </h2>
            <p className="mb-4">
              Approved refunds will be credited back to your original payment
              method within <strong>7–9 business days</strong>.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Contact for Refunds</h2>
            <p>
              For refund-related assistance, please email us at{" "}
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
