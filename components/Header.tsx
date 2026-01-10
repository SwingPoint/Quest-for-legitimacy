'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
              The Quest for Legitimacy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/rise-experience" className="text-gray-700 hover:text-gray-900 font-medium">
              The RISE Experience
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center">
                About
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  The Team
                </Link>
                <Link href="/about/book" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  The Book
                </Link>
              </div>
            </div>
            <Link href="/events" className="text-gray-700 hover:text-gray-900 font-medium">
              Our Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
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
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/rise-experience" className="block py-2 text-gray-700 hover:text-gray-900">
              The RISE Experience
            </Link>
            <Link href="/about/team" className="block py-2 text-gray-700 hover:text-gray-900 pl-4">
              The Team
            </Link>
            <Link href="/about/book" className="block py-2 text-gray-700 hover:text-gray-900 pl-4">
              The Book
            </Link>
            <Link href="/events" className="block py-2 text-gray-700 hover:text-gray-900">
              Our Events
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

