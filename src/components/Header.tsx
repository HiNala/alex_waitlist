"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sand-200/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 font-serif text-2xl text-charcoal-900">
          <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-14 h-14 md:w-16 md:h-16" />
          Whisker
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-warmgray-600">
          <Link href="#features" className="hover:text-cocoa-500 transition-colors">Features</Link>
          <Link href="#device" className="hover:text-cocoa-500 transition-colors">Device</Link>
          <Link href="#preview" className="hover:text-cocoa-500 transition-colors">App Preview</Link>
          <Link href="#faq" className="hover:text-cocoa-500 transition-colors">FAQ</Link>
          <Link href="/support" className="hover:text-cocoa-500 transition-colors">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#waitlist" className="px-4 py-2 rounded-pill bg-cocoa-700 text-white hover:shadow-xl transition">
            Join Collar Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
} 