"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function FunnelSuccessPage() {
  useEffect(() => {
    const durationMs = 2500;
    const end = Date.now() + durationMs;
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#b35c36", "#c7734d", "#E8C547", "#EDD066"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#b35c36", "#c7734d", "#E8C547", "#EDD066"],
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-cream-50 via-white to-sand-100">
      <div className="text-center bg-white/80 backdrop-blur-sm border border-sand-200/60 rounded-3xl px-8 py-12 shadow-xl max-w-lg mx-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">Thank you for your pre-order!</h1>
        <p className="text-warmgray-600 mb-2 text-lg">Your $100 deposit has been received.</p>
        <p className="text-warmgray-600 mb-8 text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;re getting everything ready. You&apos;ll receive a confirmation email shortly with your order details and next steps.
        </p>
        <div className="space-y-3">
          <Link href="/" className="btn-primary inline-block px-8 py-3">
            Back to Home
          </Link>
          <p className="text-xs text-warmgray-500">
            The remaining balance of $250 will be charged when your product is ready to ship.
          </p>
        </div>
      </div>
    </div>
  );
}
