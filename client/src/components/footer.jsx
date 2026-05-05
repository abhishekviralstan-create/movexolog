import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../assets/logo.png";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiArrowUpRight } from "react-icons/fi";

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
            We believe logistics should feel clear, fast and dependable. From
            planning to delivery, our process is built to reduce confusion,
            improve visibility and keep your cargo moving with fewer delays.
          </p>

          <div className="social-links">
            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/10000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" aria-label="Facebook">
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
            <span>100 King Street West, Toronto, ON M5X 1A9, Canada</span>
          </div>

          <div className="footer-contact-item">
            <FiPhone />
            <span>+1 (416) 555-0198<br />+1 (647) 555-0147</span>
          </div>

          <div className="footer-contact-item">
            <FiMail />
            <span>info@movexolog.com<br />support@movexolog.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MOVEXOLOG. All Rights Reserved.</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}