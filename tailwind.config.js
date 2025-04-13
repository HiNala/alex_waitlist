/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#914120",
          light: "#B15B3A",
          dark: "#7A3218",
        },
        cream: "#F9F5F0",
        sage: "#8DAA9D",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        shimmer: "shimmer 8s infinite linear",
      },
    },
  },
  plugins: [],
}; 