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
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">Join the Smart Collar Waitlist</h3>
        <p className="text-warmgray-600">Be first to access the Whisker Collar pilot and early hardware updates.</p>
      </div>
      
      <form onSubmit={submit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-pill border border-sand-200 bg-white shadow-sm w-full text-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors"
          />
          <button className="px-8 py-4 rounded-pill bg-cocoa-700 text-white hover:bg-cocoa-500 hover:shadow-xl transition-all duration-200 font-semibold whitespace-nowrap">
            Join Collar Waitlist
          </button>
        </div>
        
        <label className="flex items-start gap-3 text-sm text-warmgray-600">
          <input 
            type="checkbox" 
            checked={ok} 
            onChange={(e) => setOk(e.target.checked)} 
            className="mt-1 rounded border-sand-200 text-cocoa-700 focus:ring-sky-400"
          />
          <span>
            By signing up, you agree to our{" "}
            <a className="text-cocoa-500 underline hover:text-cocoa-700" href="/privacy">Privacy Policy</a>{" "}
            and to receive updates about the Whisker Collar pilot program and hardware.
          </span>
        </label>
        
        <div className="flex items-center text-sm text-warmgray-600 pt-2">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Free premium features for early adopters • No spam, ever</span>
        </div>
      </form>
    </div>
  );
}