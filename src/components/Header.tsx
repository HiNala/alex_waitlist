'use client';

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-filter backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <svg className="w-8 h-8 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C6.32,14.15 9.38,15.31 11.24,16.2C11.24,16.2 11.59,16.37 12,16.42C12.41,16.37 12.77,16.2 12.77,16.2C14.62,15.31 17.68,14.15 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8Z"/>
          </svg>
          <span className="text-xl font-semibold text-terracotta tracking-tight">WhiskerAI</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="#features" className="hover:text-terracotta transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-terracotta transition-colors">
            How It Works
          </Link>
          <Link href="#prizes" className="hover:text-terracotta transition-colors">
            Prizes
          </Link>
          <Link href="#app-preview" className="hover:text-terracotta transition-colors">
            App Preview
          </Link>
        </nav>
        <button className="btn-primary hidden md:block">
          <span>Join Waitlist</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 