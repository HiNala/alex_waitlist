'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-20">
          <Image 
            src="/logo/icon.svg" 
            alt="Whisker Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-terracotta tracking-tight">Whisker</span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-20 text-terracotta focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="#features" className="text-charcoal hover:text-terracotta transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-charcoal hover:text-terracotta transition-colors">
            How It Works
          </Link>
          <Link href="#app-preview" className="text-charcoal hover:text-terracotta transition-colors">
            App Preview
          </Link>
          <Link href="#waitlist-form" className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-full transition-colors shadow-md">
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-cream/95 z-10 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
            <Link 
              href="#features" 
              className="text-charcoal hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-charcoal hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#app-preview" 
              className="text-charcoal hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              App Preview
            </Link>
            <Link 
              href="#waitlist-form" 
              className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full transition-colors shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 