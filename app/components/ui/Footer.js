import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

const getCurrentYear = () => new Date().getFullYear();

const QuickLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-1">
      {["About Us", "Contact", "Events", "Sermons"].map((linkText) => (
        <li key={linkText}>
          <Link href={`/${linkText.toLowerCase().replace(" ", "")}`} className="hover:underline text-sm md:text-base">
            {linkText}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactInfo = () => (
  <div className="space-y-2">
    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
    <div className="flex flex-col items-start md:items-center space-y-1">
      <span className="flex items-center space-x-2">
        <FaLocationDot /> <span className="text-sm md:text-base">Agona Ashanti, Ghana</span>
      </span>
      <span className="flex items-center space-x-2">
        <FaPhoneVolume /> <span className="text-sm md:text-base">024 442 3085</span>
      </span>
      <span className="flex items-center space-x-2">
        <MdOutlineEmail /> <span className="text-sm md:text-base">adudarkokwasi0@gmail.com</span>
      </span>
    </div>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
    <div className="flex space-x-4 justify-center">
      {[
        { href: "https://www.facebook.com/profile.php?id=100066628902399", icon: <FaFacebookF size={24}/> },
        { href: "https://api.whatsapp.com/send?phone=%2B233244423085", icon: <FaWhatsapp size={24}/> }
      ].map(({ href, icon }, index) => (
        <Link key={index} href={href} target="_blank" className="hover:text-gray-300">
          <span className="h-10 w-10">{icon}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center text-center pl-4">
          <ContactInfo />
          <QuickLinks />
          <SocialLinks />
        </div>
      </div>
      <div className="mt-8 text-center text-xs md:text-base">
        <p>&copy; {currentYear} Glorious Assurance Ministries. All rights reserved.</p>
      </div>
    </footer>
  );
}
