import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F6F1EA",
        ocean: "#1F4A54",
        deep: "#0E2830",
        mist: "#DCE6E7",
      },
      boxShadow: {
        luxury: "0 20px 45px -22px rgba(10, 34, 40, 0.45)",
      },
      borderRadius: {
        premium: "1rem",
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
};

export default config;

