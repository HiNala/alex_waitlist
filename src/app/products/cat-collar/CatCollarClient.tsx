"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import DepositBadge from "@/components/DepositBadge";
import PreOrderSection from "@/components/PreOrderSection";
import { PRODUCTS } from "@/lib/payments.config";
import Link from "next/link";

const product = PRODUCTS.catBundle;

const collarColors = [
  { id: "charcoal", name: "Midnight Black", tailwind: "bg-charcoal-900" },
  { id: "cocoa", name: "Cocoa Brown", tailwind: "bg-cocoa-700" },
  { id: "sand", name: "Desert Sand", tailwind: "bg-sand-200" },
];

export default function CatCollarClient() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF6F1] to-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-6 sm:mb-8">
            <Link href="/" className="hover:text-cocoa-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Cat Collar + Smart Bowl</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Product Image Area */}
            <AnimateOnScroll>
              <div className="aspect-square bg-gradient-to-br from-[#FAF6F1] to-sand-100 rounded-lg border border-[#E8DDD3] flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center p-8">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cocoa-500 to-cocoa-700 flex items-center justify-center shadow-xl">
                      <span className="text-4xl">🐈</span>
                    </div>
                    <div className="text-3xl text-[#9CA3AF]">+</div>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-xl">
                      <span className="text-4xl">🍽️</span>
                    </div>
                  </div>
                  <div className="font-serif text-2xl text-[#1A1A1A] font-bold mb-1">Cat Collar + Smart Bowl</div>
                  <div className="text-[#6B6B6B]">GPS · RFID · Smart Feeding</div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Product Info */}
            <AnimateOnScroll delay={0.15}>
              <div className="space-y-6">
                <div>
                  <DepositBadge deposit={product.deposit} retailPrice={product.retailPrice} size="sm" className="mb-4" />
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
                    {product.name}
                  </h1>
                  <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[#1A1A1A]">${product.retailPrice}</span>
                  <span className="text-[#9CA3AF]">for the bundle</span>
                </div>

                <Link
                  href="#pre-order"
                  className="btn-primary inline-flex items-center justify-center text-base py-4 px-8 w-full sm:w-auto"
                >
                  Reserve Now — ${product.deposit} Deposit
                </Link>

                <p className="text-xs text-[#9CA3AF]">
                  Refundable deposit. Remaining ${product.remainingBalance} charged at shipment. Ships within 3–6 months.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features: Collar + Bowl side by side */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              Two products, one <span className="text-cocoa-700">bundle</span>
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              A GPS-enabled collar and an RFID smart bowl — designed to work together for complete cat care.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GPS Cat Collar Card */}
            <AnimateOnScroll>
              <div className="bg-[#FAF6F1] rounded-lg p-6 sm:p-8 border border-[#E8DDD3] h-full">
                <div className="text-3xl mb-4">🐈</div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">GPS Cat Collar</h3>
                <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
                  Lightweight breakaway collar with real-time GPS tracking and RFID identification — know where your cat is, always.
                </p>
                <div className="space-y-2">
                  {["GPS tracking for indoor & outdoor cats", "RFID-enabled identification", "Breakaway safety buckle", "Lightweight at just 22g", "IP65 water-resistant", "5-day battery life"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <div className="w-6 h-6 rounded-lg bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Smart Bowl Card */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-[#FAF6F1] rounded-lg p-6 sm:p-8 border border-[#E8DDD3] h-full">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Smart Bowl</h3>
                <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
                  An automatic RFID-gated bowl that only opens for the right cat — with portion tracking, timed feeding, and multi-cat support.
                </p>
                <div className="space-y-2">
                  {["RFID-gated lid — opens only for the paired collar", "Portion sensing & meal tracking", "Timed feeding schedules", "Multi-cat household support", "Food-safe stainless steel", "30-day rechargeable battery"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <div className="w-6 h-6 rounded-lg bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Specs: Collar + Bowl side by side */}
      <section className="section-padding bg-[#FAF6F1]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              Technical <span className="text-cocoa-700">specifications</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cat Collar Specs */}
            <AnimateOnScroll>
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-4">Cat Collar</h3>
                <div className="bg-white rounded-lg border border-[#E8DDD3] overflow-hidden shadow-card">
                  {Object.entries(product.collarSpecs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between items-center px-5 py-4 ${i > 0 ? "border-t border-[#E5E5E5]" : ""}`}
                    >
                      <span className="text-sm font-medium text-[#1A1A1A] capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="font-mono text-sm text-[#6B6B6B] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Smart Bowl Specs */}
            <AnimateOnScroll delay={0.1}>
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-4">Smart Bowl</h3>
                <div className="bg-white rounded-lg border border-[#E8DDD3] overflow-hidden shadow-card">
                  {Object.entries(product.bowlSpecs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between items-center px-5 py-4 ${i > 0 ? "border-t border-[#E5E5E5]" : ""}`}
                    >
                      <span className="text-sm font-medium text-[#1A1A1A] capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="font-mono text-sm text-[#6B6B6B] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              What&apos;s in the <span className="text-cocoa-700">bundle</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {product.whatsIncluded.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-[#FAF6F1] border border-[#E8DDD3]">
                  <div className="w-8 h-8 rounded-xl bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pre-Order */}
      <section className="section-padding bg-gradient-to-b from-[#FAF6F1] to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl">
          <PreOrderSection
            productName={product.name}
            productSlug={product.slug}
            deposit={product.deposit}
            retailPrice={product.retailPrice}
            colors={[...collarColors]}
          />
        </div>
      </section>
    </div>
  );
}
