"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-white text-lg mb-2">You&apos;re on the list!</h3>
        <p className="text-white/70 text-sm">We&apos;ll email you as soon as spots open and hardware is ready to ship.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-hover border border-[#E5E5E5]">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
          Join the Whisker Waitlist
        </h3>
        <p className="text-[#6B6B6B] text-base leading-relaxed">
          Be first in line for the pre-sale — limited to 500 units per product.
        </p>
      </div>

      <form
        action="https://app.kit.com/forms/7916923/subscriptions"
        method="post"
        data-sv-form="7916923"
        data-uid="0f72656b6b"
        data-format="inline"
        data-version="5"
        className="seva-form formkit-form space-y-4"
        onSubmit={() => {
          setTimeout(() => setSubmitted(true), 100);
        }}
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-4">
            <div className="formkit-field">
              <input
                className="formkit-input w-full px-4 py-3.5 rounded-[10px] text-base text-[#1A1A1A] placeholder:text-[#9CA3AF] transition-all duration-150"
                style={{ border: "1.5px solid #E5E5E5" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#8B5E3C"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,94,60,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E5E5"; e.currentTarget.style.boxShadow = "none"; }}
                name="email_address"
                aria-label="Email"
                placeholder="Enter your email address"
                required
                type="email"
              />
            </div>

            <div className="formkit-field">
              <select
                className="w-full px-4 py-3.5 rounded-[10px] text-base text-[#6B6B6B] transition-all duration-150 appearance-none bg-white"
                style={{ border: "1.5px solid #E5E5E5" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#8B5E3C"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,94,60,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#E5E5E5"; e.currentTarget.style.boxShadow = "none"; }}
                data-element="tags-select"
                name="tags[]"
              >
                <option value="">I&apos;m interested in...</option>
                <option value="7440990">Dog Collar</option>
                <option value="7440991">Cat Collar + Smart Bowl</option>
                <option value="7440992">Both Products</option>
                <option value="7440994">Just Curious</option>
              </select>
            </div>

            <button
              data-element="submit"
              className="formkit-submit btn-primary w-full text-base"
            >
              <div className="formkit-spinner"><div></div><div></div><div></div></div>
              <span>Join the Waitlist</span>
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-2 pt-4">
        {["Priority access to the pre-sale", "Limited to 500 units per product", "No spam, unsubscribe anytime"].map((item, i) => (
          <div key={i} className="flex items-center text-sm text-[#6B6B6B]">
            <span className="text-cocoa-700 font-bold mr-2.5">&mdash;</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
