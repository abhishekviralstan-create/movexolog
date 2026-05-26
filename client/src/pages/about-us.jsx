import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "../css/about-us.css";
import about from "../assets/about-us-page.png";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.avif";
import {
  FiTarget,
  FiCalendar,
  FiUsers,
  FiBox,
  FiShield,
  FiCpu,
  FiUserCheck,
  FiAward,
  FiMapPin,
  FiCheckCircle,
  FiArrowUpRight,
  FiHelpCircle,
  FiChevronDown,
  FiChevronUp,
  FiClock,
  FiNavigation,
  FiTruck,
  FiGlobe,
  FiArrowRight,
} from "react-icons/fi";

const heroTruck = about;

const img1 =about3;

const img2 =about2;

const img3 =about1;

const introCards = [
  {
    number: "01",
    title: "Our Mission",
    text: "Our mission is to make logistics simple, reliable and performance-driven for every business we serve. We focus on safe cargo movement, clear communication and timely delivery so our clients can operate with confidence.",
    icon: <FiTarget />,
  },
  {
    number: "02",
    title: "Our History",
    text: "Transvera was built on more than ten years of practical logistics and freight experience. Over time, our team has developed strong industry knowledge, reliable processes and a service approach focused on trust, discipline and execution.",
    icon: <FiCalendar />,
  },
  {
    number: "03",
    title: "Why Choose Us",
    text: "Businesses choose Transvera because we combine planning, partner strength and real-time support. Whether it is road freight, inbound logistics or cross-border shipments, we work with accountability from pickup to delivery.",
    icon: <FiUsers />,
  },
];

const approachFeatures = [
  "Reliable freight planning",
  "Clear communication",
  "Trusted delivery network",
  "Scalable business support",
];

const chooseList = [
  {
    icon: <FiBox />,
    title: "Industry Experience",
    text: "With decades of combined experience in logistics and transportation, our team brings deep expertise to every shipment.",
  },
  {
    icon: <FiCpu />,
    title: "Technology-Driven",
    text: "Advanced tracking systems, automated documentation and real-time reporting keep you informed at every stage.",
  },
  {
    icon: <FiUserCheck />,
    title: "Customer-Focused",
    text: "Dedicated account managers provide personalized service and proactive communication throughout your shipping journey.",
  },
  {
    icon: <FiShield />,
    title: "Reliability Guaranteed",
    text: "On-time delivery rates exceeding 98% and comprehensive insurance coverage for peace of mind.",
  },
  {
    icon: <FiAward />,
    title: "Competitive Pricing",
    text: "Transparent pricing models with no hidden fees, plus volume discounts for regular customers.",
  },
];

const standards = [
  {
    icon: <FiMapPin />,
    title: "Real-Time Tracking",
    text: "Live tracking at every step gives complete visibility of your shipment movement.",
  },
  {
    icon: <FiCheckCircle />,
    title: "On-Time Delivery",
    text: "Strategic planning and managed operations help ensure shipments reach the destination on schedule.",
  },
  {
    icon: <FiArrowUpRight />,
    title: "Express Delivery",
    text: "Time-sensitive logistics support built for speed, efficiency and reliability.",
  },
];

const heroStats = [
  {
    value: "98%",
    label: "On-time focus",
  },
  {
    value: "24/7",
    label: "Shipment support",
  },
  {
    value: "10+",
    label: "Years experience",
  },
];

const faqs = [
  {
    question: "What types of cargo do you handle?",
    answer:
      "We handle a wide variety of cargo including general freight, temperature-sensitive goods, oversized items, hazardous materials (with proper certification), and high-value products. Each shipment is assessed individually to ensure proper handling and compliance.",
  },
  {
    question: "What are your delivery timeframes?",
    answer:
      "Delivery times vary based on service type and distance. Road freight typically delivers within 1–5 business days domestically. Cross-border shipments depend on customs processing but generally complete within 3–10 business days. Express services are available for time-critical shipments.",
  },
  {
    question: "How do customs and duties work for cross-border shipments?",
    answer:
      "Our customs brokerage team manages all aspects of customs clearance, including documentation preparation, duty calculation, and compliance verification. Duties and taxes are typically paid by the importer unless other arrangements are specified in your shipping agreement.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "All Transvera shipments come with real-time tracking capabilities. You'll receive a unique tracking number and can monitor your shipment’s progress through our online portal or mobile app 24/7.",
  },
  {
    question: "Do you provide insurance?",
    answer:
      "Yes, all shipments include basic cargo insurance. Additional coverage options are available for high-value or sensitive cargo. Our team can help you determine the appropriate insurance level for your shipment.",
  },
];

