'use client';

import React, { useState } from 'react';
import './TestUI.css';

const TestUIFrame: React.FC = () => {
  // State for interactivity
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(prev => !prev);
  };

  const handleInteraction = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('Interactivity triggered for this frame!');
  };

  return (
    <div 
      className="device flex flex-col mx-auto my-4 cursor-pointer transition-transform hover:scale-105"
      onClick={() => console.log("Device frame clicked")}
    >
      <div className={`bg-gradient-to-r from-terracotta-dark to-terracotta-light p-6 text-white ${isFavorite ? 'ring-4 ring-green-500' : ''}`}>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Whisker</h1>
          <button onClick={toggleFavorite}>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
        <p className="text-sm opacity-90">Your intelligent pet wellness companion</p>
      </div>
      
      <div className="p-6 flex-1 overflow-auto">
        {/* Pet Profile Card */}
        <div 
          className="bg-cream-light rounded-3xl p-5 mb-6 shadow-elevation-3 border border-cream-dark relative overflow-hidden"
          onClick={() => alert("Pet Profile Clicked!")}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-30 rounded-full blur-xl -mr-10 -mt-10"></div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <div className="wellness-ring w-20 h-20 rounded-full flex items-center justify-center">
                <div className="bg-white w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Border Aussie" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-sage-light text-sage-dark text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-elevation-1">
                85%
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="font-bold text-xl text-terracotta-dark">Archer</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terracotta-light ml-1 animate-wag" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">Border Aussie • 3 years old</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium">Healthy</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">Active</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1">
              <p className="text-xs text-gray-500">Weight</p>
              <p className="font-bold text-terracotta-dark">42 lbs</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1">
              <p className="text-xs text-gray-500">Activity</p>
              <p className="font-bold text-terracotta-dark">High</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1">
              <p className="text-xs text-gray-500">Sleep</p>
              <p className="font-bold text-terracotta-dark">9.2 hrs</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          
          <button 
            className="mt-4 bg-terracotta text-white py-2 px-4 rounded-lg transition-colors hover:bg-terracotta-dark"
            onClick={handleInteraction}
          >
            Interact
          </button>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center">
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nav-icon active" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1 text-terracotta-dark font-medium">Home</span>
        </button>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nav-icon text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Calendar</span>
        </button>
        
        <div className="relative -mt-5">
          <button className="w-14 h-14 rounded-full bg-gradient-to-r from-terracotta-dark to-terracotta-light text-white flex items-center justify-center shadow-elevation-3 border-4 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nav-icon text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Messages</span>
        </button>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nav-icon text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Health</span>
        </button>
      </div>
    </div>
  );
};

export default TestUIFrame; 