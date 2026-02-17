import Link from "next/link";
import { PRODUCTS } from "@/lib/payments.config";
import { PawPrint, Cat } from "lucide-react";

export const metadata = {
  title: "Pre-Order — Whisker",
  description: "Reserve your Whisker smart collar with a $100 refundable deposit. Limited to 500 units per product.",
};

export default function PreOrderPage() {
  return (
    <div className="bg-gradient-to-b from-cream-50 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl section-padding">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-cocoa-700/10 border border-cocoa-700/20 text-cocoa-500 text-sm font-medium px-4 py-2 rounded-pill mb-6">
            Limited to 500 units per product
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] leading-tight tracking-tight mb-6">
            Pre-Order Your <span className="text-cocoa-700">Whisker</span>
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Reserve with a $100 refundable deposit. The remaining $250 is charged when your product is ready to ship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <Link
            href="/products/dog-collar"
            className="group bg-white rounded-lg border border-sand-200 p-8 shadow-card hover:shadow-hover hover:border-cocoa-700 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-6 group-hover:bg-cocoa-700 group-hover:text-white transition-colors duration-300">
              <PawPrint className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-cocoa-700 transition-colors">
              {PRODUCTS.dogCollar.shortName}
            </h2>
            <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">{PRODUCTS.dogCollar.description}</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-semibold text-[#1A1A1A]">${PRODUCTS.dogCollar.retailPrice}</span>
              <span className="text-sm text-[#9CA3AF]">retail</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-cocoa-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
              Reserve — ${PRODUCTS.dogCollar.deposit} deposit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </span>
          </Link>

          <Link
            href="/products/cat-collar"
            className="group bg-white rounded-lg border border-sand-200 p-8 shadow-card hover:shadow-hover hover:border-cocoa-700 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-6 group-hover:bg-cocoa-700 group-hover:text-white transition-colors duration-300">
              <Cat className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-cocoa-700 transition-colors">
              {PRODUCTS.catBundle.shortName}
            </h2>
            <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">{PRODUCTS.catBundle.description}</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-semibold text-[#1A1A1A]">${PRODUCTS.catBundle.retailPrice}</span>
              <span className="text-sm text-[#9CA3AF]">bundle</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-cocoa-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
              Reserve — ${PRODUCTS.catBundle.deposit} deposit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </span>
          </Link>
        </div>

        <div className="text-center mt-10 text-sm text-[#9CA3AF]">
          All deposits are fully refundable before shipment. See <Link href="/terms" className="underline text-cocoa-700 hover:text-cocoa-500">Terms</Link> for details.
        </div>
      </div>
    </div>
  );
}
