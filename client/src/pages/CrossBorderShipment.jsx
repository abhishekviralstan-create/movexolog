import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/crossBorderShipment.css";

import Crossborder from "../assets/delivered.jpg";
import Crossborder1 from "../assets/cross-border3.jpg";
import Us from "../assets/us.png";

import {
  FiUsers,
  FiShield,
  FiTruck,
  FiFileText,
  FiClock,
  FiGlobe,
  FiAnchor,
  FiDollarSign,
  FiMapPin,
  FiCheckCircle,
  FiPackage,
  FiAward,
  FiCreditCard,
  FiArrowRight,
  FiPhoneCall,
  FiBriefcase,
  FiNavigation,
  FiLayers,
} from "react-icons/fi";

const heroBg = Crossborder1;
const overviewImg = Crossborder;
const worldMapImg = Us;

const quickPoints = [
  {
    icon: <FiUsers />,
    title: "Customs Brokerage",
  },
  {
    icon: <FiShield />,
    title: "Trade Compliance",
  },
  {
    icon: <FiTruck />,
    title: "Multi-Modal Solutions",
  },
  {
    icon: <FiFileText />,
    title: "Documentation Services",
  },
];

const overviewStats = [
  {
    icon: <FiClock />,
    title: "Faster Clearance",
    desc: "Expedited processing through expert handling and pre-clearance.",
  },
  {
    icon: <FiShield />,
    title: "Compliance Assurance",
    desc: "Ensure full compliance with international regulations and trade laws.",
  },
  {
    icon: <FiGlobe />,
    title: "Global Visibility",
    desc: "Real-time tracking and visibility across borders and supply chains.",
  },
];

const keyFeatures = [
  {
    icon: <FiUsers />,
    title: "Customs Brokerage",
    desc: "Expert handling of customs clearance, duties, and tariffs to ensure smooth border crossings.",
  },
  {
    icon: <FiShield />,
    title: "Trade Compliance",
    desc: "Adherence to international trade regulations and import/export laws to reduce risk.",
  },
  {
    icon: <FiAnchor />,
    title: "Multi-Modal Solutions",
    desc: "Seamless integration of road, rail, sea, and air freight for optimized global delivery.",
  },
  {
    icon: <FiFileText />,
    title: "Documentation Services",
    desc: "Accurate preparation of commercial invoices, certificates of origin, and shipping documents.",
  },
  {
    icon: <FiDollarSign />,
    title: "Duty Drawback Programs",
    desc: "Assistance in recovering customs duties on re-exported goods to improve your bottom line.",
  },
  {
    icon: <FiBriefcase />,
    title: "Border Processing",
    desc: "Expedited clearance at major border crossings with strong agency partnerships.",
  },
];

const capabilities = [
  {
    icon: <FiGlobe />,
    title: "Partnerships with customs authorities and border agencies",
  },
  {
    icon: <FiUsers />,
    title: "Licensed customs brokers on staff",
  },
  {
    icon: <FiAward />,
    title: "CTPAT and C-TPAT certified operations",
  },
  {
    icon: <FiPackage />,
    title: "Free Trade Agreement (FTA) utilization",
  },
  {
    icon: <FiCheckCircle />,
    title: "Incoterms expertise for all transaction types",
  },
  {
    icon: <FiCreditCard />,
    title: "Currency and payment coordination",
  },
];

const benefits = [
  {
    icon: <FiClock />,
    title: "Reduced border",
    desc: "delays and clearance times",
  },
  {
    icon: <FiShield />,
    title: "Compliance assurance",
    desc: "and risk mitigation",
  },
  {
    icon: <FiDollarSign />,
    title: "Lower total",
    desc: "landed costs",
  },
  {
    icon: <FiGlobe />,
    title: "Simplified international",
    desc: "shipping processes",
  },
  {
    icon: <FiAward />,
    title: "Access to preferential",
    desc: "trade programs",
  },
  {
    icon: <FiUsers />,
    title: "Single point of contact",
    desc: "for cross-border logistics",
  },
];


