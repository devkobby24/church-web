"use client";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/Hero";
import ServiceTimes from "../components/ui/ServiceTimes";
import Location from "../components/ui/Location";
import Footer from "../components/ui/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Join Us in Worship
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceTimes />
              <Location />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
