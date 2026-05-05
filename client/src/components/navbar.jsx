import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="site-navbar">
      <Link to="/" className="site-logo" onClick={closeMenu}>
        <img src={logo} alt="Movexolog Logo" className="logo-img" />
      </Link>

      <button
        type="button"
        className={`site-menu-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`site-nav-links ${open ? "show" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/how-it-works" onClick={closeMenu}>How It Works</NavLink></li>
        <li><NavLink to="/tracking" onClick={closeMenu}>Track Shipment</NavLink></li>
        <li><NavLink to="/clients" onClick={closeMenu}>Clients</NavLink></li>
        <li className="site-mobile-cta">
          <NavLink to="/tracking" onClick={closeMenu}>Get a Quote</NavLink>
        </li>
      </ul>

      <Link to="/tracking" className="site-nav-cta">
        Get a Quote
      </Link>
    </nav>
  );
}