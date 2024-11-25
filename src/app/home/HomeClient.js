import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import Footer from "@/components/Footer/Footer";

function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-neutral-600">
      <Navbar />
      <Header />
      {/* Band News Section */}
      <div className="bg-neutral-900 text-white font-sans py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold font-sans mb-4">Band News</h1>

            {/* Spotify Section */}
            <div className="w-full max-w-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-center italic">
                Latest Release
              </h2>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="radius-[12px]"
                  src="https://open.spotify.com/embed/track/6g2BiiVQqY5v1S4HIrM54F?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="w-full max-w-4xl mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-center italic">
                Featured Video
              </h2>
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/bpsFD7buSoQ"
                  title="49th KNE Festival LIVE 21/09/2023"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>
      <hr className="border-t border-gray-500" />
      <Footer />
    </div>
  );
}

export default HomeClient;
