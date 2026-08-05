'use client';

import React from 'react';
import { Bangalore, Goa, Jamnagar, Mumbai, Noida, Pune, Delhi } from '@/data/citySVG';

const city = [
  { name: "Bangalore", icon: Bangalore },
  { name: "Goa", icon: Goa },
  { name: "Mumbai", icon: Mumbai },
  { name: "Pune", icon: Pune },
  { name: "Noida", icon: Noida },
  { name: "Delhi", icon: Delhi },
  { name: "Jamnagar", icon: Jamnagar },
];

function ShowCities() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeCities = [...city, ...city];

  return (
    <section className="w-full overflow-hidden py-4 bg-transparent">
      <div className="animate-marquee bg-blue-700 py-10 flex gap-5 px-5">
        {marqueeCities.map((c, i) => {
          const IconComponent = c.icon;
          return (
            <div 
              key={i} 
              className="shrink-0 rounded-xl p-4 w-36 flex flex-col items-center justify-center select-none"
            >
              <div className="relative text-white w-20 h-20 flex items-center justify-center">
                <IconComponent className="w-full h-full object-contain" />
              </div>
              <p className="mt-3 font-semibold text-white tracking-wide">{c.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ShowCities;