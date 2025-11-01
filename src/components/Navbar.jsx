"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "HOME",
    "SERVICES",
    "PRODUCTS",
    "BLOGS",
    "PEST LIBRARY",
    "ABOUT US",
    "CONTACT US",
  ];

  const getLinkPath = (item) => {
    const path = item.toLowerCase().replace(/\s/g, "");
    return path === "home" ? "/" : `/${path}`;
  };

  return (
    // v important: explicit h-16 makes navbar height deterministic (64px)
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-lg bg-gray-50/90 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* --- Left Side: Links & Toggle --- */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((item) => (
              <Link
                key={item}
                href={getLinkPath(item)}
                className="relative font-medium text-black group transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-2 text-black focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <Image
            src="https://res.cloudinary.com/epcorn/image/upload/v1762003511/Express_Pesticides_Website/HOMEPAGE_IMAGES/Be_sure_we_are_there_background_removed_qce4xf.png"
            alt="Express Pesticides Logo"
            width={200}
            height={120}
            priority
            className="object-contain h-12 md:h-16"
          />
        {/* --- Right Side: Logo (constant size) --- */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png"
            alt="Express Pesticides Logo"
            width={200}
            height={120}
            priority
            className="object-contain h-12 md:h-16"
          />
        </Link>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-inner transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
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
    </nav>
  );
}
