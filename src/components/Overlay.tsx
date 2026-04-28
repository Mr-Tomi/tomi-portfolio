"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Tomi Campbell
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Senior UI/UX Designer | Design Leader
        </p>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-12 md:px-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-snug md:leading-normal text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-2xl">
          UX Consultant,<br />
          AI Enthusiast & Founder
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-12 md:px-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-snug md:leading-normal text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-2xl">
          Shaping intuitive,<br />
          human-centered AI experiences.
        </h2>
      </motion.div>
    </div>
  );
}
