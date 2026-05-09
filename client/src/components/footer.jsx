import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../assets/footer.png";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMapPin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Movexolog Logo" />
          </Link>

          <p>
            Logistics should seem easy, swift and predictable. Our process
            follows right from planning delivery with reduction of ambiguity
            providing better visibility and reducing the delay factor which
            happens to be a problem for almost all businesses.
          </p>

          <div className="social-links">
            <a href="https://x.com/movexolog" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="https://www.instagram.com/movexo_logistics/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/movexolog/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="https://www.facebook.com/movexolog/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home <FiArrowUpRight /></Link></li>
            <li><Link to="/services">Services <FiArrowUpRight /></Link></li>
            <li><Link to="/about">About <FiArrowUpRight /></Link></li>
            <li><Link to="/how-it-works">How It Works <FiArrowUpRight /></Link></li>
            <li><Link to="/clients">Clients <FiArrowUpRight /></Link></li>
            <li><Link to="/contact-us">Contact <FiArrowUpRight /></Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>

          <ul>
            <li><Link to="/services">Road Freight <FiArrowUpRight /></Link></li>
            <li><Link to="/services">Inbound Shipments <FiArrowUpRight /></Link></li>
            <li><Link to="/services">Cross Border <FiArrowUpRight /></Link></li>
            <li><Link to="/services">Express Delivery <FiArrowUpRight /></Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>

          <div className="footer-contact-item">
            <FiMapPin />
            <span>30 N Gould St Ste R Sheridan, WY 82801</span>
          </div>

          <div className="footer-contact-item">
            <FiMail />
            <span>
              <a href="mailto:info@movexolog.com">info@movexolog.com</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MOVEXOLOG. All Rights Reserved.</span>

        <div>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-and-conditions">Terms</Link>
        </div>
      </div>
    </footer>
  );
}