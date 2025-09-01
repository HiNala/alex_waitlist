import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pastel color palette
        cocoa: { 
          700: '#A67C6A',  // Pastel terracotta
          500: '#B8897A',  // Lighter pastel terracotta
          300: '#D4B5A8',  // Very light pastel terracotta
        },
        cream: { 
          50: '#FAF6EF',   // Keep as is - already pastel
          100: '#F5EFE7'   // Slightly deeper cream
        },
        sand: { 
          100: '#EDE3D6',  // Keep as is - already pastel
          200: '#E5D8C8'   // Slightly deeper sand
        },
        charcoal: { 
          900: '#4A4A4A',  // Softer charcoal (not pure black)
          700: '#6B6B6B'   // Lighter charcoal
        },
        warmgray: { 
          600: '#8B8680',  // Softer warm gray
          500: '#A19B94'   // Lighter warm gray
        },
        sky: { 
          500: '#7FB3E3',  // Pastel blue
          400: '#9BC5E8',  // Lighter pastel blue
          300: '#B8D7ED'   // Very light pastel blue
        },
        gold: { 
          500: '#E8C547',  // Pastel gold
          400: '#EDD066',  // Lighter pastel gold
          300: '#F2DB85'   // Very light pastel gold
        },
        green: {
          500: '#90C695',  // Pastel green
          400: '#A5D3A9',  // Lighter pastel green
        },
        // Keep legacy for compatibility
        terracotta: {
          DEFAULT: "#A67C6A",
          light: "#B8897A",
          dark: "#A67C6A",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,.06)',
        hover: '0 10px 24px rgba(0,0,0,.10)',
      },
      container: { 
        center: true, 
        padding: '1rem' 
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
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        wag: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        shimmer: "shimmer 8s infinite linear",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'wag': 'wag 1s ease-in-out infinite',
      },
      boxShadow: {
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.08)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      blur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
};
export default config; 