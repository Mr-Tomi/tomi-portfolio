"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, type RefObject } from "react";

/* ------------------------------------------------------------------
   Hover wave for the desktop name + role: letters near the cursor
   lift and swell with a Gaussian falloff, easing back when it leaves.
------------------------------------------------------------------- */
function WaveLetters({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          data-wave
          aria-hidden="true"
          className="inline-block origin-bottom will-change-transform"
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </>
  );
}

type WaveGroup = {
  ref: RefObject<HTMLElement | null>;
  lift: number; // em the closest letter rises
  scale: number; // extra scale for the closest letter
  reach: number; // falloff radius, in multiples of the font size
  tint?: [number, number, number, number, number, number]; // rgb from -> to
};

function useHoverWave(cardRef: RefObject<HTMLElement | null>, groups: WaveGroup[]) {
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;

    const sets = groups.map((g) => ({
      g,
      letters: Array.from(g.ref.current?.querySelectorAll<HTMLElement>("[data-wave]") ?? []),
      cur: [] as number[],
    }));
    let mouse: { x: number; y: number } | null = null;
    let raf = 0;

    const tick = () => {
      let active = mouse !== null;
      for (const s of sets) {
        const fs = parseFloat(getComputedStyle(s.g.ref.current!).fontSize);
        const sigma = fs * s.g.reach;
        s.letters.forEach((el, i) => {
          let target = 0;
          if (mouse) {
            // offsetLeft/Top ignore our own transforms, so the wave never feeds back on itself
            const parent = el.offsetParent as HTMLElement | null;
            const pr = parent?.getBoundingClientRect();
            const cx = (pr?.left ?? 0) + el.offsetLeft + el.offsetWidth / 2;
            const cy = (pr?.top ?? 0) + el.offsetTop + el.offsetHeight / 2;
            const d2 = (mouse.x - cx) ** 2 + ((mouse.y - cy) * 0.6) ** 2;
            target = Math.exp(-d2 / (2 * sigma * sigma));
          }
          let c = (s.cur[i] ?? 0) + (target - (s.cur[i] ?? 0)) * 0.14;
          if (Math.abs(c - target) < 0.002) c = target; // settle exactly, so nothing is left a hair off
          s.cur[i] = c;
          if (c !== target) active = true;
          el.style.transform = c > 0 ? `translateY(${-c * s.g.lift}em) scale(${1 + c * s.g.scale})` : "";
          if (s.g.tint) {
            const [r1, g1, b1, r2, g2, b2] = s.g.tint;
            el.style.color = c > 0 ? `rgb(${r1 + (r2 - r1) * c}, ${g1 + (g2 - g1) * c}, ${b1 + (b2 - b1) * c})` : "";
          }
        });
      }
      raf = active ? requestAnimationFrame(tick) : 0;
    };
    const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const onMove = (e: PointerEvent) => { mouse = { x: e.clientX, y: e.clientY }; start(); };
    const onLeave = () => { mouse = null; start(); };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
    // groups is a static config defined in the component body
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardRef]);
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  useHoverWave(cardRef, [
    { ref: nameRef, lift: 0.1, scale: 0.08, reach: 0.55 },
    { ref: roleRef, lift: 0.45, scale: 0.12, reach: 2.2, tint: [26, 26, 26, 232, 77, 28] },
  ]);

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
        <div className="w-full h-px bg-white/[0.08] md:bg-white/10 my-6 md:my-7" />

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
          <div className="flex flex-col space-y-2 sm:space-y-2.5 md:space-y-1.5 text-[17px] sm:text-[18px] md:text-sm font-semibold tracking-wider text-white/50 uppercase font-sans">
            <span>END-TO-END PRODUCT DESIGN</span>
            <span>AI PRODUCT UX</span>
            <span>MVP STRATEGY</span>
          </div>

          {/* Middle Column: Target Audience */}
          <div className="flex flex-col space-y-1 md:pb-0.5">
            <span className="text-xs sm:text-xs md:text-[11px] font-semibold tracking-widest text-white/50 uppercase font-sans">
              FOR
            </span>
            <span className="text-[15px] sm:text-[16px] md:text-sm font-semibold tracking-wider text-white/50 uppercase font-sans">
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
          ref={cardRef}
          initial={{ opacity: 0, y: 35, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full [container-type:inline-size] rounded-2xl sm:rounded-3xl md:rounded-[36px] overflow-hidden border border-white/10 bg-[#161413] shadow-2xl aspect-[4/5] sm:aspect-[1/1.1] md:aspect-[2.04/1] min-h-[460px] md:min-h-[420px] lg:min-h-[500px] xl:min-h-[550px]"
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
              <h2
                ref={nameRef}
                aria-label="Tomi Campbell"
                className="hero-outline-text font-display font-extrabold text-[12.1cqw] tracking-[-0.005em] leading-[1] whitespace-nowrap"
              >
                <WaveLetters text="Tomi Campbell" />
              </h2>

              {/* Bottom-Right: Role Description, right edge aligned with the final "l" */}
              <p
                ref={roleRef}
                aria-label="Senior Product Experience Designer"
                className="-mt-[0.6cqw] text-right text-[#1A1A1A] font-sans font-medium text-[1.15cqw] tracking-normal whitespace-nowrap"
              >
                <WaveLetters text="Senior Product Experience Designer" />
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
