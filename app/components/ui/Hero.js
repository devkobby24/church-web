import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white brightness-150">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 bg-black"
        style={{
          backgroundImage: "url('/place.jpg?height=400&width=600')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-4 text-white brightness-150">
          Welcome to Glorious Assurance Ministries
        </h1>
        <p className="text-xl mb-8">
          Join us in worship, fellowship, and spiritual growth
        </p>
        <Link
          href="/contact"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Worship With Us
        </Link>
      </div>
    </section>
  );
}
