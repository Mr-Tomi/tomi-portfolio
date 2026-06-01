"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Settings } from "lucide-react";

export default function Projects() {
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
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.95] mb-8"
            >
              Curated Digital<br />Case Studies
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mt-12 md:mt-2 text-white/70 text-lg leading-snug font-light"
          >
            A handpicked collection of recent projects—ranging from dynamic brand refreshes to intuitive mobile apps and robust web dashboards. Built for impact and seamless user experience.
          </motion.div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {projects.map((project, idx) => {
            // Alternating aspect ratios: Portrait, Square, Portrait, Square
            const isPortrait = idx % 2 === 0;
            const aspectClass = isPortrait ? "aspect-[4/5]" : "aspect-square";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col group mt-0"
              >
                {/* Image */}
                <div className={`w-full overflow-hidden rounded-3xl mb-5 bg-white/5 border border-white/10 ${aspectClass}`}>
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-5 line-clamp-3 font-light">
                  {project.overview}
                </p>
                
                <Link 
                  href={`/projects/${project.slug}`} 
                  className="text-[15px] font-semibold text-white underline underline-offset-[6px] decoration-1 decoration-white/30 hover:decoration-white transition-colors inline-block"
                >
                  Open Study
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
