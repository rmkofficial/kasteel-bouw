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
            <ul className="hidden md:flex space-x-8 text-gray-700 items-center h-20">
              <li>
                <Link to="/" className="hover:underline text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-lg">
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
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link to="/" className="hover:underline text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-lg">
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
