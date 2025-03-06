"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-10 px-4 py-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <svg
              className="h-8 w-8 text-green-500"
              viewBox="0 0 109 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M74.5 14C74.5 14 72.5 9.5 69.5 9C66.5 8.5 65.5 9 63.5 9C61.5 9 59 10 59 10C59 10 57.5 7 54.5 6.5C51.5 6 48.5 8 47 9C45.5 10 36 20.5 36 20.5L48.5 23.5C48.5 23.5 48 25 48 26.5C48 28 48.5 29 49 29.5C49.5 30 52 30 53.5 29.5C55 29 67.5 25.5 69 25C70.5 24.5 72 23.5 72 21.5C72 19.5 71 18.5 71 18.5L74.5 14Z"
                fill="currentColor"
              />
              <path
                d="M63.5 32.5C63.5 32.5 62.5 32.5 62 33C61.5 33.5 49.5 37.5 48.5 38C47.5 38.5 46.5 39.5 47 41C47.5 42.5 48 43 49 43C50 43 62 39 63 38.5C64 38 65 37.5 65 36C65 34.5 64.5 33 63.5 32.5Z"
                fill="currentColor"
              />
              <path d="M95.5 40.5L88 39L82 101.5L106.5 107L95.5 40.5Z" fill="currentColor" />
              <path d="M39 114.5L36 42L24.5 39L14 118L39 114.5Z" fill="currentColor" />
              <path d="M79 96.5L73.5 42.5L36 42L39 114.5L79 96.5Z" fill="currentColor" />
            </svg>
            <span className="ml-2 text-xl font-bold text-white">shopify</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300">
              Solutions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  E-commerce
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Point of Sale
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Buy Button
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="text-white hover:text-gray-300">
            Pricing
          </a>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300">
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Guides
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Help Center
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="text-white hover:text-gray-300">
            Enterprise
          </a>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300">
              What's new
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Updates
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Features
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Login and CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Log in
          </a>
          <a href="#" className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200">
            Start free trial
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300">
              Solutions
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Resources
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Enterprise
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              What's new
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Log in
            </a>
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-full font-medium text-center hover:bg-gray-200"
            >
              Start free trial
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;

