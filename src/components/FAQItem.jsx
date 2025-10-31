"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-150 hover:shadow-lg ${
        isOpen ? "border-l-4 border-blue-600" : "border-l-4 border-transparent"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
      >
        <span className="text-black font-semibold text-lg">{question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`px-6 text-gray-700 text-base overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-[500px] py-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
