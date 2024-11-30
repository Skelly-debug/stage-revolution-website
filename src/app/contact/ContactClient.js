"use client";

import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-neutral-100">
      <Navbar />
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold font-sans mt-10">Contact</h1>
      </div>
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 place-items-center">
          {/* Contact Information */}
          <div className="bg-neutral-800 rounded-2xl p-12 w-full max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>

            <div className="space-y-6 text-neutral-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p>thebandemail2023@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Address</h3>
                <p>Athens, Greece</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/stagerevolution.official/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-neutral-400 hover:text-white duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551758282760"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="text-neutral-400 hover:text-white duration-300"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/@StageRevolutionOfficial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="text-neutral-400 hover:text-white duration-300"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactClient;
