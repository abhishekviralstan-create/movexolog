import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/about-us.css";

import missionBg from "../assets/mission.png";
import historyBg from "../assets/history.png";
import chooseBg from "../assets/choose.png";

import trackingBg from "../assets/tracking.jpg";
import deliveryBg from "../assets/on-time.jpg";
import expressBg from "../assets/delivery.jpg";

export default function AboutUs() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Movexolog | Trusted Global Logistics & Transport Partner</title>

        <meta
          name="description"
          content="Learn about Movexolog, a trusted global logistics provider offering reliable supply chain transportation solutions."
        />

        <meta
          name="keywords"
          content="about Movexolog, logistics company, global logistics provider, freight company, supply chain solutions, transport agency, express delivery, real-time tracking"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <link rel="canonical" href="https://www.movexolog.com/about" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Movexolog | Trusted Global Logistics Provider" />
        <meta
          property="og:description"
          content="Movexolog provides reliable, scalable and performance-focused logistics solutions backed by trusted global partners."
        />
        <meta property="og:url" content="https://www.movexolog.com/about" />
        <meta property="og:image" content="https://www.movexolog.com/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Movexolog Logistics" />
        <meta
          name="twitter:description"
          content="Trusted logistics solutions for modern businesses with real-time tracking, express delivery and global freight support."
        />
        <meta name="twitter:image" content="https://www.movexolog.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Movexolog",
            url: "https://www.movexolog.com/about",
            publisher: {
              "@type": "Organization",
              name: "Movexolog",
              logo: "https://www.movexolog.com/logo.png",
            },
            description:
              "Movexolog is a trusted global logistics provider delivering scalable, reliable and performance-oriented freight and supply chain solutions.",
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-kicker">
              Home <span className="sep">&gt;</span> ABOUT US
            </span>

            <h1>Trusted Logistics for a Modern World</h1>

            <p>
              We provide logistics solutions across industries with a strong focus on
              safety, timing and dependable execution. Supported by a trusted partner
              network, Movexolog simplifies freight movement, improves visibility and
              helps businesses move ahead with confidence.
            </p>
          </div>
        </section>

        <section className="about-intro">
          <div className="about-grid">
            <div
              className="about-card"
              style={{
                backgroundImage: `
    linear-gradient(
      rgba(160,0,0,0.72),
      rgba(35,0,0,0.88)
    ),
    url(${missionBg})
  `,
              }}
            >
              <span>01</span>
              <h2>Our Mission</h2>
              <p>
                Our mission is to make logistics simple, reliable and
                performance-driven for every business we serve. We focus on safe
                cargo movement, clear communication and timely delivery so our
                clients can operate with confidence.
              </p>
            </div>

            <div
              className="about-card"
              style={{
                backgroundImage: `
                linear-gradient(
  rgba(15,0,0,0.72),
  rgba(0,0,0,0.82)
),
                  url(${historyBg})
                `,
              }}
            >
              <span>02</span>
              <h2>Our History</h2>
              <p>
                Movexolog was built on more than ten years of practical logistics
                and freight experience. Over time, our team has developed strong
                industry knowledge, reliable processes and a service approach
                focused on trust, discipline and execution.
              </p>
            </div>

            <div
              className="about-card"
              style={{
                backgroundImage: `
                linear-gradient(
  rgba(15,0,0,0.72),
  rgba(0,0,0,0.82)
),
                  url(${chooseBg})
                `,
              }}
            >
              <span>03</span>
              <h2>Why Choose Us</h2>
              <p>
                Businesses choose Movexolog because we combine planning, partner
                strength and real-time support. Whether it is road freight,
                inbound logistics or cross-border shipments, we work with
                accountability from pickup to delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="about-extra light">
          <div className="about-two">
            <div>
              <span className="about-kicker">OUR APPROACH</span>
              <h2>Simple Logistics. Smarter Movement.</h2>
              <p>
                This is how we think logistics should feel — clear, quick and safe.
                From planning to final delivery, we build every process to reduce
                confusion, improve visibility and keep your cargo moving with fewer
                delays.
              </p>
            </div>

            <div className="feature-list">
              <div>Reliable freight planning</div>
              <div>Clear communication</div>
              <div>Trusted delivery network</div>
              <div>Scalable business support</div>
            </div>
          </div>
        </section>

        <section className="about-extra dark">
          <div className="about-two reverse">
            <div className="impact-box">
              <h3>10+ Years</h3>
              <p>Industry-based logistics knowledge and real-world freight experience.</p>
            </div>

            <div>
              <span className="about-kicker">OUR PEOPLE</span>
              <h2>Experienced Team. Responsible Operations.</h2>
              <p>
                Behind every shipment is a team that understands timing,
                documentation, safety and customer support. Our people deliver
                practical solutions, respond quickly and build long-term trust
                through responsible operations.
              </p>
            </div>
          </div>
        </section>

        <section className="about-extra light">
          <div className="about-two">
            <div>
              <span className="about-kicker">OUR PROMISE</span>
              <h2>Built for Businesses That Need Dependability.</h2>
              <p>
                Whether it is road freight, inbound shipments or cross-border
                movement, we provide organized, transparent and accountable
                logistics support from the first call to the final delivery.
              </p>
            </div>

            <div className="promise-card">
              <h3>Performance-first logistics</h3>
              <p>
                A consistent focus on safe cargo movement, timely delivery and
                dependable customer support.
              </p>
            </div>
          </div>
        </section>

        <section className="standards-section">
          <div className="section-head">
            <span className="about-kicker">Working Standards</span>
            <h2>Built on Discipline. Driven by Results.</h2>
          </div>

          <div className="standards-grid">
            <div
              className="standard-card"
              style={{
                backgroundImage: `
                linear-gradient(
  rgba(15,0,0,0.72),
  rgba(0,0,0,0.82)
),
                  url(${trackingBg})
                `,
              }}
            >
              <div className="icon">◎</div>
              <h3>Real-Time Tracking</h3>
              <p>
                Live tracking at every step gives complete visibility of your
                shipment movement.
              </p>
            </div>

            <div
              className="standard-card"
              style={{
                backgroundImage: `
                linear-gradient(
  rgba(15,0,0,0.72),
  rgba(0,0,0,0.82)
),
                  url(${deliveryBg})
                `,
              }}
            >
              <div className="icon">✓</div>
              <h3>On-Time Delivery</h3>
              <p>
                Strategic planning and managed operations help ensure shipments
                reach the destination on schedule.
              </p>
            </div>

            <div
              className="standard-card"
              style={{
                backgroundImage: `
            linear-gradient(
  rgba(15,0,0,0.72),
  rgba(0,0,0,0.82)
),
                  url(${expressBg})
                `,
              }}
            >
              <div className="icon">↗</div>
              <h3>Express Delivery</h3>
              <p>
                Time-sensitive logistics support built for speed, efficiency and
                reliability.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}