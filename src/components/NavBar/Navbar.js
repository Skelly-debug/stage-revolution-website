"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-[5rem] select-none">
          <div className="flex items-center">
            <Link href="/">
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
            <Link
              href="/"
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="hover:text-gray-400 transition duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-400 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-400 focus:outline-none transition duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-neutral-900 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 rounded-md hover:bg-neutral-900 transition duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-neutral-900 transition duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md hover:bg-neutral-900 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
