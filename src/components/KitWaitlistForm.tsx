'use client';

import { useEffect } from "react";
import Script from 'next/script';

interface KitWaitlistFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

// This component integrates with Kit using their JS SDK
const KitWaitlistForm = ({
  className = "",
  title = "Join Our Waitlist",
  subtitle = "Early access gets 3 months premium free",
  buttonText = "Join The Waitlist"
}: KitWaitlistFormProps) => {
  
  // Initialize Kit form when the component mounts
  useEffect(() => {
    // If Kit script has loaded, we can initialize any additional customizations here
    const formKitId = "0f72656b6b";
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={`relative w-full max-w-md mx-auto md:mx-0 ${className}`}>
      {/* Decorative elements - matching the WaitlistForm styling */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-sage/20 rounded-full -z-10 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-terracotta/10 rounded-full -z-10 animate-pulse-slow"></div>
      
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl space-y-6 relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal">{title}</h3>
          <p className="text-md text-gray-500 mt-2">{subtitle}</p>
        </div>
        
        {/* Kit Form */}
        <Script 
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />
        
        <form 
          action="https://app.kit.com/forms/7916923/subscriptions" 
          className="seva-form formkit-form" 
          method="post" 
          data-sv-form="7916923" 
          data-uid="0f72656b6b" 
          data-format="inline" 
          data-version="5"
          data-options='{
            "settings":{
              "after_subscribe":{
                "action":"message",
                "success_message":"Success! Now check your email to confirm your on the list!",
                "redirect_url":""
              },
              "analytics":{
                "google":null,
                "fathom":null,
                "facebook":null,
                "segment":null,
                "pinterest":null,
                "sparkloop":null,
                "googletagmanager":null
              },
              "modal":{
                "trigger":"timer",
                "scroll_percentage":null,
                "timer":5,
                "devices":"all",
                "show_once_every":15
              },
              "powered_by":{
                "show":true,
                "url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
              },
              "recaptcha":{
                "enabled":false
              },
              "return_visitor":{
                "action":"show",
                "custom_content":""
              },
              "slide_in":{
                "display_in":"bottom_right",
                "trigger":"timer",
                "scroll_percentage":null,
                "timer":5,
                "devices":"all",
                "show_once_every":15
              },
              "sticky_bar":{
                "display_in":"top",
                "trigger":"timer",
                "scroll_percentage":null,
                "timer":5,
                "devices":"all",
                "show_once_every":15
              }
            },
            "version":"5"
          }'
        >
          <div data-style="clean">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-6">
              {/* Name field with Whisker styling */}
              <div className="formkit-field">
                <label htmlFor="fields-name" className="block text-sm font-medium text-charcoal mb-2">
                  Your Name
                </label>
                <input 
                  className="formkit-input email-capture" 
                  name="fields[name]" 
                  type="text"
                  id="fields-name"
                  placeholder="Your name"
                />
              </div>
              
              {/* Email field with Whisker styling */}
              <div className="formkit-field">
                <label htmlFor="email_address" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address <span className="text-terracotta">*</span>
                </label>
                <input 
                  className="formkit-input email-capture" 
                  name="email_address" 
                  aria-label="Email" 
                  placeholder="youremail@example.com" 
                  required 
                  type="email"
                  id="email_address"
                />
              </div>
              
              {/* Pet Type dropdown with Whisker styling */}
              <div className="formkit-field">
                <label htmlFor="tags-select" className="block text-sm font-medium text-charcoal mb-2">
                  Pet Type
                </label>
                <div data-group="dropdown" className="formkit-3060">
                  <select 
                    className="formkit-select email-capture" 
                    data-element="tags-select" 
                    name="tags[]"
                    id="tags-select"
                  >
                    <option value="">Select pet type</option>
                    <option value="7440990">Dog</option>
                    <option value="7440991">Cat</option>
                    <option value="7440992">Both</option>
                    <option value="7440994">N/A - Future Pet Parent</option>
                  </select>
                </div>
              </div>
              
              {/* Submit button with Whisker styling */}
              <button 
                data-element="submit" 
                className="formkit-submit formkit-submit w-full bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>{buttonText}</span>
              </button>
              
              {/* Security message */}
              <p className="text-xs text-charcoal/60 text-center mt-2 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1 inline text-sage" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
                Your information is secure. No spam, ever.
              </p>
            </div>
          </div>
        </form>
      </div>
      
      {/* Include the Kit script */}
      <Script
        async
        data-uid="0f72656b6b"
        src="https://whiskerai.kit.com/0f72656b6b/index.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default KitWaitlistForm; 