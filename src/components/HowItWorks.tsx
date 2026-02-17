"use client";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Choose your product",
    description: "Pick the smart collar for your dog, or the cat collar + bowl bundle. Reserve with a $100 deposit.",
    imageSrc: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Secure your spot",
    description: "Your order is reserved in our limited 500-unit run. We'll keep you updated on production and shipping.",
    imageSrc: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Track everything",
    description: "Receive your Whisker product, pair it with the app, and start seeing your pet in a whole new way.",
    imageSrc: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop",
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
            className="hidden md:block absolute top-20 left-[16.666%] right-[16.666%] h-px border-t border-dashed border-cocoa-300 z-0"
            aria-hidden
          />

          {steps.map((step, index) => (
            <StaggerItem key={index} className="relative text-center">
              <div className="relative z-10 w-40 h-40 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden bg-cream-50">
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
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
