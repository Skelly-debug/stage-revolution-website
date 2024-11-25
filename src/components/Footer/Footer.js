"use client";

import React from "react";
import { Instagram, Facebook, Youtube, BrandTiktok } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/stagerevolution.official/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href="https://www.facebook.com/stagerevolution/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="https://www.youtube.com/stagerevolution"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-7 w-7" />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stage Revolution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
