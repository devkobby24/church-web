import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white bg-black">
      <div
        className="absolute inset-0 md:bg-cover bg-contain h-screen md:w-1/2 mx-auto items-center bg-center opacity-90 bg-black"
        style={{
          backgroundImage: "url('/place.jpg?height=400&width=600')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-4 font-sans text-white brightness-150">
          Welcome to Glorious Assurance Ministries
        </h1>
        <p className="text-xl mb-8">
          Join us in worship, fellowship, and spiritual growth
        </p>
        <Link href="/contact">
          <button className="px-8 py-2 h-14 rounded-full relative bg-gray-900 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Worship with Us</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
