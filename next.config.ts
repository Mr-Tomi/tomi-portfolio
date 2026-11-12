import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Serve AVIF where supported, WebP otherwise; both far smaller than the source PNGs
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
