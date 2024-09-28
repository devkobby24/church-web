import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:underline">About Us</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link href="/events" className="hover:underline">Events</Link></li>
                            <li><Link href="/sermons" className="hover:underline">Sermons</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>123 Faith Street, Graceville, ST 12345</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@gracechurch.org</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Facebook</a>
                            <a href="#" className="hover:text-gray-300">Instagram</a>
                            <a href="#" className="hover:text-gray-300">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2023 Grace Community Church. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
