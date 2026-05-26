import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/terms-and-conditions.css";

import {
  FiAlertTriangle,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiRefreshCw,
  FiShield,
  FiTruck,
  FiUserCheck,
  FiUsers,
  FiClipboard,
  FiInfo,
} from "react-icons/fi";

const termCards = [
  {
    icon: <FiCheckCircle />,
    title: "Acceptance of Terms",
    number: "01",
    paragraphs: [
      "By accessing the Transvera website or using our logistics, transportation or shipment coordination services, you agree to be legally bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, you should not use our website or services.",
    ],
  },
  {
    icon: <FiTruck />,
    title: "Services Overview",
    number: "02",
    paragraphs: [
      "Transvera provides freight coordination, logistics planning, shipment movement support, transportation assistance and related operational services.",
      "Service availability may vary depending on route access, shipment category, carrier support and operational conditions.",
    ],
  },
  {
    icon: <FiUserCheck />,
    title: "Customer Responsibilities",
    number: "03",
    points: [
      "Provide accurate shipment and contact information.",
      "Ensure cargo complies with transportation regulations.",
      "Submit valid documents when required.",
      "Ensure restricted or prohibited items are not shipped.",
      "Maintain proper packaging and cargo labeling.",
    ],
  },
  {
    icon: <FiClock />,
    title: "Shipment & Delivery",
    number: "04",
    paragraphs: [
      "Delivery timelines are estimates and may be affected by weather, customs clearance, traffic conditions, carrier delays or other operational circumstances beyond our control.",
      "Transvera will make reasonable efforts to maintain shipment visibility and communication throughout the process.",
    ],
  },
  {
    icon: <FiAlertTriangle />,
    title: "Restricted Items",
    number: "05",
    paragraphs: [
      "Customers must not ship illegal, hazardous, prohibited or restricted materials unless approved and compliant with applicable transportation laws and carrier requirements.",
    ],
  },
  {
    icon: <FiCreditCard />,
    title: "Payment Terms",
    number: "06",
    paragraphs: [
      "All pricing, freight charges and service fees are subject to agreement before shipment confirmation.",
      "Additional charges may apply for storage, route changes, customs delays, oversized cargo or special handling requirements.",
    ],
  },
  {
    icon: <FiShield />,
    title: "Limitation of Liability",
    number: "07",
    paragraphs: [
      "Transvera shall not be liable for indirect, incidental or consequential damages resulting from shipment delays, operational interruptions or third-party carrier actions.",
      "Liability limitations may apply according to shipment category, carrier terms and applicable transportation regulations.",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Website Usage",
    number: "08",
    paragraphs: [
      "Users agree not to misuse the website, attempt unauthorized access, distribute malicious software or interfere with website functionality.",
      "All content, branding, graphics and materials on this website are the intellectual property of Transvera unless otherwise stated.",
    ],
  },
  {
    icon: <FiLock />,
    title: "Privacy & Data Usage",
    number: "09",
    paragraphs: [
      "Information submitted through forms, emails or service inquiries may be used for shipment coordination, customer support and operational communication.",
      "We implement reasonable security measures to protect customer information.",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Third-Party Services",
    number: "10",
    paragraphs: [
      "Some logistics operations may involve third-party transportation providers, warehouse operators or customs partners.",
      "Transvera is not responsible for policies, delays or operational actions performed directly by third-party entities.",
    ],
  },
  {
    icon: <FiRefreshCw />,
    title: "Changes to Terms",
    number: "11",
    paragraphs: [
      "Transvera reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
      "Continued use of the website or services after updates indicates acceptance of revised terms.",
    ],
  },
];

const trustPoints = [
  {
    icon: <FiFileText />,
    title: "Clear Service Terms",
    text: "Understand how our logistics services, shipment coordination and website usage are governed.",
  },
  {
    icon: <FiShield />,
    title: "Responsible Operations",
    text: "Terms are structured to support safe cargo movement, proper documentation and transparent service handling.",
  },
  {
    icon: <FiTruck />,
    title: "Logistics Focused",
    text: "Every section is written around freight movement, shipment support and customer responsibilities.",
  },
];

const summaryItems = [
  "Service usage rules",
  "Customer responsibilities",
  "Shipment and delivery terms",
  "Payment conditions",
  "Website usage policy",
  "Privacy and data usage",
];

export default function TermsConditions() {
  return (
    <div className="terms-page">
      <Helmet>
        <title>Terms & Conditions | Transvera Logistics</title>

        <meta
          name="description"
          content="Read the Terms & Conditions of Transvera regarding logistics services, shipment handling, website usage, customer responsibilities and service limitations."
        />

        <meta
          name="keywords"
          content="Transvera terms and conditions, logistics terms, freight service terms, shipment policies, transportation agreement"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />

        <link rel="canonical" href="https://www.transvera.com/terms" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | Transvera" />

        <meta
          property="og:description"
          content="Review the official terms and conditions governing Transvera logistics and freight services."
        />

        <meta property="og:url" content="https://www.transvera.com/terms" />
        <meta property="og:image" content="https://www.transvera.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions",
            url: "https://www.transvera.com/terms",
            description:
              "Official Terms & Conditions for Transvera logistics and freight services.",
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
        <section className="terms-hero">
          <div className="terms-hero-overlay"></div>

          <div className="terms-container terms-hero-grid">
            <div className="terms-hero-content">
              


              <h1>Terms & Conditions</h1>

              <p>
                These Terms & Conditions govern your use of Transvera’s website,
                logistics solutions and freight-related services. By accessing or
                using our services, you agree to comply with these terms.
              </p>

              <div className="terms-hero-actions">
                <Link to="/contact-us" className="terms-primary-btn">
                  Contact Support <FiArrowRight />
                </Link>

                <Link to="/privacy-policy" className="terms-secondary-btn">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="terms-hero-panel">
              <div className="terms-panel-icon">
                <FiClipboard />
              </div>

              <h3>Service Agreement Overview</h3>

              <p>
                Important conditions for shipment coordination, logistics
                support, customer responsibilities, website usage and data
                handling.
              </p>

              <div className="terms-panel-list">
                <span>
                  <FiCheckCircle /> Transparent service rules
                </span>
                <span>
                  <FiCheckCircle /> Logistics-focused terms
                </span>
                <span>
                  <FiCheckCircle /> Customer responsibility included
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-trust-section">
          <div className="terms-container terms-trust-grid">
            {trustPoints.map((item) => (
              <div className="terms-trust-card" key={item.title}>
                <div className="terms-trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="terms-intro-section">
          <div className="terms-container">
            <div className="terms-intro-box">
              <span>Service Agreement</span>

              <h2>Transparent Rules for Freight, Shipment Support and Website Usage</h2>

              <p>
                Please review these terms carefully before using our website or
                logistics services. They explain customer responsibilities,
                service limitations, payment terms, shipment handling conditions,
                data usage and website usage rules.
              </p>
            </div>
          </div>
        </section>

        <section className="terms-content-section">
          <div className="terms-container terms-layout">
            <aside className="terms-summary-card">
              <div className="terms-summary-icon">
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

            <div className="terms-card-list">
              {termCards.map((card) => (
                <article className="terms-card" key={card.title}>
                  <span className="terms-card-number">{card.number}</span>

                  <div className="terms-card-head">
                    <div className="terms-card-icon">{card.icon}</div>

                    <h2>{card.title}</h2>
                  </div>

                  {card.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {card.points && (
                    <ul className="terms-point-list">
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

        <section className="terms-cta-section">
          <div className="terms-container terms-cta-box">
            <div>
              <span>Need More Clarity?</span>

              <h2>Have Questions About Our Terms?</h2>

              <p>
                Our team can help you understand shipment responsibilities,
                service conditions and logistics support before you book.
              </p>
            </div>

            <Link to="/contact-us">
              Contact Our Team <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}