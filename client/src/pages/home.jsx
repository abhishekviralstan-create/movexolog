import { useEffect, useState } from "react";
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
  FiShield,
  FiUsers,
  FiGlobe,
  FiCheckCircle,
  FiStar,
  FiMessageSquare,
  FiZap,
  FiLock,
  FiMap,
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

const operationCards = [
  {
    number: "01",
    icon: <FiZap />,
    title: "Lightning-Fast Operations",
    desc: "99.2% on-time rates backed by real-time route planning and proactive load management systems.",
  },
  {
    number: "02",
    icon: <FiLock />,
    title: "Unmatched Reliability",
    desc: "Fully insured freight with live GPS tracking on every shipment and cargo protection guarantees.",
  },
  {
    number: "03",
    icon: <FiMap />,
    title: "48-State Coverage",
    desc: "Comprehensive network with 120+ strategically positioned hubs across every major metro area.",
  },
];

const testimonials = [
  {
    text: "TRANSVERA completely transformed our supply chain. What used to take 5 days now takes 2. Their platform is miles ahead of any carrier we've used. We've scaled from 200 to 2,000 monthly shipments without a single hiccup.",
    name: "Michael Reynolds",
    role: "VP Supply Chain, NovaBuild Corp",
    color: "blue",
  },
  {
    text: "Switched to TRANSVERA 18 months ago and never looked back. On-time rate is genuinely 99%+ — I’ve verified it myself. Best logistics partner we’ve ever had.",
    name: "Sarah Lin",
    role: "COO, Meridian E-Commerce",
    color: "purple",
  },
  {
    text: "Healthcare logistics requires zero margin for error. TRANSVERA delivers every single time — temperature-controlled, on-schedule, always reachable.",
    name: "Dr. David Kim",
    role: "Director, HealthFirst Supply",
    color: "cyan",
  },
  {
    text: "Route optimization alone saved us 22% on fuel in Q1. TRANSVERA’s tech is genuinely impressive. Highly recommend for any manufacturing operation.",
    name: "Alex Torres",
    role: "Logistics Manager, TerraFab Inc.",
    color: "orange",
  },
  {
    text: "From onboarding to daily execution, TRANSVERA is seamless. Our retail distribution is faster and more reliable than ever. The team goes above and beyond.",
    name: "Jessica Walsh",
    role: "Head of Operations, BlueLeaf Retail",
    color: "pink",
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
const API_BASE = "http://localhost:5000";

const getBlogImage = (blog) => {
  const img = blog.image || blog.featuredImage || blog.thumbnail || blog.coverImage;

  if (!img) return "";

  if (img.startsWith("http")) return img;

  if (img.startsWith("/uploads")) {
    return `${API_BASE}${img}`;
  }

  return `${API_BASE}/${img}`;
};

const getBlogDescription = (blog) => {
  const text =
    blog.shortDescription ||
    blog.description ||
    blog.metaDescription ||
    blog.excerpt ||
    "";

  return text.replace(/<[^>]*>/g, "").slice(0, 120);
};

const getBlogLink = (blog) => {
  return `/blogs/${blog.slug || blog._id}`;
};
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

useEffect(() => {
  window.scrollTo(0, 0);

  const fetchLatestBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs?limit=3");
      const data = await res.json();

      setLatestBlogs(data.blogs || data.slice?.(0, 3) || []);
    } catch (error) {
      console.error("Latest blogs fetch error:", error);
    }
  };

  fetchLatestBlogs();
}, []);

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
        service: "",
        message: "",
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
            <h1>
              Dispatch to Delivery
              <br />
              <span>Transvera</span>
            </h1>

            <p>
              Efficient, reliable and real-world logistics solutions built on
              over ten years of industry expertise.
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

        <section className="tv-operation-section">
          <div className="tv-container tv-operation-grid">
            {operationCards.map((item) => (
              <div className="tv-operation-card" key={item.title}>
                <span className="tv-op-dot" />
                <strong>{item.number}</strong>
                <h3>
                  {item.icon}
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tv-section tv-provide-section">
          <SectionTitle
            label="What We Provide"
            title="Services Built For Reliable Freight Movement"
          />

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
                We are an industry leader in global logistics, with a network
                that drives efficiency across the supply chain through stable
                positions and innovative partnerships with manufacturers.
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

        <section className="tv-section tv-testimonials-section">
          <div className="tv-container">
            <div className="tv-testimonials-heading">
              <span>
                <FiStar /> Client Reviews
              </span>

              <h2>
                What Our Clients <b>Are Saying</b>
              </h2>

              <p>
                Real stories from real businesses trusting TRANSVERA to move
                America's freight.
              </p>
            </div>

            <div className="tv-testimonial-grid">
              {testimonials.map((item, index) => (
                <TestimonialCard item={item} index={index} key={item.name} />
              ))}
            </div>
          </div>
        </section>


<section className="tv-section tv-latest-blogs-section">
  <div className="tv-container">
    <div className="tv-testimonials-heading">
      <span>
        <FiMessageSquare /> Latest Blogs
      </span>

      <h2>
        Latest Logistics <b>Insights</b>
      </h2>

      <p>
        Read the latest updates, guides, and insights from Transvera.
      </p>
    </div>

    <div className="tv-latest-blog-grid">
      {latestBlogs.map((blog) => {
        const imageUrl = blog.image?.startsWith("http")
          ? blog.image
          : `http://localhost:5000/${blog.image}`;

        return (
          <Link
        to={getBlogLink(blog)}
            className="tv-latest-blog-card"
            key={blog._id}
          >
            <div className="tv-latest-blog-img">
<img src={getBlogImage(blog)} alt={blog.title} />
            </div>

            <div className="tv-latest-blog-content">
              <span>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : "Latest Blog"}
              </span>

              <h3>{blog.title}</h3>

              <p>
             {getBlogDescription(blog)}
              </p>

              <strong>
                Read More <FiArrowRight />
              </strong>
            </div>
          </Link>
        );
      })}
    </div>

    <div className="tv-latest-blog-btn-wrap">
      <Link to="/blogs" className="tv-btn-primary">
        View All Blogs <FiArrowRight />
      </Link>
    </div>
  </div>
</section>

        <section className="tv-section tv-quote-section">
          <div className="tv-container tv-quote-grid">
            <div className="tv-quote-form-card">
              <h2>Request a Quote</h2>

              <p>A logistics specialist will contact you within 4 hours.</p>

              <form onSubmit={handleQuoteSubmit}>
                <div className="tv-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={quoteForm.fullName}
                    onChange={handleQuoteChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="tv-field">
                  <label>Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={quoteForm.company}
                    onChange={handleQuoteChange}
                    placeholder="Your Company"
                    required
                  />
                </div>

                <div className="tv-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={quoteForm.email}
                    onChange={handleQuoteChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="tv-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={quoteForm.phone}
                    onChange={handleQuoteChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="tv-field full">
                  <label>Service Needed</label>
                  <select
                    name="service"
                    value={quoteForm.service}
                    onChange={handleQuoteChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="Inbound Shipments">Inbound Shipments</option>
                    <option value="Road Freight">Road Freight</option>
                    <option value="Cross Border Shipments">
                      Cross Border Shipments
                    </option>
                  </select>
                </div>

                <div className="tv-field full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={quoteForm.message}
                    onChange={handleQuoteChange}
                    placeholder="Tell us about your logistics needs, volume, destinations, and timeline..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Sending..."
                    : "Send Inquiry — We'll Respond in 4 Hours →"}
                </button>
              </form>
            </div>

            <div className="tv-quote-image-card">
              <img src={aboutImg} alt="Transvera logistics quote support" />

              <div>
                <FiSend />
                <h3>Fast Quote Support</h3>
                <p>
                  Share your shipment details and our logistics team will guide
                  you with the best movement plan.
                </p>
              </div>
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

function SectionTitle({ label, title }) {
  return (
    <div className="tv-section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function TestimonialCard({ item, index }) {
  return (
    <div className={`tv-testimonial-card ${index === 0 ? "featured" : ""}`}>
      <div className={`tv-rating ${item.color}`}>★★★★★</div>

      <p>"{item.text}"</p>

      <div className="tv-testimonial-author">
        <div className={`tv-author-avatar ${item.color}`}>
          {item.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)}
        </div>

        <div>
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      </div>

      <div className="tv-quote-mark">“</div>
    </div>
  );
}
