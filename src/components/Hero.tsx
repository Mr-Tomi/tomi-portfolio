"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Lexend } from "next/font/google";
import { useRef } from "react";

const display = Lexend({ subsets: ["latin"], weight: ["400", "500"] });

const HEADLINE = "HI, I’m Tomi";
const EASE = [0.22, 1, 0.36, 1] as const;

/** Headline split into characters that rise in on load. */
function AnimatedHeadline() {
  return (
    <h1
      aria-label={HEADLINE}
      className={`${display.className} leading-[0.9] tracking-[-0.02em] font-normal whitespace-nowrap text-[15vw] md:text-[length:calc(min(14vw,26svh)+2px)]`}
    >
      {HEADLINE.split("").map((char, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.035, ease: EASE }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ---------------- Cursor parallax (head) ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 22, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(mouseX, spring);
  const smoothY = useSpring(mouseY, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const headMouseX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const headMouseY = useTransform(smoothY, [-1, 1], [-22, 22]);
  const headRotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const headRotateY = useTransform(smoothX, [-1, 1], [-6, 6]);

  // Background text drifts opposite to the cursor for depth
  const bgMouseX = useTransform(smoothX, [-1, 1], [10, -10]);
  const bgMouseY = useTransform(smoothY, [-1, 1], [6, -6]);

  /* ---------------- Scroll effects ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 200, mass: 0.4 });

  // Head: sinks + scales slightly on scroll (works on touch devices too)
  const headScrollY = useTransform(progress, [0, 1], [0, 160]);
  const headScale = useTransform(progress, [0, 1], [1, 1.08]);
  const headY = useTransform<number, number>([headMouseY, headScrollY], ([m, s]) => m + s);

  // Headline: lifts, shrinks, blurs and fades
  const titleY = useTransform(progress, [0, 0.6], [0, -140]);
  const titleScale = useTransform(progress, [0, 0.6], [1, 0.9]);
  const titleOpacity = useTransform(progress, [0, 0.45], [1, 0]);
  const titleBlur = useTransform(progress, [0, 0.45], [0, 10]);
  const titleFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);

  // UX / AI: split apart horizontally
  const uxX = useTransform(progress, [0, 0.7], ["0vw", "-14vw"]);
  const aiX = useTransform(progress, [0, 0.7], ["0vw", "14vw"]);
  const bgOpacity = useTransform(progress, [0, 0.6], [1, 0]);

  // Sub texts: slide outward + fade
  const leftX = useTransform(progress, [0, 0.5], [0, -120]);
  const rightX = useTransform(progress, [0, 0.5], [0, 120]);
  const subY = useTransform(progress, [0, 0.5], [0, -40]);
  const subOpacity = useTransform(progress, [0, 0.35], [1, 0]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Introduction"
      className="relative w-full h-[100svh] min-h-[620px] overflow-hidden bg-black text-white"
      style={{ perspective: 1200 }}
    >
      {/* Soft vignette glow behind head */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] rounded-full bg-[radial-gradient(circle,rgba(110,90,255,0.10)_0%,rgba(0,0,0,0)_65%)]"
      />

      {/* ---------- Background glitch text: UX  AI ---------- */}
      <motion.div
        aria-hidden
        style={{ x: bgMouseX, y: bgMouseY, opacity: bgOpacity }}
        className="pointer-events-none select-none absolute inset-x-0 top-[27%] md:top-[calc(33%+50px)] z-0 flex justify-center gap-[24vw] md:gap-[17vw]"
      >
        <motion.span style={{ x: uxX }} className="block md:relative md:-left-[30px]">
          <span
            data-text="UX"
            className={`${display.className} glitch-text leading-none font-medium text-[24vw] md:text-[min(15vw,28svh)]`}
          >
            UX
          </span>
        </motion.span>
        <motion.span style={{ x: aiX }} className="block md:relative md:left-[15px]">
          <span
            data-text="AI"
            className={`${display.className} glitch-text glitch-text--delayed leading-none font-medium text-[24vw] md:text-[min(15vw,28svh)]`}
          >
            AI
          </span>
        </motion.span>
      </motion.div>

      {/* ---------- Headline ---------- */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity, filter: titleFilter }}
        className="absolute inset-x-0 top-[15%] md:top-[max(88px,10%)] z-10 flex justify-center origin-top"
      >
        <AnimatedHeadline />
      </motion.div>

      {/* ---------- Portrait ---------- */}
      <div className="absolute z-20 inset-x-0 bottom-[calc(20%+8px)] md:bottom-[2%] h-[50%] md:h-[74%] flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        className="h-full aspect-[733/1154] pointer-events-auto"
      >
        <motion.div
          style={{
            x: headMouseX,
            y: headY as MotionValue<number>,
            rotateX: headRotateX,
            rotateY: headRotateY,
            scale: headScale,
          }}
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src="/images/subject-3.png"
            alt="Portrait of Tomi Campbell, Senior Product Designer"
            fill
            priority
            sizes="(max-width: 768px) 60vw, 40vw"
            className="object-contain select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            draggable={false}
          />
        </motion.div>
      </motion.div>
      </div>

      {/* ---------- Left sub text (desktop) ---------- */}
      <motion.div
        style={{ x: leftX, y: subY, opacity: subOpacity }}
        className="hidden md:block absolute z-30 left-[5%] top-[calc(57%+150px)] max-w-[31%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
        >
          <h2 className="font-semibold tracking-tight text-[clamp(1.25rem,2.15vw,2.4rem)] mb-[0.6em] leading-tight">
            Senior Product Designer
          </h2>
          <p className="text-white/75 leading-relaxed text-[clamp(0.85rem,1.3vw,1.25rem)] max-w-[28ch]">
            Turning complex problems into simple products. Fintech, B2C, B2B, healthcare and AI.
          </p>
        </motion.div>
      </motion.div>

      {/* ---------- Right sub text (desktop) ---------- */}
      <motion.div
        style={{ x: rightX, y: subY, opacity: subOpacity }}
        className="hidden md:block absolute z-30 right-[4%] top-[calc(62%+145px)] max-w-[30%] text-right"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
          className="text-white/90 leading-relaxed text-[clamp(0.85rem,1.3vw,1.25rem)]"
        >
          6+ years · 6,000+ users on a fintech app
          <br />I designed
          <br />Ex-Superside
        </motion.p>
      </motion.div>

      {/* ---------- Mobile sub texts ---------- */}
      <motion.div
        style={{ y: subY, opacity: subOpacity }}
        className="md:hidden absolute z-30 inset-x-0 bottom-0 px-6 pb-8 pt-16 bg-gradient-to-t from-black via-black/90 to-transparent"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          className="flex flex-col gap-3 text-center"
        >
          <h2 className="text-[22px] font-semibold tracking-tight">Senior Product Designer</h2>
          <p className="text-white/75 text-sm leading-relaxed">
            Turning complex problems into simple products. Fintech, B2C, B2B, healthcare and AI.
          </p>
          <p className="text-white/60 text-xs">
            6+ years · 6,000+ users on a fintech app I designed
            <br />Ex-Superside
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
