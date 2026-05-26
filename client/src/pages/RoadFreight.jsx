import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/roadFreight.css";

import Roadfreight from "../assets/road-freight1.jpg";
import Roadfreight1 from "../assets/road-freight3.jpg";

import {
  FiShield,
  FiClock,
  FiMapPin,
  FiUsers,
  FiTruck,
  FiCheckCircle,
  FiStar,
  FiCalendar,
  FiDollarSign,
  FiUserCheck,
  FiTrendingDown,
  FiFeather,
  FiHeadphones,
  FiArrowRight,
  FiPackage,
  FiThermometer,
  FiNavigation,
  FiLayers,
  FiPhoneCall,
} from "react-icons/fi";

const heroBg = Roadfreight;
const overviewImg = Roadfreight1;

const heroPoints = [
  {
    icon: <FiShield />,
    title: "Safe & Secure",
    desc: "Transportation",
  },
  {
    icon: <FiClock />,
    title: "On-Time",
    desc: "Delivery",
  },
  {
    icon: <FiMapPin />,
    title: "Real-Time",
    desc: "Tracking",
  },
  {
    icon: <FiUsers />,
    title: "24/7 Expert",
    desc: "Support",
  },
];

const keyFeatures = [
  {
    icon: <FiTruck />,
    title: "Full Truckload (FTL)",
    desc: "Dedicated trucks for large volume shipments with direct routing.",
  },
  {
    icon: <FiPackage />,
    title: "Less-Than-Truckload (LTL)",
    desc: "Cost-effective solutions for smaller shipments with optimized routing.",
  },
  {
    icon: <FiClock />,
    title: "Express Delivery",
    desc: "Time-critical transportation with guaranteed delivery windows.",
  },
  {
    icon: <FiThermometer />,
    title: "Temperature-Controlled Transport",
    desc: "Climate-controlled vehicles for sensitive cargo.",
  },
  {
    icon: <FiShield />,
    title: "Oversized & Heavy Haul",
    desc: "Specialized equipment for large or heavy freight.",
  },
  {
    icon: <FiMapPin />,
    title: "Last Mile Delivery",
    desc: "Direct business or residential delivery with professional service.",
  },
];

const fleetCapabilities = [
  "Modern, GPS-equipped vehicles",
  "Regular maintenance and safety inspections",
  "Various truck sizes from small vans to 53’ trailers",
  "Refrigerated and temperature-controlled units",
  "Flatbeds and specialized trailers",
  "DOT-compliant and fully insured",
];

const benefits = [
  {
    icon: <FiCalendar />,
    title: "Flexible scheduling",
    desc: "and route planning",
  },
  {
    icon: <FiDollarSign />,
    title: "Competitive pricing",
    desc: "with transparent quotes",
  },
  {
    icon: <FiTruck />,
    title: "Real-time shipment",
    desc: "tracking and updates",
  },
  {
    icon: <FiUserCheck />,
    title: "Professional,",
    desc: "trained drivers",
  },
  {
    icon: <FiTrendingDown />,
    title: "Reduced",
    desc: "transit times",
  },
  {
    icon: <FiFeather />,
    title: "Lower carbon footprint",
    desc: "with optimized routing",
  },
];

