"use client";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import { ShoppingCart, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose your product",
    description: "Pick the smart collar for your dog, or the cat collar + bowl bundle. Reserve with a $100 deposit.",
    Icon: ShoppingCart,
  },
  {
    number: "02",
    title: "We build it",
    description: "Your order goes into our initial 500-unit production run. We keep you updated every step of the way.",
    Icon: Settings,
  },
  {
    number: "03",
    title: "Track everything",
    description: "When your product arrives, pair it with the Whisker app and start seeing your pet in a whole new way.",
    Icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
            How it <span className="text-cocoa-700">works</span>
          </h2>
          <p className="text-base sm:text-lg text-warmgray-600 max-w-2xl mx-auto leading-relaxed">
            From pre-order to your pet&apos;s first health insight — it&apos;s simple.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 sm:gap-10 relative">
          {/* Connecting dashed line (desktop only) */}
          <div
            className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-px border-t border-dashed border-cocoa-300"
            aria-hidden
          />

          {steps.map((step, index) => (
            <StaggerItem key={index} className="relative text-center">
              <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-lg bg-gradient-to-br from-cocoa-700 to-cocoa-500 flex items-center justify-center text-white shadow-lg">
                <step.Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-semibold text-cocoa-700 tracking-widest uppercase mb-2">
                {step.number}
              </div>
              <h3 className="font-sans text-2xl font-semibold text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-base font-normal text-warmgray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
