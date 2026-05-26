import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import "../css/home.css";

import truckVideo from "../assets/1sthero.mp4";
import aboutImg from "../assets/about-us.webp";
import inbound from "../assets/inbound-shipment.png";
import roadFreight from "../assets/road-freight.png";
import crossBorder from "../assets/cross-border.png";
import {
  FiTruck,
  FiMapPin,
  FiBox,
  FiSend,
  FiArrowRight,
  FiArrowLeft,
  FiShield,
  FiEye,
  FiSliders,
  FiUsers,
  FiGlobe,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzLDVj2aSOavD85mBB9L2MQAbNoA69t1GiZLgT-G3AUbqOlp4VBoMuCM1EISARgHm1/exec";

const provideCards = [
  {
    title: "Inbound Shipments",
    desc: "Smooth inbound logistics with faster receiving, better coordination, and reliable movement into your supply chain.",
    link: "/services/inbound-shipments",
    image: inbound,
  },
  {
    title: "Road Freight",
    desc: "Flexible road freight solutions designed for safe, on-time, and cost-effective cargo transportation.",
    link: "/services/road-freight",
    image: roadFreight,
  },
  {
    title: "Cross Border Shipments",
    desc: "Reliable cross-border shipment support with smooth documentation, route planning, and global reach.",
    link: "/services/cross-border-shipments",
    image: crossBorder,
  },
];

const focusCards = [
  {
    icon: <FiShield />,
    title: "Security & Trust",
    desc: "Your cargo matters. We treat every shipment with care and keep it safe, gaining your trust at each stage.",
  },
  {
    icon: <FiEye />,
    title: "Real-Time Visibility",
    desc: "Stay updated with clear shipment movement, route progress and delivery status so your logistics remain simple and transparent.",
  },
  {
    icon: <FiSliders />,
    title: "On-Time Delivery",
    desc: "We orchestrate every move to guarantee that your shipments arrive on time, as promised—no delays, no excuses.",
  },
];

const testimonials = [
  {
    text: "Transvera keeps our shipments moving smoothly with clear updates, careful coordination, and dependable delivery support every single time.",
    name: "Michael Johnson",
    role: "Operations Manager",
  },
  {
    text: "Their logistics team understands pressure and handles every road freight request with patience, speed, and practical problem solving.",
    name: "Sarah Williams",
    role: "Supply Chain Director",
  },
  {
    text: "Our cross border shipments became easier because Transvera managed communication, documents, tracking, and route planning very professionally overall.",
    name: "David Patel",
    role: "Logistics Head",
  },
  {
    text: "Transvera improved our inbound deliveries with better scheduling, warehouse coordination, quick responses, and consistent shipment visibility every week.",
    name: "Emily Carter",
    role: "Procurement Lead",
  },
  {
    text: "During urgent freight requirements, their team stayed calm, planned quickly, and delivered support without unnecessary confusion or delay.",
    name: "Robert Wilson",
    role: "Warehouse Manager",
  },
  {
    text: "We appreciate Transvera because they keep every stakeholder informed, making daily shipment planning easier for our operations team.",
    name: "Jessica Brown",
    role: "Supply Planner",
  },
  {
    text: "Their service feels reliable and human, with honest communication, logistics planning, and strong execution from start to finish.",
    name: "Andrew Smith",
    role: "Business Owner",
  },
  {
    text: "Transvera made complex freight movement feel manageable through responsive support, transparent updates, and dependable delivery performance every day.",
    name: "Priya Mehta",
    role: "Operations Head",
  },
];

const stats = [
  {
    icon: <FiShield />,
    value: "15+",
    label: "Years of Experience",
  },
  {
    icon: <FiUsers />,
    value: "2,500+",
    label: "Global Clients",
  },
  {
    icon: <FiBox />,
    value: "25M+",
    label: "Shipments Delivered",
  },
  {
    icon: <FiGlobe />,
    value: "50+",
    label: "Countries Served",
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialScrollRef = useRef(null);

  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    pickup: "",
    delivery: "",
    details: "",
  });

  const visibleTestimonials = useMemo(() => {
    const total = testimonials.length;

    return [0, 1, 2].map(
      (offset) => testimonials[(testimonialIndex + offset) % total]
    );
  }, [testimonialIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToTestimonial = (index) => {
    const total = testimonials.length;
    const nextIndex = (index + total) % total;

    setTestimonialIndex(nextIndex);

    setTimeout(() => {
      const scroller = testimonialScrollRef.current;
      if (!scroller) return;

      const cards = scroller.querySelectorAll(".tv-testimonial-card");
      const targetCard = cards[nextIndex];

      if (targetCard) {
        scroller.scrollTo({
          left: targetCard.offsetLeft - scroller.offsetLeft,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  const handlePrevTestimonial = () => {
    goToTestimonial(testimonialIndex - 1);
  };

  const handleNextTestimonial = () => {
    goToTestimonial(testimonialIndex + 1);
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;

    setQuoteForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      ...quoteForm,
      date: new Date().toLocaleString(),
      source: "Transvera Home Quote Form",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowPopup(true);

      setQuoteForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        pickup: "",
        delivery: "",
        details: "",
      });
    } catch (error) {
      console.error("Quote form submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="transvera-home">
      <Helmet>
        <title>
          Transvera Logistics | Dispatch to Delivery Transport Solutions
        </title>

        <meta
          name="description"
          content="Transvera provides reliable logistics, road freight, inbound shipments, cross-border shipments, tracking and scalable transport solutions."
        />

        <meta
          name="keywords"
          content="Transvera logistics, road freight, inbound shipments, cross border shipments, logistics company, transport solutions, freight forwarding, supply chain solutions"
        />

        <meta name="author" content="Transvera" />
        <meta name="publisher" content="Transvera Logistics" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b6fff" />

        <link rel="canonical" href="https://www.transvera.com/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Transvera Logistics | Dispatch to Delivery"
        />
        <meta
          property="og:description"
          content="Reliable logistics solutions that move your business forward every mile, every time."
        />
        <meta property="og:url" content="https://www.transvera.com/" />
        <meta
          property="og:image"
          content="https://www.transvera.com/preview.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Transvera Logistics | Dispatch to Delivery"
        />
        <meta
          name="twitter:description"
          content="Road freight, inbound shipments and cross-border logistics solutions for growing businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.transvera.com/preview.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Transvera",
            url: "https://www.transvera.com/",
            logo: "https://www.transvera.com/logo.png",
            description:
              "Transvera provides logistics, road freight, inbound shipment and cross-border shipment solutions.",
            sameAs: [
              "https://www.facebook.com/",
              "https://www.linkedin.com/",
              "https://x.com/",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Logistics and Freight Services",
            provider: {
              "@type": "Organization",
              name: "Transvera",
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Transvera Logistics Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Inbound Shipments",
                    url: "https://www.transvera.com/services/inbound-shipments",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Road Freight",
                    url: "https://www.transvera.com/services/road-freight",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cross Border Shipments",
                    url: "https://www.transvera.com/services/cross-border-shipments",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="tv-hero">
          <video className="tv-hero-video" autoPlay muted loop playsInline>
            <source src={truckVideo} type="video/mp4" />
          </video>

          <div className="tv-hero-overlay"></div>

          <div className="tv-container tv-hero-content">
            <h1> Dispatch to Delivery<br />
              <span>Transvera</span>
            </h1>

            <p>
              Efficient, reliable and real-world logistics solutions built on over ten years of industry expertise.


            </p>

            <div className="tv-hero-actions">
              <Link to="/contact-us" className="tv-btn-primary">
                Contact Us <FiArrowRight />
              </Link>

              <Link to="/about" className="tv-btn-light">
                About Us <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="tv-feature-strip">
          <div className="tv-container tv-feature-grid">
            <div className="tv-feature-card">
              <FiTruck />
              <div>
                <h3>Fast Truck</h3>
                <p>On-time, every time</p>
              </div>
            </div>

            <div className="tv-feature-card">
              <FiMapPin />
              <div>
                <h3>Quick Track</h3>
                <p>Real-time tracking</p>
              </div>
            </div>

            <div className="tv-feature-card">
              <FiBox />
              <div>
                <h3>Product Logistics</h3>
                <p>Safe & secure</p>
              </div>
            </div>

            <div className="tv-feature-card">
              <FiSend />
              <div>
                <h3>Express Delivery</h3>
                <p>When time matters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tv-section tv-provide-section">
          <SectionTitle label="What We Provide" />

          <div className="tv-container tv-provide-grid">
            {provideCards.map((item) => (
              <Link to={item.link} className="tv-provide-card" key={item.title}>
                <div className="tv-provide-image">
                  <img src={item.image} alt={`${item.title} logistics service`} />
                </div>

                <div className="tv-provide-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <span className="tv-provide-link">
                    Explore Service <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="tv-section tv-about-section">
          <div className="tv-container tv-about-grid">
            <div className="tv-about-image">
              <img
                src={aboutImg}
                alt="Transvera logistics warehouse and fleet"
              />

              <div className="tv-about-badge">
                <FiShield />

                <div>
                  <h4>Trusted by Businesses Worldwide</h4>
                  <p>Delivering excellence across every mile.</p>
                </div>
              </div>
            </div>

            <div className="tv-about-content">
              <span>About Us</span>

              <h2>Trusted by Every Mile We Deliver</h2>

              <p>
                We are an industry leader in global logistics, with a network that drives efficiency across the supply chain through stable positions and innovative partnerships with manufacturers.

                We take a smart, real-world approach to providing an experience that is both reliable and up-to-date with your needs delivering true value while establishing some of the highest standards in service, performance and operational excellence. Our commitment is with ethical operations and a strong emphasis on successful results for our clients.
              </p>

              <div className="tv-about-points">
                <div>
                  <FiGlobe />
                  <strong>Global Network</strong>
                </div>

                <div>
                  <FiTruck />
                  <strong>Modern Fleet</strong>
                </div>

                <div>
                  <FiUsers />
                  <strong>Customer First</strong>
                </div>
              </div>

              <Link to="/about" className="tv-inline-link">
                Learn more about us <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="tv-section tv-focus-quote-section">
          <div className="tv-container tv-focus-quote-grid">
            <div className="tv-focus-box">
              <span>What We Do</span>

              <h2>
                Our Focus. <br />
                Your Advantage.
              </h2>

              <div className="tv-focus-grid">
                {focusCards.map((item) => (
                  <div className="tv-focus-card" key={item.title}>
                    <div>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="tv-quote-box">
              <span>Request a Quote</span>

              <h2>
                Get a Custom Quote <br />
                Tailored to Your Needs
              </h2>

              <form onSubmit={handleQuoteSubmit}>
                <input
                  type="text"
                  name="fullName"
                  value={quoteForm.fullName}
                  onChange={handleQuoteChange}
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={quoteForm.email}
                  onChange={handleQuoteChange}
                  placeholder="Email Address"
                  required
                />

                <input
                  type="text"
                  name="company"
                  value={quoteForm.company}
                  onChange={handleQuoteChange}
                  placeholder="Company Name"
                />

                <input
                  type="tel"
                  name="phone"
                  value={quoteForm.phone}
                  onChange={handleQuoteChange}
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="text"
                  name="pickup"
                  value={quoteForm.pickup}
                  onChange={handleQuoteChange}
                  placeholder="Pickup Location"
                />

                <input
                  type="text"
                  name="delivery"
                  value={quoteForm.delivery}
                  onChange={handleQuoteChange}
                  placeholder="Delivery Location"
                />

                <textarea
                  name="details"
                  value={quoteForm.details}
                  onChange={handleQuoteChange}
                  placeholder="Type of Goods / Details"
                />

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Quote Now"}
                  <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="tv-section tv-testimonials-section">
          <SectionTitle label="What Our Clients Say" />

          <div className="tv-container">
            <div className="tv-testimonial-desktop">
              <div className="tv-testimonial-grid">
                {visibleTestimonials.map((item) => (
                  <TestimonialCard
                    item={item}
                    key={`${item.name}-${item.role}`}
                  />
                ))}
              </div>
            </div>

            <div
              className="tv-testimonial-mobile-scroll"
              ref={testimonialScrollRef}
            >
              {testimonials.map((item) => (
                <TestimonialCard
                  item={item}
                  key={`${item.name}-${item.role}`}
                />
              ))}
            </div>

            <div className="tv-testimonial-controls">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrevTestimonial}
              >
                <FiArrowLeft />
              </button>

              <div className="tv-testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={testimonialIndex === index ? "active" : ""}
                    onClick={() => goToTestimonial(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNextTestimonial}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </section>

        <section className="tv-stats-section">
          <div className="tv-container tv-stats-grid">
            {stats.map((item) => (
              <div className="tv-stat-card" key={item.label}>
                <div>{item.icon}</div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showPopup && (
        <div className="tv-popup-overlay">
          <div className="tv-popup">
            <FiCheckCircle />

            <h3>Form Submitted Successfully!</h3>

            <p>
              Thank you for contacting Transvera. Our team will contact you soon.
            </p>

            <button type="button" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="tv-section-heading">
      <span></span>
      <h2>{label}</h2>
      <span></span>
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="tv-testimonial-card">
      <FiStar className="quote-icon" />

      <p>{item.text}</p>

      <div className="tv-testimonial-author">
        <div className="tv-author-avatar">
          {item.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)}
        </div>

        <div>
          <h4>{item.name}</h4>
          <span>{item.role}</span>

          <div className="tv-stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
        </div>
      </div>
    </div>
  );
}