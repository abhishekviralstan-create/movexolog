import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div className="footer-brand">
          <div className="logo-text">
            MOVE<em>X</em>OLOG
          </div>
          <p>
            An industry leader in global logistics with a powerful network and reliable operations.
          </p>

          <div className="social-links">
            <a>in</a>
            <a>tw</a>
            <a>fb</a>
            <a>yt</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Road Freight</li>
            <li>Inbound Shipments</li>
            <li>Cross Border</li>
            <li>Express Delivery</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/tracking">Track Shipment</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <div className="footer-contact-item">
            <span>📍</span>
            <span>Global Logistics Hub</span>
          </div>

          <div className="footer-contact-item">
            <span>📞</span>
            <span>24/7 Support</span>
          </div>

          <div className="footer-contact-item">
            <span>✉️</span>
            <span>info@movexolog.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 MOVEXOLOG</span>
        <div>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </div>
    </footer>
  );
}