"use client";
import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

// Dummy data for events (you can fetch this from an API or database in a real app)
const events = [
  {
    id: 1,
    title: "Sunday Service",
    date: "September 29, 2024",
    time: "9:00 AM - 11:00 AM",
    location: "Main Church Hall",
    description: "Join us for Sunday worship, prayer, and fellowship.",
  },
  {
    id: 2,
    title: "Youth Fellowship",
    date: "October 1, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Youth Center",
    description: "A gathering for young people to worship and grow together.",
  },
  {
    id: 3,
    title: "Community Outreach",
    date: "October 5, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Downtown Community Center",
    description: "Serve the community through various outreach programs.",
  },
];

const Events = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Date: </span> {event.date}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Time: </span> {event.time}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Location: </span> {event.location}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
