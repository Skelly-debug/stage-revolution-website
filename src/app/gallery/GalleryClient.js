"use client";

import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import GalleryGrid from "@/components/GalleryGrid/GalleryGrid";
import Footer from "@/components/Footer/Footer";

function GalleryClient() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />
      <Header />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold font-sans mb-4 mt-10">Gallery</h1>
      </div>
      <GalleryGrid />
      <Footer />
    </div>
  );
}

export default GalleryClient;
