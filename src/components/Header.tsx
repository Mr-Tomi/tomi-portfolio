"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // If we scroll down and are not at the very top, hide the header
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      // If we scroll up, show the header
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -25 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 lg:px-24 flex items-center justify-between pointer-events-none mix-blend-difference"
    >
      <Link href="/" className="pointer-events-auto block">
        <div 
          className="h-8 w-[136px] bg-[#FF6B00]" 
          style={{
            WebkitMaskImage: 'url(https://framerusercontent.com/images/iKMovlHJsqHxx6kFyfVqISMGEw8.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'left center',
            maskImage: 'url(https://framerusercontent.com/images/iKMovlHJsqHxx6kFyfVqISMGEw8.svg)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'left center',
          }}
          aria-label="Tomi Campbell Logo"
          title="Tomi Campbell Logo"
        />
      </Link>
      <nav className="flex space-x-8 pointer-events-auto text-sm font-medium tracking-wide">
        <Link href="/#projects" className="hover:text-[#FF6B00] transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-[#FF6B00] transition-colors">About me & Contact</Link>
      </nav>
    </motion.header>
  );
}
