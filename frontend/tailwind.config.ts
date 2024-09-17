import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

function addFontVariables({ addBase, theme }: any) {
  let fontFamily = theme("fontFamily");
  let newVars = Object.fromEntries(
    Object.entries(fontFamily).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,    
  });
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "curiosity-blue": {
          DEFAULT: "#3498DB",
          100: "#E8F4FD",
          200: "#B9DDFA",
          300: "#3498DB",
          400: "#2173A8",
          500: "#0E4F7A",
        },
        "wisdom-navy": {
          DEFAULT: "#34495E",
          100: "#EBF0F3",
          200: "#A6B5C1",
          300: "#34495E",
          400: "#22303D",
          500: "#10181C",
        },
        // Secondary Colors
        "engagement-red": {
          DEFAULT: "#FF6B6B",
          100: "#FFE5E5",
          200: "#FFA8A8",
          300: "#FF6B6B",
          400: "#D14545",
          500: "#A32121",
        },
        "growth-green": {
          DEFAULT: "#2ECC71",
          100: "#E8F8EF",
          200: "#A7EBC9",
          300: "#2ECC71",
          400: "#25A65B",
          500: "#1C8045",
        },
        // Accent Colors
        "insight-yellow": {
          DEFAULT: "#FFD93D",
          100: "#FFF9E0",
          200: "#FFEEA1",
          300: "#FFD93D",
          400: "#E6B800",
          500: "#B39200",
        },
        "imagination-purple": {
          DEFAULT: "#9B59B6",
          100: "#F0E5F5",
          200: "#D2A6E5",
          300: "#9B59B6",
          400: "#7D3C9B",
          500: "#5F2080",
        },
        "enthusiasm-orange": {
          DEFAULT: "#FFA500",
          100: "#FFF0E0",
          200: "#FFD3A1",
          300: "#FFA500",
          400: "#CC8400",
          500: "#996300",
        },
        // Neutral Color
        "clarity-white": {
          DEFAULT: "#ECF0F1",
        },

        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        "baloo-bhai-2": ["var(--font-baloo-bhai-2)", "cursive"],
        chewy: ["var(--font-chewy)", "cursive"],
        "comic-neue": ["var(--font-comic-neue)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    addFontVariables,
  ],
} satisfies Config;

export default config;
