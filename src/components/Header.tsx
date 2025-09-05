"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sand-200/50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 md:gap-3 font-serif text-xl md:text-2xl text-charcoal-900">
          <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-14 h-14 md:w-20 md:h-20" />
          <span className="hidden sm:block">Whisker</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-warmgray-600">
          <Link href="#features" className="hover:text-cocoa-500 transition-colors">Features</Link>
          <Link href="#device" className="hover:text-cocoa-500 transition-colors">Device</Link>
          <Link href="#preview" className="hover:text-cocoa-500 transition-colors">App Preview</Link>
          <Link href="#faq" className="hover:text-cocoa-500 transition-colors">FAQ</Link>
          <Link href="/support" className="hover:text-cocoa-500 transition-colors">Support</Link>
        </nav>
        
        {/* Desktop CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link href="#waitlist" className="hidden sm:inline-flex btn-primary text-sm md:text-base">
            <span className="hidden md:inline">Join Collar Waitlist</span>
            <span className="md:hidden">Join Waitlist</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-warmgray-600 hover:text-cocoa-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-sand-200/50">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="#features" className="block py-2 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#device" className="block py-2 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Device</Link>
            <Link href="#preview" className="block py-2 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>App Preview</Link>
            <Link href="#faq" className="block py-2 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/support" className="block py-2 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            <Link href="#waitlist" className="block w-full mt-4 btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
              Join Collar Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 