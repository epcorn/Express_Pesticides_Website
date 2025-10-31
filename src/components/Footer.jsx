"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#blogs" className="hover:text-blue-400 transition-colors">Blogs</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Reach Us</h3>
          <p className="mb-2">Email: info@expresspesticides.com</p>
          <p className="mb-2">Phone: +91 98765 43210</p>
          <p className="mb-4">Address: 123, Pest Control St., Mumbai, India</p>

          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* About / Branding */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Express Pesticides</h3>
          <p className="text-gray-400 mb-4">
            Smart. Safe. Sustainable. Delivering effective pest control solutions with certified experts and eco-friendly practices.
          </p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Express Pesticides. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
