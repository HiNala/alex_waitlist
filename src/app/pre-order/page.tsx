"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Shield, Truck, CreditCard, ArrowRight } from "lucide-react";

// Mock checkout components for now - in real app these would be the actual Stripe components
const StripeCheckoutButton = ({ product }: { product: any }) => (
  <button className="w-full btn-primary py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
    <CreditCard className="w-5 h-5" />
    Reserve for ${product.deposit}
  </button>
);

const ExpressCheckout = () => (
  <div className="grid grid-cols-2 gap-3">
    <button className="flex items-center justify-center bg-black text-white py-3 rounded-xl hover:opacity-90 transition-opacity">
      <span className="font-bold">Apple Pay</span>
    </button>
    <button className="flex items-center justify-center bg-white border border-sand-200 text-charcoal-900 py-3 rounded-xl hover:bg-sand-50 transition-colors">
      <span className="font-bold"><span className="text-blue-500">G</span>Pay</span>
    </button>
  </div>
);

const products = [
  {
    id: "dog-collar",
    name: "Smart Dog Collar",
    price: 350,
    deposit: 100,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    features: ["GPS Tracking", "Health Monitoring", "AI Insights"],
  },
  {
    id: "cat-bundle",
    name: "Cat Collar + Bowl",
    price: 350,
    deposit: 100,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    features: ["GPS Collar", "RFID Smart Bowl", "Activity Tracking"],
  },
];

export default function PreOrderPage() {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const selectedProduct = products.find(p => p.id === selectedId) || products[0];

  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Product Info */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <Link href="/" className="inline-flex items-center text-warmgray-500 hover:text-cocoa-600 mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Home
              </Link>
              <h1 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-4 leading-tight">
                Secure your spot <br/> <span className="text-cocoa-700">in line.</span>
              </h1>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Due to high demand, we are limiting the first batch to 500 units per product. A $100 refundable deposit guarantees your reservation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand-200">
              <h3 className="font-serif text-xl text-charcoal-900 mb-6">How it works</h3>
              <div className="space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-sand-200"></div>

                <div className="relative flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-cocoa-600 text-white flex items-center justify-center font-bold z-10 shadow-md">1</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">Place Deposit Today</h4>
                    <p className="text-sm text-warmgray-600 mt-1">Pay $100 now to reserve your unit. Fully refundable at any time.</p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-cocoa-600 text-cocoa-600 flex items-center justify-center font-bold z-10">2</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">Production Updates</h4>
                    <p className="text-sm text-warmgray-600 mt-1">Receive exclusive behind-the-scenes updates as we build your device.</p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-sand-300 text-sand-400 flex items-center justify-center font-bold z-10">3</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">Final Payment & Shipping</h4>
                    <p className="text-sm text-warmgray-600 mt-1">Pay the remaining $250 when your order is ready to ship (est. 3-6 months).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-sm text-warmgray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" /> Secure Checkout
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cocoa-600" /> Free Shipping
              </div>
            </div>
          </div>

          {/* Right Column: Selection & Checkout */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl border border-sand-200">
            <h2 className="font-serif text-2xl text-charcoal-900 mb-6">Select your product</h2>
            
            <div className="space-y-4 mb-8">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex gap-4 items-center group ${
                    selectedId === product.id
                      ? "border-cocoa-500 bg-cocoa-50/30 shadow-md"
                      : "border-sand-200 hover:border-cocoa-300 hover:bg-sand-50"
                  }`}
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-sand-100">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-bold text-lg ${selectedId === product.id ? "text-cocoa-900" : "text-charcoal-900"}`}>
                        {product.name}
                      </h3>
                      <div className="text-right">
                        <div className="font-bold text-charcoal-900">${product.price}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f, i) => (
                        <span key={i} className="text-xs bg-white px-2 py-1 rounded-md border border-sand-200 text-warmgray-600">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedId === product.id ? "border-cocoa-500 bg-cocoa-500 text-white" : "border-sand-300"
                  }`}>
                    {selectedId === product.id && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                </button>
              ))}
            </div>

            <div className="border-t border-sand-200 pt-8 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-warmgray-600">Due today (Deposit)</span>
                <span className="text-xl font-bold text-charcoal-900">$100.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-warmgray-500">Due at shipping</span>
                <span className="text-warmgray-500">$250.00</span>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 h-2 bg-sand-100 rounded-full overflow-hidden flex">
                <div className="w-[28.5%] bg-cocoa-500"></div>
                <div className="flex-1 bg-sand-200 border-l border-white/50"></div>
              </div>
              <div className="flex justify-between text-[10px] text-warmgray-400 mt-1 uppercase tracking-wider font-medium">
                <span>Today</span>
                <span>Shipping</span>
              </div>
            </div>

            <div className="space-y-4">
              <StripeCheckoutButton product={selectedProduct} />
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-sand-200"></div>
                </div>
                <div className="relative flex justify-center text-xs text-warmgray-400 bg-white px-3">
                  Or pay instantly
                </div>
              </div>
              
              <ExpressCheckout />
            </div>

            <p className="text-center text-xs text-warmgray-400 mt-6 leading-relaxed">
              By placing this order, you agree to our <Link href="/terms" className="underline hover:text-cocoa-600">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-cocoa-600">Privacy Policy</Link>. 
              Pre-orders are estimated to ship in 3-6 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
