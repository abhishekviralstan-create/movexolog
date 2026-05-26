import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/how-it-works.css";

import heroBg from "../assets/dispatch.jpg";
import ctaBg from "../assets/cargo.jpg";

import {
  FiClipboard,
  FiMapPin,
  FiCalendar,
  FiTruck,
  FiShield,
  FiPackage,
  FiClock,
  FiGlobe,
  FiMessageCircle,
  FiZap,
  FiMonitor,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall,
  FiNavigation,
  FiLayers,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiClipboard />,
    title: "Share Shipment Details",
    desc: "Share pickup location, delivery destination, cargo type, shipment size and delivery timeline so our team can understand your logistics requirement clearly.",
  },
  {
    icon: <FiMapPin />,
    title: "Route & Plan Creation",
    desc: "Our logistics team prepares the best route, service type, documentation needs and delivery plan based on your shipment requirement.",
  },
  {
    icon: <FiCalendar />,
    title: "Booking Confirmation",
    desc: "Once the plan is approved, we confirm your booking and coordinate the required documents for smooth cargo movement.",
  },
  {
    icon: <FiTruck />,
    title: "Dispatch & Tracking",
    desc: "Your shipment is dispatched with clear updates, route visibility and tracking support from pickup to final destination.",
  },
  {
    icon: <FiShield />,
    title: "Safe Cargo Handling",
    desc: "We focus on careful handling, safety checks and controlled coordination to reduce risk during shipment movement.",
  },
  {
    icon: <FiPackage />,
    title: "Final Delivery",
    desc: "The shipment is delivered with proper confirmation, clear communication and required follow-up support.",
  },
];

const benefits = [
  {
    icon: <FiClock />,
    title: "Time-focused planning",
    desc: "We plan every step with accurate timing and route selection.",
  },
  {
    icon: <FiGlobe />,
    title: "Global partner support",
    desc: "We work with trusted partners to support wider delivery needs.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Clear communication",
    desc: "You get regular updates and transparent information always.",
  },
  {
    icon: <FiZap />,
    title: "Fast execution",
    desc: "We move quickly with accuracy and ensure timely delivery.",
  },
];

const qualityPoints = [
  {
    icon: <FiMapPin />,
    title: "Route planning before dispatch",
    desc: "We plan the best route based on safety, time and delivery needs.",
  },
  {
    icon: <FiMonitor />,
    title: "Shipment status visibility",
    desc: "You get tracking updates at every important stage of the shipment.",
  },
  {
    icon: <FiFileText />,
    title: "Documentation coordination",
    desc: "We handle documents properly for smooth and hassle-free movement.",
  },
  {
    icon: <FiShield />,
    title: "Delivery confirmation support",
    desc: "We confirm delivery and provide proper updates for complete clarity.",
  },
];

const heroCards = [
  {
    icon: <FiClipboard />,
    title: "Clear Workflow",
  },
  {
    icon: <FiShield />,
    title: "Safe Handling",
  },
  {
    icon: <FiMonitor />,
    title: "Live Visibility",
  },
  {
    icon: <FiCheckCircle />,
    title: "Trusted Delivery",
  },
];

