import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    Grace Community Church
                </Link>
                <div className="space-x-4">
                    <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                    <Link href="/events" className="text-gray-600 hover:text-gray-800">Events</Link>
                    <Link href="/sermons" className="text-gray-600 hover:text-gray-800">Sermons</Link>
                </div>
            </nav>
        </header>
    );
}
