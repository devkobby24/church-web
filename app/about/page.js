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
        const dataFetchPromise = new Promise((resolve) => setTimeout(resolve, 1500)); 
        const minimumLoadingTime = new Promise((resolve) => setTimeout(resolve, 1200)); 
  
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
            Established in 1970, our church has grown from a small group of
            believers to a vibrant community serving God and the local
            community. For over 50 years, we have been committed to spreading
            the message of love, hope, and faith. Through the decades, our
            church has been a beacon of light, with outreach programs, missions,
            and community events that have touched countless lives.
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
            Statement of Faith
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We believe in one God, eternally existing in three persons: Father,
            Son, and Holy Spirit. We believe that Jesus Christ is the Son of
            God, who died for our sins and rose again, offering salvation to all
            who believe in Him. We affirm the Bible as the inspired and
            authoritative Word of God, serving as the foundation for our beliefs
            and practices.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mt-4">
            Our church is committed to sharing the Gospel, loving others as
            Christ loves us, and nurturing spiritual growth through worship,
            fellowship, and service. We stand united in our mission to bring
            hope to the world through the transformative power of faith.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
