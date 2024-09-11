import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  fontFamily: {
   "schibsted-grotesk-font": ["var(--schibstedGroteskFont)"],
   lexend: ["var(--lexendFont)"],
  },
  container: {
   center: true,
   padding: "1rem",
   screens: {
    "2xl": "1600px",
   },
  },
  extend: {},
 },
 plugins: [],
};
export default config;
