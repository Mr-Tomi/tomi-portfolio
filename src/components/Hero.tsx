"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      aria-label="Introduction"
      className="relative w-full bg-black text-white pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* ========================================================
            TOP ROW: Headline + Credentials
        ======================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
          {/* Main Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.25rem] leading-[1.12] tracking-tight">
              <span className="block font-semibold text-white">
                Better experiences{" "}
                <span className="font-normal text-white/50">for people.</span>
              </span>
              <span className="block mt-1 font-semibold text-white">
                Better outcomes{" "}
                <span className="font-normal text-white/50">for business.</span>
              </span>
            </h1>
          </motion.div>

          {/* Credential / Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-left md:text-right text-xs sm:text-sm text-white/50 leading-relaxed font-light mt-1 md:mt-2 space-y-0.5"
          >
            <p>7+ years · Ex-Superside</p>
            <p>6,000+ users on a fintech app I designed</p>
          </motion.div>
        </div>

        {/* Divider on Mobile (as seen in mobile mockup) */}
        <div className="w-full h-px bg-white/10 my-6 md:hidden" />

        {/* ========================================================
            MIDDLE ROW: Services + Target Audience + CTA
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mt-2 md:mt-12 mb-8 md:mb-12"
        >
          {/* Left Column: Scope / Capabilities */}
          <div className="flex flex-col space-y-1.5 text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase font-sans">
            <span>END-TO-END PRODUCT DESIGN</span>
            <span>AI PRODUCT UX</span>
            <span>MVP STRATEGY</span>
          </div>

          {/* Middle Column: Target Audience */}
          <div className="flex flex-col space-y-1 md:pb-0.5">
            <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase font-sans">
              FOR
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase font-sans">
              FOUNDERS &amp; TEAMS BUILDING WHAT’S NEXT
            </span>
          </div>

          {/* Right Column: CTA Button */}
          <div className="pt-2 md:pt-0">
            <a
              href="mailto:campbelltomike@gmail.com?subject=Let's%20Talk%20%E2%80%94%20Project%20Inquiry"
              className="group inline-flex items-center gap-3.5 sm:gap-4 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#CA4306] hover:bg-[#E04B08] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(202,67,6,0.35)] hover:shadow-[0_0_40px_rgba(224,75,8,0.55)] cursor-pointer"
            >
              <span>LET’S TALK</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#CA4306]" strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* ========================================================
            HERO PHOTO CARD: Tomi Campbell Portrait
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[36px] overflow-hidden border border-white/10 bg-[#161413] shadow-2xl aspect-[4/5] sm:aspect-[1/1.1] md:aspect-[2.35/1] min-h-[460px] md:min-h-[500px] lg:min-h-[560px]"
        >
          {/* Portrait Image */}
          <Image
            src="/images/new-hero-portfolio.png"
            alt="Tomi Campbell — Senior Product Experience Designer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover object-[center_16%] md:object-[center_20%] select-none transition-transform duration-700 hover:scale-[1.01]"
            draggable={false}
          />

          {/* ----------------------------------------------------
              MOBILE CARD OVERLAY (Image 3)
          ---------------------------------------------------- */}
          {/* Top-Left: Role Description */}
          <div className="md:hidden absolute top-5 left-5 sm:top-7 sm:left-7 z-20 text-neutral-900 font-sans font-medium text-xs sm:text-sm leading-snug select-none">
            Senior Product<br />Experience Designer
          </div>

          {/* Bottom-Left: Stacked Outlined Name */}
          <div className="md:hidden absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-20 flex flex-col leading-[0.88] select-none pointer-events-none">
            <span className="hero-outline-text font-serif font-bold text-[3.85rem] sm:text-7xl tracking-tight">
              Tomi
            </span>
            <span className="hero-outline-text font-serif font-bold text-[3.85rem] sm:text-7xl tracking-tight">
              Campbell
            </span>
          </div>

          {/* ----------------------------------------------------
              DESKTOP CARD OVERLAY (Image 2)
          ---------------------------------------------------- */}
          <div className="hidden md:flex absolute inset-x-6 lg:inset-x-10 bottom-3 lg:bottom-5 z-20 items-end justify-between gap-4 select-none pointer-events-none">
            {/* Single-line Outlined Name */}
            <span className="hero-outline-text font-serif font-bold text-6xl md:text-7xl lg:text-[7.25rem] xl:text-[8.5rem] tracking-tight leading-[0.9]">
              Tomi Campbell
            </span>

            {/* Bottom-Right: Role Description */}
            <span className="text-neutral-900 font-sans font-medium text-xs lg:text-sm xl:text-base pb-3 lg:pb-4 whitespace-nowrap">
              Senior Product Experience Designer
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
