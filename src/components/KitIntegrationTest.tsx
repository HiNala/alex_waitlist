'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const KitIntegrationTest = () => {
  useEffect(() => {
    console.log('Kit Integration Test Component Mounted');
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Kit Integration Test</h2>
        <p className="mb-6">This component demonstrates the various ways Kit integration can be implemented:</p>
        
        <div className="space-y-6">
          {/* Method 1: Direct Script Embed */}
          <div className="border p-6 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Method 1: Direct Script Embed</h3>
            <p className="text-sm mb-4">Using script tag with data-uid</p>
            
            <div>
              <Script 
                async 
                data-uid="0f72656b6b" 
                src="https://whiskerai.kit.com/0f72656b6b/index.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
          
          {/* Method 2: Direct Form Embed */}
          <div className="border p-6 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Method 2: Direct Form Embed</h3>
            <p className="text-sm mb-4">Using Kit's form markup directly</p>
            
            <form 
              action="https://app.kit.com/forms/7916923/subscriptions" 
              className="seva-form formkit-form" 
              method="post" 
              data-sv-form="7916923" 
              data-uid="0f72656b6b" 
              data-format="inline" 
              data-version="5"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-4">
                  <div className="formkit-field">
                    <label htmlFor="email_address_test" className="block text-sm font-medium mb-1">
                      Email Address 
                    </label>
                    <input 
                      className="formkit-input w-full p-2 border rounded" 
                      name="email_address" 
                      id="email_address_test"
                      aria-label="Email" 
                      placeholder="you@example.com" 
                      required 
                      type="email"
                    />
                  </div>
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Method 3: Customized Styled Form */}
          <div className="border p-6 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Method 3: Custom Styled Form</h3>
            <p className="text-sm mb-4">Using Kit's form with custom Whisker styling</p>
            
            <form 
              action="https://app.kit.com/forms/7916923/subscriptions" 
              className="seva-form formkit-form" 
              method="post" 
              data-sv-form="7916923" 
              data-uid="0f72656b6b" 
              data-format="inline" 
              data-version="5"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-4">
                  <div className="formkit-field">
                    <label htmlFor="email_custom" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      className="formkit-input w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors shadow-sm" 
                      name="email_address" 
                      id="email_custom"
                      aria-label="Email" 
                      placeholder="youremail@example.com" 
                      required 
                      type="email"
                    />
                  </div>
                  
                  <div className="formkit-field">
                    <label htmlFor="pet_type" className="block text-sm font-medium text-charcoal mb-2">
                      Pet Type
                    </label>
                    <select 
                      className="formkit-select w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors shadow-sm appearance-none bg-white" 
                      data-element="tags-select" 
                      name="tags[]"
                      id="pet_type"
                    >
                      <option value="">Select pet type</option>
                      <option value="7440990">Dog</option>
                      <option value="7440991">Cat</option>
                      <option value="7440992">Both</option>
                      <option value="7440994">N/A - Future Pet Parent</option>
                    </select>
                  </div>
                  
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Join The Waitlist</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitIntegrationTest; 