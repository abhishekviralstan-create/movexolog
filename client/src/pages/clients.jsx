import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/clients.css";

import retailBg from "../assets/e-commerce.avif";
import manufacturingBg from "../assets/manufacturing.jpg";
import importExportBg from "../assets/import-export.avif";
import warehouseBg from "../assets/warehouse.jpg";

import {
  FiShoppingBag,
  FiSettings,
  FiGlobe,
  FiBox,
  FiTruck,
  FiClock,
  FiShield,
  FiMessageCircle,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiHeadphones,
  FiMapPin,
  FiPhoneCall,
  FiPackage,
} from "react-icons/fi";

const heroBg = importExportBg;
const ctaBg = warehouseBg;

const clientTypes = [
  {
    icon: <FiShoppingBag />,
    title: "Retail & E-Commerce",
    image: retailBg,
    desc: "Reliable shipping support for online businesses, retail suppliers and fast-moving commercial operations.",
  },
  {
    icon: <FiSettings />,
    title: "Manufacturing",
    image: manufacturingBg,
    desc: "Structured logistics support for raw materials, finished goods and regular supply chain movement.",
  },
  {
    icon: <FiGlobe />,
    title: "Import & Export",
    image: importExportBg,
    desc: "Cross-border logistics planning for companies moving goods between regions, markets and trade routes.",
  },
  {
    icon: <FiBox />,
    title: "Warehousing Partners",
    image: warehouseBg,
    desc: "Inbound and outbound movement support for warehouse-driven operations and distribution networks.",
  },
];

const benefits = [
  {
    icon: <FiTruck />,
    title: "Reliable freight movement",
    desc: "Planned cargo movement with dependable dispatch and delivery coordination.",
  },
  {
    icon: <FiClock />,
    title: "Timely delivery coordination",
    desc: "Every movement is planned with route timing and delivery visibility.",
  },
  {
    icon: <FiShield />,
    title: "Secure cargo handling",
    desc: "Careful handling practices help protect goods from pickup to delivery.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Clear communication",
    desc: "Clients stay informed with clear updates and responsive support.",
  },
];

const stats = [
  {
    icon: <FiCheckCircle />,
    value: "98%",
    label: "On-time coordination focus",
  },
  {
    icon: <FiHeadphones />,
    value: "24/7",
    label: "Support availability",
  },
  {
    icon: <FiTrendingUp />,
    value: "10+",
    label: "Years industry experience",
  },
  {
    icon: <FiGlobe />,
    value: "Global",
    label: "Partner network reach",
  },
];

const quickCards = [
  {
    icon: <FiUsers />,
    title: "Business Support",
  },
  {
    icon: <FiShield />,
    title: "Secure Handling",
  },
  {
    icon: <FiMapPin />,
    title: "Clear Visibility",
  },
  {
    icon: <FiPackage />,
    title: "Reliable Movement",
  },
];

