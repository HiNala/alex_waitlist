"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.4, 0, 0.2, 1] as const;
const staggerDelay = 0.12;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28"
      style={{
        background: "linear-gradient(to bottom right, #FAF6F1 0%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative background blobs — cocoa-300 at 15% opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(168, 121, 92, 0.15)" }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(168, 121, 92, 0.15)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Copy — 60% */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] mb-5 sm:mb-6"
            >
              Know your pet like{" "}
              <span className="text-cocoa-700">never before</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-lg sm:text-xl font-medium text-warmgray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Whisker&apos;s smart collars and AI-powered app turn raw sensor data into meaningful insights about your pet&apos;s health, behavior, and happiness — for dogs and cats.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/products/dog-collar"
                className="inline-flex items-center justify-center py-4 px-8 font-semibold rounded-btn bg-cocoa-700 text-white hover:bg-cocoa-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cocoa-700/40 focus-visible:ring-offset-2 shadow-md hover:shadow-cocoa"
              >
                Reserve Yours — $100 Deposit
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center py-4 px-8 font-semibold rounded-btn border-2 border-cocoa-700 text-cocoa-700 bg-transparent hover:bg-cocoa-700/8 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cocoa-700/40 focus-visible:ring-offset-2"
              >
                See All Products
              </Link>
            </motion.div>

            {/* Trust badges — pill shaped */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start"
            >
              {["Vet-informed AI", "Pet-safe hardware", "Refundable deposit"].map((label, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] font-medium text-cocoa-500"
                  style={{ backgroundColor: "rgba(139, 94, 60, 0.06)" }}
                >
                  <svg className="w-3.5 h-3.5 text-cocoa-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual — 40% — Unsplash Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easing }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl shadow-elevation-3 overflow-hidden aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop"
                  alt="Whisker Smart Collar on a dog"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay at bottom for text readability if we add any, or just aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating $100 deposit badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-cocoa-700 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-cocoa z-10"
              >
                $100 deposit
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
