"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StripeCheckout from "@/components/StripeCheckout";
import { cn } from "@/lib/utils";

export default function CollarFunnelPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState("charcoal");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const colorOptions = [
    { id: "charcoal", name: "Midnight Black", color: "bg-charcoal-900", emoji: "🖤" },
    { id: "cocoa", name: "Cocoa Brown", color: "bg-cocoa-700", emoji: "🤎" },
    { id: "sand", name: "Desert Sand", color: "bg-sand-200", emoji: "🤍" }
  ];

  const sizeOptions = [
    { id: "small", name: "Small", range: "10-14 inches", emoji: "🐕" },
    { id: "medium", name: "Medium", range: "14-20 inches", emoji: "🐶" },
    { id: "large", name: "Large", range: "20-26 inches", emoji: "🐕‍🦺" }
  ];

  const steps = [
    { title: "Tell us about your pet", subtitle: "Let's personalize your experience" },
    { title: "Choose your collar style", subtitle: "Pick the perfect look" },
    { title: "Select the right size", subtitle: "Comfort is everything" },
    { title: "Complete your pre-order", subtitle: "You're almost there!" }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const checkoutData = {
    productName: "Whisker Smart Collar",
    color: colorOptions.find(c => c.id === selectedColor)?.name || "Charcoal Black",
    size: sizeOptions.find(s => s.id === selectedSize)?.name || "Medium",
    quantity: 1,
    price: 199,
    customerInfo: {
      petName,
      petBreed
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-cream-50 to-sky-50 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-yellow-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -right-32 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-sky-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cocoa-200/25 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header spacing */}
      <div className="pt-20"></div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <nav className="flex items-center gap-2 text-sm text-warmgray-600 mb-4">
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Home</Link>
          <span>→</span>
          <span>Collar Funnel</span>
        </nav>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-sand-200/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium text-cocoa-700">Step {currentStep} of 4</span>
            <span className="text-xs sm:text-sm text-warmgray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-sand-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cocoa-500 to-gold-400 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Step Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-warmgray-600 leading-relaxed">
              {steps[currentStep - 1].subtitle}
            </p>
          </div>

          {/* Step Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 max-w-3xl mx-auto">
            
            {/* Step 1: Pet Information */}
            {currentStep === 1 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🐕</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    Tell us about your furry friend!
                  </h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-charcoal-900 mb-2">
                      What's your pet's name? 🏷️
                    </label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-sand-200 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-500/20 transition-colors text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-charcoal-900 mb-2">
                      What breed are they? 🐾
                    </label>
                    <input
                      type="text"
                      value={petBreed}
                      onChange={(e) => setPetBreed(e.target.value)}
                      placeholder="e.g., Golden Retriever, Mixed breed"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-sand-200 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-500/20 transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Color Selection */}
            {currentStep === 2 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🎨</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    Pick {petName ? `${petName}'s` : "your pet's"} style!
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "relative p-6 sm:p-8 rounded-2xl border-2 transition-all hover:scale-105 text-center",
                        selectedColor === color.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-lg" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white"
                      )}
                    >
                      <div className="text-4xl sm:text-5xl mb-3">{color.emoji}</div>
                      <div className={cn("w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3", color.color)}></div>
                      <h3 className="font-semibold text-sm sm:text-base text-charcoal-900">{color.name}</h3>
                      {selectedColor === color.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cocoa-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Size Selection */}
            {currentStep === 3 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">📏</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    Perfect fit for {petName || "your pet"}!
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={cn(
                        "relative p-6 sm:p-8 rounded-2xl border-2 transition-all hover:scale-105 text-center",
                        selectedSize === size.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-lg" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white"
                      )}
                    >
                      <div className="text-4xl sm:text-5xl mb-3">{size.emoji}</div>
                      <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 mb-2">{size.name}</h3>
                      <p className="text-xs sm:text-sm text-warmgray-600">{size.range}</p>
                      {selectedSize === size.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cocoa-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-charcoal-900 mb-2">Sizing Tip</h4>
                      <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">
                        Measure your pet's neck circumference with a soft tape measure. The collar should fit snugly but allow 2 fingers to fit underneath.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Checkout */}
            {currentStep === 4 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🎉</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    Perfect! Let's get {petName || "your pet"} their collar
                  </h2>
                </div>
                
                {/* Order Summary */}
                <div className="bg-gradient-to-br from-yellow-50 to-cream-50 rounded-2xl p-4 sm:p-6 border border-yellow-200/50">
                  <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-warmgray-600">Pet Name</span>
                      <span className="font-medium text-sm sm:text-base text-charcoal-900">{petName || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-warmgray-600">Breed</span>
                      <span className="font-medium text-sm sm:text-base text-charcoal-900">{petBreed || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-warmgray-600">Color</span>
                      <span className="font-medium text-sm sm:text-base text-charcoal-900">
                        {colorOptions.find(c => c.id === selectedColor)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-warmgray-600">Size</span>
                      <span className="font-medium text-sm sm:text-base text-charcoal-900">
                        {sizeOptions.find(s => s.id === selectedSize)?.name}
                      </span>
                    </div>
                    <div className="border-t border-yellow-300/50 pt-3 flex justify-between items-center">
                      <span className="font-semibold text-base sm:text-lg text-charcoal-900">Total</span>
                      <span className="font-bold text-xl sm:text-2xl text-cocoa-700">$199</span>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-3 sm:space-y-4">
                  <StripeCheckout
                    data={checkoutData}
                    className="w-full bg-gradient-to-r from-cocoa-700 to-cocoa-500 hover:from-cocoa-500 hover:to-cocoa-300 text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform"
                  >
                    Complete Pre-Order • $199 🎁
                  </StripeCheckout>
                  
                  {/* 1-Click Payment Options */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-sand-200 rounded-xl hover:border-cocoa-300 hover:shadow-md transition-all">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
                        <path d="M15.53 3.83c.893-1.09 1.477-2.602 1.314-4.11-1.274.052-2.82.847-3.739 1.917-.778.896-1.454 2.338-1.284 3.713 1.377.106 2.776-.7 3.709-1.52z"/>
                      </svg>
                      <span className="text-sm sm:text-base font-medium">Apple Pay</span>
                    </button>
                    
                    <button className="flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 bg-white border border-sand-200 rounded-xl hover:border-cocoa-300 hover:shadow-md transition-all">
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
              </div>
            )}

            {/* Step 2: Color Selection */}
            {currentStep === 2 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🎨</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    Which color speaks to {petName || "your pet"}?
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "relative p-6 sm:p-8 rounded-2xl border-2 transition-all hover:scale-105 text-center",
                        selectedColor === color.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-lg" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white"
                      )}
                    >
                      <div className="text-4xl sm:text-5xl mb-3">{color.emoji}</div>
                      <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 shadow-inner", color.color)}></div>
                      <h3 className="font-semibold text-sm sm:text-base text-charcoal-900">{color.name}</h3>
                      {selectedColor === color.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cocoa-500 rounded-full flex items-center justify-center animate-pulse">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Size Selection */}
            {currentStep === 3 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">📐</div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 mb-4">
                    What size is {petName || "your pet"}?
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={cn(
                        "relative p-6 sm:p-8 rounded-2xl border-2 transition-all hover:scale-105 text-center",
                        selectedSize === size.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-lg" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white"
                      )}
                    >
                      <div className="text-4xl sm:text-5xl mb-3">{size.emoji}</div>
                      <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 mb-2">{size.name}</h3>
                      <p className="text-xs sm:text-sm text-warmgray-600">{size.range}</p>
                      {selectedSize === size.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cocoa-500 rounded-full flex items-center justify-center animate-pulse">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📏</div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-charcoal-900 mb-2">How to Measure</h4>
                      <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">
                        Use a soft measuring tape around the base of your pet's neck where a collar would normally sit. Add 2 inches for comfort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 sm:pt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={cn(
                  "px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all",
                  currentStep === 1 
                    ? "text-warmgray-400 cursor-not-allowed" 
                    : "text-cocoa-700 hover:text-cocoa-500 hover:bg-cocoa-50"
                )}
              >
                ← Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={(currentStep === 1 && !petName) || (currentStep === 2 && !selectedColor) || (currentStep === 3 && !selectedSize)}
                  className={cn(
                    "px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all",
                    (currentStep === 1 && !petName) || (currentStep === 2 && !selectedColor) || (currentStep === 3 && !selectedSize)
                      ? "bg-warmgray-300 text-warmgray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-cocoa-700 to-gold-500 hover:from-cocoa-500 hover:to-gold-300 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  )}
                >
                  Continue →
                </button>
              ) : (
                <div className="text-xs sm:text-sm text-warmgray-600">
                  Ready to complete your order above! 🎉
                </div>
              )}
            </div>
          </div>

          {/* Fun Facts */}
          {currentStep < 4 && (
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 max-w-md mx-auto">
                <div className="text-3xl sm:text-4xl mb-2">💝</div>
                <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">
                  Over 10,000 pet parents have already joined our waitlist! You're in great company.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
