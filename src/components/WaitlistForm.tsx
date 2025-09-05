"use client";
import { SITE } from "@/lib/site";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!ok) return alert("Please accept the privacy notice.");
    
    // Replace with your integration; we store consent timestamp locally here.
    console.log("hardware_waitlist_signup", { email, product: "whisker_collar", consentAt: new Date().toISOString() });
    setSubmitted(true);
    setEmail("");
    
    setTimeout(() => setSubmitted(false), 3000);
  }
  
  if (submitted) {
    return (
      <div className="bg-green-400/20 border border-green-400/30 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-charcoal-700 mb-2">You're on the Whisker Collar pilot list!</h3>
        <p className="text-warmgray-600 text-sm">We'll email you as soon as pilot spots open and hardware details are ready.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
      <div className="mb-4 sm:mb-6">
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal-900 mb-2 sm:mb-3 text-center sm:text-left">Join the Smart Collar Waitlist</h3>
        <p className="text-warmgray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">Be first to access the Whisker Collar pilot and early hardware updates.</p>
      </div>
      
      <form onSubmit={submit} className="space-y-4 sm:space-y-5">
        <div className="flex flex-col gap-3 sm:gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 sm:px-6 py-3 sm:py-4 rounded-pill border border-sand-200 bg-white shadow-sm w-full text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-cocoa-500 focus:border-cocoa-500 transition-colors placeholder:text-warmgray-400"
          />
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-pill bg-cocoa-700 text-white hover:bg-cocoa-500 hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base md:text-lg">
            Join Collar Waitlist
          </button>
        </div>
        
        <label className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-warmgray-600 leading-relaxed">
          <input 
            type="checkbox" 
            checked={ok} 
            onChange={(e) => setOk(e.target.checked)} 
            className="mt-1 rounded border-sand-200 text-cocoa-700 focus:ring-cocoa-400 flex-shrink-0"
          />
          <span className="text-left">
            By signing up, you agree to our{" "}
            <a className="text-cocoa-600 underline hover:text-cocoa-700 font-medium" href="/privacy">Privacy Policy</a>{" "}
            and to receive updates about the Whisker Collar pilot program and hardware.
          </span>
        </label>
        
        <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3">
          <div className="flex items-center text-xs sm:text-sm text-warmgray-600">
            <span className="text-cocoa-500 font-bold mr-2">—</span>
            <span>Free premium features for early adopters</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-warmgray-600">
            <span className="text-cocoa-500 font-bold mr-2">—</span>
            <span>Priority access to pilot program</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-warmgray-600">
            <span className="text-cocoa-500 font-bold mr-2">—</span>
            <span>No spam, unsubscribe anytime</span>
          </div>
        </div>
      </form>
    </div>
  );
}