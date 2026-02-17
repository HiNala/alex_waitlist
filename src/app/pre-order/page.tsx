"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StripeCheckout from "@/components/StripeCheckout";
import PaymentButtons from "@/components/PaymentButtons";

const products = [
  {
    id: "dog-collar",
    name: "Smart Dog Collar",
    price: 350,
    deposit: 100,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    description: "GPS tracking, health monitoring, and AI behavior insights for your dog.",
  },
  {
    id: "cat-bundle",
    name: "Cat Collar + Smart Bowl",
    price: 350,
    deposit: 100,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    description: "GPS cat collar paired with RFID smart bowl for complete feline care.",
  },
];

export default function PreOrderPage() {
  const [selected, setSelected] = useState(products[0]);

  const checkoutData = {
    productName: selected.name,
    color: "Default",
    quantity: 1,
    price: selected.deposit,
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-warmgray-500 mb-8">
          <Link href="/" className="hover:text-cocoa-500">Home</Link>
          <span>/</span>
          <span className="text-warmgray-600">Pre-Order</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 mb-3">
            Reserve your <span className="text-cocoa-700">Whisker</span>
          </h1>
          <p className="text-warmgray-600 text-base sm:text-lg max-w-xl mx-auto">
            Secure your spot with a $100 refundable deposit. The remaining $250 is charged when your product ships.
          </p>
        </div>

        {/* Product selection */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelected(product)}
              className={`text-left rounded-2xl overflow-hidden border-2 transition-all ${
                selected.id === product.id
                  ? "border-cocoa-500 shadow-lg"
                  : "border-sand-200 hover:border-cocoa-300"
              }`}
            >
              <div className="relative h-40 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-charcoal-900 mb-1">{product.name}</h3>
                <p className="text-xs text-warmgray-600 leading-relaxed mb-2">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-charcoal-900">${product.price}</span>
                  <span className="text-xs text-warmgray-500">total</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Deposit explainer + checkout */}
        <div className="max-w-md mx-auto">
          {/* Deposit visual */}
          <div className="bg-cream-50 rounded-2xl p-6 mb-6 border border-sand-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal-900">{selected.name}</span>
              <span className="text-sm text-warmgray-600">${selected.price} total</span>
            </div>
            <div className="w-full bg-sand-200 rounded-full h-3 mb-3">
              <div className="bg-cocoa-700 h-3 rounded-full" style={{ width: "28.6%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-warmgray-600">
              <span className="font-semibold text-cocoa-700">$100 deposit today</span>
              <span>$250 when it ships</span>
            </div>
          </div>

          {/* Checkout */}
          <div className="space-y-4">
            <StripeCheckout
              data={checkoutData}
              className="w-full bg-cocoa-700 hover:bg-cocoa-500 text-white font-semibold py-4 px-6 rounded-2xl text-base transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
            >
              Reserve with Card &mdash; $100 Deposit
            </StripeCheckout>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-sand-200"></div>
              </div>
              <div className="relative flex justify-center text-xs text-warmgray-500 bg-white px-3">
                or pay instantly with
              </div>
            </div>

            <PaymentButtons />

            <p className="text-center text-xs text-warmgray-500 leading-relaxed">
              Secure payment via Stripe. Deposits are fully refundable before shipping. Ships within 3-6 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
