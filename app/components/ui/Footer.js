import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md"
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";


const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-800 text-white py-8 text-wrap">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
          <div className="mx-2 space-y-2 block">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p><FaLocationDot />Agona Ashanti, Ghana</p>
            <p><FaPhoneVolume /> 024 442 3085</p>
            <p><MdOutlineEmail />adudarkokwasi0@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100066628902399"
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
                <FaTiktok className="h-6 w-6" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=%2B233244423085&context=ARChFPY1-8ldfcD-R4Im0590P4pVyqsKT2PRV1HkUiAIWrLnER140FFdAlX--oJ8s-5Mtnz3wmeBZd_hxzDOzDMZYo9sWAR-msCFJ1taD3WuUQw3_onfUCT9ZMkZtujIo_N4NiX-LZfu1u4UAhE7lRpdJQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawF8esdleHRuA2FlbQIxMAABHSqNcqn4ioMrLD7YsoO8RhNUaFtHbAJ4ZiF-8PaC9SmC4GnLy9AkH_4bdg_aem_B7shkkXOafuiQLohO1vkow"
                target="_blank"
                className="hover:text-gray-300"
              >
                <FaWhatsapp className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Glorious Assurance Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
