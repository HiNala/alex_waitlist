"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "I've tried every pet tracker on the market. The biometric data Whisker promises is a game-changer — finally understanding what my dog is feeling, not just where he is.",
    name: "Sarah M.",
    role: "Golden Retriever mom",
    initials: "SM",
  },
  {
    quote:
      "Two cats, two bowls, no more food theft. The RFID smart bowl is exactly what our household needed. Can't wait for the pre-sale to open.",
    name: "James & Priya K.",
    role: "Multi-cat household",
    initials: "JK",
  },
  {
    quote:
      "As a vet, I'm excited about the potential for early detection through continuous biometric monitoring. This is where pet care is heading.",
    name: "Dr. Elena Torres",
    role: "Veterinarian",
    initials: "ET",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
            What pet parents are <span className="text-cocoa-700">saying</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            From our waitlist community — real excitement from real pet lovers.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-lg p-8 shadow-card h-full flex flex-col">
                <div className="font-serif text-[80px] leading-none text-cocoa-700/15 mb-4">
                  &ldquo;
                </div>
                <p className="font-sans text-base font-normal text-[#6B6B6B] leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cocoa-500 to-cocoa-700 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-sans text-sm font-semibold text-[#1A1A1A]">
                      {t.name}
                    </div>
                    <div className="font-sans text-xs font-normal text-[#9CA3AF]">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
