import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/how-it-works.css";

const steps = [
  {
    icon: "file",
    title: "Share Shipment Details",
    desc: "Tell us your pickup location, delivery destination, cargo type, shipment size and required timeline so we can understand the movement clearly.",
  },
  {
    icon: "map",
    title: "Route & Plan Creation",
    desc: "Our team prepares a practical logistics plan with route selection, service type, documentation needs and delivery expectations.",
  },
  {
    icon: "check",
    title: "Booking Confirmation",
    desc: "Once the plan is approved, we confirm your shipment, align the required documents and prepare the cargo movement process.",
  },
  {
    icon: "truck",
    title: "Dispatch & Tracking",
    desc: "Your shipment is dispatched with clear updates, route visibility and tracking support from pickup to final destination.",
  },
  {
    icon: "shield",
    title: "Safe Cargo Handling",
    desc: "We focus on responsible handling, secure movement and careful coordination to reduce risks during transportation.",
  },
  {
    icon: "flag",
    title: "Final Delivery",
    desc: "The shipment is delivered with proper confirmation, communication and follow-up support whenever needed.",
  },
];

const benefits = [
  ["clock", "Time-focused planning"],
  ["globe", "Global partner support"],
  ["chat", "Clear communication"],
  ["bolt", "Fast execution"],
];

export default function HowItWorks() {
  return (
    <div className="how-page">
      <Helmet>
        <title>How Movexolog Works | Simple Logistics & Shipment Process</title>
        <meta
          name="description"
          content="Understand how Movexolog works from shipment details and route planning to dispatch, tracking, safe cargo handling and final delivery."
        />
        <meta
          name="keywords"
          content="how logistics works, Movexolog process, shipment booking process, freight tracking, logistics planning, cargo delivery process, road freight workflow"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <link rel="canonical" href="https://yourdomain.com/how-it-works" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="How Movexolog Works" />
        <meta
          property="og:description"
          content="A clear logistics process built around planning, booking, dispatch, tracking and reliable delivery."
        />
        <meta property="og:url" content="https://yourdomain.com/how-it-works" />
        <meta property="og:image" content="https://yourdomain.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Movexolog Shipment Process Works",
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
              name: "Movexolog",
              url: "https://yourdomain.com/",
              logo: "https://yourdomain.com/logo.png",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="how-hero">
          <div className="how-hero-content">
            <span className="how-kicker">Home  <span className="sep">&gt;</span>How We Work</span>
            <h1>A Simple Logistics Process Built for Reliable Delivery</h1>
            <p>
              Movexolog keeps shipment movement clear and organized from the first request to final delivery. Our
              workflow is designed to reduce confusion, improve visibility and keep your cargo moving with confidence.
            </p>
          </div>
        </section>

        <section className="how-intro">
          <div>
            <span className="how-kicker">Our Workflow</span>
            <h2>From Request to Delivery, Every Step Is Managed Carefully</h2>
          </div>
          <p>
            Every shipment needs planning, coordination and accountability. We follow a structured process so
            businesses can move cargo with better control, timely communication and dependable support.
          </p>
        </section>

        <section id="steps" className="steps-section">
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-card" key={step.title}>
                <div className="step-icon">
                  <Icon name={step.icon} />
                </div>
                <span className="step-count">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-head">
            <span className="how-kicker">Process Timeline</span>
            <h2>Clear Movement. Better Control.</h2>
            <p>
              Our timeline helps you understand what happens after you submit a shipment request.
            </p>
          </div>

          <div className="timeline-wrap">
            {steps.slice(0, 4).map((item, index) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-dot">{index + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefit-left">
            <span className="how-kicker">Why This Process Works</span>
            <h2>Built for Speed, Accuracy and Better Communication</h2>
            <p>
              We keep the workflow practical and business-friendly. You get route planning, shipment coordination,
              documentation guidance and tracking support in one reliable process.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map(([icon, title]) => (
              <div className="benefit-item" key={title}>
                <Icon name={icon} />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="quality-section">
          <div className="quality-card">
            <span className="how-kicker">Service Quality</span>
            <h2>We Keep Your Shipment Moving With Responsibility</h2>
            <p>
              From cargo pickup to destination delivery, our team focuses on timely action, safe handling and
              continuous communication. This helps businesses avoid unnecessary delays and keep logistics predictable.
            </p>
          </div>

          <div className="quality-points">
            <div>Route planning before dispatch</div>
            <div>Shipment status visibility</div>
            <div>Documentation coordination</div>
            <div>Delivery confirmation support</div>
          </div>
        </section>

        <section className="how-cta">
          <div>
            <span>Ready to move your shipment?</span>
            <h2>Start with a simple request and let our team handle the process.</h2>
          </div>
          <a href="/tracking">Get Free Quote Now</a>
        </section>
      </main>
    </div>
  );
}

function Icon({ name }) {
  const icons = {
    file: "M7 3h7l5 5v13H7V3zm7 0v5h5M9 13h8M9 17h6",
    map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zm0 0V3m6 18V6",
    check: "M20 6L9 17l-5-5",
    truck:
      "M3 7h11v8H3V7zm11 3h3l3 3v2h-6v-5z M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    shield: "M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z",
    flag: "M5 21V4m0 0h11l-2 4 2 4H5",
    clock:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14v5l4 2",
    globe:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm-4-10h8m-8 0c0 4 2 8 4 8s4-4 4-8m-8 0c0-4 2-8 4-8s4 4 4 8",
    chat: "M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 1 1 18-5z",
    bolt: "M13 2L4 14h7l-1 8 10-13h-7l1-7z",
  };

  return (
    <svg className="how-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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