export default function RoadFreight() {
  return (
    <div className="road-page">
      <Helmet>
        <title>
          Road Freight Services - FTL & LTL Transportation | Transvera Logistics
        </title>

        <meta
          name="description"
          content="Reliable road freight services from Transvera. Full truckload (FTL), less-than-truckload (LTL), express delivery, and temperature-controlled transport. Modern fleet with GPS tracking. Request a quote today."
        />

        <meta
          name="keywords"
          content="road freight, trucking services, FTL shipping, LTL freight, overland transport, freight trucking, cargo transportation, road haulage, express delivery, temperature controlled transport"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://transvera.com/road-freight-services" />

        <meta property="og:type" content="service" />
        <meta
          property="og:title"
          content="Road Freight Services - Reliable Overland Transportation"
        />
        <meta
          property="og:description"
          content="Professional road freight solutions with FTL, LTL, and express delivery options. Modern fleet, real-time tracking, and competitive pricing."
        />
        <meta
          property="og:url"
          content="https://transvera.com/road-freight-services"
        />
        <meta property="og:site_name" content="Transvera" />
        <meta
          property="og:image"
          content="https://transvera.com/images/road-freight-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Road Freight Services | Transvera" />
        <meta
          name="twitter:description"
          content="FTL & LTL trucking with real-time tracking. Reliable overland transportation for your cargo."
        />
        <meta
          name="twitter:image"
          content="https://transvera.com/images/road-freight-twitter.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Road Freight Transportation",
            provider: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://transvera.com",
            },
            description:
              "Professional road freight services including full truckload, less-than-truckload, express delivery, and temperature-controlled transport with modern GPS-equipped fleet.",
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                price: "Contact for pricing",
              },
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="road-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="road-hero-overlay"></div>

          <div className="road-container road-hero-grid">
            <div className="road-hero-content">
              <h1>Road Freight</h1>

              <p className="road-hero-text">
                Reliable overland transportation solutions for domestic and
                regional shipments with safe handling, clear visibility and
                dependable delivery support.
              </p>

              <div className="road-hero-actions">
                <Link to="/contact-us" className="road-btn-primary">
                  Request a Quote <FiArrowRight />
                </Link>

                <Link to="/contact-us" className="road-btn-outline">
                  Contact Us <FiPhoneCall />
                </Link>
              </div>
            </div>

            <div className="road-hero-cards">
              {heroPoints.map((item) => (
                <div className="road-quick-card" key={item.title}>
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

        <section className="road-section road-overview-section">
          <div className="road-container road-overview-grid">
            <div className="road-overview-image">
              <img src={overviewImg} alt="Road freight truck transportation" />

              <div className="road-image-badge">
                <FiStar />
                <div>
                  <strong>Reliable Freight</strong>
                  <span>Across Every Mile</span>
                </div>
              </div>
            </div>

            <div className="road-overview-content">
              <span className="road-section-label">Service Overview</span>

              <h2>Fast & Reliable Overland Transportation</h2>

              <p>
                Transvera's road freight services deliver flexibility, speed, and
                reliability for your overland transportation needs. Whether you
                require full truckload (FTL), less-than-truckload (LTL), or
                specialized transport, our modern fleet and experienced drivers
                ensure your cargo is handled with the utmost care and delivered
                on schedule.
              </p>

              <div className="road-overview-stats">
                <div className="road-overview-stat">
                  <span>
                    <FiNavigation />
                  </span>
                  <h3>Optimized Routes</h3>
                  <p>Smart route planning for faster delivery movement.</p>
                </div>

                <div className="road-overview-stat">
                  <span>
                    <FiShield />
                  </span>
                  <h3>Safe Cargo</h3>
                  <p>Secure handling and careful transport operations.</p>
                </div>

                <div className="road-overview-stat">
                  <span>
                    <FiClock />
                  </span>
                  <h3>On-Time Focus</h3>
                  <p>Reliable schedules and managed delivery timelines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="road-section road-features-section">
          <div className="road-container">
            <div className="road-heading-center">
              <span>Key Features</span>
              <h2>Road Freight Solutions for Every Shipment Type</h2>
              <p>
                From full truckload to last-mile delivery, Transvera provides
                flexible road freight support with visibility, safety and
                professional handling.
              </p>
            </div>

            <div className="road-feature-grid">
              {keyFeatures.map((item) => (
                <div className="road-feature-card" key={item.title}>
                  <div className="road-feature-icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="road-section road-fleet-section">
          <div className="road-container road-fleet-box">
            <div className="road-fleet-content">
              <span className="road-section-label">Fleet Capabilities</span>

              <h2>Modern Fleet Built for Safer Road Movement</h2>

              <p>
                Our fleet capabilities support different cargo sizes, temperature
                needs and route requirements while keeping safety, compliance and
                shipment visibility at the center of every movement.
              </p>

            
            </div>

            <div className="road-fleet-list">
              {fleetCapabilities.map((item) => (
                <div className="road-fleet-item" key={item}>
                  <FiCheckCircle />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="road-section road-benefits-section">
          <div className="road-container">
            <div className="road-heading-center">
              <span>Benefits</span>
              <h2>Better Road Freight with Transparent Execution</h2>
              <p>
                Our road freight services help reduce delays, improve visibility
                and provide flexible transport support for your business.
              </p>
            </div>

            <div className="road-benefits-grid">
              {benefits.map((item) => (
                <div className="road-benefit-card" key={item.title + item.desc}>
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

        <section className="road-section road-process-section">
          <div className="road-container">
            <div className="road-process-box">
              <div>
                <span className="road-section-label">How We Work</span>

                <h2>From Pickup Planning to Final Delivery</h2>

                <p>
                  We plan the route, assign the right fleet, track the movement
                  and coordinate delivery updates so your cargo moves smoothly
                  from origin to destination.
                </p>
              </div>

              <div className="road-process-steps">
                <div>
                  <FiCalendar />
                  <strong>Schedule</strong>
                </div>

                <div>
                  <FiTruck />
                  <strong>Dispatch</strong>
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

        <section className="road-section road-support-section">
          <div className="road-container road-support-box">
            <div className="road-support-icon">
              <FiHeadphones />
            </div>

            <div>
              <span>24/7 Road Freight Support</span>

              <h2>Need Immediate Support?</h2>

              <p>
                Our expert team is available 24/7 to help you with your road
                freight requirements, shipment planning and quote requests.
              </p>
            </div>

            <Link to="/contact-us" className="road-support-btn">
              Contact Our Team <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}