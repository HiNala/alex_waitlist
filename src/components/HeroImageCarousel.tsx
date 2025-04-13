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
  
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square md:aspect-auto md:h-[500px]">
      {/* Decorative frame */}
      <div className="absolute inset-0 bg-terracotta/10 rounded-2xl -rotate-6 transform"></div>
      
      {/* Main image container */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl z-10 rotate-3 transform transition-all duration-500 hover:rotate-0 shadow-lg">
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
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {dogImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/80'
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