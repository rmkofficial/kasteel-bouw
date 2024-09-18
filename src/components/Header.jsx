import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; 
import logo from "../assets/kasteel-logo.png";

const Header = () => {
  // Hamburger menü için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Boşluğa tıklandığında menünün kapanmasını sağlayan fonksiyon
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer menü açıksa ve menünün dışına tıklandıysa menüyü kapat
      if (
        isMenuOpen &&
        !event.target.closest(".menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-20">
      {/* Menü Barı */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink
              to="top"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <img src={logo} alt="Kasteel Bouw Logo" className="h-20 w-auto" />
            </ScrollLink>
          </div>

          {/* Menü Öğeleri (Masaüstü) */}
          <nav>
            <ul className="hidden md:flex space-x-8 text-[#00215B] items-center h-20">
              <li>
                <ScrollLink
                  to="aboutSection"
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-gray-500 transition-colors duration-300 relative group cursor-pointer"
                >
                  About Us
                  {/* Hover Altında Çizgi */}
                  <span className="block absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-[#00215B] transition-all duration-500"></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projectsSection"
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-gray-500 transition-colors duration-300 relative group cursor-pointer"
                >
                  Services
                  <span className="block absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-[#00215B] transition-all duration-500"></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contactSection"
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-gray-500 transition-colors duration-300 relative group cursor-pointer"
                >
                  Contact
                  <span className="block absolute left-0 bottom-0 w-0 group-hover:w-full h-1 bg-[#00215B] transition-all duration-500"></span>
                </ScrollLink>
              </li>
            </ul>
          </nav>

          {/* Mobil Menü (Hamburger İkonu) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-950 focus:outline-none menu-button"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md menu-container absolute top-20 left-0 w-full z-30">
          <ul className="flex flex-col space-y-4 p-4 text-[#00215B]">
            <li>
              <ScrollLink
                to="aboutSection"
                smooth={true}
                duration={500}
                className="text-lg hover:text-gray-500 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projectsSection"
                smooth={true}
                duration={500}
                className="text-lg hover:text-gray-500 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contactSection"
                smooth={true}
                duration={500}
                className="text-lg hover:text-gray-500 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
