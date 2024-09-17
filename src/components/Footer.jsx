const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">&copy; 2024 Kasteel Bouw. All rights reserved.</p>
      <p className="text-sm">
        Bierens de Haanstraat 35, 1064 NC Amsterdam | Tel: 0624962109 /
        0687629686
      </p>
      <div className="mt-2">
        <a
          href="https://www.instagram.com/kasteelbouw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Follow us on Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
