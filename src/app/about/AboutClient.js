import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import MembersGrid from "@/components/MembersGrid/MembersGrid";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

function AboutClient() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-neutral-900 text-neutral-100 leading-relaxed">
      <Navbar />
      <Header />
      
      {/* Page Header */}
      <div className="bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Σχετικά με τους Stage Revolution
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ένα δυναμικό συγκρότημα που συνδυάζει το πάθος για τη μουσική με την αγάπη για τη σκηνή
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Band Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white border-b border-neutral-700 pb-2">Η Ιστορία μας</h2>
            
            <div className="space-y-6 text-neutral-300 text-lg">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:text-white first-letter:float-left">
                Οι Stage Revolution είναι ένα δυναμικό συγκρότημα που συνδυάζει το
                πάθος για τη μουσική με την αγάπη για τη σκηνή. Σχηματίστηκαν τον
                Απρίλιο του 2023 μέσα σε μόλις μία εβδομάδα, προκειμένου να
                στηρίξουν τον μπασίστα τους, Στέφανο Πουλημά, σε ένα live.
              </p>

              <p>
                Αν και αρχικά ονομάζονταν{" "}
                <span className="italic text-white">Boiling Frogs</span>, το όνομα
                κράτησε μόνο δύο εβδομάδες. Το{" "}
                <span className="font-bold text-white">Stage Revolution</span>{" "}
                μπορεί να μην άρεσε σε κανέναν στην αρχή, αλλά τελικά έγινε το
                ιδανικό όνομα που τους εκφράζει πλήρως.
              </p>

              <p>
                Με μουσικές ρίζες στο Hard Rock και το Metal, οι Stage Revolution
                δεν περιορίζονται σε ταμπέλες, δημιουργώντας έναν ξεχωριστό ήχο
                που εμπνέει. Η μπάντα γράφει δικό της υλικό, και το πρώτο τους
                single με τίτλο{" "}
                <span className="text-white font-semibold">"Έχει Σιωπή"</span> –
                ένα τραγούδι γεμάτο ένταση και μηνύματα – κυκλοφόρισε σε όλες τις
                ψηφιακές πλατφόρμες την 1η Δεκεμβρίου 2024.
              </p>
            </div>
          </div>
          
          {/* Live Performance Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white border-b border-neutral-700 pb-2">Ζωντανές Εμφανίσεις</h2>
            
            <div className="space-y-6 text-neutral-300 text-lg">
              <p>
                Οι ζωντανές εμφανίσεις αποτελούν τον πυρήνα τους. Έχουν
                συμμετάσχει σε μεγάλες διοργανώσεις όπως το 49ο και 50ο Φεστιβάλ
                ΚΝΕ-Οδηγητή (2023 και 2024), ενώ έχουν ανέβει δύο φορές στη
                θρυλική σκηνή του AN Club στο κέντρο της Αθήνας.
              </p>
              
              {/* Notable Performances */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors">
                  <div className="text-green-500 text-sm font-semibold mb-2">2024</div>
                  <h3 className="text-xl font-bold text-white mb-2">50ο Φεστιβάλ ΚΝΕ-Οδηγητή</h3>
                  <p className="text-gray-300">Απίθανη εμφάνηση στην μαθητική Σκηνή</p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors">
                  <div className="text-green-500 text-sm font-semibold mb-2">2024</div>
                  <h3 className="text-xl font-bold text-white mb-2">AN Club Athens</h3>
                  <p className="text-gray-300">Πρώτο Headline Show</p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors">
                  <div className="text-green-500 text-sm font-semibold mb-2">2023</div>
                  <h3 className="text-xl font-bold text-white mb-2">49ο Φεστιβάλ ΚΝΕ-Οδηγητή</h3>
                  <p className="text-gray-300">Τα πρώτα μας βήματα</p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition-colors">
                  <div className="text-green-500 text-sm font-semibold mb-2">2023</div>
                  <h3 className="text-xl font-bold text-white mb-2">AN Club Athens</h3>
                  <p className="text-gray-300">Εμφάνηση στην θρυλική σκηνή του ΑΝ σαν support</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white border-b border-neutral-700 pb-2">Το Όραμά μας</h2>
            
            <div className="bg-neutral-800 p-8 rounded-lg">
              <p className="font-semibold text-white text-xl mb-6">
                Η φιλοδοξία τους είναι ξεκάθαρη: να φέρουν την επανάσταση στη
                μουσική σκηνή. Ο στόχος τους είναι να κάνουν όλο και μεγαλύτερες
                συναυλίες και να πραγματοποιήσουν το μεγάλο όνειρο τους – να
                διοργανώσουν το δικό τους φεστιβάλ.
              </p>
              
              <div className="flex justify-center mt-4">
                <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-full">
                  See Upcoming Shows
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Band Members Section */}
      <div className="bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-tight">
            Γνωρίστε το Συγκρότημα
          </h2>
          <MembersGrid />
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link href="https://linktr.ee/stagerevolution" className="inline-block bg-neutral-700 hover:bg-neutral-600 transition-colors text-white font-semibold py-3 px-6 rounded-full mx-2 my-2">
              Ακούστε τη Μουσική μας
            </Link>
            {/* <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 px-6 rounded-full mx-2 my-2">
              Book Us For Your Event
            </Link> */}
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-300">
            "Δεν παίζουμε απλώς μουσική, δημιουργούμε εμπειρίες που συνδέονται με τους ανθρώπους σε ένα βαθύτερο επίπεδο."
          </blockquote>
          <div className="mt-4 text-green-500 font-semibold">- Stage Revolution</div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default AboutClient;