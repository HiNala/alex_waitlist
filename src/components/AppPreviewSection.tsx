"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import Image from "next/image";

const EASING = [0.4, 0, 0.2, 1] as const;

const screens = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "🏠",
    title: "Everything at a glance",
    description:
      "See your pet's health score, daily activity, location, and recent alerts — all on one screen.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "health",
    label: "Health Chat",
    icon: "💝",
    title: "AI health insights",
    description:
      "Ask anything about your pet's health. Whisker's AI analyzes collar data and veterinary knowledge to give personalized answers.",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tracking",
    label: "GPS Tracking",
    icon: "📍",
    title: "Always know where they are",
    description:
      "Real-time GPS tracking with customizable safe zones and instant escape alerts.",
    imageSrc: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nutrition",
    label: "Feeding",
    icon: "🍽️",
    title: "Smart feeding, tracked",
    description:
      "The smart bowl logs every meal, controls portions, and ensures each cat eats from their own bowl.",
    imageSrc: "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=800&auto=format&fit=crop",
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
                  <div className="flex justify-between items-center px-5 py-2.5 bg-white shrink-0 z-10 relative">
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
                  <div className="flex-1 min-h-0 overflow-hidden bg-white relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASING }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={current.imageSrc}
                          alt={current.label}
                          fill
                          className="object-cover"
                        />
                        {/* Overlay to make it look more like UI */}
                        <div className="absolute inset-0 bg-black/10" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom nav */}
                  <div className="shrink-0 bg-white border-t border-sand-200/60 px-2 py-2.5 z-10 relative">
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
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-charcoal-900/20 rounded-full z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
