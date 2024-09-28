import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-[60vh] bg-gray-900 text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Grace Community Church</h1>
                <p className="text-xl mb-8">Join us in worship, fellowship, and spiritual growth</p>
                <Link
                    href="/about"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                    Learn More
                </Link>
            </div>
        </section>
    );
}
