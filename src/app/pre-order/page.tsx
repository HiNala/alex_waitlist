"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionPanel from "@/components/SectionPanel";
import StripeCheckout from "@/components/StripeCheckout";
import { cn } from "@/lib/utils";

export default function PreOrderPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("charcoal");

  const productImages = [
    "/images/smart-collar-device.jpg",
    "/images/pet1.jpg",
    "/images/pet2.jpg",
    "/images/pet3.jpg",
    "/images/pet4.jpg"
  ];

  const colorOptions = [
    { id: "charcoal", name: "Charcoal Black", color: "bg-charcoal-900", price: 199 },
    { id: "cocoa", name: "Cocoa Brown", color: "bg-cocoa-700", price: 199 },
    { id: "sand", name: "Desert Sand", color: "bg-sand-200", price: 199 }
  ];

  const selectedColorOption = colorOptions.find(c => c.id === selectedColor) || colorOptions[0];
  const totalPrice = selectedColorOption.price * quantity;

  const checkoutData = {
    productName: "Whisker Smart Collar",
    color: selectedColorOption.name,
    quantity,
    price: totalPrice
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="pt-20"></div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <nav className="flex items-center gap-2 text-sm text-warmgray-600 mb-4">
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Home</Link>
          <span>→</span>
          <span>Pre-Order</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            
            {/* Product Images */}
            <div className="space-y-4 sm:space-y-6">
              {/* Main Image */}
              <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-cream-50">
                <Image 
                  src={productImages[selectedImage]} 
                  alt="Whisker Smart Collar" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all flex-shrink-0",
                      selectedImage === index 
                        ? "border-cocoa-500 shadow-lg" 
                        : "border-sand-200 hover:border-cocoa-300"
                    )}
                  >
                    <Image src={image} alt={`Product view ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
                  Whisker Smart <span className="text-cocoa-700">Collar</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-warmgray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  The breakthrough companion device that combines GPS tracking, health monitoring, and AI insights for complete pet care.
                </p>
              </div>

              {/* Price */}
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
                  ${selectedColorOption.price}
                </div>
                <div className="text-sm sm:text-base text-warmgray-600 mt-1">
                  Pre-order price • Ships Q2 2025
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 text-center lg:text-left">
                  Choose Color
                </h3>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition-all",
                        selectedColor === color.id 
                          ? "border-cocoa-500 bg-cocoa-50" 
                          : "border-sand-200 hover:border-cocoa-300"
                      )}
                    >
                      <div className={cn("w-8 h-8 sm:w-10 sm:h-10 rounded-full", color.color)}></div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal-900">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 text-center lg:text-left">
                  Quantity
                </h3>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sand-200 hover:border-cocoa-500 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-xl sm:text-2xl font-bold text-charcoal-900 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sand-200 hover:border-cocoa-500 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Purchase Options */}
              <div className="space-y-3 sm:space-y-4">
                <StripeCheckout
                  data={checkoutData}
                  className="w-full bg-cocoa-700 hover:bg-cocoa-500 text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-base sm:text-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                >
                  Pre-Order Now • ${totalPrice}
                </StripeCheckout>
                
                {/* 1-Click Payment Options */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 border border-sand-200 rounded-xl hover:border-cocoa-300 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
                      <path d="M15.53 3.83c.893-1.09 1.477-2.602 1.314-4.11-1.274.052-2.82.847-3.739 1.917-.778.896-1.454 2.338-1.284 3.713 1.377.106 2.776-.7 3.709-1.52z"/>
                    </svg>
                    <span className="text-sm sm:text-base font-medium">Apple Pay</span>
                  </button>
                  
                  <button className="flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 border border-sand-200 rounded-xl hover:border-cocoa-300 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm sm:text-base font-medium">Google Pay</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <SectionPanel className="rounded-2xl" accentCorner="br">
                <div className="space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {[
                      "Smart collar with GPS & health sensors",
                      "Wireless charging dock",
                      "Mobile app with AI insights",
                      "1-year warranty & support",
                      "Free premium features for pre-orders"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-cocoa-500 font-bold">—</span>
                        <span className="text-xs sm:text-sm text-warmgray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionPanel>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { icon: "🔒", text: "Secure Payment" },
                  { icon: "🚚", text: "Free Shipping" },
                  { icon: "↩️", text: "30-Day Returns" },
                  { icon: "🛡️", text: "1-Year Warranty" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-2xl sm:text-3xl">{item.icon}</div>
                    <div className="text-xs sm:text-sm text-warmgray-600 font-medium">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Smart Collar <span className="text-cocoa-700">Specifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <SectionPanel className="rounded-2xl" accentCorner="tl">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg sm:text-xl text-charcoal-900">Technical Features</h3>
                <div className="space-y-4">
                  {[
                    { label: "GPS Accuracy", value: "±3 meters" },
                    { label: "Battery Life", value: "7-14 days" },
                    { label: "Water Rating", value: "IPX7 waterproof" },
                    { label: "Weight", value: "45g (1.6oz)" },
                    { label: "Connectivity", value: "4G LTE + WiFi" },
                    { label: "Sensors", value: "Temperature, accelerometer, gyroscope" }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-sand-200/50 last:border-b-0">
                      <span className="text-sm sm:text-base text-warmgray-600">{spec.label}</span>
                      <span className="text-sm sm:text-base font-medium text-charcoal-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionPanel>

            <SectionPanel className="rounded-2xl" accentCorner="br">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg sm:text-xl text-charcoal-900">Health & Safety</h3>
                <div className="space-y-4">
                  {[
                    "Vet-approved materials and design",
                    "No sharp edges or uncomfortable pressure points",
                    "Hypoallergenic silicone construction",
                    "Break-away safety clasp",
                    "Temperature monitoring for health alerts",
                    "FDA-compliant health tracking sensors"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-cocoa-500 font-bold mt-1">—</span>
                      <span className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionPanel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Pre-Order <span className="text-cocoa-700">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "When will my collar ship?",
                answer: "Pre-orders will ship in Q2 2025. You'll receive regular updates on production progress and an exact shipping date 30 days before delivery."
              },
              {
                question: "Can I cancel my pre-order?",
                answer: "Yes, you can cancel your pre-order anytime before shipping for a full refund. No questions asked."
              },
              {
                question: "What sizes are available?",
                answer: "The Whisker Collar features an adjustable design that fits neck sizes from 10-26 inches, suitable for most dogs from small breeds to large breeds."
              },
              {
                question: "Is there a subscription fee?",
                answer: "No monthly fees! The collar includes lifetime access to core features. Premium AI insights are free for the first year, then $4.99/month (optional)."
              }
            ].map((faq, index) => (
              <details key={index} className="group border-b border-sand-200 py-4 sm:py-5">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-semibold text-sm sm:text-base text-charcoal-900 pr-4">{faq.question}</h3>
                  <svg 
                    className="w-5 h-5 text-warmgray-600 transform transition-transform group-open:rotate-180 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
