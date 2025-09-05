import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Pastel color palette via CSS variables
        cocoa: { 
          700: 'var(--color-cocoa-700)',
          500: 'var(--color-cocoa-500)',
          300: 'var(--color-cocoa-300)',
        },
        cream: { 
          50: 'var(--color-cream-50)',
          100: 'var(--color-cream-100)'
        },
        sand: { 
          100: 'var(--color-sand-100)',
          200: 'var(--color-sand-200)'
        },
        charcoal: { 
          900: 'var(--color-charcoal-900)',
          700: 'var(--color-charcoal-700)'
        },
        warmgray: { 
          600: 'var(--color-warmgray-600)',
          500: 'var(--color-warmgray-500)'
        },
        sky: { 
          500: 'var(--color-sky-500)',
          400: 'var(--color-sky-400)',
          300: 'var(--color-sky-300)'
        },
        gold: { 
          500: 'var(--color-gold-500)',
          400: 'var(--color-gold-400)',
          300: 'var(--color-gold-300)'
        },
        green: {
          500: 'var(--color-green-500)',
          400: 'var(--color-green-400)',
        },
        yellow: {
          50: '#FFFEF7',
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FACC15',
          500: '#EAB308',
        },
        // Keep legacy for compatibility
        terracotta: {
          DEFAULT: 'var(--color-cocoa-700)',
          light: 'var(--color-cocoa-500)',
          dark: 'var(--color-cocoa-700)',
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