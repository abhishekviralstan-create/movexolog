import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/privacy-policy.css";

import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiClipboard,
  FiDatabase,
  FiGlobe,
  FiInfo,
  FiLock,
  FiMail,
  FiMapPin,
  FiRefreshCw,
  FiShare2,
  FiShield,
  FiTruck,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const policyCards = [
  {
    icon: <FiDatabase />,
    number: "01",
    title: "Information We Collect",
    text: "We may collect personal and business information when you use our website, request logistics services or communicate with our team.",
    points: [
      "Full name and company details",
      "Email address and contact information",
      "Shipment and cargo information",
      "Pickup and delivery addresses",
      "Technical and website usage information",
    ],
  },
  {
    icon: <FiTruck />,
    number: "02",
    title: "How We Use Your Information",
    text: "Information collected through our website and services may be used to support logistics operations and customer communication.",
    points: [
      "Provide logistics and shipment support",
      "Coordinate freight movement and delivery updates",
      "Improve website functionality and user experience",
      "Respond to service requests and inquiries",
      "Maintain operational communication",
      "Protect against fraud or unauthorized activity",
    ],
  },
  {
    icon: <FiBarChart2 />,
    number: "03",
    title: "Website Analytics & Cookies",
    text: "Our website may use cookies, analytics tools and server logs to understand visitor behavior, improve performance and maintain security.",
    extra:
      "These technologies may collect browser type, IP address, device information and pages visited on the website.",
  },
  {
    icon: <FiLock />,
    number: "04",
    title: "Data Protection",
    text: "Transvera applies reasonable administrative and technical measures to protect customer information from unauthorized access, disclosure or misuse.",
    extra:
      "While we take security seriously, no online platform or data transmission method can be guaranteed to be completely secure.",
  },
  {
    icon: <FiUsers />,
    number: "05",
    title: "Third-Party Services",
    text: "Some logistics operations may involve third-party carriers, warehouse providers, tracking tools or transportation partners.",
    extra:
      "Third-party websites and services operate under their own privacy policies and practices.",
  },
  {
    icon: <FiShare2 />,
    number: "06",
    title: "Information Sharing",
    text: "Transvera does not sell or rent customer information to third parties.",
    extra:
      "Information may only be shared when required for shipment coordination, operational support, legal compliance or service fulfillment.",
  },
  {
    icon: <FiUserCheck />,
    number: "07",
    title: "Your Rights",
    text: "Depending on your region and applicable laws, you may have rights related to accessing, correcting or requesting deletion of your personal information.",
    extra:
      "You may contact us regarding any data privacy concerns or information requests.",
  },
  {
    icon: <FiShield />,
    number: "08",
    title: "Children’s Privacy",
    text: "Transvera does not knowingly collect personal information from individuals under the age of 13.",
    extra:
      "If such information is identified, we will take reasonable steps to remove it from our records.",
  },
  {
    icon: <FiRefreshCw />,
    number: "09",
    title: "Policy Updates",
    text: "We may update this Privacy Policy periodically to reflect changes in operational practices, legal requirements or website features.",
    extra:
      "Continued use of the website after updates indicates acceptance of the revised policy.",
  },
];

const trustPoints = [
  {
    icon: <FiLock />,
    title: "Secure Handling",
    text: "We use practical safeguards to protect customer and shipment-related data.",
  },
  {
    icon: <FiTruck />,
    title: "Operational Use",
    text: "Your information is used only to support logistics and service communication.",
  },
  {
    icon: <FiCheckCircle />,
    title: "No Data Selling",
    text: "We do not sell or rent customer information to third parties.",
  },
];

