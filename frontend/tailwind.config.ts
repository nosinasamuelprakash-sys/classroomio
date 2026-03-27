import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#0233BD",
          teal: "#3ADFEC",
          pink: "#BF0696",
          violet: "#9747FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
