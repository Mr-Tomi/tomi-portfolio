"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black w-full text-white selection:bg-white/30">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
