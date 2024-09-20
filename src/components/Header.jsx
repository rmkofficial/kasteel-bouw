import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/kasteel-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (isMenuOpen && event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-20">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to Content
      </a>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
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

          <nav>
            <ul className="hidden md:flex space-x-8 text-[#00215B] items-center h-20">
              <li>
                <ScrollLink
                  to="aboutSection"
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-gray-500 transition-colors duration-300 relative group cursor-pointer"
                >
                  Over ons
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
                  Diensten
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

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-950 focus:outline-none menu-button"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

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
                Over ons
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
                Diensten
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
