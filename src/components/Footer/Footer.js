"use client";

import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

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
              href="https://www.facebook.com/profile.php?id=61551758282760"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" />
            </a>
            <a
              href="https://www.youtube.com/@StageRevolutionOfficial"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-7 w-7" />
            </a>
            <a
              href="https://open.spotify.com/artist/1H94S9nkMHiYVTUeNksOns"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="Spotify"
            >
              <FontAwesomeIcon icon={faSpotify} className="h-7 w-7" />
            </a>
            <a
              href="https://soundcloud.com/theband-713156108"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="SoundCloud"
            >
              <FontAwesomeIcon icon={faSoundcloud} className="h-7 w-7" />
            </a>
            <a
              href="https://music.apple.com/us/artist/stage-revolution/1780852863"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors duration-300"
              aria-label="Apple Music"
            >
              <FontAwesomeIcon icon={faMusic} className="h-7 w-7" />
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
