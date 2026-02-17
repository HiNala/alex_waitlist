"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { PawPrint, Smartphone, Cat } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E5E5] shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-3 max-w-7xl">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-10 h-10 sm:w-11 sm:h-11" />
          <span className="font-serif text-xl text-[#1A1A1A] font-bold hidden xs:block">Whisker</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-[15px] text-[#6B6B6B]">
          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-btn hover:bg-cocoa-50 hover:text-[#1A1A1A] transition-colors font-medium focus-ring"
            >
              Products
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-hover border border-[#E5E5E5] py-2 z-50">
                <Link
                  href="/products/dog-collar"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-cream-50 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <PawPrint className="w-5 h-5 text-cocoa-700 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-[#1A1A1A] text-sm">Smart Dog Collar</div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">GPS, biometrics &amp; AI insights</div>
                  </div>
                </Link>
                <Link
                  href="/products/cat-collar"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-cream-50 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <Cat className="w-5 h-5 text-cocoa-700 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-[#1A1A1A] text-sm">Cat Collar + Smart Bowl</div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">GPS, RFID &amp; portion tracking</div>
                  </div>
                </Link>
                <div className="border-t border-[#E5E5E5] my-1" />
                <Link
                  href="/app"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-cream-50 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <Smartphone className="w-5 h-5 text-cocoa-700 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="font-semibold text-[#1A1A1A] text-sm">Whisker App</div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">Your pet&apos;s health dashboard</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="px-3.5 py-2 rounded-btn hover:bg-cocoa-50 hover:text-[#1A1A1A] transition-colors font-medium focus-ring">Blog</Link>
          <Link href="/about" className="px-3.5 py-2 rounded-btn hover:bg-cocoa-50 hover:text-[#1A1A1A] transition-colors font-medium focus-ring">About</Link>
          <Link href="/support" className="px-3.5 py-2 rounded-btn hover:bg-cocoa-50 hover:text-[#1A1A1A] transition-colors font-medium focus-ring">Support</Link>
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/products/dog-collar"
            className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5"
          >
            Pre-Order — $100 Deposit
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors focus-ring rounded-btn"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-5 space-y-1 border-t border-[#E5E5E5] bg-white">
          <div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest px-3 pb-2">Products</div>
          <Link href="/products/dog-collar" className="flex items-center gap-3 px-3 py-3 rounded-btn hover:bg-cream-50 transition-colors text-[#1A1A1A] font-medium" onClick={closeMobile}>
            <PawPrint className="w-5 h-5 text-cocoa-700" strokeWidth={1.5} /> Smart Dog Collar
          </Link>
          <Link href="/products/cat-collar" className="flex items-center gap-3 px-3 py-3 rounded-btn hover:bg-cream-50 transition-colors text-[#1A1A1A] font-medium" onClick={closeMobile}>
            <Cat className="w-5 h-5 text-cocoa-700" strokeWidth={1.5} /> Cat Collar + Smart Bowl
          </Link>
          <Link href="/app" className="flex items-center gap-3 px-3 py-3 rounded-btn hover:bg-cream-50 transition-colors text-[#1A1A1A] font-medium" onClick={closeMobile}>
            <Smartphone className="w-5 h-5 text-cocoa-700" strokeWidth={1.5} /> Whisker App
          </Link>

          <div className="border-t border-[#E5E5E5] my-3" />
          <Link href="/blog" className="block px-3 py-3 rounded-btn hover:bg-cream-50 text-[#6B6B6B] font-medium transition-colors" onClick={closeMobile}>Blog</Link>
          <Link href="/about" className="block px-3 py-3 rounded-btn hover:bg-cream-50 text-[#6B6B6B] font-medium transition-colors" onClick={closeMobile}>About</Link>
          <Link href="/support" className="block px-3 py-3 rounded-btn hover:bg-cream-50 text-[#6B6B6B] font-medium transition-colors" onClick={closeMobile}>Support</Link>

          <div className="pt-3">
            <Link href="/products/dog-collar" className="block w-full btn-primary text-center text-sm" onClick={closeMobile}>
              Pre-Order — $100 Deposit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
