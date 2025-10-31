"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // use next/image for optimized loading

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow/blur when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["HOME", "SERVICES","PRODUCTS", "BLOGS","PEST LIBRARY","ABOUT US", "CONTACT US"];

  // --- Helper function to generate links (fixes "HOME" link) ---
  const getLinkPath = (item) => {
    const path = item.toLowerCase().replace(/\s/g, "");
    if (path === "home") {
      return "/";
    }
    return `/${path}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          // --- THIS IS THE CHANGED LINE ---
          ? "backdrop-blur-lg bg-gray-50/90 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-1" : "py-2" 
      }`}>
        
        {/* --- Left Side (Links / Mobile Toggle) --- */}
        <div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <Link
                key={item}
                href={getLinkPath(item)} 
                className={`relative font-medium group transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden hover:text-blue-600 transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* --- Right Side (Logo) --- */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/epcorn/image/upload/v1761733971/Express_Pesticides_Website/Express_pesticide_logo_swa79u.png"
            alt="Express Pesticides Logo" 
            width={200}
            height={120}
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-16" : "h-28" 
            }`}
          />
        
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        // This background remains white for a clean mobile menu
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          {links.map((item) => (
            <Link
              key={item}
              href={getLinkPath(item)} 
              className="block px-6 py-3 text-black font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}