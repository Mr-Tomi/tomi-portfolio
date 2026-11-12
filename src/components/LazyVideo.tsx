"use client";

import { useEffect, useRef } from "react";

// A muted looping clip that downloads and plays only once it nears the viewport.
export default function LazyVideo({ src, label, className }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) { video.src = src; }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return <video ref={ref} loop muted playsInline preload="none" aria-label={label} className={className} />;
}
