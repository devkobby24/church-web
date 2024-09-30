import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:underline">
                  Sermons
                </Link>
              </li>
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
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaFacebookF className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaYoutube className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaTiktok className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
