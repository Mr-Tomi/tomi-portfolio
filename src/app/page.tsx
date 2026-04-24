"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-black w-full text-white selection:bg-white/30">
      <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay scrollProgress={scrollYProgress} />
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
