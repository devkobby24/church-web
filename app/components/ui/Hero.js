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
        <Link href="/contact">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Worship With Us
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
