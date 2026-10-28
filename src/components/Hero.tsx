"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      aria-label="Introduction"
      className="relative w-full bg-black text-white pt-[84px] sm:pt-[100px] md:pt-[108px] lg:pt-[116px] pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* ========================================================
            TOP ROW: Headline + Credentials (Bottom Aligned)
            Side by side only from 1440px, where both fit on one line;
            below that the credentials stack under the headline.
        ======================================================== */}
        <div className="flex flex-col min-[1440px]:flex-row justify-between items-start min-[1440px]:items-end gap-3.5 sm:gap-4 min-[1440px]:gap-8">
          {/* Main Editorial Headline: 2 lines. When stacked, sized to the
              container so the longer line runs edge to edge (capped). */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-[1440px]:w-auto shrink-0 max-[1439px]:[container-type:inline-size]"
          >
            <h1 className="font-serif text-[min(7.8cqw,4.75rem)] min-[1440px]:text-[4.75rem] leading-[1.12] sm:leading-[1.15] tracking-tight">
              <span className="block whitespace-nowrap font-semibold text-white">
                Better experiences{" "}
                <span className="font-normal text-white/50">for people.</span>
              </span>
              <span className="block whitespace-nowrap mt-1 sm:mt-1.5 font-semibold text-white">
                Better outcomes{" "}
                <span className="font-normal text-white/50">for business.</span>
              </span>
            </h1>
          </motion.div>

          {/* Credential / Experience Stats (at least 14px on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-left min-[1440px]:text-right text-[14px] sm:text-[15px] text-white/70 leading-relaxed font-normal mt-2 sm:mt-3 min-[1440px]:mt-0 space-y-1 pb-0.5 min-[1440px]:pb-1 shrink-0"
          >
            <p>6+ years · Ex-Superside</p>
            <p>6,000+ users on a fintech app I designed</p>
          </motion.div>
        </div>

        {/* Full-width Horizontal Divider Line (clearly visible) */}
        <div className="w-full h-px bg-white/25 md:bg-white/20 my-6 md:my-7" />

        {/* ========================================================
            MIDDLE ROW: Services + Target Audience + CTA
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {/* Left Column: Scope / Capabilities (larger on mobile, but not as large as headline) */}
          <div className="flex flex-col space-y-2 sm:space-y-2.5 md:space-y-1.5 text-[17px] sm:text-[18px] md:text-sm font-semibold tracking-wider text-white uppercase font-sans">
            <span>END-TO-END PRODUCT DESIGN</span>
            <span>AI PRODUCT UX</span>
            <span>MVP STRATEGY</span>
          </div>

          {/* Middle Column: Target Audience */}
          <div className="flex flex-col space-y-1 md:pb-0.5">
            <span className="text-xs sm:text-xs md:text-[11px] font-semibold tracking-widest text-white/50 uppercase font-sans">
              FOR
            </span>
            <span className="text-[15px] sm:text-[16px] md:text-sm font-semibold tracking-wider text-white/90 uppercase font-sans">
              FOUNDERS &amp; TEAMS BUILDING WHAT’S NEXT
            </span>
          </div>

          {/* Right Column: CTA Button (larger on mobile) */}
          <div className="pt-2 md:pt-0">
            <a
              href="mailto:campbelltomike@gmail.com?subject=Let's%20Talk%20%E2%80%94%20Project%20Inquiry"
              className="group inline-flex items-center gap-4 sm:gap-4.5 px-7 sm:px-8 py-3.5 sm:py-4 md:px-7 md:py-3.5 rounded-full bg-[#E84D1C] hover:bg-[#F05523] active:scale-95 text-white font-bold text-sm sm:text-base md:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(232,77,28,0.35)] hover:shadow-[0_0_40px_rgba(240,85,35,0.55)] cursor-pointer"
            >
              <span>LET’S TALK</span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-4 md:h-4 text-[#E84D1C]" strokeWidth={2.5} />
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
          className="relative w-full [container-type:inline-size] rounded-2xl sm:rounded-3xl md:rounded-[36px] overflow-hidden border border-white/10 bg-[#161413] shadow-2xl aspect-[4/5] sm:aspect-[1/1.1] md:aspect-[2.53/1] min-h-[460px] md:min-h-[420px] lg:min-h-[500px] xl:min-h-[550px]"
        >
          {/* Portrait Image */}
          <Image
            src="/images/new-hero-portfolio.png"
            alt="Tomi Campbell — Senior Product Experience Designer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover object-top select-none transition-transform duration-700 hover:scale-[1.01]"
            draggable={false}
          />

          {/* ----------------------------------------------------
              MOBILE CARD OVERLAY (Image 3)
          ---------------------------------------------------- */}
          {/* Top-Left: Role Description */}
          <div className="md:hidden absolute top-5 left-5 sm:top-7 sm:left-7 z-20 text-neutral-900 font-sans font-medium text-xs sm:text-sm leading-snug select-none">
            Senior Product<br />Experience Designer
          </div>

          {/* Bottom-Left: Stacked Outlined Name ("Campbell" spans the card width) */}
          <div className="md:hidden absolute bottom-[5cqw] left-[3.5cqw] z-20 flex flex-col leading-[1.25] select-none pointer-events-none">
            <span className="hero-outline-text font-display font-extrabold text-[19cqw] tracking-[-0.005em]">
              Tomi
            </span>
            <span className="hero-outline-text font-display font-extrabold text-[19cqw] tracking-[-0.005em]">
              Campbell
            </span>
          </div>

          {/* ----------------------------------------------------
              DESKTOP CARD OVERLAY (Exact match to reference)
          ---------------------------------------------------- */}
          <div className="hidden md:block absolute inset-x-0 bottom-[2cqw] z-20 px-[2cqw] select-none pointer-events-none">
            {/* Shrink-wrapped to the name so the role's right edge lines up with the final "l" */}
            <div className="w-fit">
              {/* Single-line Outlined Name spanning the full card width */}
              <h2 className="hero-outline-text font-display font-extrabold text-[12.1cqw] tracking-[-0.005em] leading-[1] whitespace-nowrap">
                Tomi Campbell
              </h2>
  
              {/* Bottom-Right: Role Description, right edge aligned with the final "l" */}
              <p className="-mt-[0.6cqw] text-right text-[#1A1A1A] font-sans font-medium text-[1.15cqw] tracking-normal">
                Senior Product Experience Designer
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
