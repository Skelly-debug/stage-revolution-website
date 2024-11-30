import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/HeaderImg/Header";
import MembersGrid from "@/components/MembersGrid/MembersGrid";
import Footer from "@/components/Footer/Footer";

function AboutClient() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-neutral-100 leading-relaxed">
      <Navbar />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-12 tracking-tight">
            About Stage Revolution
          </h1>

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

            <p>
              Οι ζωντανές εμφανίσεις αποτελούν τον πυρήνα τους. Έχουν
              συμμετάσχει σε μεγάλες διοργανώσεις όπως το 49ο και 50ο Φεστιβάλ
              ΚΝΕ-Οδηγητή (2023 και 2024), ενώ έχουν ανέβει δύο φορές στη
              θρυλική σκηνή του AN Club στο κέντρο της Αθήνας.
            </p>

            <p className="font-semibold text-white">
              Η φιλοδοξία τους είναι ξεκάθαρη: να φέρουν την επανάσταση στη
              μουσική σκηνή. Ο στόχος τους είναι να κάνουν όλο και μεγαλύτερες
              συναυλίες και να πραγματοποιήσουν το μεγάλο όνειρο τους – να
              διοργανώσουν το δικό τους φεστιβάλ.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center text-white mt-10 mb-2 tracking-tight">
        Band Members
      </h1>
      <MembersGrid />
      <Footer />
    </div>
  );
}

export default AboutClient;
