"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link"; // Import Next.js Link

export default function Footer() {
  return (
    // 1. RESPONSIVE PADDING:
    // py-12 on mobile, md:py-16 on desktop
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              {/* 2. NEXT.JS LINK: Swapped <a> for <Link> */}
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Services
              </Link>
            </li>
             <li>
              <Link href="/products" className="hover:text-blue-400 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-400 transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-blue-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>

            {/* Policy Links */}
            <li className="pt-3 border-t border-gray-700">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cancellation-policy"
                className="hover:text-blue-400 transition-colors"
              >
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">Get in Touch</h3>
          <p className="mb-1 font-semibold">Express Pesticides Private Limited</p>
          <p className="mb-3 text-gray-300">
            Door No. S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav Rd,
            Khira Nagar, Santacruz (West), Mumbai, Maharashtra 400054
          </p>
          <p className="mb-2">Phone: <a href="tel:02266914400" className="hover:text-blue-400">022 6691 4400</a></p>
          <p className="mb-4">
            Email:{" "}
            <a
              href="mailto:info@expresspesticides.com"
              className="hover:text-blue-400 transition-colors"
            >
              info@expresspesticides.com
            </a>
          </p>

          <div className="flex gap-4 mt-2 text-lg">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* About / Branding */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">
            Express Pesticides Private Limited
          </h3>
          <p className="text-gray-400 mb-4">
            Smart. Safe. Sustainable. Delivering effective pest control
            solutions with certified experts and eco-friendly practices for
            homes and businesses across India.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Express Pesticides Private Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
