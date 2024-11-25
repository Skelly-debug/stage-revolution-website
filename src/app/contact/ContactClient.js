import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import Footer from "@/components/Footer/Footer";

function ContactClient() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />
      <Header />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold font-sans mb-4 mt-10">Contact</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ContactClient;
