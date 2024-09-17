import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Sayfa yönlendirmesi için kullanıyoruz
import logo from "../assets/kasteel-logo.png"; // Logonuzu doğru yoldan ekleyin

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
    <header>
      {/* Menu Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="Kasteel Bouw Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Menü Öğeleri (Masaüstü) */}
          <nav>
            <ul className="hidden md:flex space-x-8 text-[#00215B] items-center h-20">
              <li>
                <Link
                  to="/"
                  className="text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lg hover:text-gray-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobil Menü (Hamburger İkonu) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none menu-button"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md menu-container">
          <ul className="flex flex-col space-y-4 p-4 text-[#00215B]">
            <li>
              <Link
                to="/"
                className="text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg hover:text-gray-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg hover:text-gray-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
