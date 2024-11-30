"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleToggleMenu = () => {
    if (!isAnimating) {
      if (isOpen) {
        setIsVisible(false);
        setIsAnimating(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsAnimating(false);
        }, 300);
      } else {
        setIsOpen(true);
        setIsAnimating(true);
        setTimeout(() => {
          setIsVisible(true);
          setIsAnimating(false);
        }, 50);
      }
    }
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-[5rem] select-none">
          {/* Logo with hover and active effects */}
          <div className="flex items-center">
            <Link
              href="/"
              className="transition duration-300 transform hover:scale-110 active:scale-95"
            >
              <Image
                src="/images/SR-LOGO.webp"
                alt="Stage Revolution"
                width={48}
                height={48}
                className="h-12 w-auto border border-none rounded-full"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition duration-500 transform 
                hover:scale-100 hover:text-gray-400 
                active:scale-95 active:text-gray-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with Animated Toggler */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className={`text-white hover:text-gray-400 focus:outline-none 
              transition duration-300 transform 
              ${isOpen ? "rotate-180" : "rotate-0"} 
              hover:scale-110 active:scale-90`}
            >
              {isOpen ? (
                <X size={24} className="animate-rotate-in" />
              ) : (
                <Menu size={24} className="animate-rotate-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Precise Enter/Exit Animations */}
        {isOpen && (
          <div
            className={`md:hidden absolute left-0 right-0 bg-black z-20
            ${isVisible ? "animate-dropdown-enter" : "animate-dropdown-exit"}
            origin-top overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  className="block px-3 py-2 rounded-md 
                  hover:bg-neutral-900 
                  transition duration-300 
                  opacity-0 
                  animate-menu-item-enter"
                  onClick={handleToggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
