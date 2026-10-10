"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse coordinates from -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Map mouse movement to subtle translations and rotations
  const headX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const headY = useTransform(smoothY, [-1, 1], [-15, 15]);
  const headRotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const headRotateY = useTransform(smoothX, [-1, 1], [-3, 3]);

  // Scroll tracking for parallax and reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Combine mouse parallax with scroll parallax for the head
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  // Reveal animations for texts
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white perspective-1000"
    >
      {/* Background Glitch Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="text-[25vw] md:text-[20vw] font-black tracking-tighter text-white animate-glitch whitespace-nowrap">
          UX AI
        </h1>
      </div>

      {/* Main Title Text */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10"
      >
        <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-20 md:mb-32">
          HI, I'm Tomi
        </h2>
      </motion.div>

      {/* Side Texts & Arrows Container */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-20 pointer-events-none max-w-7xl mx-auto px-6 flex items-center justify-between"
      >
        {/* Left Content */}
        <div className="w-64 md:w-80 relative mt-40 hidden md:block">
          <h3 className="text-2xl font-bold mb-2">Senior Product Designer</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Senior Product Designer turning complex problems into simple products. Fintech, healthcare and AI.
          </p>
          {/* SVG Arrow Left */}
          <div className="absolute -top-32 left-full ml-4 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/30 fill-none" style={{ strokeDasharray: "4 4" }}>
              <path d="M100,10 Q50,10 10,90" strokeWidth="1" />
              <path d="M10,90 L20,80 M10,90 L25,95" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-64 md:w-80 relative mt-40 text-right hidden md:block">
          <p className="text-white/90 text-sm leading-relaxed">
            6+ years · 6,000+ users on a fintech app<br/>I designed · Ex-Superside
          </p>
          {/* SVG Arrow Right */}
          <div className="absolute -top-32 right-full mr-4 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/30 fill-none" style={{ strokeDasharray: "4 4" }}>
              <path d="M0,10 Q50,10 90,90" strokeWidth="1" />
              <path d="M90,90 L80,80 M90,90 L75,95" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Center Portrait Image */}
      <motion.div
        style={{ 
          x: headX, 
          y: useTransform(() => headY.get() + scrollY.get()), 
          rotateX: headRotateX, 
          rotateY: headRotateY 
        }}
        className="relative z-30 w-[300px] h-[400px] md:w-[450px] md:h-[600px] pointer-events-auto"
      >
        <Image
          src="/images/hero-avatar.png"
          alt="Tomi Campbell"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Mobile Text Content (shown only on small screens) */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute bottom-10 left-0 w-full px-6 flex flex-col gap-6 text-center z-40 md:hidden"
      >
        <div>
          <h3 className="text-xl font-bold mb-1">Senior Product Designer</h3>
          <p className="text-white/70 text-xs">
            Turning complex problems into simple products. Fintech, healthcare and AI.
          </p>
        </div>
        <div>
          <p className="text-white/90 text-xs">
            6+ years · 6,000+ users on a fintech app I designed · Ex-Superside
          </p>
        </div>
      </motion.div>
    </section>
  );
}
