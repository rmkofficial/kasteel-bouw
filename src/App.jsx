import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
