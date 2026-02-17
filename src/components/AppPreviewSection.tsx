"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const EASING = [0.4, 0, 0.2, 1] as const;

const screens = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "🏠",
    title: "Everything at a glance",
    description:
      "See your pet's health score, daily activity, location, and recent alerts — all on one screen.",
    content: (
      <div className="p-4 space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-charcoal-900 text-sm font-sans">
            Good morning!
          </span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cocoa-500 to-cocoa-700 flex items-center justify-center text-sm shadow-sm">
            🐕
          </div>
        </div>
        <div className="bg-gradient-to-br from-cocoa-700 via-cocoa-500 to-cocoa-700 rounded-xl p-4 text-white shadow-md">
          <div className="text-[10px] font-medium uppercase tracking-wider opacity-90 mb-1">
            Health Score
          </div>
          <div className="text-3xl font-bold font-sans">94</div>
          <div className="text-[11px] opacity-90 mt-1">Excellent — all vitals normal</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-cream-50 rounded-lg p-3 border border-sand-200/60">
            <div className="text-[10px] text-warmgray-500 font-medium uppercase mb-0.5">
              Activity
            </div>
            <div className="font-bold text-charcoal-900 text-sm font-sans">8,240 steps</div>
            <div className="h-1.5 w-full bg-sand-200 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cocoa-500 to-cocoa-700 rounded-full"
                style={{ width: "78%" }}
              />
            </div>
          </div>
          <div className="bg-cream-50 rounded-lg p-3 border border-sand-200/60">
            <div className="text-[10px] text-warmgray-500 font-medium uppercase mb-0.5">
              Heart Rate
            </div>
            <div className="font-bold text-charcoal-900 text-sm font-sans">82 bpm</div>
            <div className="flex gap-0.5 mt-1.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-1 rounded-sm bg-cocoa-300/40"
                  style={{ height: `${10 + i * 4}px` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-cream-50 rounded-lg p-3 border border-sand-200/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-warmgray-500 font-medium">Location</span>
          </div>
          <div className="font-bold text-charcoal-900 text-sm font-sans mt-0.5">
            Home — Safe Zone ✓
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "health",
    label: "Health Chat",
    icon: "💝",
    title: "AI health insights",
    description:
      "Ask anything about your pet's health. Whisker's AI analyzes collar data and veterinary knowledge to give personalized answers.",
    content: (
      <div className="p-4 space-y-3.5">
        <div className="font-semibold text-charcoal-900 text-sm font-sans mb-2">
          Health Chat
        </div>
        <div className="bg-cream-50 rounded-xl p-3 text-[12px] text-warmgray-600 border border-sand-200/60">
          <div className="text-[10px] font-semibold text-charcoal-900 uppercase mb-1">
            You asked
          </div>
          Why has Max been sleeping more this week?
        </div>
        <div className="bg-gradient-to-br from-cocoa-700 to-cocoa-500 rounded-xl p-3 text-white shadow-md">
          <div className="text-[10px] font-semibold text-white/80 uppercase mb-1">
            Whisker AI
          </div>
          <div className="text-[11px] leading-relaxed text-white/95">
            Based on Max&apos;s activity data, his sleep increased 18% this week. This
            is consistent with cooler weather. His vitals remain normal. If lethargy
            persists beyond 5 days, consider a vet check.
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-cream-50 rounded-lg py-2 px-3 text-center text-[11px] text-warmgray-600 border border-sand-200/60">
            Ask follow-up
          </div>
          <div className="flex-1 bg-cocoa-300/20 rounded-lg py-2 px-3 text-center text-[11px] font-medium text-cocoa-700">
            View vitals
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tracking",
    label: "GPS Tracking",
    icon: "📍",
    title: "Always know where they are",
    description:
      "Real-time GPS tracking with customizable safe zones and instant escape alerts.",
    content: (
      <div className="p-4 space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-charcoal-900 text-sm font-sans">
            Live Tracking
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-green-600 font-medium">Live</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-sky-300/25 via-cream-50 to-green-400/20 rounded-xl p-4 border border-sand-200/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-6 w-8 h-0.5 bg-warmgray-400/50 rounded" />
            <div className="absolute top-8 left-4 w-6 h-0.5 bg-warmgray-400/40 rounded" />
            <div className="absolute top-12 right-8 w-10 h-0.5 bg-warmgray-400/40 rounded" />
            <div className="absolute bottom-6 left-8 w-12 h-0.5 bg-warmgray-400/30 rounded" />
          </div>
          <div className="relative flex flex-col items-center justify-center py-4">
            <div className="w-12 h-12 bg-cocoa-700 rounded-full flex items-center justify-center shadow-md mb-3">
              <span className="text-xl">🐾</span>
            </div>
            <div className="text-[10px] text-warmgray-500 font-medium">Max</div>
            <div className="text-[11px] font-semibold text-charcoal-900">Home</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-green-400/10 border border-green-400/25 rounded-lg p-3">
            <div className="text-[10px] text-green-700 font-semibold uppercase">
              Home Zone
            </div>
            <div className="text-[11px] text-charcoal-900 font-medium mt-0.5">
              Active ✓
            </div>
          </div>
          <div className="bg-cream-50 rounded-lg p-3 border border-sand-200/60">
            <div className="text-[10px] text-warmgray-500 font-medium uppercase">
              Last seen
            </div>
            <div className="text-[11px] font-semibold text-charcoal-900 mt-0.5">
              Just now
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "nutrition",
    label: "Feeding",
    icon: "🍽️",
    title: "Smart feeding, tracked",
    description:
      "The smart bowl logs every meal, controls portions, and ensures each cat eats from their own bowl.",
    content: (
      <div className="p-4 space-y-3.5">
        <div className="font-semibold text-charcoal-900 text-sm font-sans mb-2">
          Feeding Log
        </div>
        <div className="bg-cream-50 rounded-xl p-4 border border-sand-200/60">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[12px] font-medium text-charcoal-900">
              Today&apos;s meals
            </span>
            <span className="text-[11px] text-cocoa-700 font-bold">2 of 3</span>
          </div>
          <div className="w-full bg-sand-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cocoa-500 to-cocoa-700 h-2.5 rounded-full"
              style={{ width: "66%" }}
            />
          </div>
          <div className="text-[10px] text-warmgray-500 mt-1.5">Next feeding at 6:00 PM</div>
        </div>
        <div className="space-y-2">
          {[
            { time: "7:00 AM", amount: "120g", cat: "Luna" },
            { time: "12:30 PM", amount: "95g", cat: "Luna" },
          ].map((meal, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white rounded-lg p-3 border border-sand-200/60 shadow-sm"
            >
              <div>
                <div className="text-[12px] font-semibold text-charcoal-900 font-sans">
                  {meal.time}
                </div>
                <div className="text-[10px] text-warmgray-500">{meal.cat}</div>
              </div>
              <div className="text-[12px] font-bold text-cocoa-700">{meal.amount}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function AppPreviewSection() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = screens[activeScreen];

  return (
    <section className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-20 w-96 h-96 bg-cocoa-700/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            The <span className="text-cocoa-300">Whisker App</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Your pet&apos;s entire world — health, location, feeding, and AI insights — in
            one beautifully simple app.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Left: Feature description + tab selectors */}
          <div className="order-2 lg:order-1 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="space-y-4"
              >
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white">
                  {current.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tab selectors */}
            <div className="flex flex-wrap gap-2">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-btn text-sm font-medium font-sans transition-all duration-200 ${
                    activeScreen === index
                      ? "bg-white/15 text-white border border-white/20"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <span>{screen.icon}</span>
                  <span className="hidden sm:inline">{screen.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 text-cocoa-300 hover:text-cocoa-300/90 font-medium text-sm font-sans transition-colors"
              >
                Learn more about the app
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[280px] h-[570px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-charcoal-700 rounded-[32px] shadow-2xl border-2 border-charcoal-700 overflow-hidden">
                <div className="absolute inset-[8px] bg-white rounded-[24px] overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 py-2.5 bg-white shrink-0">
                    <span className="text-[11px] font-semibold text-charcoal-900 font-sans">
                      9:41
                    </span>
                    <div className="flex items-center gap-1 text-charcoal-900">
                      <svg className="w-5 h-3" viewBox="0 0 24 12" fill="currentColor">
                        <rect x="0" y="2" width="6" height="6" rx="1" />
                        <rect x="8" y="1" width="6" height="8" rx="1" />
                        <rect x="16" y="0" width="6" height="10" rx="1" />
                      </svg>
                    </div>
                  </div>

                  {/* Screen content */}
                  <div className="flex-1 min-h-0 overflow-hidden bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.35, ease: EASING }}
                        className="h-full overflow-y-auto"
                      >
                        {current.content}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom nav */}
                  <div className="shrink-0 bg-white border-t border-sand-200/60 px-2 py-2.5">
                    <div className="flex justify-around items-center">
                      {screens.map((screen, index) => (
                        <button
                          key={screen.id}
                          onClick={() => setActiveScreen(index)}
                          className={`flex flex-col items-center gap-0.5 min-w-0 ${
                            activeScreen === index
                              ? "text-cocoa-700"
                              : "text-warmgray-400"
                          }`}
                        >
                          <span className="text-lg leading-none">{screen.icon}</span>
                          <span className="text-[9px] font-medium font-sans truncate max-w-full">
                            {screen.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-charcoal-900/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
