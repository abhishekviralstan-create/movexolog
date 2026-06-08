import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/logo.png";

const services = [
  {
    label: "Inbound Shipments",
    path: "/services/inbound-shipments",
  },
  {
    label: "Road Freight",
    path: "/services/road-freight",
  },
  {
    label: "Cross Border Shipments",
    path: "/services/cross-border-shipments",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-navbar-wrap">
      <nav className={`site-navbar ${open ? "menu-open" : ""}`}>
        <Link to="/" className="site-logo" onClick={closeMenu}>
          <img src={logo} alt="Transvera Logo" className="logo-img" />
        </Link>

        <button
          type="button"
          className={`site-menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`site-nav-links ${open ? "show" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li className={`site-dropdown ${servicesOpen ? "open" : ""}`}>
            <button
              type="button"
              className={`site-dropdown-btn ${isServicesActive ? "active" : ""}`}
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <span>▾</span>
            </button>

            <ul className="site-dropdown-menu">
              {services.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/how-it-works" onClick={closeMenu}>
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={closeMenu}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" onClick={closeMenu}>
              Clients
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          <li className="site-mobile-cta">
            <NavLink to="/contact-us" onClick={closeMenu}>
              Get Free Quote <span>→</span>
            </NavLink>
          </li>
        </ul>

        <Link to="/contact-us" className="site-nav-cta">
          Get Free Quote <span>→</span>
        </Link>
      </nav>
    </header>
  );
}