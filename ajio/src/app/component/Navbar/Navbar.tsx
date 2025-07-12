'use client'

import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'MEN', href: '#' },
    { name: 'WOMEN', href: '#' },
    { name: 'KIDS', href: '#' },
    { name: 'BEAUTY', href: '#' },
    // { name: 'HOME & KITCHEN', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-24 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl h-[100%] flex items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-[100%] justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wider">
              AJIO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-between items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 hover:font-bold px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Search, Auth, Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden sm:block relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search AJIO"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Auth Links */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Sign In
              </a>
              <span className="text-gray-400">/</span>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Join AJIO
              </a>
            </div>

            {/* Customer Care */}
            <div className="hidden lg:block">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
                Customer Care
              </a>
            </div>

            {/* Visit AJIOLUXE */}
            <div className="hidden lg:block">
              <a
                href="#"
                className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Visit AJIOLUXE
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 relative">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search AJIO"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Auth Links */}
              <div className="px-3 py-2 space-y-1">
                <a href="#" className="text-gray-700 hover:text-gray-900 block text-base font-medium">
                  Sign In / Join AJIO
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block text-base font-medium">
                  Customer Care
                </a>
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 inline-block mt-2"
                >
                  Visit AJIOLUXE
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;