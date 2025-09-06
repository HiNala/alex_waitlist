"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StripeCheckout from "@/components/StripeCheckout";
import { cn } from "@/lib/utils";
import PaymentButtons from "@/components/PaymentButtons";

export default function CollarFunnelPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState("charcoal");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const colorOptions = [
    { id: "charcoal", name: "Midnight Black", color: "bg-charcoal-900" },
    { id: "cocoa", name: "Cocoa Brown", color: "bg-cocoa-700" },
    { id: "sand", name: "Desert Sand", color: "bg-sand-200" }
  ];

  const sizeOptions = [
    { id: "small", name: "Small", range: "10-14 inches" },
    { id: "medium", name: "Medium", range: "14-20 inches" },
    { id: "large", name: "Large", range: "20-26 inches" }
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
    price: 200,
    customerInfo: {
      petName,
      petBreed
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-yellow-50 via-cream-50 to-sky-50 relative overflow-hidden flex flex-col">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-yellow-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -right-32 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-sky-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cocoa-200/25 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header spacer - minimal height */}
      <div className="h-20 flex-shrink-0"></div>

      {/* Progress Bar - compact */}
      <div className="flex-shrink-0 py-2 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-cocoa-700">Step {currentStep} of 4</span>
            <span className="text-sm text-warmgray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-white/60 border border-white/80 rounded-full h-3 shadow-sm">
            <div 
              className="bg-gradient-to-r from-cocoa-500 to-gold-400 h-full rounded-full transition-all duration-500 ease-out shadow-inner"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content - fills remaining viewport with tight spacing */}
      <div className="flex-1 relative z-10 flex flex-col py-2 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl h-full flex flex-col">
          
          {/* Step Header - compact */}
          <div className="text-center mb-4 flex-shrink-0">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-2">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-sm sm:text-base text-warmgray-600">
              {steps[currentStep - 1].subtitle}
            </p>
          </div>

          {/* Step Content - wide format with reduced padding */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 max-w-6xl mx-auto flex-1 flex flex-col justify-center min-h-0">
            
            {/* Step 1: Pet Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-charcoal-900 mb-3">
                      Pet's name
                    </label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Enter your pet's name"
                      className="w-full px-5 py-3 rounded-2xl border border-sand-200 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-500/20 transition-colors text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium text-charcoal-900 mb-3">
                      Breed
                    </label>
                    <input
                      type="text"
                      value={petBreed}
                      onChange={(e) => setPetBreed(e.target.value)}
                      placeholder="e.g., Golden Retriever, Mixed breed"
                      className="w-full px-5 py-3 rounded-2xl border border-sand-200 focus:border-cocoa-500 focus:ring-2 focus:ring-cocoa-500/20 transition-colors text-base"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                    Tell us about your pet
                  </h2>
                  <p className="text-base text-warmgray-600 leading-relaxed">
                    We'll personalize the experience just for them. This helps us create the perfect collar and app experience tailored to your pet's unique needs.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Color Selection */}
            {currentStep === 2 && (
              <div className="text-center flex flex-col justify-center">
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">
                  Choose your collar style
                </h2>
                <p className="text-base text-warmgray-600 mb-8">
                  Select a color that matches {petName ? `${petName}'s` : "your pet's"} personality.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "relative p-8 rounded-3xl border-2 transition-all hover:scale-105 text-center",
                        selectedColor === color.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-xl" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white shadow-lg"
                      )}
                    >
                      <div className={cn("w-20 h-20 rounded-full mx-auto mb-4 shadow-inner", color.color)}></div>
                      <h3 className="font-semibold text-base text-charcoal-900">{color.name}</h3>
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
              <div className="flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3">
                    Select the right size
                  </h2>
                  <p className="text-base text-warmgray-600">
                    Comfort is key for {petName ? `${petName}'s` : "your pet's"} everyday wear.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={cn(
                        "relative p-8 rounded-3xl border-2 transition-all hover:scale-105 text-center",
                        selectedSize === size.id 
                          ? "border-cocoa-500 bg-cocoa-50 shadow-xl" 
                          : "border-sand-200 hover:border-cocoa-300 bg-white shadow-lg"
                      )}
                    >
                      <h3 className="font-semibold text-lg text-charcoal-900 mb-2">{size.name}</h3>
                      <p className="text-sm text-warmgray-600">{size.range}</p>
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
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 max-w-2xl mx-auto">
                  <h4 className="font-semibold text-base text-charcoal-900 mb-2">Sizing Guide</h4>
                  <p className="text-sm text-warmgray-600 leading-relaxed">
                    Measure your pet's neck circumference with a soft tape measure where a collar would normally sit. Add 2 inches for comfort.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Checkout */}
            {currentStep === 4 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Order Summary */}
                <div className="bg-gradient-to-br from-yellow-50 to-cream-50 rounded-3xl p-6 border border-yellow-200/50 shadow-inner">
                  <h3 className="font-semibold text-xl text-charcoal-900 mb-6">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-warmgray-600">Pet Name</span>
                      <span className="font-medium text-base text-charcoal-900">{petName || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-warmgray-600">Breed</span>
                      <span className="font-medium text-base text-charcoal-900">{petBreed || "Not specified"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-warmgray-600">Color</span>
                      <span className="font-medium text-base text-charcoal-900">
                        {colorOptions.find(c => c.id === selectedColor)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-warmgray-600">Size</span>
                      <span className="font-medium text-base text-charcoal-900">
                        {sizeOptions.find(s => s.id === selectedSize)?.name}
                      </span>
                    </div>
                    <div className="border-t border-yellow-300/50 pt-3 flex justify-between items-center">
                      <span className="font-semibold text-lg text-charcoal-900">Total</span>
                      <span className="font-bold text-2xl text-cocoa-700">$200</span>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-4">
                  <div className="text-center lg:text-left">
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3">
                      Complete your pre-order
                    </h2>
                    <p className="text-base text-warmgray-600 mb-6">
                      Perfect! Let's get {petName || "your pet"} their new smart collar.
                    </p>
                  </div>
                  
                  <StripeCheckout
                    data={checkoutData}
                    className="w-full bg-gradient-to-r from-cocoa-700 to-cocoa-500 hover:from-cocoa-500 hover:to-cocoa-300 text-white font-semibold py-4 px-6 rounded-2xl text-base transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform"
                  >
                    Complete Pre-Order • $200
                  </StripeCheckout>
                  
                  <PaymentButtons label="Pay faster with" />
                  <div className="text-center text-xs text-warmgray-600">
                    Apple Pay / Google Pay appear automatically if supported by your device and browser.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 flex-shrink-0">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={cn(
                  "px-4 py-2 rounded-xl font-medium text-sm transition-all",
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
                    "px-6 py-3 rounded-xl font-semibold text-sm transition-all",
                    (currentStep === 1 && !petName) || (currentStep === 2 && !selectedColor) || (currentStep === 3 && !selectedSize)
                      ? "bg-warmgray-300 text-warmgray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-cocoa-700 to-gold-500 hover:from-cocoa-500 hover:to-gold-300 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  )}
                >
                  Continue →
                </button>
              ) : (
                <div className="text-xs text-warmgray-600">
                  Ready to complete your order above
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}