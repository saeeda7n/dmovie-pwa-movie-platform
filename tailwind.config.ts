import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
 darkMode: "class",
 plugins: [nextui()],
};
export default config;
