import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/contact-us.css";

import heroBg from "../assets/cargo.jpg";
import ctaBg from "../assets/warehouse.jpg";

import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiShield,
  FiTruck,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzLDVj2aSOavD85mBB9L2MQAbNoA69t1GiZLgT-G3AUbqOlp4VBoMuCM1EISARgHm1/exec";

const contactCards = [
  {
    icon: <FiMapPin />,
    title: "Office Address",
    text: "30 N Gould St Ste R Sheridan, WY 82801",
  },
  {
    icon: <FiMail />,
    title: "Email Us",
    text: "info@transvera.com",
    link: "mailto:info@transvera.com",
  },
];

const heroCards = [
  {
    icon: <FiTruck />,
    title: "Freight Quote",
  },
  {
    icon: <FiShield />,
    title: "Secure Handling",
  },
  {
    icon: <FiClock />,
    title: "Fast Response",
  },
  {
    icon: <FiGlobe />,
    title: "Global Support",
  },
];

const processSteps = [
  {
    icon: <FiMessageCircle />,
    title: "Share Details",
  },
  {
    icon: <FiUsers />,
    title: "Team Reviews",
  },
  {
    icon: <FiTruck />,
    title: "Plan Shipment",
  },
  {
    icon: <FiCheckCircle />,
    title: "Move Cargo",
  },
];

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contactForm, setContactForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Road Freight",
    route: "",
    details: "",
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;

    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YAHAN_APNA")) {
      alert("Please add your Google Apps Script Web App URL first.");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      fullName: contactForm.fullName,
      company: contactForm.company,
      email: contactForm.email,
      phone: contactForm.phone,
      serviceType: contactForm.serviceType,
      route: contactForm.route,
      details: contactForm.details,
      source: "Transvera Contact Form",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowPopup(true);

      setContactForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        serviceType: "Road Freight",
        route: "",
        details: "",
      });
    } catch (error) {
      console.error("Contact form submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Transvera | Get Logistics Support & Shipment Quote</title>

        <meta
          name="description"
          content="Contact Transvera for road freight, inbound shipments, cross-border logistics, shipment tracking support and customized freight quotes."
        />

        <meta
          name="keywords"
          content="contact Transvera, logistics support, freight quote, shipment support, road freight contact, cross border logistics contact"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />

        <link rel="canonical" href="https://www.transvera.com/contact" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Transvera",
            url: "https://www.transvera.com/contact",
            description:
              "Contact Transvera for road freight, inbound shipments, cross-border logistics, shipment tracking support and customized freight quotes.",
            publisher: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://www.transvera.com",
              logo: "https://www.transvera.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@transvera.com",
                contactType: "customer support",
                areaServed: "Global",
                availableLanguage: ["English"],
              },
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="contact-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="contact-hero-overlay"></div>

          <div className="contact-container contact-hero-grid">
            <div className="contact-hero-content">
            

              <h1>Let’s Move Your Shipment</h1>

              <p className="contact-hero-text">
                Need a quote, shipment update or logistics support? Share your
                details and our team will help you with the right solution.
              </p>

              <div className="contact-hero-actions">
                <a href="mailto:info@transvera.com" className="contact-btn-primary">
                  Email Us <FiArrowRight />
                </a>

                <Link to="/services/road-freight" className="contact-btn-outline">
                  Explore Services <FiTruck />
                </Link>
              </div>
            </div>

            <div className="contact-hero-cards">
              {heroCards.map((item) => (
                <div className="contact-quick-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container contact-layout">
            <div className="contact-info">
              <span className="contact-section-label">Get In Touch</span>

              <h2>Support That Helps You Move Faster</h2>

              <p>
                Transvera keeps communication simple, clear and responsive —
                from road freight to cross-border shipment support.
              </p>

              <div className="contact-cards">
                {contactCards.map((card) => (
                  <div className="contact-card" key={card.title}>
                    <div className="contact-card-icon">{card.icon}</div>

                    <h3>{card.title}</h3>

                    {card.link ? (
                      <p>
                        <a href={card.link}>{card.text}</a>
                      </p>
                    ) : (
                      <p>{card.text}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="contact-process-box">
                <span>How We Respond</span>

                <div className="contact-process-steps">
                  {processSteps.map((item) => (
                    <div key={item.title}>
                      {item.icon}
                      <strong>{item.title}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-head">
                <span>Request Support</span>
                <h2>Send Your Shipment Details</h2>
                <p>
                  Fill out the form below and our logistics team will contact you
                  soon.
                </p>
              </div>

              <FormInput
                icon={<FiUser />}
                label="Full Name"
                name="fullName"
                value={contactForm.fullName}
                onChange={handleContactChange}
                placeholder="Your full name"
                required
              />

              <FormInput
                icon={<FiUsers />}
                label="Company"
                name="company"
                value={contactForm.company}
                onChange={handleContactChange}
                placeholder="Company name"
              />

              <FormInput
                icon={<FiMail />}
                label="Email Address"
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                placeholder="your@email.com"
                required
              />

              <FormInput
                icon={<FiPhone />}
                label="Phone Number"
                name="phone"
                value={contactForm.phone}
                onChange={handleContactChange}
                placeholder="+1 000 000 0000"
                required
              />

              <div className="form-group">
                <label>Service Type</label>

                <div className="input-wrap">
                  <FiTruck />
                  <select
                    name="serviceType"
                    value={contactForm.serviceType}
                    onChange={handleContactChange}
                    required
                  >
                    <option value="Road Freight">Road Freight</option>
                    <option value="Cross Border Shipments">
                      Cross Border Shipments
                    </option>
                    <option value="Inbound Shipments">Inbound Shipments</option>
                    <option value="Express Delivery">Express Delivery</option>
                  </select>
                </div>
              </div>

              <FormInput
                icon={<FiMapPin />}
                label="Route / Destination"
                name="route"
                value={contactForm.route}
                onChange={handleContactChange}
                placeholder="Origin → Destination"
              />

              <div className="form-group full">
                <label>Additional Details</label>

                <div className="input-wrap textarea-wrap">
                  <FiMessageCircle />
                  <textarea
                    name="details"
                    value={contactForm.details}
                    onChange={handleContactChange}
                    placeholder="Cargo type, weight, special requirements..."
                  />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          </div>

          {showPopup && (
            <div className="success-popup-overlay">
              <div className="success-popup">
                <button
                  type="button"
                  className="success-close"
                  onClick={() => setShowPopup(false)}
                  aria-label="Close popup"
                >
                  <FiX />
                </button>

                <div className="success-icon">
                  <FiCheckCircle />
                </div>

                <h3>Form Submitted Successfully!</h3>

                <p>
                  Thank you for contacting Transvera. Our team will contact you
                  soon.
                </p>

                <button type="button" onClick={() => setShowPopup(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="contact-cta-section">
          <div
            className="contact-container contact-cta-box"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="contact-cta-overlay"></div>

            <div className="contact-cta-content">
              <span>Need Urgent Shipment Support?</span>

              <h2>Our team is ready to help you plan the next move.</h2>

              <p>
                Share your route, cargo details and timeline. We will help you
                choose the right freight solution.
              </p>
            </div>

            <a href="mailto:info@transvera.com" className="contact-cta-btn">
              Contact Now <FiArrowRight />
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}

function FormInput({ label, icon, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <div className="input-wrap">
        {icon}
        <input {...props} />
      </div>
    </div>
  );
}