const summaryItems = [
  "Information collection",
  "Shipment data usage",
  "Cookies and analytics",
  "Data protection",
  "Third-party services",
  "Information rights",
];

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Helmet>
        <title>Privacy Policy | Transvera Logistics</title>

        <meta
          name="description"
          content="Read the Transvera Privacy Policy to understand how we collect, use, protect and manage your personal information and shipment-related data."
        />

        <meta
          name="keywords"
          content="Transvera privacy policy, logistics privacy policy, freight company privacy, shipment data protection"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />

        <link rel="canonical" href="https://www.transvera.com/privacy" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Transvera" />

        <meta
          property="og:description"
          content="Learn how Transvera collects, protects and manages your information."
        />

        <meta property="og:url" content="https://www.transvera.com/privacy" />
        <meta property="og:image" content="https://www.transvera.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.transvera.com/privacy",
            description:
              "Official Privacy Policy for Transvera logistics and freight services.",
            publisher: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://www.transvera.com/",
              logo: "https://www.transvera.com/logo.png",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="privacy-hero">
          <div className="privacy-hero-overlay"></div>

          <div className="privacy-container privacy-hero-grid">
            <div className="privacy-hero-content">
             

              <h1>Privacy Policy</h1>

              <p>
                At Transvera, protecting your information is important to us.
                This Privacy Policy explains how we collect, use, store and
                protect customer and shipment-related information when using our
                website and logistics services.
              </p>

              <div className="privacy-hero-actions">
                <Link to="/contact-us" className="privacy-primary-btn">
                  Contact Support <FiArrowRight />
                </Link>

                <Link to="/terms-and-conditions" className="privacy-secondary-btn">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className="privacy-hero-panel">
              <div className="privacy-panel-icon">
                <FiClipboard />
              </div>

              <h3>Responsible Data Handling</h3>

              <p>
                We use customer and shipment information only for service
                communication, logistics coordination, operational support and
                website security.
              </p>

              <div className="privacy-panel-list">
                <span>
                  <FiCheckCircle /> Secure information handling
                </span>
                <span>
                  <FiCheckCircle /> No selling customer data
                </span>
                <span>
                  <FiCheckCircle /> Logistics-focused privacy practices
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-trust-section">
          <div className="privacy-container privacy-trust-grid">
            {trustPoints.map((item) => (
              <div className="privacy-trust-card" key={item.title}>
                <div className="privacy-trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="privacy-intro-section">
          <div className="privacy-container">
            <div className="privacy-intro-box">
              <span>Information Responsibility</span>

              <h2>
                Clear Privacy Practices for Customers, Visitors and Shipment
                Partners
              </h2>

              <p>
                We collect and use information only for business communication,
                shipment coordination, service improvement, operational support
                and website security. Every policy point below explains how
                Transvera manages customer and shipment-related information.
              </p>
            </div>
          </div>
        </section>

        <section className="privacy-policy-section">
          <div className="privacy-container privacy-layout">
            <aside className="privacy-summary-card">
              <div className="privacy-summary-icon">
                <FiInfo />
              </div>

              <h3>What This Covers</h3>

              <ul>
                {summaryItems.map((item) => (
                  <li key={item}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact-us">
                Need Help? <FiArrowRight />
              </Link>
            </aside>

            <div className="privacy-card-list">
              {policyCards.map((card) => (
                <article className="privacy-policy-card" key={card.title}>
                  <span className="privacy-card-number">{card.number}</span>

                  <div className="privacy-card-head">
                    <div className="privacy-card-icon">{card.icon}</div>
                    <h2>{card.title}</h2>
                  </div>

                  <p>{card.text}</p>

                  {card.extra && <p>{card.extra}</p>}

                  {card.points && (
                    <ul className="privacy-point-list">
                      {card.points.map((point) => (
                        <li key={point}>
                          <FiCheckCircle />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}

            </div>
          </div>
        </section>

        <section className="privacy-cta-section">
          <div className="privacy-container privacy-cta-box">
            <div>
              <span>Privacy & Logistics Support</span>

              <h2>Need Help Understanding Our Privacy Policy?</h2>

              <p>
                Reach out to our team for support related to logistics, shipment
                information or privacy questions.
              </p>
            </div>

            <Link to="/contact-us">
              Contact Our Team <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}