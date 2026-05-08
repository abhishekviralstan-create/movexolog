import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/home.css";
import truckVideo from "../assets/1sthero.mp4";
import { FaTruck } from "react-icons/fa";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzLDVj2aSOavD85mBB9L2MQAbNoA69t1GiZLgT-G3AUbqOlp4VBoMuCM1EISARgHm1/exec";

const whatWeProvide = [
  {
    iconType: "box",
    title: "Inbound Shipments",
    desc: "Timely arrivals at your location, accurate handling and smooth integration into the supply chain operations without delays or disruptions by efficient inbound logistics.",
  },
  {
    iconType: "truck",
    title: "Road Freight",
    desc: "Dependable road freight services with efficient, flexible and repeatable performance on every mile to assure your cargo is handled safely and delivered as scheduled.",
  },
  {
    iconType: "globe",
    title: "Cross Border Shipments",
    desc: "Intelligent cross border logistics designed for clearances that harmonise, ensure compliance and facilitate the continuous movement of international freight whilst providing visibility over every step along the way with total control and reliable transit times.",
  },
];

const services = ["Road Freight", "Cross Border Shipments", "Inbound Shipments"];

const testimonials = [
  {
    text: "Aside from being great professionals, we have been collaborating with MOVEXOLOG for some time already and is making life easy! Their deliveries are on time, and their team answers when needed,” he recounts.",
    name: "Ricardo T.",
    role: "CEO",
  },
  {
    text: "We have tried several logistics companies before, but MOVEXOLOG has been the one we relied and trusted with. There is no needless delay and the communication is direct.",
    name: "Aman K.",
    role: "Operations Manager",
  },
  {
    text: "So what I like is not to have to chase after it. Everybody just gets on with business, which is a super rare thing in this space.",
    name: "Sarah L.",
    role: "Supply Chain Head",
  },
  {
    text: "Had a couple of urgent shipments and their team handled it better than expected. Rapid and no noncompliance at the end.",
    name: "Daniel R.",
    role: "Business Owner",
  },
  {
    text: "Not perfect every single time but when something goes wrong, they take quick action. That’s what matters to me.”",
    name: "Neha S.",
    role: "Procurement Manager",
  },
];

const focusItems = [
  {
    iconType: "clock",
    title: "On-Time Delivery",
    desc: "We orchestrate every move to guarantee that your shipments arrive on time, as promised—no delays, no excuses.",
  },
  {
    iconType: "shield",
    title: "Security & Trust",
    desc: "Your cargo matters. We treat every shipment with care and keep it safe, gaining your trust at each stage.",
  },
  {
    iconType: "truck",
    title: "Real-Time Visibility",
    desc: "Stay updated with clear shipment movement, route progress and delivery status so your logistics remain simple and transparent.",
  },
];

