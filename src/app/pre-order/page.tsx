"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionPanel from "@/components/SectionPanel";
import StripeCheckout from "@/components/StripeCheckout";
import { cn } from "@/lib/utils";
import PaymentButtons from "@/components/PaymentButtons";

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
    { id: "charcoal", name: "Charcoal Black", color: "bg-charcoal-900", price: 200 },
    { id: "cocoa", name: "Cocoa Brown", color: "bg-cocoa-700", price: 200 },
    { id: "sand", name: "Desert Sand", color: "bg-sand-200", price: 200 }
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
    <div className="h-screen bg-white overflow-hidden flex flex-col">
      {/* Header spacing */}
      <div className="pt-16 flex-shrink-0"></div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <nav className="flex items-center gap-2 text-sm text-warmgray-600 mb-2">
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Home</Link>
          <span>→</span>
          <span>Pre-Order</span>
        </nav>
      </div>

      {/* Purchase Section (fits viewport, no page scroll) */}
      <section className="flex-1 py-4 sm:py-6 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl h-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center h-full">
            
            {/* Product Images */}
            <div className="space-y-3 sm:space-y-4 self-center">
              {/* Main Image */}
              <div className="relative w-full max-w-[480px] h-[42vh] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-cream-50">
                <Image 
                  src={productImages[selectedImage]} 
                  alt="Whisker Smart Collar" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start overflow-x-auto pb-1">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all flex-shrink-0",
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
            <div className="space-y-5 sm:space-y-6 overflow-hidden">
              <div className="text-center lg:text-left">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-2 sm:mb-3">
                  Whisker Smart <span className="text-cocoa-700">Collar</span>
                </h1>
                <p className="text-sm sm:text-base text-warmgray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  The breakthrough companion device that combines GPS tracking, health monitoring, and AI insights for complete pet care.
                </p>
              </div>

              {/* Price */}
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-charcoal-900">
                  ${selectedColorOption.price}
                </div>
                <div className="text-sm text-warmgray-600 mt-1">
                  Pre-order price • Ships Q2 2025
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 text-center lg:text-left">
                  Choose Color
                </h3>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 p-3 sm:p-3 rounded-xl border-2 transition-all",
                        selectedColor === color.id 
                          ? "border-cocoa-500 bg-cocoa-50" 
                          : "border-sand-200 hover:border-cocoa-300"
                      )}
                    >
                      <div className={cn("w-8 h-8 sm:w-9 sm:h-9 rounded-full", color.color)}></div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal-900">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 text-center lg:text-left">
                  Quantity
                </h3>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-sand-200 hover:border-cocoa-500 flex items-center justify-center transition-colors"
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
                    className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-sand-200 hover:border-cocoa-500 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Payment Options */}
              <SectionPanel className="rounded-2xl" accentCorner="tr">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 text-center">
                    Choose Payment Method
                  </h3>
                  
                  {/* Primary Stripe Checkout */}
                  <StripeCheckout
                    data={checkoutData}
                    className="w-full bg-cocoa-700 hover:bg-cocoa-500 text-white font-semibold py-4 px-6 rounded-2xl text-base transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                  >
                    Pre-Order with Card • ${totalPrice}
                  </StripeCheckout>
                  
                  {/* Express Payment Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-sand-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs text-warmgray-500 bg-cream-50 px-3">
                      or pay instantly with
                    </div>
                  </div>
                  
                  {/* Express Payment Options */}
                  <PaymentButtons />
                  
                  <div className="text-center text-xs text-warmgray-600 leading-relaxed">
                    Secure payment powered by Stripe. Express payment options appear automatically on supported devices.
                  </div>
                </div>
              </SectionPanel>
              
            </div>
          </div>
        </div>
      </section>
      {/* Below sections intentionally removed to ensure no-scroll checkout view */}
    </div>
  );
}
