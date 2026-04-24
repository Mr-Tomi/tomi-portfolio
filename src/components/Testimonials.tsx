"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Moses Arfo",
    role: "Founder & CEO CVSpan",
    image: "https://framerusercontent.com/images/CLVF6XhDsXkfHcURXf0C4JByJc.png",
    text: "Tomike is a highly skilled designer with a sharp eye for detail and a talent for innovative, blue-sky thinking. His creative input has shaped winning pitches, successful product designs, and consistently delighted clients."
  },
  {
    name: "Iany Trisuzzi",
    role: "Senior Creative @ Superside",
    image: "https://framerusercontent.com/images/a4SOmWUBbbQPALcSPI3MNaGmI.png",
    text: "I had the pleasure of working with Tomike on several projects, where his strong UX/UI skills, clear communication, and positive, easygoing nature made collaboration seamless. He’s adaptable, reliable, and a true asset to any team."
  },
  {
    name: "Tobi Olowu",
    role: "Design Manager @ CvSpan",
    image: "https://framerusercontent.com/images/xQhM0qXmKCwKe7ve87YREjHWBsA.png",
    text: "Tomike is a highly dependable designer whose attention to detail and exceptional skills consistently deliver high-quality results. His dedication makes him a truly valuable team member."
  },
  {
    name: "Camila Awensztern",
    role: "Digital Strategist & Project Manager",
    image: "https://framerusercontent.com/images/0c2EyBVUGS8HFCesIpZOX3bGIo0.png",
    text: "Tomike is a dedicated, creative professional with great team spirit. He’s collaborative, solution-oriented, and a pleasure to work with. Any team would be lucky to have him."
  },
  {
    name: "Cristina Cuevas",
    role: "Project Manager for Creative Services",
    image: "https://framerusercontent.com/images/yKkiWZrRmmWApPWBFiObKe15U.png",
    text: "I had the pleasure of working with Tomike at Superside, where his UX/UI expertise, attention to detail, and collaborative attitude stood out. He reliably led projects with care and focus, making him a valuable asset to any team."
  }
];

// Quadruple the array to ensure the screen is ALWAYS filled on ultra-wide monitors
// The animation translates -50%, which perfectly loops 2 full sets
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-black overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Testimonials
          </h3>
          <p className="text-white/50 tracking-widest uppercase text-sm mb-4">Don’t take my word for it. Take theirs.</p>
          <div className="w-24 h-1 bg-white/20" />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group">
        
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex flex-col flex-shrink-0 w-[350px] md:w-[450px] mx-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md whitespace-normal"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-[#FF6B00]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed font-light text-base md:text-lg">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
