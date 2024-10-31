"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LoadingSpinner from "./loading";
import Image from "next/image";
import { leadershipTeam, statements } from "../Data";

const AboutPage = () => {
  const visionStatement = statements[0].vision;
  const missionStatement = statements[1].mission;
  const historyStatement = statements[2].history;

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate data fetching
  //   const fetchData = async () => {
  //     const dataFetchPromise = new Promise((resolve) =>
  //       setTimeout(resolve, 1500),
  //     );
  //     const minimumLoadingTime = new Promise((resolve) =>
  //       setTimeout(resolve, 1200),
  //     );

  //     await Promise.all([dataFetchPromise, minimumLoadingTime]);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-8 pt-20">
        {/* Church History Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">
            Our Church History
          </h1>
          <p className="text-gray-700 sm:text-sm md:text-lg text-center leading-relaxed max-w-4xl mx-auto">
            {historyStatement}
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
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={128}
                  height={128}
                  className="w-auto h-auto rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-gray-600 mb-4">{leader.title}</p>
                <p className="text-gray-700">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Mission Statement
          </h2>
          <p className="text-gray-700 sm:text-sm md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {missionStatement}
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center my-6">Vision</h2>
          <p className="text-gray-700 sm:text-sm md:text-lg leading-relaxed text-center text-wrap max-w-4xl mx-auto">
            {visionStatement}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
