import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import LiveCards from "@/components/LiveCards/LiveCards";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-neutral-600">
      <Navbar />
      <Header />
      
      {/* Hero CTA Section */}
      <div className="bg-gradient-to-b from-black to-neutral-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">New Single Out Now!</h2>
              <p className="text-gray-300 mb-4">Stream our latest release "Έχει Σιωπή" everywhere</p>
            </div>
            <div>
              <Link href="https://open.spotify.com/track/77pUSd7tnGELnBipkVNGxw?go=1&sp_cid=81345daac0f5d0b51af6e3916643cae6&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=e759502870ec4fb0" className="inline-block bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-full">
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-neutral-900 text-white font-sans py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Music & Videos */}
            <div className="lg:col-span-7">
              {/* Latest Release Section */}
              <div id="listen" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 border-b border-neutral-700 pb-2">Latest Music</h2>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/77pUSd7tnGELnBipkVNGxw?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                  <a href="https://open.spotify.com/track/77pUSd7tnGELnBipkVNGxw?go=1&sp_cid=81345daac0f5d0b51af6e3916643cae6&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=fba0ab77f2804410" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors py-2 px-4 rounded-full text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.36 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </a>
                  <a href="https://music.apple.com/us/artist/stage-revolution/1780852863" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors py-2 px-4 rounded-full text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.6 17.4c-.3.5-.9.6-1.4.3C12.7 16.8 11 16.5 9 16.8c-.6.1-1.1-.3-1.2-.8-.1-.6.3-1.1.8-1.2 2.5-.3 4.6 0 6.7 1.2.5.3.6.9.3 1.4zm.9-2.1c-.4.6-1.1.8-1.7.4-1.6-.9-3.8-1.3-6.3-1.1-.7.1-1.3-.4-1.4-1.1-.1-.7.4-1.3 1.1-1.4 3-.4 5.6 0 7.5 1.3.9.3 1 1.1.8 1.9zm.1-2.3c-1.8-1.1-4.8-1.4-6.5-1.2-.8.1-1.6-.5-1.7-1.2-.1-.8.5-1.6 1.2-1.7 2.2-.2 5.6.1 7.8 1.6.7.4.9 1.3.5 1.9-.3.6-1.2.8-1.9.4.1 0 .1.2.6.2z"/>
                    </svg>
                    Apple Music
                  </a>
                  <a href="https://music.youtube.com/watch?v=s4OG-HPrc68" className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors py-2 px-4 rounded-full text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.784-6.228 6.228S8.568 18.228 12 18.228s6.228-2.784 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L16.2 12l-6.516 3.54z"/>
                    </svg>
                    YouTube Music
                  </a>
                </div>
              </div>

              {/* Featured Video Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 border-b border-neutral-700 pb-2">Featured Video</h2>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/YMRFc8hWqcw?si=VfyXJ8y28EHq_bt1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-center sm:text-left">
                  <Link href="https://www.youtube.com/channel/UCArnEC8i68TY7md5pxZVwgA" className="inline-flex items-center text-gray-300 hover:text-white">
                    View more videos
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Tour & News */}
            <div className="lg:col-span-5">
              {/* Upcoming Shows Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 border-b border-neutral-700 pb-2">Upcoming Shows</h2>
                <LiveCards />
                {/* <div className="mt-6 text-center">
                  <Link href="/tour" className="inline-block bg-neutral-800 hover:bg-neutral-700 transition-colors text-white font-semibold py-2 px-6 rounded-full">
                    View All Tour Dates
                  </Link>
                </div> */}
              </div>
{/* 
              Latest News Section
              <div>
                <h2 className="text-3xl font-bold mb-6 border-b border-neutral-700 pb-2">Latest News</h2>
                <div className="space-y-4">
                  <div className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors">
                    <p className="text-gray-400 text-sm mb-1">March 15, 2025</p>
                    <h3 className="text-xl font-semibold mb-2">New Album Coming Soon</h3>
                    <p className="text-gray-300 mb-3 line-clamp-2">We're excited to announce that our new album will be released next month. Stay tuned for more details!</p>
                    <Link href="/news/new-album" className="text-green-500 hover:text-green-400 inline-flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors">
                    <p className="text-gray-400 text-sm mb-1">March 1, 2025</p>
                    <h3 className="text-xl font-semibold mb-2">Summer Tour Announced</h3>
                    <p className="text-gray-300 mb-3 line-clamp-2">We'll be hitting the road this summer! Check out all the dates and grab your tickets before they're gone.</p>
                    <Link href="/news/summer-tour" className="text-green-500 hover:text-green-400 inline-flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link href="/news" className="text-gray-300 hover:text-white inline-flex items-center">
                    View all news
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">Have any questions or just want to say hi? Send us a message and we'll get back to you as soon as possible.</p>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>
      <hr className="border-t border-gray-800" />
      <Footer />
    </div>
  );
}

export default HomeClient;