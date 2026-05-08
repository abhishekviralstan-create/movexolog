import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/about-us.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Movexolog | Trusted Global Logistics & Transport Partner</title>
        <meta
          name="description"
          content="Learn about Movexolog, a trusted global logistics provider offering reliable supply chain, freight, real-time tracking, express delivery and transportation solutions."
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
            <span className="about-kicker">Home  <span className="sep">&gt;</span> ABOUT US</span>
            <h1>Trusted Logistics for a Modern World</h1>
            <p>
              We provide solutions across industries as a global logistics provider you can trust to deliver.
              Supported by an extensive network of trusted partners around the world, we simplify supply chains,
              enhance performance and keep businesses moving ahead with confidence.
            </p>
          </div>
        </section>

        <section className="about-intro">
          <div className="about-grid">
            <div className="about-card red-card">
              <span>01</span>
              <h2>Our Mission</h2>
              <p>
                Our goal is to provide a proven, professional logistics solution that adds real value for our customers.
                With regards to operations, performance and responsible service, we set high standards for ourselves.
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h2>Our History</h2>
              <p>
                Started a few years ago, our company is established on more than ten- year industry experience.
                Variety Logistics has a strong team of highly trained professionals who bring extensive experience
                and collectivised knowledge from direct industry practice to deliver reliable logistics services
                and provide quality customer service.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h2>Why Choose Us</h2>
              <p>
                We cater to industries & businesses with a strong Global network of partners that enhance efficiencies
                in the supply chain. Our logistics solutions are reliable, scalable and performance-oriented because
                we work with trusted partners and rely on modern systems.
              </p>
            </div>
          </div>
        </section>

        <section className="about-extra light">
          <div className="about-two">
            <div>
              <span className="about-kicker">OUR APPROACH</span>
              <h2>Simple Logistics. Smarter Movement.
              </h2>
              <p>
                This is how we think logistics should feel – clear, quick and safe. From the planning stage to delivery, we develop our process in ways that can minimize confusion, enhance visibility & help keep your cargo moving with less lag.

              </p>
            </div>

            <div className="feature-list">
              <div>Reliable freight planning
              </div>
              <div>Clear communication
              </div>
              <div>Trusted delivery network</div>
              <div>Scalable business support</div>
            </div>
          </div>
        </section>

        <section className="about-extra dark">
          <div className="about-two reverse">
            <div className="impact-box">
              <h3>10+ Years</h3>
              <p>Industry Based Logistics Knowledge and Real-world freight experience.</p>
            </div>

            <div>
              <span className="about-kicker">OUR PEOPLE</span>
              <h2>Experienced Team. Responsible Operations.</h2>
              <p>
                There is a team behind every shipment that knows timing, documentation, safety and customer support. Our people deliver real world solutions, act with speed and gain trust for life.

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
             Irrespective of type be it road freight, inbound shipments or cross-border movement by coming to you with organized, transparent and accountable service right from the first call till delivery.

              </p>
            </div>

            <div className="promise-card">
              <h3>Performance-first logistics
</h3>
              <p>An emphasis on the safe movement of cargo, timely delivery recall and a consistent support for customers.
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
            <div className="standard-card">
              <div className="icon">◎</div>
              <h3>Real-Time Tracking</h3>
              <p>Live tracking at every step which gives a complete visibility of your shipment.</p>
            </div>

            <div className="standard-card">
              <div className="icon">✓</div>
              <h3>On-Time Delivery</h3>
              <p>Strategic planning, carefully managed operations & implementation to make sure shipments are on time onboarding.</p>
            </div>

            <div className="standard-card">
              <div className="icon">↗</div>
              <h3>Express Delivery</h3>
              <p>Time-sensitive logistics solutions that get the job done quickly, efficiently and without sacrificing reliability.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}