export default function HowItWorks() {
  return (
    <div className="how-page">
      <Helmet>
        <title>How Transvera Works | Simple Logistics & Shipment Process</title>

        <meta
          name="description"
          content="Understand how Transvera works from shipment details and route planning to dispatch, tracking, safe cargo handling and final delivery."
        />

        <meta
          name="keywords"
          content="how logistics works, Transvera process, shipment booking process, freight tracking, logistics planning, cargo delivery process, road freight workflow"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />

        <link rel="canonical" href="https://www.transvera.com/how-it-works" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="How Transvera Works" />

        <meta
          property="og:description"
          content="A clear logistics process built around planning, booking, dispatch, tracking and reliable delivery."
        />

        <meta property="og:url" content="https://www.transvera.com/how-it-works" />
        <meta property="og:image" content="https://www.transvera.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Transvera Shipment Process Works",
            description:
              "A step-by-step logistics process for booking, planning, dispatching, tracking and delivering shipments.",
            step: steps.map((item, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: item.title,
              text: item.desc,
            })),
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
        <section
          className="how-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="how-hero-overlay"></div>

          <div className="how-container how-hero-grid">
            <div className="how-hero-content">
             

              <h1>Delivering Trust.</h1>

              <p className="how-hero-text">
                From the first request until delivery, Transvera keeps shipment
                movement clear and organized. Our workflow reduces confusion,
                improves visibility and moves your cargo with confidence.
              </p>

              <div className="how-hero-actions">
                <Link to="/contact-us" className="how-btn-primary">
                  Get Free Quote <FiArrowRight />
                </Link>

                <Link to="/contact-us" className="how-btn-outline">
                  Contact Us <FiPhoneCall />
                </Link>
              </div>
            </div>

            <div className="how-hero-cards">
              {heroCards.map((item) => (
                <div className="how-quick-card" key={item.title}>
                  <span>{item.icon}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section how-workflow-section">
          <div className="how-container">
            <div className="how-heading-center">
              <span>Our Workflow</span>
              <h2>From Request to Delivery, Handled with Precision</h2>
              <p>
                Every shipment requires planning, coordination and accountability.
                Our process helps businesses move cargo with better visibility,
                timely updates and reliable support.
              </p>
            </div>

            <div className="how-steps-grid">
              {steps.map((step, index) => (
                <div className="how-step-card" key={step.title}>
                  <span className="how-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="how-step-icon">{step.icon}</div>

                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section how-process-section">
          <div className="how-container">
            <div className="how-process-box">
              <div>
                <span className="how-section-label">Process Timeline</span>

                <h2>Smarter Movement. Stronger Control.</h2>

                <p>
                  Our timeline helps you understand what happens after you submit
                  a shipment request. We plan, confirm, dispatch and track every
                  movement with proper coordination.
                </p>
              </div>

              <div className="how-process-steps">
                <div>
                  <FiClipboard />
                  <strong>Request</strong>
                </div>

                <div>
                  <FiNavigation />
                  <strong>Plan</strong>
                </div>

                <div>
                  <FiTruck />
                  <strong>Dispatch</strong>
                </div>

                <div>
                  <FiCheckCircle />
                  <strong>Deliver</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section how-benefits-section">
          <div className="how-container how-benefits-box">
            <div className="how-benefits-content">
              <span className="how-section-label">Why This Process Works</span>

              <h2>Fast Execution. Accurate Delivery. Better Coordination.</h2>

              <p>
                We keep the process simple and business-friendly with route
                planning, shipment coordination, documentation guidance and
                tracking support in one trusted workflow.
              </p>

             
            </div>

            <div className="how-benefits-grid">
              {benefits.map((item) => (
                <div className="how-benefit-card" key={item.title}>
                  <span>{item.icon}</span>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section how-quality-section">
          <div className="how-container">
            <div className="how-heading-center">
              <span>Service Quality</span>
              <h2>Moving Every Shipment with Care & Responsibility</h2>
              <p>
                Our team works with timely action, safe handling and continuous
                communication from cargo pickup to destination delivery.
              </p>
            </div>

            <div className="how-quality-grid">
              {qualityPoints.map((item) => (
                <div className="how-quality-card" key={item.title}>
                  <div className="how-quality-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section how-cta-section">
          <div
            className="how-container how-cta-box"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="how-cta-overlay"></div>

            <div className="how-cta-content">
              <span>Start Moving Smarter</span>

              <h2>Ready to move your shipment?</h2>

              <p>Start with a request. We’ll handle the rest.</p>
            </div>

            <Link to="/contact-us" className="how-cta-btn">
              Get Free Quote Now <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}