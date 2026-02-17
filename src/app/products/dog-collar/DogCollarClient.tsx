"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import DepositBadge from "@/components/DepositBadge";
import PreOrderSection from "@/components/PreOrderSection";
import { PRODUCTS } from "@/lib/payments.config";
import Link from "next/link";

const product = PRODUCTS.dogCollar;

export default function DogCollarClient() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF6F1] to-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-6 sm:mb-8">
            <Link href="/" className="hover:text-cocoa-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Smart Dog Collar</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Product Image Area */}
            <AnimateOnScroll>
              <div className="aspect-square bg-gradient-to-br from-[#FAF6F1] to-sand-100 rounded-lg border border-[#E8DDD3] flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cocoa-500 to-cocoa-700 flex items-center justify-center shadow-xl">
                    <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-20 h-20" />
                  </div>
                  <div className="font-serif text-2xl text-[#1A1A1A] font-bold mb-1">Smart Dog Collar</div>
                  <div className="text-[#6B6B6B]">GPS · Biometrics · AI</div>
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
                  <span className="text-[#9CA3AF]">retail price</span>
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

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              Everything your dog collar <span className="text-cocoa-700">should be</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="p-5 rounded-lg border border-[#E5E5E5] hover:border-cocoa-300/50 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-[#FAF6F1]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              Technical <span className="text-cocoa-700">specifications</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white rounded-lg border border-[#E8DDD3] overflow-hidden shadow-card">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div
                  key={key}
                  className={`flex justify-between items-center px-6 py-4 ${i > 0 ? "border-t border-[#E5E5E5]" : ""}`}
                >
                  <span className="text-sm font-medium text-[#1A1A1A] capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="font-mono text-sm text-[#6B6B6B] text-right">{value}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              What&apos;s in the <span className="text-cocoa-700">box</span>
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
            colors={[...product.colors]}
            sizes={[...product.sizes]}
          />
        </div>
      </section>
    </div>
  );
}
