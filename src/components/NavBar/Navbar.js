"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleToggleMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-white">
        <div className="flex justify-between items-center h-[5rem] select-none">
          {/* Logo with hover and active effects */}
          <div className="flex items-center">
            <Link
              href="/"
              className="transition duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Stage Revolution Home"
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition duration-300 group ${
                  pathname === link.href ? "text-white" : "text-gray-300"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300
                    ${pathname === link.href ? "w-full" : "group-hover:w-full"}`}
                ></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            {/* <Link
              href="/book-now"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-medium"
            >
              Book Now
            </Link> */}
          </div>

          {/* Mobile Menu Button with Animated Toggler */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
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
            id="mobile-menu"
            className={`md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-sm z-20
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
                  className={`block px-3 py-2 rounded-md 
                  hover:bg-neutral-800 
                  transition duration-300 
                  opacity-0 
                  animate-menu-item-enter
                  ${pathname === link.href ? "bg-blue-900/50" : ""}`}
                  onClick={handleToggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              {/* <Link
                href="/book-now"
                style={{
                  animationDelay: `${navLinks.length * 100}ms`,
                }}
                className="block px-3 py-2 mt-4 text-center bg-blue-600 hover:bg-blue-700 
                rounded-md transition duration-300 opacity-0 animate-menu-item-enter"
                onClick={handleToggleMenu}
              >
                Book Now
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;