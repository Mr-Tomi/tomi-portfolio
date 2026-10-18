"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Projects() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <section id="projects" className="relative z-20 bg-black min-h-screen py-24 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.50] mb-4"
            >
              Making Complexity<br />Look Easy
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mt-6 md:mt-2 text-white/70 text-lg leading-relaxed font-light"
          >
            These case studies show how I think, the trade-offs I make, and the research that drives decisions.
          </motion.div>
        </div>

        {/* Grid Area: Shipped */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.filter(p => p.group !== "did-not-ship").map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-white/5">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h4>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Header Area: What Didn't Ship */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-32 mb-20">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.35] mb-4"
            >
              What Didn't<br />Ship
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mt-6 md:mt-2 text-white/70 text-lg leading-relaxed font-light"
          >
            The project I learned the most from never made it to production. Here's what went wrong, what I'd do differently, and why the design still holds up.
          </motion.div>
        </div>

        {/* Grid Area: Did Not Ship */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {projects.filter(p => p.group === "did-not-ship").map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-white/5">
                <div className="aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h4>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
 
        {/* Header Area: Personal Project With Claude Code */}
        <div id="personal-project" className="flex flex-col md:flex-row justify-between items-start mt-32 mb-20">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.35] mb-4"
            >
              Personal Project<br />With Claude Code
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm mt-6 md:mt-2 text-white/70 text-lg leading-relaxed font-light"
          >
            A Nigerian car owner can’t prove what’s been done to their car, so every buyer assumes the worst and prices for it. CARIS is my answer to that; researched, designed, prototyped and shipping, with Claude Code as the build partner.
          </motion.div>
        </div>

        {/* Video Area: Personal Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl"
        >
          <div className="aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden relative bg-black">
            <video
              ref={videoRef}
              src="/videos/caris-mobile-app-teaser.mp4"
              poster="/images/caris-teaser-poster.jpg"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls
              onVolumeChange={(e) => {
                setIsMuted(e.currentTarget.muted || e.currentTarget.volume === 0);
              }}
              className="w-full h-full object-cover"
            />

            {/* Top Bar Overlay */}
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-center pointer-events-none z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium tracking-wide text-white/90">
                CARIS · Mobile App Teaser
              </span>

              <button
                type="button"
                onClick={toggleMute}
                className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-xs md:text-sm font-medium text-white transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-white/70" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>Mute</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
