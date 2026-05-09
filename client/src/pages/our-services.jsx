import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/our-services.css";
import service1 from "../assets/1.png";
import service2 from "../assets/2.png";
import service3 from "../assets/3.png";

import process1 from "../assets/process1.png";
import process2 from "../assets/process1.png";
import process3 from "../assets/process1.png";
import process4 from "../assets/process1.png";

const services = [
  {
    icon: "box",

    title: "Inbound Shipments",

    image: service1,

    desc: "Smooth inbound logistics designed to keep your warehouse, supply chain and business operations running without unnecessary delays.",
  },

  {
    icon: "road",

    title: "Road Freight",

    image: service2,

    desc: "Reliable road transport for regional and long-distance cargo movement with planned routes, safe handling and on-time delivery support.",
  },

  {
    icon: "globe",

    title: "Cross Border Shipments",

    image: service3,

    desc: "Smart international freight movement with documentation support, customs-focused coordination and clear shipment visibility.",
  },
];

const process = [
  {
    icon: "details",
    title: "Submit Your Requirements",
    image: process1,
  },

  {
    icon: "plan",
    title: "Get a Tailored Logistics Strategy",
    image: process2,
  },

  {
    icon: "check",
    title: "Approve Booking & Documentation",
    image: process3,
  },

  {
    icon: "truck",
    title: "Monitor Every Mile Until Safe Delivery",
    image: process4,
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <Helmet>
        <title>Movexolog Services | Road Freight, Inbound & Cross Border Logistics</title>
        <meta
          name="description"
          content="Explore Movexolog logistics services including road freight, inbound shipments, cross-border transport tracking and secure cargo handling."
        />
        <meta
          name="keywords"
          content="Movexolog services, road freight services, inbound logistics, cross border logistics, express delivery, cargo handling, shipment tracking, freight transport services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <link rel="canonical" href="https://www.movexolog.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Movexolog Logistics Services" />
        <meta
          property="og:description"
          content="Reliable logistics services for road freight, inbound cargo, cross-border movement and express delivery."
        />
        <meta property="og:url" content="https://www.movexolog.com/services" />
        <meta property="og:image" content="https://www.movexolog.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Movexolog Logistics Services",
            provider: {
              "@type": "Organization",
              name: "Movexolog",
              url: "https://www.movexolog.com/",
            },
            serviceType: services.map((item) => item.title),
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
            <span className="services-kicker">Home  <span className="sep">&gt;</span>  Our Services</span>
            <h1>Reliable Logistics for a Fast-Moving World </h1>
            <p>
              From road freight to cross-border shipments, Movexolog enables businesses to move the load with advanced planning, seamless communication and reliable delivery support.

            </p>
          </div>
        </section>

        <section className="services-intro">
          <div>
            <span className="services-kicker">What We Offer</span>
            <h2>End-to-End Logistics That Keep Your Business Moving </h2>
          </div>
          <p>
            Each shipment has an intent, schedule and accountability. Designed to facilitate the flow of goods, eliminate downtime, and provide businesses with the assurance they need to scale in a safe manner with a logistics partner they can rely on.

          </p>
        </section>
        <section id="services-list" className="services-list">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className="service-box"
                key={service.title}
                style={{
                  backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.72),
              rgba(0,0,0,0.86)
            ),
            url(${service.image})
          `,
                }}
              >
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>

                <span className="service-count">
                  {String(index + 1).padStart(2, "0")}
                </span>

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
              By serving as an intermediary, we keep the process practical and transparent so your shipment can experience less complications from planning to delivery.

            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div
                className="process-card"
                key={item.title}
                style={{
                  backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.72),
            rgba(0,0,0,0.86)
          ),
          url(${item.image})
        `,
                }}
              >
                <div className="process-icon">
                  <Icon name={item.icon} />
                </div>

                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="service-benefits">
          <div className="benefit-card">
            <span className="services-kicker">Why Movexolog</span>
            <h2>Powered by Speed. Trusted for Safety. </h2>
            <p>
              Our logistics support are premium for those businesses for whom - consistent performance, safe movement of cargo and an able team responding at the crucial moment matters. We bring both practical experience in the field as well as a reliable network of partners to help ensure that shipments can go out on other routes and with different specifications.
            </p>
          </div>

          <div className="benefit-points">
            <div><Icon name="network" /> Trusted partner network</div>
            <div><Icon name="chat" /> Clear shipment communication</div>
            <div><Icon name="scale" /> Scalable freight support</div>
            <div><Icon name="route" /> Reliable delivery planning</div>
          </div>
        </section>

        <section className="services-cta">
          <div>
            <span>Need a logistics partner?</span>
            <h2>Book your shipment with confidence.</h2>
          </div>
          <a href="/contact-us">Get Free Quote Now</a>
        </section>
      </main>
    </div>
  );
}

function Icon({ name }) {
  const icons = {
    road: "M3 17h18M5 17l2-8h10l2 8M9 17l1-8M15 17l-1-8M7 21h10",
    box: "M4 7l8-4 8 4-8 4-8-4zm0 0v10l8 4 8-4V7",
    globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm-4-10h8m-8 0c0 4 2 8 4 8s4-4 4-8m-8 0c0-4 2-8 4-8s4 4 4 8",
    bolt: "M13 2L4 14h7l-1 8 10-13h-7l1-7z",
    radar: "M12 20v-2m0-4v-2m0-4V6m-7 8a7 7 0 0 1 14 0M2 14a10 10 0 0 1 20 0",
    shield: "M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z",
    details: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    plan: "M9 18l6-12M4 6h16M4 18h16M7 6l2 12m8-12l-2 12",
    check: "M20 6L9 17l-5-5",
    truck: "M3 7h11v8H3V7zm11 3h3l3 3v2h-6v-5z M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    network: "M12 12l7-4M12 12l-7-4M12 12v8M5 8V4h4m10 4V4h-4M9 20h6",
    chat: "M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 1 1 18-5z",
    scale: "M12 3v18M5 7h14M6 7l-3 6h6L6 7zm12 0l-3 6h6l-3-6z",
    route: "M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.5 14.5l7-5",
  };

  return (
    <svg className="service-svg-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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