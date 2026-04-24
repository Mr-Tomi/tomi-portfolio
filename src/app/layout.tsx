import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tomi Campbell | Expert UI/UX Designer",
  description: "Senior UI/UX Designer & Creative Lead shaping intuitive, human-centered AI experiences.",
};

import Link from "next/link";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {/* Navigation Header */}
        <Header />

        {children}

        {/* Footer */}
        <footer id="contact" className="bg-black border-t border-white/10 py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-2xl leading-tight">
              Let's solve real world problems with design together.
            </h2>
            <a 
              href="mailto:campbelltomike@gmail.com" 
              className="text-2xl md:text-3xl text-white/80 hover:text-[#FF6B00] border-b border-white/30 hover:border-[#FF6B00] transition-all pb-1 mb-16"
            >
              campbelltomike@gmail.com
            </a>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/50 text-sm border-t border-white/10 pt-12">
              <p>Copyright © Tomike Campbell, 2025</p>
              <div className="flex space-x-6 mt-6 md:mt-0">
                <a 
                  href="https://www.linkedin.com/in/tomikecampbell/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#FF6B00] transition-colors uppercase tracking-widest"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
