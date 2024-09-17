import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import App from "./App"; 
import Homepage from "./pages/Homepage"; 
import About from "./pages/About"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* İçerik yönlendirme */}
        <Route index element={<Homepage />} /> 
        <Route path="about" element={<About />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);
