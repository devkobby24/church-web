import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50 flex items-center justify-between">
      <nav className="container flex items-center justify-between py-4">
        {/* Church Name and Logo */}
        <div>
          <Link
            href="/"
            className="font-bold font-sans text-gray-800 flex items-center  "
          >
            <Image
              src="/images/logo.jpg"
              className="rounded-full mr-2"
              alt="Logo"
              width={40}
              height={40}
            />
            <p className="sm:text-[16px]">Glorious Assurance Ministries</p>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex  md:space-x-4">
          <Link
            href="/about"
            className="text-gray-800 text-lg hover:text-indigo-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 text-lg hover:text-indigo-600"
          >
            Contact
          </Link>
          <Link
            href="/events"
            className="text-gray-800 text-lg hover:text-indigo-600"
          >
            Events
          </Link>
          <Link
            href="/sermons"
            className="text-gray-800 text-lg hover:text-indigo-600"
          >
            Sermons
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-4"
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
                className="h-6 w-6 mx-4"
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

        {/* Mobile Navigation Links - Sliding in from the side */}
        <div
          className={`fixed top-0 bottom-0 right-0 bg-gray-100 z-20 w-40 transform transition-transform duration-500 ease-in-out flex flex-col items-center h-72 rounded-lg shadow-lg ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-[1px] text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
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
            <Button variant="outline">About</Button>
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            <Button variant="outline">Contact</Button>
          </Link>
          <Link
            href="/events"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            <Button variant="outline">Events</Button>
          </Link>
          <Link
            href="/sermons"
            className="text-gray-800 text-2xl py-4"
            onClick={toggleMenu}
          >
            <Button variant="outline">Sermons</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
