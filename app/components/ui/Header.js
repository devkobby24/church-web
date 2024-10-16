import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Church Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Glorious Assurance Ministries 
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-800 text-lg">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 text-lg">
            Contact
          </Link>
          <Link href="/events" className="text-gray-800 text-lg">
            Events
          </Link>
          <Link href="/sermons" className="text-gray-800 text-lg">
            Sermons
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-20 flex flex-col justify-center items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/about"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/events"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            href="/sermons"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            Sermons
          </Link>
        </div>
      )}
    </header>
  );
}
