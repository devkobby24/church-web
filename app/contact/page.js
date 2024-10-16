"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LoadingSpinner from "./loading";

// Dummy church contact information
const churchContactInfo = {
  address: "Agona Ashanti. Ghana",
  phone: "+233 244 423 085",
  email: "info@churchname.org",
  serviceTimes:
    "Glory Service: Sunday: 8:30 AM - 11:30 AM, Midweek Service: Wednesday: 6:30 PM - 8:30 PM, Dominion Service: Friday: 7:00 PM - 9:00 PM",
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
    // Process form data here (send to API or email service)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form fields
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
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our Location
          </h2>
          <div className="flex justify-center mb-6">
            <iframe
              className="w-full h-64 md:h-96 max-w-4xl rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.9090990901805!2d-1.484069953775341!3d6.938271272482923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbc90002cf7e57%3A0xe3050b2baf096d0d!2sHabitat!5e1!3m2!1sen!2sgh!4v1729075518689!5m2!1sen!2sgh"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Church Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Contact Information
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Address: </span>
              {churchContactInfo.address}
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Phone: </span>
              <a
                href={`tel:${churchContactInfo.phone}`}
                className="text-blue-600 hover:underline"
              >
                {churchContactInfo.phone}
              </a>
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Email: </span>
              <a
                href={`mailto:${churchContactInfo.email}`}
                className="text-blue-600 hover:underline"
              >
                {churchContactInfo.email}
              </a>
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">Service Times: </span>
              {churchContactInfo.serviceTimes}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Send Us a Message
          </h2>
          <form
            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
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
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
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
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
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