const stats = [
  ["truck", 12000, "Deliveries Last Year"],
  ["box", 5500, "Load Moved Last Year"],
  ["globe", 2300, "Load Moved Last Year"],
  ["truck", 4200, "Load Moved Last Year"],
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Road Freight",
    route: "",
    details: "",
  });

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;

    setQuoteForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YAHAN_APNA")) {
      alert("Please add your Google Apps Script Web App URL first.");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      fullName: quoteForm.fullName,
      company: quoteForm.company,
      email: quoteForm.email,
      phone: quoteForm.phone,
      serviceType: quoteForm.serviceType,
      route: quoteForm.route,
      details: quoteForm.details,
      date: new Date().toLocaleString(),
      source: "Movexolog Home Quote Form",
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
        serviceType: "Road Freight",
        route: "",
        details: "",
      });
    } catch (error) {
      console.error("Quote form submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialPage((prev) => {
        if (window.innerWidth <= 600) {
          return (prev + 1) % testimonials.length;
        }

        return prev + 3 >= testimonials.length ? 0 : prev + 1;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="movexolog-page">
      <Helmet>
        <title>
          Movexolog Logistics | Dispatch to Delivery Global Transport Solutions
        </title>

        <meta
          name="description"
          content="Movexolog offers reliable logistics, road freight, inbound shipments and cross-border transportation solutions."
        />

        <meta
          name="keywords"
          content="logistics company, road freight, cross border shipping, inbound logistics, transport services, shipment tracking, freight services India, global logistics, supply chain solutions"
        />

        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.movexolog.com/" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Movexolog Logistics | Dispatch to Delivery"
        />
        <meta
          property="og:description"
          content="Efficient logistics and transportation solutions with real-time tracking, global delivery and trusted supply chain management."
        />
        <meta property="og:url" content="https://www.movexolog.com/" />
        <meta property="og:image" content="https://www.movexolog.com/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movexolog Logistics" />
        <meta
          name="twitter:description"
          content="Reliable logistics, freight and shipment services worldwide."
        />
        <meta name="twitter:image" content="https://www.movexolog.com/preview.jpg" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="theme-color" content="#cc0000" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Movexolog",
            url: "https://www.movexolog.com/",
            logo: "https://www.movexolog.com/logo.png",
            sameAs: [
              "https://facebook.com/",
              "https://instagram.com/",
              "https://linkedin.com/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-0000000000",
              contactType: "customer service",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LogisticsBusiness",
            name: "Movexolog Logistics",
            image: "https://www.movexolog.com/logo.png",
            url: "https://www.movexolog.com/",
            telephone: "+91-0000000000",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            areaServed: "Worldwide",
            description:
              "Movexolog provides logistics, freight, inbound shipments and cross-border transportation services globally.",
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="hero">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={truckVideo} type="video/mp4" />
          </video>

          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-badge">
              <Icon type="globe" /> GLOBAL LOGISTICS LEADER
            </div>

            <h1>Dispatch to Delivery MOVEXOLOG</h1>

            <p>
              Efficient, reliable and real-world logistics solutions built on
              over ten years of industry expertise.
            </p>

            <div className="hero-buttons">
              <a href="/contact-us" className="btn-primary">
                Contact Us
              </a>
              <a href="/about" className="btn-outline">
                About Us
              </a>
            </div>
          </div>
        </section>

        <section className="brand-strip">
          <div className="brand-item">
            <Icon type="truck" />
            <span>Fast Truck</span>
          </div>
          <div className="brand-item">
            <Icon type="clock" />
            <span>Quick Tk</span>
          </div>
          <div className="brand-item">
            <Icon type="box" />
            <span>Product</span>
          </div>
          <div className="brand-item">
            <Icon type="truck" />
            <span>Logistics</span>
          </div>
          <div className="brand-item">
            <Icon type="shield" />
            <span>Express</span>
          </div>
          <div className="brand-item">
            <Icon type="truck" />
            <span>Delivery</span>
          </div>
        </section>

        <section id="services" className="light-section">
          <SectionHeader
            label="What We Provide"
            title="Reliability You Can Count On"
            sub=""
          />

          <div className="services-grid">
            {whatWeProvide.map((item, index) => (
              <div className="service-card" key={item.title}>
                <div className="service-icon">
                  <Icon type={item.iconType} />
                </div>

                <div className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="white-section">
          <div className="about-row">
            <div className="about-col-8">
              <div className="section-label">ABOUT US</div>
              <h2 className="section-title">
                Trusted by Every Mile We Deliver
              </h2>

              <p>
                We are an industry leader in global logistics, with a network
                that drives efficiency across the supply chain through stable
                positions and innovative partnerships with manufacturers.
              </p>

              <p>
                We take a smart, real-world approach to providing an experience
                that is both reliable and up-to-date with your needs delivering
                true value while establishing some of the highest standards in
                service, performance and operational excellence. Our commitment
                is with ethical operations and a strong emphasis on successful
                results for our clients.
              </p>
            </div>

            <div className="about-col-4">
              <div className="skills-card">
                <span className="big-bg-number">About</span>

                <h3>Our Professional Experience & Skills</h3>

                <Skill title="Road Freight" width="85%" />
                <Skill title="Cross Border" width="72%" />
                <Skill title="Inbound" width="80%" />

                <a href="/contact-us" className="skill-btn">
                  Appointment <Icon type="plane" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="support-banner">
          <div>
            <h3>Support That Never Sleeps</h3>
            <h2>Need Immediate Support or Assistance?</h2>
            <p>Our expert team is available 24/7 to help you, anytime.</p>
          </div>
        </section>

        <section className="light-section">
          <SectionHeader
            label="Our Services"
            title="Reliability You Can Count On"
            sub=""
            centered
          />

          <div className="simple-services">
            {services.map((item) => (
              <div className="simple-service-card" key={item}>
                <Icon type="truck" />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="dark-section">
          <SectionHeader
            label="What We Do"
            title="Our Focus. Your Advantage."
            sub=""
          />

          <div className="services-grid">
            {focusItems.map((item) => (
              <div className="std-card" key={item.title}>
                <Icon type={item.iconType} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <SectionHeader
            label="Company Statistics"
            title="We Are Professional Logistics & Transportations Agency"
            sub=""
            centered
          />

          <div className="company-stats-grid">
            {stats.map(([icon, num, label]) => (
              <div className="company-stat-card" key={`${num}-${label}`}>
                <div className="stat-icon">
                  <Icon type={icon} />
                </div>

                <h3>
                  <Counter end={num} />
                  <sup>+</sup>
                </h3>

                <p>{label}</p>

                <div className="stat-line">
                  <span />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quote" className="quote-section">
          <SectionHeader
            label="Request a Quote"
            title="Book Your Shipment with Ease"
            sub=""
            centered
          />

          <form className="quote-form" onSubmit={handleQuoteSubmit}>
            <FormInput
              label="Full Name"
              name="fullName"
              value={quoteForm.fullName}
              onChange={handleQuoteChange}
              placeholder="Your full name"
              required
            />

            <FormInput
              label="Company"
              name="company"
              value={quoteForm.company}
              onChange={handleQuoteChange}
              placeholder="Company name"
            />

            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={quoteForm.email}
              onChange={handleQuoteChange}
              placeholder="your@email.com"
              required
            />

            <FormInput
              label="Phone Number"
              name="phone"
              value={quoteForm.phone}
              onChange={handleQuoteChange}
              placeholder="+1 000 000 0000"
              required
            />

            <div className="form-group">
              <label>Service Type</label>
              <select
                name="serviceType"
                value={quoteForm.serviceType}
                onChange={handleQuoteChange}
                required
              >
                <option value="Road Freight">Road Freight</option>
                <option value="Cross Border Shipments">
                  Cross Border Shipments
                </option>
                <option value="Inbound Shipments">Inbound Shipments</option>
              </select>
            </div>

            <FormInput
              label="Route / Destination"
              name="route"
              value={quoteForm.route}
              onChange={handleQuoteChange}
              placeholder="Origin → Destination"
            />

            <div className="form-group full">
              <label>Additional Details</label>
              <textarea
                name="details"
                value={quoteForm.details}
                onChange={handleQuoteChange}
                placeholder="Cargo type, weight, special requirements..."
              />
            </div>

            <button className="btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Quote Request"}
            </button>
          </form>
          {showPopup && (
  <div className="success-popup-overlay">
    <div className="success-popup">
      <h3>Form Submitted Successfully!</h3>

      <p>
        Thank you for contacting Movexolog. Our team will contact you soon.
      </p>

      <button onClick={() => setShowPopup(false)}>
        Close
      </button>
    </div>
  </div>
)}
        </section>

        <section className="white-section">
          <SectionHeader
            label="Our Testimonials"
            title="What Our Clients Say"
            sub=""
            centered
          />

          <div className="testimonial-slider">
            <div className="testimonials-grid">
              {testimonials.map((item, index) => {
                const isActive =
                  window.innerWidth <= 600
                    ? index === testimonialPage
                    : index >= testimonialPage && index < testimonialPage + 3;

                return (
                  <div
                    className={`testimonial-card ${isActive ? "active" : ""}`}
                    key={item.name}
                  >
                    <div className="stars">★★★★★</div>

                    <p>{item.text}</p>

                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {item.name.slice(0, 2)}
                      </div>

                      <div className="author-info">
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={testimonialPage === index ? "active" : ""}
                  onClick={() => setTestimonialPage(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="home-cta">
          <div>
            <small>Our Newsletters</small>
            <h2>Don’t Miss Our Offer Tips & Much More</h2>
          </div>

          <form>
            <a href="/contact-us" className="skill-btn2">
              Get Free Quote
            </a>
          </form>

          <div className="cta-truck">
            <FaTruck />
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ label, title, sub, centered = false }) {
  return (
    <div className={`section-header ${centered ? "centered" : ""}`}>
      {label && <div className="section-label">{label}</div>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

function FormInput({ label, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

function Skill({ title, width }) {
  return (
    <div className="skill-item">
      <strong>{title}</strong>

      <div className="skill-bar">
        <span style={{ width }} />
      </div>
    </div>
  );
}

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return count.toLocaleString();
}

function Icon({ type }) {
  const icons = {
    truck:
      "M3 7h11v8H3V7zm11 3h3l3 3v2h-6v-5z M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    box: "M4 7l8-4 8 4-8 4-8-4zm0 0v10l8 4 8-4V7",
    globe:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm-4-10h8m-8 0c0 4 2 8 4 8s4-4 4-8m-8 0c0-4 2-8 4-8s4 4 4 8",
    clock:
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14v5l4 2",
    shield:
      "M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z",
    plane:
      "M22 2L11 13m11-11-7 20-4-9-9-4 20-7z",
  };

  return (
    <svg className="mx-icon" viewBox="0 0 24 24" fill="none">
      <path
        d={icons[type]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}