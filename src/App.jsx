import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"; // İçerik yönlendirme için

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Sayfa içeriği (Home, About, Services, Contact sayfaları) */}
      <main className="flex-grow">
        <Outlet /> {/* İçerik burada gösterilecek */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