export default function Clients() {
  return (
    <div className="clients-page">
      <Helmet>
        <title>Transvera Clients | Trusted Logistics Partner for Businesses</title>

        <meta
          name="description"
          content="Transvera supports clients across retail, manufacturing, import-export, warehousing and supply chain operations with reliable logistics solutions."
        />

        <meta
          name="keywords"
          content="Transvera clients, logistics clients, freight partners, supply chain clients, business logistics, transport partner, cargo delivery clients"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />

        <link rel="canonical" href="https://www.transvera.com/clients" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transvera Clients | Trusted Logistics Partner" />

        <meta
          property="og:description"
          content="Explore how Transvera supports businesses with reliable, scalable and transparent logistics services."
        />

        <meta property="og:url" content="https://www.transvera.com/clients" />
        <meta property="og:image" content="https://www.transvera.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Transvera Clients",
            url: "https://www.transvera.com/clients",
            description:
              "Transvera works with clients across retail, manufacturing, import-export and warehouse operations.",
            publisher: {
              "@type": "Organization",
              name: "Transvera",
              logo: "https://www.transvera.com/logo.png",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="clients-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="clients-hero-overlay"></div>

          <div className="clients-container clients-hero-grid">
            <div className="clients-hero-content">
             

              <h1>Trusted by Businesses</h1>

              <p className="clients-hero-text">
                Transvera works with businesses that depend on safe cargo
                handling, timely movement and clear logistics communication from
                dispatch to delivery.
              </p>

              <div className="clients-hero-actions">
                <Link to="/contact-us" className="clients-btn-primary">
                  Work With Us <FiArrowRight />
                </Link>

                <Link to="/contact-us" className="clients-btn-outline">
                  Contact Us <FiPhoneCall />
                </Link>
              </div>
            </div>

            <div className="clients-hero-cards">
              {quickCards.map((item) => (
                <div className="clients-quick-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section clients-intro-section">
          <div className="clients-container">
            <div className="clients-heading-center">
              <span>Who We Support</span>

              <h2>Built to Support Growing & Established Businesses</h2>

              <p>
                Transvera supports companies that rely on accurate cargo
                handling, timely movement and transparency across the logistics
                chain from dispatch to delivery.
              </p>
            </div>

            <div className="clients-types-grid">
              {clientTypes.map((item, index) => (
                <div className="clients-type-card" key={item.title}>
                  <div className="clients-type-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="clients-type-content">
                    <span className="clients-count">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="clients-type-icon">{item.icon}</div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section clients-trust-section">
          <div className="clients-container clients-trust-grid">
            <div className="clients-trust-content">
              <span className="clients-section-label">Why Clients Choose Us</span>

              <h2>Built on Trust, Clarity and Long-Term Support</h2>

              <p>
                We know logistics is not just about moving goods. It is about
                reducing operational pressure, protecting timelines and giving
                clients peace of mind that every shipment is handled responsibly.
              </p>

              <Link to="/contact-us" className="clients-primary-btn">
                Work With Us <FiArrowRight />
              </Link>
            </div>

            <div className="clients-trust-points">
              {benefits.map((item) => (
                <div className="clients-trust-card" key={item.title}>
                  <div className="clients-trust-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section clients-stats-section">
          <div className="clients-container">
            <div className="clients-heading-center">
              <span>Client Confidence</span>

              <h2>Consistent Support for Business Logistics</h2>

              <p>
                Every partnership is supported with planning, coordination,
                visibility and reliable operational communication.
              </p>
            </div>

            <div className="clients-stats-grid">
              {stats.map((item) => (
                <div className="clients-stat-card" key={item.label}>
                  <div>{item.icon}</div>

                  <h3>{item.value}</h3>

                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section clients-message-section">
          <div className="clients-container clients-message-card">
            <span>Partnership Mindset</span>

            <h2>We Treat Every Client Shipment Like a Responsibility</h2>

            <p>
              Our goal remains clear: communicate properly, plan dependably and
              provide responsible cargo movement from first-time clients to
              long-term business partners.
            </p>
          </div>
        </section>

        <section className="clients-section clients-process-section">
          <div className="clients-container">
            <div className="clients-process-box">
              <div>
                <span className="clients-section-label">How We Support Clients</span>

                <h2>From Business Requirement to Reliable Movement</h2>

                <p>
                  We understand your logistics needs, plan the movement, provide
                  clear updates and support every shipment until completion.
                </p>
              </div>

              <div className="clients-process-steps">
                <div>
                  <FiUsers />
                  <strong>Understand</strong>
                </div>

                <div>
                  <FiTruck />
                  <strong>Plan</strong>
                </div>

                <div>
                  <FiMapPin />
                  <strong>Track</strong>
                </div>

                <div>
                  <FiCheckCircle />
                  <strong>Deliver</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clients-section clients-cta-section">
          <div
            className="clients-container clients-cta-box"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="clients-cta-overlay"></div>

            <div className="clients-cta-content">
              <span>Start Moving Smarter</span>

              <h2>Want to work with Transvera?</h2>

              <p>Let’s build a dependable logistics plan for your business.</p>
            </div>

            <Link to="/contact-us" className="clients-cta-btn">
              Get Free Quote Now <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}