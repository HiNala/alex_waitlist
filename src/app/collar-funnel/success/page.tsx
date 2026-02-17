"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function FunnelSuccessPage() {
  useEffect(() => {
    const durationMs = 2000;
    const end = Date.now() + durationMs;
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#a16207", "#7c3e1d", "#facc15", "#fde68a"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#a16207", "#7c3e1d", "#facc15", "#fde68a"],
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-yellow-50 via-cream-50 to-sky-50">
      <div className="text-center bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl px-8 py-10 shadow-xl">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-3">Thank you for your pre-order!</h1>
        <p className="text-warmgray-600 mb-6">Your payment was successful. We&apos;re getting everything ready.</p>
        <p className="text-sm text-warmgray-500">You&apos;ll receive a confirmation email shortly.</p>
        <div className="mt-6">
          <Link href="/" className="underline text-cocoa-700 hover:text-cocoa-500">Return to homepage</Link>
        </div>
      </div>
    </div>
  );
}
