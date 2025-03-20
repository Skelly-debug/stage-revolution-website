"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const membersData = [
  {
    id: 1,
    name: "Αντώνης Χαραλαμπόπουλος",
    image: "./images/anthSinging-byNADIA.webp",
    title: "Τραγούδι/Κιθάρα",
    bio: "Ο Αντώνης είναι ο κιθαρίστας και frontman του Συγκροτήματος. Είναι ο πιο τρελός απο τους τρείς.",
    skills: ["Κιθάρα", "Τραγούδι", "Μουσική Θεωρία"],
  },
  {
    id: 2,
    name: "Στέφανος Πουλημάς",
    image: "./images/StefanosPoulimasAnStageKotsidia.webp",
    title: "Τραγούδι/Μπάσο",
    bio: "Ο Στέφανος είναι ο Μπασίστας και δεύτερος Τραγουδιστής, βράχος του Συγκροτήματος. Μερικές φορές πιάνει και καμιά κιθάρα.",
    skills: ["Μπάσο", "Τραγούδι", "Κιθάρα"],
  },
  {
    id: 3,
    name: "Αλκίνοος Νίνας",
    image: "./images/Alkinoos Ninas.webp",
    title: "Κρουστά",
    bio: "Ο Αλκίνοος είναι ο Ντράμερ του Συγκροτήματος και η ψυχή της παρέας.",
    skills: ["Κρουστά"],
  },
  {
    id: 4,
    name: "???",
    image:
      "https://cdn-icons-png.freepik.com/512/3991/3991486.png?ga=GA1.1.1560413733.1715297156",
    title: "2η Κιθάρα",
    bio: "Θα μπορούσες να είσαι εσύ.",
    skills: ["Κιθάρα"],
  },
];

const MembersGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {membersData.map((member) => (
          <div
            key={member.id}
            onClick={() => openModal(member)}
            className="cursor-pointer transform transition-all hover:scale-110 hover:shadow-lg duration-500"
          >
            <div className="bg-black rounded-lg overflow-hidden shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-lg max-w-md w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-2xl font-bold text-center mb-2">
              {selectedMember.name}
            </h2>
            <p className="text-center text-gray-600 mb-4">
              {selectedMember.title}
            </p>

            <p className="text-gray-300 text-center mb-4">
              {selectedMember.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {selectedMember.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembersGrid;
