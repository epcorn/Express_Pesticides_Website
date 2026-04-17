"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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

    // Minimalist validation
    if (!formData.firstName || !formData.phone || !formData.email || !formData.issue) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
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
        setSubmitMessage("✅ Thank you! We'll get back to you shortly.");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", company: "", issue: "" });
      } else {
        setSubmitMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const address = "S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav Rd, Khira Nagar, Santacruz (West), Mumbai, 400054";

  const phone = "02261386600";
  const email = "info@expresspesticides.com";
  const tagline = `"Be sure, we are there."`;
  
  // NOTE: mapSrc needs a valid Google Maps Embed API key/URL. 
  // For now, using a placeholder logic.
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.814238598177!2d72.83466187595562!3d19.07185265210137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9116e000001%3A0x6a6d639b563604b3!2sExpress%20Pesticides!5e0!3m2!1sen!2sin!4v1713100000000!5m2!1sen!2sin`;

  return (
    <main className="bg-white min-h-screen">
      {/* --- HEADER SECTION --- */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            {/* Subtle background pattern could go here */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Have a pest concern? Our experts are ready to provide the professional protection your property deserves.
          </p>
          <div className="mt-8 inline-block px-6 py-2 bg-blue-700/50 backdrop-blur-md rounded-full border border-blue-400/30">
            <p className="text-sm font-bold tracking-widest uppercase">{tagline}</p>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Info & Map */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Contact Details</h2>
              <div className="grid gap-6">
                
                {/* Address Card */}
                <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-600 p-3 rounded-xl text-white mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{address}</p>
                  </div>
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="tel:02261386600" className="flex items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 transition-all group">
                    <FaPhoneAlt className="text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</h4>
                      <p className="font-bold text-slate-900 text-sm">{phone}</p>
                    </div>
                  </a>
                  <a href="mailto:info@expresspesticides.com" className="flex items-center py-6 px-5 md:px-3 lg:px-2 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 transition-all group">
                    <FaEnvelope className="text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
                    <div className="w-full lg:w-40">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                      <p className="font-bold text-slate-900 text-sm line-clamp-1">{email}</p>
                    </div>
                  </a>
                </div>

                {/* Hours Card */}
                <div className="flex items-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <FaClock className="text-blue-600 mr-4" />
                  <p className="text-sm text-blue-900 font-medium italic">Available Mon — Sat: 9:30 AM to 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative group">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us in Santacruz</h2>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] border-4 border-white">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Service</h2>
              <p className="text-slate-500 mb-10">Fill out the form below and an IPM specialist will contact you.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">How can we help? *</label>
                  <textarea
                    name="issue"
                    rows="4"
                    required
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="Briefly describe your pest concern..."
                    className="w-full px-5 py-4 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl transition-all outline-none text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transform active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Submit Inquiry"}
                </button>

                {submitMessage && (
                  <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
                    submitMessage.includes("⚠️") || submitMessage.includes("❌")
                      ? "bg-red-50 text-red-700 border border-red-100"
                      : "bg-green-50 text-green-700 border border-green-100"
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}