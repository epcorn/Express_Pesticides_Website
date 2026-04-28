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
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-lg bg-gray-50/90 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        
        {/* --- Left Side: Mobile Toggle & Desktop Links --- */}
        <div className="flex items-center flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black focus:outline-none border rounded-lg border-gray-400 -shadow-2xs"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-start gap-6 xl:gap-8 whitespace-nowrap">
            {links.map((item) => (
              <Link
                key={item}
                href={getLinkPath(item)}
                className="relative font-medium text-black group transition-colors duration-300 text-sm xl:text-base"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Right Side: Branding/Logos --- */}
        <div className="flex py-1 items-center h-full ">
          {/* Tagline Image */}
          <div className="relative h-52 lg:52 w-36 md:w-62 z-50">
            <Image
              src="https://res.cloudinary.com/epcorn/image/upload/v1762003511/Express_Pesticides_Website/HOMEPAGE_IMAGES/Be_sure_we_are_there_background_removed_qce4xf.png"
              alt="Be Sure Tagline"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Main Logo Link */}
          <Link href="/" className="relative h-14 w-32 sm:w-40 md:w-48">
            <Image
              src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png"
              alt="Express Pesticides Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-inner transition-all duration-300 overflow-hidden ${
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

