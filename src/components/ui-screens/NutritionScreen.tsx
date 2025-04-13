'use client';

import React, { useState } from 'react';

const NutritionScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('meal-plan');
  const [servingSize, setServingSize] = useState(2);

  // Sample meal plan data
  const mealPlan = {
    breakfast: { name: 'Premium Kibble + Egg', calories: 420, protein: 28, fat: 15, carbs: 35 },
    lunch: { name: 'Chicken & Rice', calories: 380, protein: 30, fat: 12, carbs: 32 },
    dinner: { name: 'Salmon & Sweet Potato', calories: 410, protein: 32, fat: 18, carbs: 24 }
  };

  // Sample nutritional needs data
  const nutritionalNeeds = {
    dailyCalories: 1250,
    protein: { min: 80, max: 100, current: 90 },
    fat: { min: 30, max: 50, current: 45 },
    carbs: { min: 60, max: 100, current: 91 },
    fiber: { min: 10, max: 20, current: 14 },
    water: { min: 600, max: 800, current: 720 }
  };

  // Handle serving size change
  const handleServingSizeChange = (amount: number) => {
    const newSize = servingSize + amount;
    if (newSize >= 1 && newSize <= 4) {
      setServingSize(newSize);
    }
  };

  return (
    <div className="device flex flex-col mx-auto my-4 cursor-pointer transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-terracotta-dark to-terracotta p-6 text-white">
        <div className="flex items-center mb-3">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Nutrition</h1>
        </div>
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Border Aussie" className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white" />
          <div>
            <h2 className="font-bold">Archer</h2>
            <p className="text-xs opacity-90">Border Aussie • 3 years old</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-cream overflow-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'meal-plan' ? 'text-terracotta-dark border-b-2 border-terracotta-dark' : 'text-gray-500'}`}
            onClick={() => setActiveTab('meal-plan')}
          >
            Meal Plan
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'nutrition' ? 'text-terracotta-dark border-b-2 border-terracotta-dark' : 'text-gray-500'}`}
            onClick={() => setActiveTab('nutrition')}
          >
            Nutrition Needs
          </button>
        </div>
        
        {/* Meal Plan Tab */}
        {activeTab === 'meal-plan' && (
          <div className="p-4">
            <div className="bg-white rounded-2xl p-4 shadow-elevation-2 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Today's Meals</h3>
                <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full">Customized</span>
              </div>
              
              {/* Daily Summary */}
              <div className="bg-cream-light rounded-lg p-3 mb-4">
                <div className="flex justify-between text-sm text-gray-800 mb-1">
                  <span>Daily Calories</span>
                  <span className="font-medium">{(mealPlan.breakfast.calories + mealPlan.lunch.calories + mealPlan.dinner.calories)} kcal</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-terracotta-light rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Target: {nutritionalNeeds.dailyCalories} kcal</span>
                  <span className="text-terracotta-dark">85%</span>
                </div>
              </div>
              
              {/* Breakfast */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-terracotta-light/20 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Breakfast</h4>
                    <p className="text-xs text-gray-500">7:00 AM</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-medium text-gray-800">{mealPlan.breakfast.name}</p>
                    <p className="text-xs text-gray-500">{mealPlan.breakfast.calories} kcal</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs pl-10">
                  <span className="text-gray-500">Protein: {mealPlan.breakfast.protein}g</span>
                  <span className="text-gray-500">Fat: {mealPlan.breakfast.fat}g</span>
                  <span className="text-gray-500">Carbs: {mealPlan.breakfast.carbs}g</span>
                </div>
              </div>
              
              {/* Lunch */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-terracotta-light/20 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Lunch</h4>
                    <p className="text-xs text-gray-500">12:30 PM</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-medium text-gray-800">{mealPlan.lunch.name}</p>
                    <p className="text-xs text-gray-500">{mealPlan.lunch.calories} kcal</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs pl-10">
                  <span className="text-gray-500">Protein: {mealPlan.lunch.protein}g</span>
                  <span className="text-gray-500">Fat: {mealPlan.lunch.fat}g</span>
                  <span className="text-gray-500">Carbs: {mealPlan.lunch.carbs}g</span>
                </div>
              </div>
              
              {/* Dinner */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-terracotta-light/20 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Dinner</h4>
                    <p className="text-xs text-gray-500">6:00 PM</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-medium text-gray-800">{mealPlan.dinner.name}</p>
                    <p className="text-xs text-gray-500">{mealPlan.dinner.calories} kcal</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs pl-10">
                  <span className="text-gray-500">Protein: {mealPlan.dinner.protein}g</span>
                  <span className="text-gray-500">Fat: {mealPlan.dinner.fat}g</span>
                  <span className="text-gray-500">Carbs: {mealPlan.dinner.carbs}g</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 shadow-elevation-2 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Serving Adjustments</h3>
                <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full">Based on Activity</span>
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  className="w-8 h-8 rounded-full bg-terracotta-light/10 text-terracotta-dark flex items-center justify-center"
                  onClick={() => handleServingSizeChange(-1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <div className="text-center">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-800 mr-1">{servingSize}</span>
                    <span className="text-sm text-gray-600">cups</span>
                  </div>
                  <p className="text-xs text-gray-500">Recommended serving size</p>
                </div>
                <button 
                  className="w-8 h-8 rounded-full bg-terracotta-light/10 text-terracotta-dark flex items-center justify-center"
                  onClick={() => handleServingSizeChange(1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-3 bg-cream-light rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-2">Current recommendation based on:</p>
                <div className="flex items-center text-xs mb-1">
                  <span className="bg-terracotta-light/20 text-terracotta-dark px-2 py-0.5 rounded-full mr-2">Active Day</span>
                  <span className="text-gray-500">High exercise level (+20%)</span>
                </div>
                <div className="flex items-center text-xs">
                  <span className="bg-sage-light/20 text-sage-dark px-2 py-0.5 rounded-full mr-2">Weight Goal</span>
                  <span className="text-gray-500">Maintain current weight</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Nutrition Needs Tab */}
        {activeTab === 'nutrition' && (
          <div className="p-4">
            <div className="bg-white rounded-2xl p-4 shadow-elevation-2 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Nutritional Requirements</h3>
                <span className="text-xs bg-terracotta-light/10 text-terracotta-dark px-2 py-0.5 rounded-full">Border Aussie Specific</span>
              </div>
              
              {/* Calories */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Daily Calories</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.dailyCalories} kcal</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-terracotta rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Based on age, weight, and activity level</p>
              </div>
              
              {/* Protein */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Protein</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.protein.current}g / {nutritionalNeeds.protein.max}g</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-sage rounded-full" style={{ width: `${(nutritionalNeeds.protein.current / nutritionalNeeds.protein.max) * 100}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Essential for muscle maintenance and growth</p>
              </div>
              
              {/* Fat */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Fat</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.fat.current}g / {nutritionalNeeds.fat.max}g</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-sage rounded-full" style={{ width: `${(nutritionalNeeds.fat.current / nutritionalNeeds.fat.max) * 100}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Provides energy and supports skin health</p>
              </div>
              
              {/* Carbs */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Carbohydrates</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.carbs.current}g / {nutritionalNeeds.carbs.max}g</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-sage rounded-full" style={{ width: `${(nutritionalNeeds.carbs.current / nutritionalNeeds.carbs.max) * 100}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Primary energy source for active dogs</p>
              </div>
              
              {/* Fiber */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Fiber</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.fiber.current}g / {nutritionalNeeds.fiber.max}g</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-sage rounded-full" style={{ width: `${(nutritionalNeeds.fiber.current / nutritionalNeeds.fiber.max) * 100}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Supports digestive health</p>
              </div>
              
              {/* Water */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Water</span>
                  <span className="text-sm font-medium text-gray-800">{nutritionalNeeds.water.current}ml / {nutritionalNeeds.water.max}ml</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-400 rounded-full" style={{ width: `${(nutritionalNeeds.water.current / nutritionalNeeds.water.max) * 100}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Essential for hydration and all bodily functions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 shadow-elevation-2 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-800">Special Considerations</h3>
                <span className="text-xs bg-sage-light/10 text-sage-dark px-2 py-0.5 rounded-full">Border Aussie Breed</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-sage-light/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Joint Health</h4>
                    <p className="text-xs text-gray-600">Border Aussies benefit from foods with glucosamine and chondroitin for joint support, especially as they age.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-sage-light/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Energy Requirements</h4>
                    <p className="text-xs text-gray-600">Higher protein content (25-30%) recommended for this highly active breed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-sage-light/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">Potential Food Sensitivities</h4>
                    <p className="text-xs text-gray-600">Some Border Aussies may have sensitivities to wheat, corn, or chicken. Watch for signs of allergies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-xs mt-1 text-gray-500">Messages</span>
        </button>
        
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-terracotta-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-xs mt-1 font-medium text-terracotta-dark">Nutrition</span>
        </button>
      </div>
    </div>
  );
};

export default NutritionScreen; 