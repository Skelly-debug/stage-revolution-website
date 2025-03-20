"use client";

import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

const ContactClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-neutral-900 text-neutral-100">
      <Navbar />
      <Header />
      
      {/* Page Header */}
      <div className="bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have a question or want to book us for your event? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="order-2 md:order-1">
            <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 h-full">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-neutral-700 pb-3">Contact Information</h2>
              
              <div className="space-y-8 text-neutral-300">
                {/* Email Section */}
                <div className="flex items-start">
                  <div className="bg-neutral-700 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2">Email Us</h3>
                    <a href="mailto:thebandemail2023@gmail.com" className="text-green-500 hover:text-green-400 transition-colors">
                      thebandemail2023@gmail.com
                    </a>
                    {/* <p className="text-sm text-gray-400 mt-2">We typically respond within 24-48 hours</p> */}
                  </div>
                </div>
                
                {/* Location Section */}
                <div className="flex items-start">
                  <div className="bg-neutral-700 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2">Based In</h3>
                    <p>Athens, Greece</p>
                    <p className="text-sm text-gray-400 mt-2">Available for shows throughout Greece</p>
                  </div>
                </div>
                
                {/* Social Media Section */}
                <div className="pt-6">
                  <h3 className="font-semibold text-white text-xl mb-6">Connect With Us</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/stagerevolution.official/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 transition-colors py-3 px-6 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61551758282760"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 transition-colors py-3 px-6 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.youtube.com/@StageRevolutionOfficial"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                      className="flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 transition-colors py-3 px-6 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Booking Information */}
              <div className="mt-12 pt-6 border-t border-neutral-700">
                <div className="bg-neutral-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-white text-xl mb-3">Looking to book us?</h3>
                  <p className="text-gray-300 mb-4">For booking inquiries, please include event details, date, venue, and budget in your message.</p>
                  {/* <Link href="/press-kit" className="inline-flex items-center text-green-500 hover:text-green-400">
                    Download our press kit
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="order-1 md:order-2">
            <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-neutral-700 pb-3">Send Us a Message</h2>
              <ContactForm />
              <p className="text-sm text-gray-400 mt-6 text-center">We'll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Do you travel for shows?</h3>
                <p className="text-gray-300">Yes, we're available to play throughout Greece and are open to international opportunities as well.</p>
              </div>
              
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">What type of events do you play?</h3>
                <p className="text-gray-300">We perform at venues, festivals, private events, and special occasions that align with our musical style.</p>
              </div>
              
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">How far in advance should I book?</h3>
                <p className="text-gray-300">We recommend booking at least 2-3 months in advance to ensure availability, especially for weekend dates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactClient;