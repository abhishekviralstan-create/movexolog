import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about-us.jsx";
import Clients from "./pages/clients.jsx";
import Services from "./pages/our-services.jsx";
import HowItWorks from "./pages/how-it-works.jsx";
import Tracking from "./pages/truck-shipment.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <HelmetProvider>
      {/* Navbar sab pages pe common */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;