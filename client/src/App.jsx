import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar.jsx";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home.jsx";
import About from "./pages/about-us.jsx";
import Clients from "./pages/clients.jsx";
import Services from "./pages/our-services.jsx";
import HowItWorks from "./pages/how-it-works.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./pages/contact-us.jsx";
import Terms from "./pages/terms-and-conditions.jsx";
import Privacy from "./pages/privacy-policy.jsx";

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop /> 
      {/* Navbar sab pages pe common */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/terms-and-conditions" element={<Terms />}/>
        <Route path="/privacy-policy" element={<Privacy />}/>
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;