"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-200/50">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-2 sm:py-3">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 font-serif text-lg sm:text-xl md:text-2xl text-charcoal-900">
          <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20" />
          <span className="hidden xs:block">Whisker</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-warmgray-600">
          <Link href="/products/dog-collar" className="hover:text-cocoa-500 transition-colors">Dog</Link>
          <Link href="/products/cat-collar" className="hover:text-cocoa-500 transition-colors">Cat</Link>
          <Link href="/app" className="hover:text-cocoa-500 transition-colors">App</Link>
          <Link href="/blog" className="hover:text-cocoa-500 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-cocoa-500 transition-colors">About</Link>
        </nav>
        
        {/* Desktop CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/pre-order" className="hidden sm:inline-flex btn-primary text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6">
            Pre-Order Now
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-warmgray-600 hover:text-cocoa-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-sand-200/50">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <Link href="/products/dog-collar" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Dog</Link>
            <Link href="/products/cat-collar" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Cat</Link>
            <Link href="/app" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>App</Link>
            <Link href="/blog" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/about" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/support" className="block py-3 text-warmgray-600 hover:text-cocoa-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            <div className="pt-3">
              <Link href="/pre-order" className="block w-full btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Pre-Order Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
