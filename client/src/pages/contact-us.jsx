import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/contact-us.css";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzLDVj2aSOavD85mBB9L2MQAbNoA69t1GiZLgT-G3AUbqOlp4VBoMuCM1EISARgHm1/exec";

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
      source: "Movexolog Contact Form",
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
        <title>Contact Movexolog | Get Logistics Support & Shipment Quote</title>
        <link rel="icon" type="image/png" href="../assets/logo.png" />
        <link rel="apple-touch-icon" href="../assets/logo.png" />

        <meta
          name="description"
          content="Contact Movexolog for road freight, inbound shipments, cross-border logistics, shipment tracking support and customized freight quotes."
        />
        <meta
          name="keywords"
          content="contact Movexolog, logistics support, freight quote, shipment support, road freight contact, cross border logistics contact"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />

        <link rel="canonical" href="https://www.movexolog.com/contact" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Movexolog",
            url: "https://www.movexolog.com/contact",
            description:
              "Contact Movexolog for road freight, inbound shipments, cross-border logistics, shipment tracking support and customized freight quotes.",
            publisher: {
              "@type": "Organization",
              name: "Movexolog",
              url: "https://www.movexolog.com",
              logo: "https://www.movexolog.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@movexolog.com",
                contactType: "customer support",
                areaServed: "Global",
                availableLanguage: ["English"],
              },
            },
            mainEntity: {
              "@type": "Organization",
              name: "Movexolog",
              email: "info@movexolog.com",
              url: "https://www.movexolog.com",
              description:
                "Movexolog provides logistics support for road freight, inbound shipments, cross-border shipments and express delivery.",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="contact-hero">
          <div className="contact-hero-content">
            <span className="contact-kicker">
              Home <span className="sep">&gt;</span> Contact Us
            </span>
            <h1>Let’s Move Your Shipment With Confidence</h1>
            <p>
              Need a quote, shipment update or logistics support? Share your
              details and our team will help you with the right solution.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-info">
            <span className="contact-kicker">Get In Touch</span>
            <h2>Support That Helps You Move Faster</h2>
            <p>
              Movexolog keeps communication simple, clear and responsive — from
              road freight to cross-border shipment support.
            </p>

           <div className="contact-cards two-cards">
  <div className="contact-card">
    <Icon name="map" />
    <h3>Office Address</h3>
    <p>30 N Gould St Ste R Sheridan, WY 82801</p>
  </div>

  <div className="contact-card">
    <Icon name="mail" />
    <h3>Email Us</h3>
    <p>
      <a href="mailto:info@movexolog.com">
        info@movexolog.com
      </a>
    </p>
  </div>
</div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <FormInput
              label="Full Name"
              name="fullName"
              value={contactForm.fullName}
              onChange={handleContactChange}
              placeholder="Your full name"
              required
            />

            <FormInput
              label="Company"
              name="company"
              value={contactForm.company}
              onChange={handleContactChange}
              placeholder="Company name"
            />

            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleContactChange}
              placeholder="your@email.com"
              required
            />

            <FormInput
              label="Phone Number"
              name="phone"
              value={contactForm.phone}
              onChange={handleContactChange}
              placeholder="+1 000 000 0000"
              required
            />

            <div className="form-group">
              <label>Service Type</label>
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

            <FormInput
              label="Route / Destination"
              name="route"
              value={contactForm.route}
              onChange={handleContactChange}
              placeholder="Origin → Destination"
            />

            <div className="form-group full">
              <label>Additional Details</label>
              <textarea
                name="details"
                value={contactForm.details}
                onChange={handleContactChange}
                placeholder="Cargo type, weight, special requirements..."
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
          {showPopup && (
  <div className="success-popup-overlay">
    <div className="success-popup">
      <h3>Form Submitted Successfully!</h3>

      <p>
        Thank you for contacting Movexolog. Our team will contact you soon.
      </p>

      <button onClick={() => setShowPopup(false)}>
        Close
      </button>
    </div>
  </div>
)}
        </section>

        <section className="contact-cta">
          <div>
            <span>Need urgent shipment support?</span>
            <h2>Our team is ready to help you plan the next move.</h2>
          </div>
          <a href="/contact-us">Contact Now</a>
        </section>
      </main>
    </div>
  );
}

function FormInput({ label, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

function Icon({ name }) {
  const icons = {
    phone:
      "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z",
    mail: "M4 4h16v16H4V4zm0 4l8 5 8-5",
    map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zm0 0V3m6 18V6",
  };

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none">
      <path
        d={icons[name]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}