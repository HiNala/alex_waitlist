'use client';

import React, { useState } from 'react';

const HealthTimelineScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const filters = ['All Events', 'Vaccinations', 'Checkups', 'Medications', 'Diet Changes'];

  return (
    <div className="device flex flex-col mx-auto my-4 cursor-pointer transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-sage-dark to-sage p-6 text-white">
        <div className="flex items-center mb-3">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Health Timeline</h1>
        </div>
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Border Aussie" className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white" />
          <div>
            <h2 className="font-bold">Archer</h2>
            <p className="text-xs opacity-90">Border Aussie • 3 years old</p>
          </div>
        </div>
      </div>
      
      <div className="bg-cream flex-1 overflow-auto p-4">
        {/* Filter Chips */}
        <div className="flex overflow-x-auto pb-2 -mx-1 mb-4">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`flex-shrink-0 ${filter === activeFilter ? 'bg-white text-gray-800 shadow-sm border border-gray-200 font-medium' : 'bg-white/50 text-gray-600'} text-xs px-3 py-1.5 rounded-full mx-1 whitespace-nowrap transition-colors`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="relative pl-8 before:content-[''] before:absolute before:top-8 before:bottom-0 before:left-3 before:w-0.5 before:bg-gray-200">
          {/* Current Month Label */}
          <div className="mb-3 -ml-8">
            <h3 className="text-sm font-bold text-gray-800">June 2023</h3>
          </div>
          
          {/* Timeline Event - Vaccination */}
          <div className="relative mb-6">
            <div className="absolute -left-5 top-0 z-10 w-4 h-4 bg-terracotta-dark rounded-full border-2 border-white"></div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-terracotta-light/20 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Rabies Vaccination</h4>
                  <p className="text-xs text-gray-500">June 15, 2023 • Dr. Martinez</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Complete</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">3-year rabies vaccination administered. No adverse reactions observed.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-terracotta-dark font-medium">Next due: June 2026</span>
                <button className="text-xs text-sage-dark font-medium hover:underline">View Details</button>
              </div>
            </div>
          </div>
          
          {/* Timeline Event - Checkup */}
          <div className="relative mb-6">
            <div className="absolute -left-5 top-0 z-10 w-4 h-4 bg-sage rounded-full border-2 border-white"></div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Annual Checkup</h4>
                  <p className="text-xs text-gray-500">June 15, 2023 • Dr. Martinez</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Weight</p>
                  <p className="text-sm font-medium text-gray-800">45.5 lbs</p>
                  <p className="text-xs text-green-600">+0.5 lbs</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Heart Rate</p>
                  <p className="text-sm font-medium text-gray-800">72 bpm</p>
                  <p className="text-xs text-gray-500">Normal</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Temperature</p>
                  <p className="text-sm font-medium text-gray-800">101.2°F</p>
                  <p className="text-xs text-gray-500">Normal</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">Overall excellent health. Recommended dental cleaning in the next 3-6 months.</p>
              <button className="text-xs text-sage-dark font-medium hover:underline">View Full Report</button>
            </div>
          </div>
          
          {/* Previous Month Label */}
          <div className="mb-3 -ml-8">
            <h3 className="text-sm font-bold text-gray-800">May 2023</h3>
          </div>
          
          {/* Timeline Event - Medication */}
          <div className="relative mb-6">
            <div className="absolute -left-5 top-0 z-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Flea & Tick Prevention</h4>
                  <p className="text-xs text-gray-500">May 10, 2023</p>
                </div>
                <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Recurring</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Monthly NexGard chewable administered. Effective against fleas and ticks for 30 days.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-terracotta-dark font-medium">Next dose: July 10, 2023</span>
                <button className="text-xs text-sage-dark font-medium hover:underline">Set Reminder</button>
              </div>
            </div>
          </div>

          {/* Add more timeline events as needed */}
        </div>
      </div>
      
      {/* Add Health Event Button */}
      <div className="absolute bottom-20 right-6">
        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-sage-dark to-sage text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center">
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Home</span>
        </button>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Calendar</span>
        </button>
        
        <div className="relative -mt-5 opacity-0">
          <button className="w-14 h-14 rounded-full bg-gradient-to-r from-terracotta-dark to-terracotta-light text-white flex items-center justify-center shadow-elevation-3 border-4 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Messages</span>
        </button>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs mt-1 text-sage-dark font-medium">Health</span>
        </button>
      </div>
    </div>
  );
};

export default HealthTimelineScreen; 