import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/clients.css";

const clientTypes = [
  {
    icon: "store",
    title: "Retail & E-Commerce",
    desc: "Trustful shipping assistance for open air internet business, retail providers and undertaking world.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    desc: "Raw materials and finished goods + the far more structured logistics of regular supply chain movement.",
  },
  {
    icon: "globe",
    title: "Import & Export",
    desc: "Cross-border logistics scheduling for firms moving goods between regions and markets.",
  },
  {
    icon: "box",
    title: "Warehousing Partners",
    desc: "Support for inbound and outbound movement for warehouse-driven operations.",
  },
];

const benefits = [
  ["truck", "Reliable freight movement"],
  ["clock", "Timely delivery coordination"],
  ["shield", "Secure cargo handling"],
  ["chat", "Clear communication"],
];

export default function Clients() {
  return (
    <div className="clients-page">
      <Helmet>
        <title>Movexolog Clients | Trusted Logistics Partner for Businesses</title>
        <meta
          name="description"
          content="Movexolog supports clients across retail, manufacturing, import-export, warehousing and supply chain operations with reliable logistics solutions."
        />
        <meta
          name="keywords"
          content="Movexolog clients, logistics clients, freight partners, supply chain clients, business logistics, transport partner, cargo delivery clients"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <link rel="canonical" href="https://www.movexolog.com/clients" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Movexolog Clients | Trusted Logistics Partner" />
        <meta
          property="og:description"
          content="Explore how Movexolog supports businesses with reliable, scalable and transparent logistics services."
        />
        <meta property="og:url" content="https://www.movexolog.com/clients" />
        <meta property="og:image" content="https://www.movexolog.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Movexolog Clients",
            url: "https://www.movexolog.com/clients",
            description:
              "Movexolog works with clients across retail, manufacturing, import-export and warehouse operations.",
            publisher: {
              "@type": "Organization",
              name: "Movexolog",
              logo: "https://www.movexolog.com/logo.png",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="clients-hero">
          <div className="clients-hero-content">
            <span className="clients-kicker">Home  <span className="sep">&gt;</span> Our Clients</span>
            <h1>Trusted by Businesses That Need Reliable Movement</h1>
            <p>
              Movexolog works with businesses that depend on safe cargo handling,
              timely movement and clear logistics communication from dispatch to delivery.
            </p>
          </div>
        </section>

        <section className="clients-intro">
          <div>
            <span className="clients-kicker">Who We Support</span>
            <h2>Built to Support Growing & Established Businesses</h2>
          </div>
          <p>
           Movexolog caters to companies that rely on accurate cargo handlings, timely movement, and transparency in the logistics chain from dispatching to delivery.

          </p>
        </section>

        <section className="client-types-section">
          <div className="client-types-grid">
            {clientTypes.map((item, index) => (
              <div className="client-card" key={item.title}>
                <div className="client-icon">
                  <Icon name={item.icon} />
                </div>
                <span className="client-count">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="client-trust-section">
          <div className="trust-content">
            <span className="clients-kicker">Why Clients Choose Us</span>
            <h2>Constructed upon Foundations of Trust, Clarity and Longevity</h2>
            <p>
              We know that logistics is not just about moving goods. So it is not just about timelines but also reducing operational pressure and putting client minds at ease that every shipment is being dealt with responsibly.

            </p>
          </div>

          <div className="trust-points">
            {benefits.map(([icon, text]) => (
              <div className="trust-point" key={text}>
                <Icon name={icon} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="client-stats-section">
          <div className="section-head">
            <span className="clients-kicker">Client Confidence</span>
            <h2>Consistent Support for Business Logistics</h2>
          </div>

          <div className="client-stats-grid">
            <div className="client-stat">
              <h3>98%</h3>
              <p>On-time coordination focus</p>
            </div>
            <div className="client-stat">
              <h3>24/7</h3>
              <p>Support availability</p>
            </div>
            <div className="client-stat">
              <h3>10+</h3>
              <p>Years industry experience</p>
            </div>
            <div className="client-stat">
              <h3>Global</h3>
              <p>Partner network reach</p>
            </div>
          </div>
        </section>

        <section className="client-message-section">
          <div className="message-card">
            <span className="clients-kicker">Partnership Mindset</span>
            <h2>We Treat Every Client Shipment Like a Responsibility
</h2>
            <p>
              Our goal remains unchanged: to communicate clearly, offer dependable planning and provide a responsible flow of cargo – from first-time clients to long term business partners.

            </p>
          </div>
        </section>

        <section className="clients-cta">
          <div>
            <span>Want to work with Movexolog?</span>
            <h2>Let’s build a dependable logistics plan for your business.</h2>
          </div>
          <a href="/tracking">Get Free Quote Now</a>
        </section>
      </main>
    </div>
  );
}

function Icon({ name }) {
  const icons = {
    store:
      "M4 10h16l-1-5H5l-1 5zm1 0v10h14V10M8 14h3v6",
    factory:
      "M3 21V9l6 4V9l6 4V5h6v16H3zm14-10h2m-2 4h2",
    globe:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm-4-10h8m-8 0c0 4 2 8 4 8s4-4 4-8m-8 0c0-4 2-8 4-8s4 4 4 8",
    box:
      "M4 7l8-4 8 4-8 4-8-4zm0 0v10l8 4 8-4V7",
    truck:
      "M3 7h11v8H3V7zm11 3h3l3 3v2h-6v-5z M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    clock:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14v5l4 2",
    shield:
      "M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z",
    chat:
      "M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 1 1 18-5z",
  };

  return (
    <svg className="clients-svg-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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