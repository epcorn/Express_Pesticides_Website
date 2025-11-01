"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject : "",
    company: "",
    issue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.issue
    ) {
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMessage("✅ Thank you for your message! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          company: "",
          issue: "",
        });
      } else {
        setSubmitMessage("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const address =
    "S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav Rd, Khira Nagar, Santacruz (West), Mumbai, Maharashtra 400054";
  const phone = "02261386600";
  const email = "info@expresspesticides.com";
  const tagline = "Be sure, we are there.";

  const mapQuery = address.replace(/ /g, "+");
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${mapQuery}`;

  return (
    <main className="pt-32">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We're here to help! Reach out with any questions or service requests.
          </p>
          <p className="mt-4 text-xl font-semibold text-blue-700 italic">
            "{tagline}"
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Express Pesticides
              </h3>
              <div className="flex items-start space-x-3 mb-4">
                <FaMapMarkerAlt className="text-gray-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{address}</p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <FaPhoneAlt className="text-gray-600" />
                <a
                  href={`tel:${phone.replace(/ /g, "")}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-600" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {email}
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                Our Location
              </h2>
              <div className="border rounded-lg overflow-hidden shadow-lg h-[450px]">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Note: Map embedding requires a Google Maps API key configured for your project.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="issue"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Describe your issue <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="issue"
                  id="issue"
                  rows="4"
                  required
                  value={formData.issue}
                  onChange={handleChange}
                  placeholder="Describe your issue in brief..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitMessage && (
                <p
                  className={`mt-4 text-center text-sm ${
                    submitMessage.includes("required")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
