"use client";

import { motion } from "framer-motion";

const hangingLamps = Array.from({ length: 6 });

export default function FloatingDiyas() {
  return (
    <div className="fixed inset-x-0 top-0 h-48 pointer-events-none overflow-hidden z-50 flex justify-around">
      {hangingLamps.map((_, index) => {
        const duration = 3 + (index % 3) * 1.5; 
        const stringHeight = 40 + (index * 15) % 40;

        return (
          <div key={index} className="flex flex-col items-center">
            {/* The hanging string/wire */}
            <div 
              className="w-[1px] bg-amber-400/50" 
              style={{ height: `${stringHeight}px` }} 
            />

            {/* The swinging qandil container */}
            <motion.div
              style={{ transformOrigin: "top center" }}
              animate={{
                rotate: [-8, 8, -8],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Lantern Image Container */}
              <div className="relative w-14 h-18 drop-shadow-md">
                <img
                  src="/assets/lantern.png"
                  alt="Lantern"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}