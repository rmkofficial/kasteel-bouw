import { Link as ScrollLink } from "react-scroll";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/kasteel-logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-[#00215B] text-white">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center md:items-start md:justify-center">
            <div className="flex justify-center md:justify-center w-full ">
              <ScrollLink
                to="top"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <img
                  src={logo}
                  alt="Kasteel Bouw Logo"
                  className="h-20 w-auto"
                  loading="lazy"
                />
              </ScrollLink>
            </div>
            <p className="text-sm text-center md:text-left">
              Hoog niveau ervaring in webdesign en ontwikkelingskennis,
              kwaliteitswerk leveren.
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm mb-4">
              Abonneer je om op de hoogte te blijven van nieuw webdesign en de
              laatste updates. Laten we het doen!
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <input
                type="email"
                placeholder="Voer je e-mailadres in"
                aria-label="E-mailadres invoeren"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-300">
                Abonneren
              </button>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm mb-4">Volg ons</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/kasteelbouw/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="cursor-pointer"
              >
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="cursor-pointer"
              >
                <FaFacebookF className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="cursor-pointer"
              >
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
            </div>
            <p className="mt-4 text-sm">
              <a href="tel:0624962109" className="hover:underline">
                0624962109
              </a>
            </p>
            <p className="mt-4 text-sm">
              <a href="tel:0687629686" className="hover:underline">
                0687629686
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p className="text-gray-400">
            Kasteel Bouw © Alle rechten voorbehouden Copyrights 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
