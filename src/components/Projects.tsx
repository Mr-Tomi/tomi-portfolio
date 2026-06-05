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
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.35] mb-8"
            >
              Making Complexity<br />Look Easy
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mt-12 md:mt-2 text-white/70 text-lg leading-relaxed font-light"
          >
            A handpicked collection of recent projects, ranging from dynamic brand refreshes to intuitive mobile apps and robust web dashboards. Built to solve complex problems through seamless, human-centered user experiences.
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
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.35] mb-8"
            >
              What Didn't<br />Ship
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mt-12 md:mt-2 text-white/70 text-lg leading-relaxed font-light"
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
                <div className="aspect-[4/3] md:aspect-[2.5/1] w-full overflow-hidden">
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

      </div>
    </section>
  );
}
