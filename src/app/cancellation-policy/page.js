"use client";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

export default function CancellationPolicyPage() {
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
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Cancellation Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: {date}</p>

          <p className="mb-4">
            Clients may cancel their booking <strong>up to 24 hours before</strong> the
            chosen service date. Cancellations made after this period will not be
            eligible for a refund.
          </p>

          <p className="mb-4">
            This policy ensures that our field teams can manage their schedules
            efficiently and allocate time fairly to all clients.
          </p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              How to Cancel a Booking
            </h2>
            <p>
              To cancel your booking, please contact us via{" "}
              <a href="mailto:info@expresspesticides.com" className="text-blue-600">
                info@expresspesticides.com
              </a>{" "}
              or reach out through the contact number provided in your booking
              confirmation email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