export default function AboutUs() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="about-page-tv">
      <Helmet>
        <title>About Us | Trusted Logistics Partner | Transvera</title>
        <meta
          name="description"
          content="Learn more about Transvera, a trusted logistics company offering dependable freight, shipment visibility, road freight, inbound shipments and cross-border logistics solutions."
        />
        <meta
          name="keywords"
          content="about transvera, logistics company, freight solutions, road freight, inbound shipments, cross border shipping, transport company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Transvera" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Transvera | Trusted Logistics for a Modern World"
        />
        <meta
          property="og:description"
          content="Transvera delivers reliable logistics solutions with visibility, safety and dependable execution for businesses across industries."
        />
        <meta property="og:url" content="https://transvera.com/about" />
        <meta property="og:site_name" content="Transvera" />
        <link rel="canonical" href="https://transvera.com/about" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Transvera",
            url: "https://transvera.com/about",
            description:
              "Transvera is a trusted logistics provider delivering dependable freight, road transport, inbound shipment and cross-border shipping solutions.",
            publisher: {
              "@type": "Organization",
              name: "Transvera",
              url: "https://transvera.com",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="about-main-tv">
        <section className="about-hero-tv">
          <div className="about-hero-overlay-tv"></div>

          <div className="about-container-tv about-hero-grid-tv">
            <div className="about-hero-content-tv">
           

              <h1>Trusted Logistics for a Modern World</h1>

              <p>
                We provide logistics solutions across industries with a strong
                focus on safety, timing and dependable execution. Supported by a
                trusted partner network, Transvera simplifies freight movement,
                improves visibility and helps businesses move ahead with
                confidence.
              </p>

              <div className="about-hero-actions-tv">
                <Link to="/contact-us" className="about-primary-btn-tv">
                  Get Free Quote <FiArrowRight />
                </Link>

                <Link to="/services/road-freight" className="about-secondary-btn-tv">
                  Explore Services
                </Link>
              </div>

              <div className="about-hero-stats-tv">
                {heroStats.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-hero-visual-tv">
              <div className="about-hero-image-tv">
                <img src={heroTruck} alt="Transvera logistics truck" />
              </div>

              <div className="about-floating-card-tv about-floating-one-tv">
                <FiNavigation />
                <div>
                  <strong>Smart Routing</strong>
                  <span>Better planning</span>
                </div>
              </div>

              <div className="about-floating-card-tv about-floating-two-tv">
                <FiTruck />
                <div>
                  <strong>Reliable Freight</strong>
                  <span>Safe movement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cards-section-tv">
          <div className="about-container-tv">
            <div className="about-cards-grid-tv">
              {introCards.map((card) => (
                <div className="about-info-card-tv" key={card.number}>
                  <span className="about-card-number-tv">{card.number}</span>

                  <div className="about-card-icon-tv">{card.icon}</div>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-story-section-tv">
          <div className="about-container-tv about-story-grid-tv">
            <div className="about-story-images-tv">
              <div className="about-story-main-image-tv">
                <img src={img1} alt="Logistics warehouse operations" />
              </div>

              <div className="about-story-small-grid-tv">
                <img src={img2} alt="Experienced logistics team" />
                <img src={img3} alt="Road freight truck" />
              </div>

              <div className="about-story-badge-tv">
                <FiGlobe />
                <div>
                  <strong>Global Partner Network</strong>
                  <span>Built for scalable shipment support</span>
                </div>
              </div>
            </div>

            <div className="about-story-content-tv">
              <span className="section-badge-tv">Our Approach</span>

              <h2>Simple Logistics. Smarter Movement.</h2>

              <p>
                This is how we think logistics should feel — clear, quick and
                safe. From planning to final delivery, we build every process to
                reduce confusion, improve visibility and keep your cargo moving
                with fewer delays.
              </p>

              <div className="about-feature-tags-tv">
                {approachFeatures.map((item) => (
                  <div className="feature-tag-tv" key={item}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="about-story-split-tv">
                <div>
                  <span className="section-badge-tv">Our People</span>
                  <h3>Experienced Team. Responsible Operations.</h3>
                  <p>
                    Behind every shipment is a team that understands timing,
                    documentation, safety and customer support. Our people deliver
                    practical solutions, respond quickly and build long-term trust
                    through responsible operations.
                  </p>
                </div>

                <div>
                  <span className="section-badge-tv">Our Promise</span>
                  <h3>Built for Businesses That Need Dependability.</h3>
                  <p>
                    Whether it is road freight, inbound shipments or cross-border
                    movement, we provide organized, transparent and accountable
                    logistics support from the first call to the final delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-why-section-tv">
          <div className="about-container-tv">
            <div className="section-heading-center-tv">
              <span>Why Choose Us</span>
              <h2>Why Businesses Choose Transvera?</h2>
              <p>
                We combine logistics experience, reliable planning, transparent
                communication and technology-driven support to make shipment
                movement easier for businesses.
              </p>
            </div>

            <div className="about-why-grid-tv">
              {chooseList.map((item) => (
                <div className="choose-card-tv" key={item.title}>
                  <div className="choose-icon-tv">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-standards-tv">
          <div className="about-container-tv">
            <div className="section-heading-center-tv">
              <span>Working Standards</span>
              <h2>Built on Discipline. Driven by Results.</h2>
              <p>
                Clear visibility, safe handling and faster execution define the
                way we support every shipment.
              </p>
            </div>

            <div className="standards-grid-tv">
              {standards.map((item) => (
                <div className="standard-item-tv" key={item.title}>
                  <div className="standard-icon-tv">{item.icon}</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-faq-tv">
          <div className="about-container-tv about-faq-layout-tv">
            <div className="about-faq-left-tv">
              <span className="section-badge-tv">FAQ</span>

              <h2>Frequently Asked Questions</h2>

              <p>
                Find quick answers about cargo handling, delivery timelines,
                tracking, insurance and cross-border shipment support.
              </p>

              <Link to="/contact-us">
                Ask More Questions <FiArrowRight />
              </Link>
            </div>

            <div className="faq-grid-tv">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-card-tv ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      className="faq-question-tv"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      type="button"
                    >
                      <div className="faq-question-left-tv">
                        <span className="faq-icon-tv">
                          <FiHelpCircle />
                        </span>

                        <span>{faq.question}</span>
                      </div>

                      <span className="faq-toggle-tv">
                        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                      </span>
                    </button>

                    {isOpen && <p className="faq-answer-tv">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}