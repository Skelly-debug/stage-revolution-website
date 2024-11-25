import React from "react";
import "./LiveCards.module.css"; // Import the custom CSS file

const shows = [
  {
    id: "1",
    title: "No Upcomming Shows till Summer 2025",
    date: "2025-06-15",
    time: "00:00",
    venue: "We're still working on it",
  },
];

export default function LiveCards() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Live Shows</h2>
      <div className="w-full overflow-x-auto custom-scrollbar">
        <div className="flex space-x-4 pb-4">
          {shows.map((show) => (
            <div
              key={show.id}
              className="flex-shrink-0 w-64 bg-neutral-800 relative overflow-hidden rounded-xl shadow-2xl mb-4"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {show.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  {new Date(show.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-400 mb-1">{show.time}</p>
                <p className="text-sm font-medium text-gray-300">
                  {show.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
