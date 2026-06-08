import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import RoutePreloader from "./components/RoutePreloader";

// Website pages
import Home from "./pages/home.jsx";
import About from "./pages/about-us.jsx";
import Clients from "./pages/clients.jsx";
import Services from "./pages/our-services.jsx";
import HowItWorks from "./pages/how-it-works.jsx";
import Contact from "./pages/contact-us.jsx";
import Terms from "./pages/terms-and-conditions.jsx";
import Privacy from "./pages/privacy-policy.jsx";
import Inbound from "./pages/InboundShipment.jsx";
import Roadfreight from "./pages/RoadFreight.jsx";
import Crossb from "./pages/CrossBorderShipment.jsx";

// Admin pages
import Login from "./pages/admin/Login.jsx";
import Signup from "./pages/admin/Signup.jsx";
import ForgotPassword from "./pages/admin/ForgotPassword.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import BlogList from "./pages/admin/BlogList.jsx";
import BlogForm from "./pages/admin/BlogForm.jsx";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/AdminLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <HelmetProvider>
      <RoutePreloader />
      <ScrollToTop />

      <Routes>
        {/* Website Public Routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/services/inbound-shipments" element={<Inbound />} />
          <Route path="/services/road-freight" element={<Roadfreight />} />
          <Route path="/services/cross-border-shipments" element={<Crossb />} />

        </Route>

        {/* Admin Auth Routes - No Navbar/Footer */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />

        {/* Admin Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/new" element={<BlogForm />} />
          <Route path="blogs/edit/:id" element={<BlogForm />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;