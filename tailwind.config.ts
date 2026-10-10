import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        glitch: 'glitch 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 100%': { opacity: '0.03', transform: 'translate(0) scale(1)' },
          '10%': { opacity: '0.05', transform: 'translate(-2px, 2px) scale(1.01)' },
          '11%': { opacity: '0.02', transform: 'translate(2px, -2px) scale(0.99)' },
          '12%': { opacity: '0.04', transform: 'translate(0) scale(1)' },
          '40%': { opacity: '0.03', transform: 'translate(0) scale(1)' },
          '41%': { opacity: '0.06', transform: 'translate(3px, 1px) scale(1.01)' },
          '42%': { opacity: '0.02', transform: 'translate(-3px, -1px) scale(0.99)' },
          '43%': { opacity: '0.03', transform: 'translate(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
