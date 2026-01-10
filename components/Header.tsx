'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              The Quest for Legitimacy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-gray-50">
              Home
            </Link>
            <Link href="/rise-experience" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-gray-50">
              The RISE Experience
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium inline-flex items-center transition-colors rounded-lg hover:bg-gray-50">
                About
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/about/team" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors first:rounded-t-lg">
                  The Team
                </Link>
                <Link href="/about/book" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  The Book
                </Link>
                <Link href="/about/thoughts" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors last:rounded-b-lg">
                  Our Thoughts
                </Link>
              </div>
            </div>
            <Link href="/events" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-gray-50">
              Our Events
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-gray-50">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gray-100">
            <Link href="/" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 transition-colors">
              Home
            </Link>
            <Link href="/rise-experience" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 transition-colors">
              The RISE Experience
            </Link>
            <Link href="/about/team" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 pl-8 transition-colors">
              The Team
            </Link>
            <Link href="/about/book" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 pl-8 transition-colors">
              The Book
            </Link>
            <Link href="/about/thoughts" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 pl-8 transition-colors">
              Our Thoughts
            </Link>
            <Link href="/events" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 transition-colors">
              Our Events
            </Link>
            <Link href="/contact" className="block py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg px-4 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

