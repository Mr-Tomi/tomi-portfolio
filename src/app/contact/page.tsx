"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const experiences = [
    {
      role: "Senior UI/UX Designer | UX Consultant (Gen AI) | Founder",
      company: "Freelance",
      year: "2024 - Present"
    },
    {
      role: "Creative Lead (UX/UI)",
      company: "Superside",
      year: "2023 - 2024"
    },
    {
      role: "UI/UX Product Design Team Lead & Stage 3 Design Tutor",
      company: "CVSpan",
      year: "2022 - 2023"
    },
    {
      role: "UI/UX Designer",
      company: "Freelance",
      year: "2019 - 2022"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Image */}
          <div className="relative">
            <div className="sticky top-32 w-full aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              {/* Note: The user should place their uploaded portrait at public/images/profile.jpg */}
              <img 
                src="/images/profile.png" 
                alt="Tomi Campbell"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="pt-8 lg:pt-32 space-y-24">
            
            {/* Intro Section */}
            <section>
              <p className="text-white/40 tracking-widest uppercase text-sm font-medium mb-6">
                About me
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                Tomi Campbell
              </h1>
              <a 
                href="mailto:campbelltomike@gmail.com" 
                className="inline-flex items-center space-x-2 text-xl text-white/80 hover:text-[#FF6B00] border-b border-white/30 hover:border-[#FF6B00] transition-all pb-1 mb-12"
              >
                <span>campbelltomike@gmail.com</span>
                <ArrowUpRight size={20} />
              </a>

              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  Hi, I'm Tomi, a Senior UI/UX designer and consultant obsessed with one thing: making technology feel effortless for the people who use it.
                </p>
                <p>
                  UX isn't just what I do, it's how I think. I'm endlessly fascinated by the gap between how products work and how people actually experience them, and I've made it my mission to close that gap. With a strong foundation in user experience design and no-code front-end development using AI, I craft responsive websites and mobile applications that don't just look great, but feel intuitive at every touchpoint.
                </p>
                <p>
                  Lately, that passion has collided with AI in the most exciting way. I'm currently in the validation stage of two startups, one built entirely around full AI agent workflows, and another using AI to meaningfully enhance core product features. Both are a direct reflection of where I believe the future of product design is heading: intelligent, adaptive, and deeply human-centred.
                </p>
                <p>
                  Beyond client work, I run a faceless YouTube channel with over 80,000 subscribers and 5 million+ views in 12 months, built entirely at the intersection of UX thinking and AI tools. I understand your users because I move through the same digital products they do, every single day.
                </p>
                <p>
                  I've worked with startups and established brands alike, helping them translate vision into experience. If you're building something in the AI space and care deeply about how it feels to use.
                </p>
                <p className="text-white font-medium">
                  Let's build something that actually works for people.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <p className="text-white/40 tracking-widest uppercase text-sm font-medium mb-12">
                My journey so far
              </p>
              
              <div className="space-y-12">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group relative border-l border-white/10 pl-8 md:pl-12 py-2 hover:border-white/50 transition-colors">
                    <div className="absolute w-3 h-3 bg-white/10 rounded-full -left-[6.5px] top-4 group-hover:bg-white transition-colors" />
                    <p className="text-white/50 text-sm tracking-widest mb-2">{exp.year}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-lg text-white/70 font-light">{exp.company}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
