"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LoadingSpinner from "./loading";

// Dummy church contact information
const churchContactInfo = {
  address: "Agona Ashanti, Ghana",
  phone: "024 442 3085",
  email: "info@churchname.org",
  serviceTimes: [
    "Glory service: Sundays 8:30-11:30am",
    "Midweek service: Wednesdays 6:30-8:30pm",
    "Fridays Dominion Service: 7-9pm",
  ],
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      const dataFetchPromise = new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );
      const minimumLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 1200)
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
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Google Maps Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Location</h2>
          <div className="flex justify-center mb-6">
            <iframe
              className="w-full h-64 md:h-96 max-w-4xl rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.91976037258!2d-122.0842491!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba13e0a034d1%3A0xa03df4c88b2629dd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630457091308!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Church Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Information</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Address: </span>
              {churchContactInfo.address}
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Phone: </span>
              <a href={`tel:${churchContactInfo.phone}`} className="text-blue-600 hover:underline">
                {churchContactInfo.phone}
              </a>
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Email: </span>
              <a href={`mailto:${churchContactInfo.email}`} className="text-blue-600 hover:underline">
                {churchContactInfo.email}
              </a>
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Service Times: </span>
              {churchContactInfo.serviceTimes.map((time, index) => (
                <span key={index} className="block">{time}</span>
              ))}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Send Us a Message</h2>
          <form
            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
