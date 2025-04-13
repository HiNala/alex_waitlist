'use client';

import React, { useState } from 'react';

const HomeScreen: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [healthScore, setHealthScore] = useState(85);
  
  const handleNotificationClick = () => {
    setNotificationCount(0);
    alert('Notifications cleared!');
  };

  const handleHealthScoreClick = () => {
    setHealthScore(prev => Math.min(prev + 5, 100));
  };

  return (
    <div className="device flex flex-col mx-auto my-4 cursor-pointer transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-terracotta-dark to-terracotta-light p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Whisker</h1>
          <button 
            className="relative w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            onClick={handleNotificationClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
        </div>
        <p className="text-sm opacity-90">Your intelligent pet wellness companion</p>
      </div>
      
      <div className="p-6 flex-1 overflow-auto">
        {/* Pet Profile Card */}
        <div className="bg-cream-light rounded-3xl p-5 mb-6 shadow-elevation-3 border border-cream-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-30 rounded-full blur-xl -mr-10 -mt-10"></div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <div className="wellness-ring w-20 h-20 rounded-full flex items-center justify-center cursor-pointer" onClick={handleHealthScoreClick}>
                <div className="bg-white w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Border Aussie" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-sage-light text-sage-dark text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-elevation-1">
                {healthScore}%
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
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1 hover:shadow-elevation-2 cursor-pointer transition-all">
              <p className="text-xs text-gray-500">Weight</p>
              <p className="font-bold text-terracotta-dark">42 lbs</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1 hover:shadow-elevation-2 cursor-pointer transition-all">
              <p className="text-xs text-gray-500">Activity</p>
              <p className="font-bold text-terracotta-dark">High</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 text-center shadow-elevation-1 hover:shadow-elevation-2 cursor-pointer transition-all">
              <p className="text-xs text-gray-500">Sleep</p>
              <p className="font-bold text-terracotta-dark">9.2 hrs</p>
              <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                <div className="h-1 bg-sage-default rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <h3 className="text-sm font-medium text-gray-700 mb-3 ml-1">Services</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* AI Chat Service */}
          <div className="service-card bg-white rounded-2xl p-4 shadow-elevation-2 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-terracotta-light/20 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-medium text-terracotta-dark">Health Chat</h4>
            <p className="text-xs text-gray-600 mt-1">Get breed-specific advice from our AI vet</p>
            <div className="mt-2 flex">
              <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full">New tips</span>
            </div>
          </div>
          
          {/* Health Timeline */}
          <div className="service-card bg-white rounded-2xl p-4 shadow-elevation-2 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-sage-light/30 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-medium text-sage-dark">Health Timeline</h4>
            <p className="text-xs text-gray-600 mt-1">Track vaccinations, visits & medications</p>
            <div className="mt-2 flex">
              <span className="text-xs bg-sage-light/20 text-sage-dark px-2 py-0.5 rounded-full">2 upcoming</span>
            </div>
          </div>
          
          {/* Nutrition Guide */}
          <div className="service-card bg-white rounded-2xl p-4 shadow-elevation-2 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-terracotta-light/20 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-medium text-terracotta-dark">Nutrition</h4>
            <p className="text-xs text-gray-600 mt-1">Custom meal plans for Archer's needs</p>
            <div className="mt-2 flex">
              <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full">Meal plan ready</span>
            </div>
          </div>
          
          {/* Photobook */}
          <div className="service-card bg-white rounded-2xl p-4 shadow-elevation-2 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-sage-light/30 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-medium text-sage-dark">Photobook</h4>
            <p className="text-xs text-gray-600 mt-1">Capture and organize memories</p>
            <div className="mt-2 flex">
              <span className="text-xs bg-sage-light/20 text-sage-dark px-2 py-0.5 rounded-full">12 new photos</span>
            </div>
          </div>
        </div>
        
        {/* Recent Activity Section */}
        <h3 className="text-sm font-medium text-gray-700 mb-3 ml-1">Recent Activity</h3>
        <div className="bg-white rounded-2xl p-4 shadow-elevation-2 border border-gray-100 mb-16">
          <div className="flex items-start mb-3">
            <div className="w-10 h-10 rounded-full bg-sage-light/30 flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Vaccination Reminder</h4>
              <p className="text-xs text-gray-600">Rabies booster due in 2 weeks</p>
              <div className="mt-1">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full cursor-pointer hover:bg-blue-100">Schedule</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 ml-auto">2h ago</span>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-terracotta-light/20 flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">New Diet Recommendation</h4>
              <p className="text-xs text-gray-600">Based on Archer's activity level</p>
              <div className="mt-1">
                <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full cursor-pointer hover:bg-terracotta-light/20">View Details</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 ml-auto">1d ago</span>
          </div>
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
          <button className="w-14 h-14 rounded-full bg-gradient-to-r from-terracotta-dark to-terracotta-light text-white flex items-center justify-center shadow-elevation-3 border-4 border-white hover:shadow-elevation-4 transition-shadow">
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

export default HomeScreen; 