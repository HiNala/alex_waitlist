'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Array of dog images - easily changeable
const dogImages = [
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

const HeroImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-advance images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dogImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  // Previous and next controls
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? dogImages.length - 1 : prevIndex - 1
    );
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % dogImages.length
    );
  };
  
  return (
    <div className="relative w-full max-w-full mx-auto aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-[500px] my-6 md:my-0">
      {/* Decorative frame */}
      <div className="absolute inset-0 bg-terracotta/10 rounded-2xl -rotate-6 transform"></div>
      
      {/* Main image container */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl z-10 rotate-3 transform transition-all duration-500 hover:rotate-0 shadow-xl">
        {/* Images */}
        {dogImages.map((src, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Cute dog ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Left/Right Navigation Arrows - Only visible on hover or touch */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-20 sm:block"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-20 sm:block"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {dogImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-terracotta w-6' 
                : 'bg-terracotta/40 hover:bg-terracotta/70'
            }`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageCarousel; 