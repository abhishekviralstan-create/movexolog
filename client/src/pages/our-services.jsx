import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/our-services.css";

const services = [
  {
    icon: "🚛",
    title: "Road Freight",
    desc: "Reliable road transport for regional and long-distance cargo movement with planned routes, safe handling and on-time delivery support.",
  },
  {
    icon: "📦",
    title: "Inbound Shipments",
    desc: "Smooth inbound logistics designed to keep your warehouse, supply chain and business operations running without unnecessary delays.",
  },
  {
    icon: "🌍",
    title: "Cross Border Shipments",
    desc: "Smart international freight movement with documentation support, customs-focused coordination and clear shipment visibility.",
  },
  {
    icon: "⚡",
    title: "Express Delivery",
    desc: "Fast movement for urgent shipments where speed, safety and accurate communication matter the most.",
  },
  {
    icon: "📡",
    title: "Real-Time Tracking",
    desc: "Shipment visibility that helps you monitor movement, route progress and delivery status with more confidence.",
  },
  {
    icon: "🛡️",
    title: "Secure Cargo Handling",
    desc: "Careful handling processes focused on protecting cargo quality, reducing risk and improving delivery reliability.",
  },
];

const process = [
  "Share your shipment details",
  "Get a planned logistics solution",
  "Confirm booking and documentation",
  "Track dispatch to final delivery",
];

export default function Services() {
  return (
    <div className="services-page">
      <Helmet>
        <title>Movexolog Services | Road Freight, Inbound & Cross Border Logistics</title>
        <meta
          name="description"
          content="Explore Movexolog logistics services including road freight, inbound shipments, cross-border transport, express delivery, real-time tracking and secure cargo handling."
        />
        <meta
          name="keywords"
          content="Movexolog services, road freight services, inbound logistics, cross border logistics, express delivery, cargo handling, shipment tracking, freight transport services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <link rel="canonical" href="https://yourdomain.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Movexolog Logistics Services" />
        <meta
          property="og:description"
          content="Reliable logistics services for road freight, inbound cargo, cross-border movement and express delivery."
        />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:image" content="https://yourdomain.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Movexolog Logistics Services",
            provider: {
              "@type": "Organization",
              name: "Movexolog",
              url: "https://yourdomain.com/",
            },
            serviceType: [
              "Road Freight",
              "Inbound Shipments",
              "Cross Border Shipments",
              "Express Delivery",
              "Real-Time Tracking",
              "Secure Cargo Handling",
            ],
            areaServed: "Worldwide",
            description:
              "Movexolog provides road freight, inbound logistics, cross-border shipment, express delivery and cargo handling services.",
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="services-hero">
          <div className="services-hero-content">
            <span className="services-kicker">Our Services</span>
            <h1>Reliable Logistics Solutions Built for Every Move</h1>
            <p>
              From road freight to cross-border shipments, Movexolog helps businesses move cargo with better planning,
              clear communication and dependable delivery support.
            </p>
          </div>
        </section>

        <section className="services-intro">
          <div className="intro-left">
            <span className="services-kicker">What We Offer</span>
            <h2>End-to-End Logistics That Keep Your Business Moving</h2>
          </div>
          <p>
            Every shipment has a purpose, timeline and responsibility. Our services are built to simplify the movement
            of goods, reduce delays and give businesses the confidence to scale with a trusted logistics partner.
          </p>
        </section>

        <section className="services-list">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-box" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <span className="service-count">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-process">
          <div className="section-head">
            <span className="services-kicker">How It Works</span>
            <h2>Simple Process. Strong Execution.</h2>
            <p>
              We keep the process practical and transparent so your shipment can move from planning to delivery with
              fewer complications.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="service-benefits">
          <div className="benefit-card">
            <span className="services-kicker">Why Movexolog</span>
            <h2>Built on Speed, Safety and Service Quality</h2>
            <p>
              Our logistics support is designed for businesses that need consistent performance, safe cargo movement
              and a team that responds when it matters. We combine practical industry experience with a dependable
              partner network to support shipments across different routes and requirements.
            </p>
          </div>

          <div className="benefit-points">
            <div>Trusted partner network</div>
            <div>Clear shipment communication</div>
            <div>Scalable freight support</div>
            <div>Reliable delivery planning</div>
          </div>
        </section>

        <section className="services-cta">
          <div>
            <span>Need a logistics partner?</span>
            <h2>Book your shipment with confidence.</h2>
          </div>
          <a href="/tracking">Get Free Quote Now</a>
        </section>
      </main>
    </div>
  );
}