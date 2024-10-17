"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LoadingSpinner from "./loading";

// Dummy data for events (you can fetch this from an API or database in a real app)
const events = [
  {
    id: 1,
    title: "Sunday Service",
    date: "This and every Sunday",
    time: "8:30 AM - 11:30 AM",
    location: "Main Church Auditorium",
    description: "Join us for Sunday worship, prayer, and fellowship.",
  },
  {
    id: 2,
    title: "Holy Ghost",
    date: "November 27th, 2024 - November 29th, 2024",
    time: "To Be Communicated",
    location: "To Be Communicated",
    description: "A gathering for young people to worship and grow together.",
  },
  {
    id: 3,
    title: "Glorious X'mas Realities",
    date: "December 23rd, 2024 - December 31st, 2024", 
    time: "To Be Communicated",
    location: "Main Church Auditorium",
    description: "",
  },
];

const Events = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      const dataFetchPromise = new Promise((resolve) =>
        setTimeout(resolve, 500),
      );
      const minimumLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      await Promise.all([dataFetchPromise, minimumLoadingTime]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

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
