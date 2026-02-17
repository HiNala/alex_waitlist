"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've tried every pet tracker on the market. The biometric data Whisker promises is a game-changer — finally understanding what my dog is feeling, not just where he is.",
    name: "Sarah M.",
    role: "Golden Retriever mom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Two cats, two bowls, no more food theft. The RFID smart bowl is exactly what our household needed. Can't wait for the pre-sale to open.",
    name: "James K.",
    role: "Multi-cat household",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "As a vet, I'm excited about the potential for early detection through continuous biometric monitoring. This is where pet care is heading.",
    name: "Dr. Elena Torres",
    role: "Veterinarian",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
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
              <div className="bg-white rounded-xl p-8 shadow-card h-full flex flex-col border border-transparent hover:border-cocoa-300/30 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                
                <p className="font-sans text-base font-normal text-[#1A1A1A] leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-sans text-sm font-bold text-[#1A1A1A]">
                      {t.name}
                    </div>
                    <div className="font-sans text-xs font-medium text-[#9CA3AF]">
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
