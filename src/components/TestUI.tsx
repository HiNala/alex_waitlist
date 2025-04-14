'use client';

import React, { useState } from 'react';
import './TestUI.css';
import HomeScreen from './ui-screens/HomeScreen';
import HealthChatScreen from './ui-screens/HealthChatScreen';
import HealthTimelineScreen from './ui-screens/HealthTimelineScreen';
import NutritionScreen from './ui-screens/NutritionScreen';

const TestUI: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const screens = [
    { component: <HomeScreen />, name: "Home Dashboard" },
    { component: <HealthChatScreen />, name: "Health AI Chat" },
    { component: <HealthTimelineScreen />, name: "Health Timeline" },
    { component: <NutritionScreen />, name: "Nutrition Guide" }
  ];
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="w-full py-6">
      {/* Screen name indicator - visible only on mobile */}
      <div className="mb-4 text-center block md:hidden">
        <h3 className="text-lg font-semibold text-terracotta">{screens[activeIndex].name}</h3>
        <div className="flex justify-center space-x-2 mt-2">
          {screens.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-terracotta w-4' 
                  : 'bg-terracotta/30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to screen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop view - all screens */}
      <div className="hidden md:grid md:grid-cols-2 justify-items-center gap-12 xl:gap-16 mx-auto max-w-5xl px-4">
        {screens.map((screen, index) => (
          <div key={index} className="relative px-4 mb-10">
            {screen.component}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-white px-3 py-1 rounded-full shadow-md">
              {screen.name}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile view - swipeable carousel */}
      <div className="relative md:hidden">
        <div className="flex justify-center">
          {screens[activeIndex].component}
        </div>
        
        {/* Mobile navigation buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md z-20"
          aria-label="Previous screen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md z-20"
          aria-label="Next screen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestUI; 