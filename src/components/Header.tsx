"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-cream-50/70 border-b border-sand-200/50">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl text-charcoal-900">
          <span className="inline-block w-8 h-8 rounded-lg bg-cocoa-700"></span>
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