export default function CrossBorderShipment() {
  return (
    <div className="cross-page">
      <Helmet>
        <title>
          Cross Border Shipping & International Logistics | Customs Brokerage |
          Transvera
        </title>

        <meta
          name="description"
          content="Expert cross-border shipping services by Transvera. Customs brokerage, trade compliance, and international logistics solutions. Seamless border crossing with expedited clearance. Get started today."
        />

        <meta
          name="keywords"
          content="cross border shipping, international logistics, customs brokerage, customs clearance, international freight, border crossing, trade compliance, import export services, duty drawback, international shipping"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://transvera.com/cross-border-shipment" />

        <meta property="og:type" content="service" />
        <meta
          property="og:title"
          content="Cross Border Shipping - Expert International Logistics"
        />
        <meta
          property="og:description"
          content="Navigate international shipping with confidence. Professional customs brokerage, trade compliance, and seamless border crossing solutions."
        />
        <meta
          property="og:url"
          content="https://transvera.com/cross-border-shipment"
        />
        <meta property="og:site_name" content="Transvera" />
        <meta
          property="og:image"
          content="https://transvera.com/images/cross-border-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cross Border Shipping Services | Transvera"
        />
        <meta
          name="twitter:description"
          content="Expert international logistics with customs brokerage and trade compliance. Seamless cross-border shipping."
        />
        <meta
          name="twitter:image"
          content="https://transvera.com/images/cross-border-twitter.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Cross Border Shipping & International Logistics",
            provider: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://transvera.com",
            },
            description:
              "Professional cross-border shipping services with customs brokerage, trade compliance, and international logistics expertise for seamless global trade.",
            areaServed: {
              "@type": "Place",
              name: "International",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Cross Border Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Customs Brokerage",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Trade Compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Border Processing",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="cross-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="cross-hero-overlay"></div>

          <div className="cross-container cross-hero-grid">
            <div className="cross-hero-content">
              <h1>
                Cross Border <br />
                Shipments
              </h1>

              <p className="cross-hero-text">
                Navigate international shipping with confidence. We manage
                customs regulations, trade compliance, and international
                logistics end-to-end to keep your goods moving across borders
                smoothly and on time.
              </p>

              <div className="cross-hero-actions">
                <Link to="/contact-us" className="cross-btn-primary">
                  Request a Quote <FiArrowRight />
                </Link>

                <Link to="/contact-us" className="cross-btn-outline">
                  Contact Us <FiPhoneCall />
                </Link>
              </div>
            </div>

            <div className="cross-hero-cards">
              {quickPoints.map((item) => (
                <div className="cross-quick-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cross-section cross-overview-section">
          <div className="cross-container cross-overview-grid">
            <div className="cross-overview-image">
              <img src={overviewImg} alt="Cross border international shipping" />

              <div className="cross-image-badge">
                <FiGlobe />
                <div>
                  <strong>Global Trade</strong>
                  <span>Border-ready logistics support</span>
                </div>
              </div>
            </div>

            <div className="cross-overview-content">
              <span className="cross-section-label">Service Overview</span>

              <h2>Cross-Border Shipping Built for Global Movement</h2>

              <p>
                Navigate the complexities of international shipping with
                confidence. Our cross-border shipment services combine deep
                knowledge of customs regulations, trade compliance, and
                international logistics to ensure your goods move smoothly across
                borders. From documentation to final delivery, we manage every
                detail of your international shipments.
              </p>

              <div className="cross-overview-stats">
                {overviewStats.map((item) => (
                  <div className="cross-overview-stat" key={item.title}>
                    <span>{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cross-section cross-features-section">
          <div className="cross-container">
            <div className="cross-heading-center">
              <span>Key Features</span>
              <h2>Everything Needed for Seamless Border Crossings</h2>
              <p>
                From customs brokerage to documentation, Transvera manages
                cross-border movement with compliance, visibility and dependable
                operational support.
              </p>
            </div>

            <div className="cross-feature-grid">
              {keyFeatures.map((item) => (
                <div className="cross-feature-card" key={item.title}>
                  <div className="cross-feature-icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cross-section cross-capabilities-section">
          <div className="cross-container cross-capabilities-box">
            <div className="cross-capabilities-content">
              <span className="cross-section-label">International Capabilities</span>

              <h2>Built to Support Global Trade Requirements</h2>

              <p>
                Our cross-border capabilities help reduce risk, improve
                documentation accuracy and simplify complex international trade
                requirements for growing businesses.
              </p>
            </div>

            <div className="cross-capabilities-grid">
              {capabilities.map((item) => (
                <div className="cross-capability-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cross-section cross-benefits-section">
          <div className="cross-container">
            <div className="cross-heading-center">
              <span>Benefits</span>
              <h2>Smarter International Shipping, Lower Operational Risk</h2>
              <p>
                Improve border clearance, reduce delays and simplify your global
                shipping process with expert-led international logistics support.
              </p>
            </div>

            <div className="cross-benefits-grid">
              {benefits.map((item) => (
                <div className="cross-benefit-card" key={item.title + item.desc}>
                  <span>{item.icon}</span>

                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cross-section cross-region-section">
          <div className="cross-container cross-region-box">
            <div className="cross-region-content">
              <span className="cross-section-label">Regional Expertise</span>

              <h2>Expert Support Across Major Trade Corridors</h2>

              <p>
                Specialized knowledge of trade corridors, border regulations,
                and customs procedures across North America, Europe, Asia, and
                Latin America.
              </p>
            </div>

            <div className="cross-region-map">
              <img src={worldMapImg} alt="Regional cross border expertise map" />

          
            </div>
          </div>
        </section>

        <section className="cross-section cross-process-section">
          <div className="cross-container">
            <div className="cross-process-box">
              <div>
                <span className="cross-section-label">How We Work</span>

                <h2>From Documentation to Border Clearance</h2>

                <p>
                  We prepare documents, coordinate customs, manage freight
                  movement and provide shipment visibility until final delivery.
                </p>
              </div>

              <div className="cross-process-steps">
                <div>
                  <FiFileText />
                  <strong>Document</strong>
                </div>

                <div>
                  <FiShield />
                  <strong>Comply</strong>
                </div>

                <div>
                  <FiNavigation />
                  <strong>Move</strong>
                </div>

                <div>
                  <FiCheckCircle />
                  <strong>Clear</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cross-section cross-cta-section">
          <div className="cross-container cross-cta-box">
            <div>
              <span>Start Global Movement</span>

              <h2>Ready to Simplify Your Cross-Border Logistics?</h2>

              <p>
                Our experts are ready to help you navigate borders and grow your
                global business.
              </p>
            </div>

            <Link to="/contact-us" className="cross-cta-btn">
              Get Free Quote <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}