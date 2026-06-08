import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../assets/footer.png";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Transvera Logo" />
          </Link>

          <p>
            Logistics should seem easy, swift and predictable. Our process
            follows right from planning delivery with reduction of ambiguity
            providing better visibility and reducing the delay factor which
            happens to be a problem for almost all businesses.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-it-works">How It Work</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>

          <ul>
            <li><Link to="/services/inbound-shipments">Inbound Shipment</Link></li>
            <li><Link to="/services/road-freight">Road Freight</Link></li>
            <li><Link to="/services/cross-border-shipments">Cross Border Shipments</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact Us</h4>

          <div className="footer-contact-item">
            <FiMapPin />
            <span>
              123 Logistics Way, Suite 100<br />
              Chicago, IL 60601, USA
            </span>
          </div>

          <div className="footer-contact-item">
            <FiMail />
            <span>
              <a href="mailto:info@transvera.com">info@transvera.com</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Transvera. All Rights Reserved.</p>

        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}