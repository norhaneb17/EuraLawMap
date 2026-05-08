import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f0f5fb",
          100: "#dde9f5",
          200: "#bdd0e8",
          300: "#93b3d6",
          400: "#7a96b8",
          500: "#5a7da0",
          600: "#3a5f94",
          700: "#2d4d7a",
          800: "#1e3a5f",
          900: "#132945",
          950: "#0f1f35",
        },
        gold: {
          50:  "#f0f5fb",
          100: "#dde9f5",
          200: "#bdd0e8",
          300: "#93b3d6",
          400: "#7a96b8",
          500: "#4a6fa5",
          600: "#3a5f94",
          700: "#2d4d7a",
          800: "#1e3a5f",
          900: "#0f1f35",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
