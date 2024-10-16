"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LoadingSpinner from "./loading";

// Dummy data for the About page
const leadershipTeam = [
  {
    id: 1,
    name: "Pastor John Doe",
    title: "Senior Pastor",
    bio: "Pastor John has served our church for over 15 years, leading with a heart for community and spiritual growth.",
    image: "/pastor-john.jpg", // Example image path
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Worship Leader",
    bio: "Jane leads our worship team and has a passion for connecting people with God through music and praise.",
    image: "/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Mark Johnson",
    title: "Youth Pastor",
    bio: "Mark oversees the youth ministry and works closely with teens to guide them on their spiritual journey.",
    image: "/mark-johnson.jpg",
  },
];

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      const dataFetchPromise = new Promise((resolve) =>
        setTimeout(resolve, 1500),
      );
      const minimumLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 1200),
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
        {/* Church History Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">
            Our Church History
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Founded in October 2018, the organization is a legally registered company with a dual focus, combining both commercial and religious purposes. With its headquarters situated in Agona, a prominent town in the Ashanti Region of Ghana, the organization operates within a unique space, balancing its role as a business entity with its mission-driven, faith-based activities. Since its establishment, the company has aimed to create a positive impact in both the corporate world and the religious community, providing services that reflect its core values of integrity, faith, and community development.
          </p>
        </section>

        {/* Leadership Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-gray-600 mb-4">{leader.title}</p>
                <p className="text-gray-700">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statement of Faith Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Mission Statement
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          The organization is dedicated to equipping believers with the spiritual and moral guidance they need to live and act in accordance with the teachings and example of Christ while on earth. By focusing on strengthening both their faith and ethical foundations, the organization aims to empower individuals to embody Christ-like qualities in their daily lives, fostering a deeper connection to their spiritual journey. Through this approach, believers are not only encouraged to grow personally, but also to positively impact their communities by living as true representatives of their faith.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-center my-6">
            Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          The organization's mission centers on raising sons of God who actively manifest the character and presence of Christ in their lives. By nurturing individuals through spiritual growth and discipleship, the organization seeks to develop believers who fully embrace their identity as children of God. These individuals are empowered to reflect the essence of Christ in all aspects of their lives, demonstrating His love, compassion, and truth to the world. The goal is to cultivate a generation that not only believes in Christ but lives in a way that His power and teachings are visibly manifested in their actions and relationships
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
