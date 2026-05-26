import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/inboundShipment.css";

import Inbound from "../assets/inbound.jpg";
import Inbound2 from "../assets/inbound2.jpg";

import {
  FiUsers,
  FiMapPin,
  FiHome,
  FiFileText,
  FiTruck,
  FiCheckCircle,
  FiShield,
  FiPackage,
  FiClock,
  FiShoppingCart,
  FiMonitor,
  FiHeart,
  FiCoffee,
  FiArrowRight,
  FiPhoneCall,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

const heroBg = Inbound;
const overviewImg = Inbound2;

const quickPoints = [
  {
    icon: <FiUsers />,
    title: "Supplier Coordination",
  },
  {
    icon: <FiMapPin />,
    title: "Real-Time Tracking",
  },
  {
    icon: <FiHome />,
    title: "Warehouse Receiving",
  },
  {
    icon: <FiFileText />,
    title: "Documentation Management",
  },
];

const overviewStats = [
  {
    icon: <FiClock />,
    title: "24/7 Visibility",
    desc: "Continuous tracking and updates",
  },
  {
    icon: <FiCheckCircle />,
    title: "Accurate Inventory",
    desc: "Precise receiving and inventory control",
  },
  {
    icon: <FiTruck />,
    title: "Timely Deliveries",
    desc: "On-time performance you can rely on",
  },
];

const keyFeatures = [
  {
    icon: <FiUsers />,
    title: "Supplier Coordination",
    desc: "Direct communication with your suppliers to schedule and track shipments.",
  },
  {
    icon: <FiPackage />,
    title: "Consolidated Shipping",
    desc: "Combine multiple supplier shipments to reduce costs and improve efficiency.",
  },
  {
    icon: <FiMapPin />,
    title: "Real-Time Tracking",
    desc: "Advanced GPS and EDI systems provide 24/7 visibility of your inbound cargo.",
  },
  {
    icon: <FiShield />,
    title: "Quality Inspection",
    desc: "Pre-delivery verification to ensure products meet your specifications.",
  },
  {
    icon: <FiHome />,
    title: "Warehouse Receiving",
    desc: "Professional unloading and inventory management at your facility.",
  },
  {
    icon: <FiFileText />,
    title: "Documentation Management",
    desc: "Complete handling of paperwork, filing, and compliance documents.",
  },
];

const benefits = [
  "Reduce receiving costs by up to 30%",
  "Minimize supply chain disruptions",
  "Improve inventory accuracy",
  "Faster time-to-shelf for products",
  "Enhanced supplier performance visibility",
  "Simplified procurement processes",
];

const industries = [
  {
    icon: <FiHome />,
    title: "Manufacturing",
  },
  {
    icon: <FiShoppingCart />,
    title: "Retail",
  },
  {
    icon: <FiMonitor />,
    title: "E-commerce",
  },
  {
    icon: <FiHeart />,
    title: "Healthcare",
  },
  {
    icon: <FiTruck />,
    title: "Automotive",
  },
  {
    icon: <FiCoffee />,
    title: "Food & Beverage",
  },
];

export default function InboundShipment() {
  return (
    <div className="inbound-page">
      <Helmet>
        <title>
          Inbound Shipment Services | Receiving & Distribution Management | Transvera
        </title>

        <meta
          name="description"
          content="Expert inbound shipment management from Transvera. Streamline your receiving operations with real-time tracking, supplier coordination, and warehouse management. Reduce costs by up to 30%. Get a quote."
        />

        <meta
          name="keywords"
          content="inbound shipment, inbound logistics, receiving management, supplier coordination, warehouse receiving, inventory management, consolidated shipping, inbound freight, supply chain receiving"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://transvera.com/inbound-shipment" />

        <meta property="og:type" content="service" />
        <meta
          property="og:title"
          content="Inbound Shipment Services - Seamless Receiving Management"
        />
        <meta
          property="og:description"
          content="Optimize your receiving operations with Transvera's professional inbound shipment services. Real-time tracking, quality inspection, and cost savings."
        />
        <meta property="og:url" content="https://transvera.com/inbound-shipment" />
        <meta property="og:site_name" content="Transvera" />
        <meta
          property="og:image"
          content="https://transvera.com/images/inbound-shipment-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inbound Shipment Services | Transvera" />
        <meta
          name="twitter:description"
          content="Professional inbound logistics with real-time tracking and supplier coordination. Reduce receiving costs by 30%."
        />
        <meta
          name="twitter:image"
          content="https://transvera.com/images/inbound-shipment-twitter.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Inbound Shipment Management",
            provider: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://transvera.com",
            },
            description:
              "Professional inbound shipment services including supplier coordination, real-time tracking, quality inspection, and warehouse receiving management.",
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Inbound Shipment Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Supplier Coordination",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Consolidated Shipping",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Real-Time Tracking",
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
          className="inbound-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="inbound-hero-overlay"></div>

          <div className="inbound-container inbound-hero-grid">
            <div className="inbound-hero-content">
              <h1>Inbound Shipments</h1>

              <p className="inbound-hero-text">
                We manage every step of the inbound logistics process with
                precision and care, ensuring your goods arrive on time, in
                perfect condition, and ready for success.
              </p>

              <div className="inbound-hero-actions">
                <Link to="/contact-us" className="inbound-btn-primary">
                  Request a Quote <FiArrowRight />
                </Link>

                <Link to="/contact-us" className="inbound-btn-outline">
                  Contact Us <FiPhoneCall />
                </Link>
              </div>
            </div>

            <div className="inbound-hero-cards">
              {quickPoints.map((item) => (
                <div className="inbound-quick-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-overview-section">
          <div className="inbound-container inbound-overview-grid">
            <div className="inbound-overview-image">
              <img src={overviewImg} alt="Inbound shipment warehouse receiving" />

              <div className="inbound-image-badge">
                <FiTrendingUp />
                <div>
                  <strong>30%</strong>
                  <span>Cost Reduction Focus</span>
                </div>
              </div>
            </div>

            <div className="inbound-overview-content">
              <span className="inbound-section-label">Service Overview</span>

              <h2>Professional Inbound Logistics Built for Better Receiving</h2>

              <p>
                Our inbound shipment services are designed to optimize your
                receiving operations and streamline your supply chain from the
                moment goods leave your supplier until they arrive at your
                facility. We manage every aspect of the inbound logistics
                process, ensuring timely deliveries, accurate inventory
                management, and complete visibility throughout the journey.
              </p>

              <div className="inbound-overview-stats">
                {overviewStats.map((item) => (
                  <div className="inbound-overview-stat" key={item.title}>
                    <span>{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-features-section">
          <div className="inbound-container">
            <div className="inbound-heading-center">
              <span>Key Features</span>
              <h2>Complete Support for Every Inbound Shipment</h2>
              <p>
                From supplier coordination to documentation, our team manages
                every detail with visibility, control and dependable execution.
              </p>
            </div>

            <div className="inbound-feature-grid">
              {keyFeatures.map((item) => (
                <div className="inbound-feature-card" key={item.title}>
                  <div className="inbound-feature-icon">{item.icon}</div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-benefits-section">
          <div className="inbound-container inbound-benefits-box">
            <div className="inbound-benefits-content">
              <span className="inbound-section-label">Benefits</span>

              <h2>Measurable Improvements for Your Supply Chain</h2>

              <p>
                Our inbound shipment solutions deliver measurable improvements
                that strengthen your supply chain and drive business growth.
              </p>

            </div>

            <div className="inbound-benefits-grid">
              {benefits.map((item) => (
                <div className="inbound-benefit-card" key={item}>
                  <FiCheckCircle />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-industries-section">
          <div className="inbound-container">
            <div className="inbound-heading-center">
              <span>Industries Served</span>
              <h2>Inbound Logistics for Growing Businesses</h2>
              <p>
                Flexible inbound logistics support for manufacturers, retailers,
                e-commerce brands, healthcare operations and more.
              </p>
            </div>

            <div className="inbound-industries-grid">
              {industries.map((item) => (
                <div className="inbound-industry-card" key={item.title}>
                  <div>{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-process-section">
          <div className="inbound-container">
            <div className="inbound-process-box">
              <div>
                <span className="inbound-section-label">How We Work</span>

                <h2>From Supplier Pickup to Warehouse Receiving</h2>

                <p>
                  We align supplier schedules, manage documentation, track cargo
                  movement and coordinate warehouse receiving so your inbound
                  shipments reach the right place at the right time.
                </p>
              </div>

              <div className="inbound-process-steps">
                <div>
                  <FiUsers />
                  <strong>Coordinate</strong>
                </div>

                <div>
                  <FiLayers />
                  <strong>Consolidate</strong>
                </div>

                <div>
                  <FiMapPin />
                  <strong>Track</strong>
                </div>

                <div>
                  <FiHome />
                  <strong>Receive</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="inbound-section inbound-cta-section">
          <div className="inbound-container inbound-cta-box">
            <div>
              <span>Start Moving Smarter</span>

              <h2>Ready to Streamline Your Inbound Logistics?</h2>

              <p>
                Partner with Transvera for reliable, efficient, and transparent
                inbound shipment solutions tailored to your business.
              </p>
            </div>

            <Link to="/contact-us" className="inbound-cta-btn">
              Get Free Quote <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}