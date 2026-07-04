"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  const links = [
    "HOME",
    "SERVICES",
    "PRODUCTS",
    "BLOGS",
    "PEST LIBRARY",
    "ABOUT US",
    "CONTACT US",
    "Download"
  ];

  const subLinks = [
    {
      name: "Services",
      links: [
        { name: 'BirdRid Service Brochure', link: "../assets/services/BirdRid Service Brochure.pdf" },
        { name: 'Garbage Landfill Brochure', link: "../assets/services/Garbage Landfill Brochure.pdf" },
        { name: 'Pre-construction brochure', link: "../assets/services/Pre-construction brochure.pdf" },
        { name: 'Reticulation System Brochure', link: "../assets/services/Reticulation System Brochure.pdf" },
      ],
    },
    {
      name: "Products",
      links: [
        { name: 'Birdrid brochure', link: "../assets/products/Birdrid brochure.pdf" },
        { name: 'Crack Selling brochure', link: "../assets/products/Crack Selling brochure.pdf" },
        { name: 'Reptout Repellent brochure', link: "../assets/products/Reptout Repellent brochure.pdf" },
        { name: 'Rodein Bait station brochure', link: "../assets/products/Rodein Bait station brochure.pdf" },
        { name: 'Rodent Repellent  brochure', link: "../assets/products/Rodent Repellent  brochure.pdf" },
        { name: 'SNAPPER Electric Catcher brochure', link: "../assets/products/SNAPPER Electric Catcher brochure.pdf" },
      ]
    },
    {
      name: "Company Data",
      links: [
        { name: ' ', link: " " },
        { name: ' ', link: " " },
        { name: ' ', link: " " }
      ]
    }
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
            className="lg:hidden p-2 text-black focus:outline-none border rounded-lg border-gray-400"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-start gap-6 xl:gap-8 whitespace-nowrap">
            {links.map((item) => (
              <div key={item} className="uppercase">
                {item === "Download" ? (
                  <ul className="list-none m-0 p-0">
                    <li className="relative group cursor-pointer font-medium text-black text-sm xl:text-base py-2">
                      <span className="flex items-center gap-1">
                        {item}
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </span>

                      {/* Dropdown level 1 */}
                      {/* FIX: Added a pseudo-element bridge (`before:content-['']...`) to prevent early closing when moving mouse downwards */}
                      <ul className="absolute top-full left-0 z-50 min-w-[180px] bg-white border border-gray-100 shadow-lg rounded-md py-1 hidden group-hover:block before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2">
                        {subLinks.map((s, i) => (
                          <li key={i} className="relative group/sub p-3 flex items-center justify-between hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <span className="text-sm">{s.name}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover/sub:text-blue-600" />

                            {/* Dropdown level 2 */}
                            {/* FIX: Left margin set to 0 with a transparent left padding to close the horizontal gap hitbox seamlessly */}
                            <ul className="absolute top-0 left-full z-50 min-w-[200px] bg-white border border-gray-100 shadow-lg rounded-md py-1 pl-1 -ml-1 hidden group-hover/sub:block">
                              {s.links.map((subLink, subIdx) => (
                                <li key={subIdx}>
                                  <a
                                    href={subLink.link}
                                    download={`${subLink.name}.pdf`}
                                    className="block px-4 py-3 text-xs text-gray-600 hover:bg-gray-50 hover:text-black transition-colors normal-case whitespace-normal"
                                  >
                                    {subLink.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <Link
                    href={getLinkPath(item)}
                    className="relative font-medium text-black group transition-colors duration-300 text-sm xl:text-base block py-2"
                  >
                    {item}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Side: Branding --- */}
        <div className="flex py-1 items-center h-full">
          <div className="relative h-44 w-40 md:w-62 z-30">
            <Image
              src="https://res.cloudinary.com/epcorn/image/upload/v1762003511/Express_Pesticides_Website/HOMEPAGE_IMAGES/Be_sure_we_are_there_background_removed_qce4xf.png"
              alt="Be Sure Tagline"
              fill
              priority
              className="object-contain"
            />
          </div>

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
      {/* FIX: Handled standard screen height issues with fixed positioning, viewport-based height limits, and scrolling capabilities */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-xl transition-all duration-300 uppercase overflow-y-auto ${isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        {links.map((item) => (
          <div key={item} className="border-b border-gray-100 last:border-none">
            {item === "Download" ? (
              <div>
                <button
                  onClick={() => toggleTab(item)}
                  className="w-full flex items-center justify-between px-6 py-4 text-black font-semibold text-left uppercase"
                >
                  <span>{item}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${activeTab === item ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ease-in-out ${activeTab === item ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    {/* FIX: Added max-height with native overflow scrolling directly for the nested download folders */}
                    <ul className="list-none m-0 p-0 pl-4 bg-gray-50/50 max-h-[350px] overflow-y-auto shadow-inner border-y border-gray-100">
                      {subLinks.map((s, i) => (
                        <li key={i} className="border-b border-gray-100/50 last:border-none">
                          <span className="block px-6 py-2 text-xs font-bold text-gray-400 tracking-wider">
                            {s.name}
                          </span>

                          <ul className="list-none pl-2 pb-2">
                            {s.links.map((subLink, subIdx) => (
                              <li key={subIdx}>
                                <a
                                  href={subLink.link}
                                  download={`${subLink.name}.pdf`}
                                  className="block px-6 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 normal-case transition-colors whitespace-normal"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subLink.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={getLinkPath(item)}
                className="block px-6 py-4 text-black font-semibold hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}