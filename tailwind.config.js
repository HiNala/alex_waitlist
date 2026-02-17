/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        cocoa: {
          50:  "var(--color-cocoa-50)",
          300: "var(--color-cocoa-300)",
          500: "var(--color-cocoa-500)",
          700: "var(--color-cocoa-700)",
          900: "var(--color-cocoa-900)",
        },
        cream: {
          50:  "var(--color-cream-50)",
          100: "var(--color-cream-100)",
        },
        sand: {
          100: "var(--color-sand-100)",
          200: "var(--color-sand-200)",
        },
        charcoal: {
          700: "var(--color-charcoal-700)",
          900: "var(--color-charcoal-900)",
        },
        warmgray: {
          400: "var(--color-warmgray-400)",
          500: "var(--color-warmgray-500)",
          600: "var(--color-warmgray-600)",
        },
        sky: {
          300: "var(--color-sky-300)",
          400: "var(--color-sky-400)",
          500: "var(--color-sky-500)",
        },
        gold: {
          300: "var(--color-gold-300)",
          400: "var(--color-gold-400)",
          500: "var(--color-gold-500)",
        },
        green: {
          400: "var(--color-green-400)",
          500: "var(--color-green-500)",
          700: "#15803d",
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', "Georgia", "serif"],
        sans:   ['"DM Sans"', "system-ui", "sans-serif"],
        mono:   ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        sm:    "8px",
        DEFAULT: "12px",
        btn:   "12px",
        lg:    "16px",
        xl:    "20px",
        "2xl": "24px",
        "3xl": "32px",
        pill:  "9999px",
      },
      boxShadow: {
        "card":    "0 1px 3px rgba(0,0,0,0.04)",
        "hover":   "0 12px 40px rgba(0,0,0,0.08)",
        "elevation-1": "0 2px 4px rgba(0,0,0,0.05)",
        "elevation-2": "0 4px 8px rgba(0,0,0,0.08)",
        "elevation-3": "0 8px 16px rgba(0,0,0,0.10)",
        "cocoa":   "0 8px 24px rgba(107,66,38,0.25)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "128": "32rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
module.exports = config;
