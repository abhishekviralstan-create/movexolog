import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/contact-us.css";

export default function Contact() {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Movexolog | Get Logistics Support & Shipment Quote</title>
                <link rel="icon" type="image/png" href="../assets/logo.png" />
                <link rel="apple-touch-icon" href="../assets/logo.png" />
                <meta
                    name="description"
                    content="Contact Movexolog for road freight, inbound shipments, cross-border logistics, shipment tracking support and customized freight quotes."
                />
                <meta
                    name="keywords"
                    content="contact Movexolog, logistics support, freight quote, shipment support, road freight contact, cross border logistics contact"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Movexolog" />
                <meta name="publisher" content="Movexolog Logistics" />
                <link rel="canonical" href="https://yourdomain.com/contact" />
            </Helmet>

            <Header />

            <main>
                <section className="contact-hero">
                    <div className="contact-hero-content">
                        <span className="contact-kicker"> Home  <span className="sep">&gt;</span> Contact Us</span>
                        <h1>Let’s Move Your Shipment With Confidence</h1>
                        <p>
                            Need a quote, shipment update or logistics support? Share your details and our team will help you with the right solution.
                        </p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-info">
                        <span className="contact-kicker">Get In Touch</span>
                        <h2>Support That Helps You Move Faster</h2>
                        <p>
                            From road freight to cross-border shipment support, Movexolog keeps communication simple, clear and responsive.
                        </p>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <Icon name="phone" />
                                <h3>Call Support</h3>
                                <p>24/7 logistics assistance available for shipment queries.</p>
                            </div>

                            <div className="contact-card">
                                <Icon name="mail" />
                                <h3>Email Us</h3>
                                <p>info@movexolog.com</p>
                            </div>

                            <div className="contact-card">
                                <Icon name="map" />
                                <h3>Service Area</h3>
                                <p>Global logistics and freight movement support.</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <FormInput label="Full Name" placeholder="Your full name" />
                        <FormInput label="Company" placeholder="Company name" />
                        <FormInput label="Email Address" type="email" placeholder="your@email.com" />
                        <FormInput label="Phone Number" placeholder="+1 000 000 0000" />

                        <div className="form-group">
                            <label>Service Type</label>
                            <select>
                                <option>Road Freight</option>
                                <option>Cross Border Shipments</option>
                                <option>Inbound Shipments</option>
                                <option>Express Delivery</option>
                            </select>
                        </div>

                        <FormInput label="Route / Destination" placeholder="Origin → Destination" />

                        <div className="form-group full">
                            <label>Additional Details</label>
                            <textarea placeholder="Cargo type, weight, special requirements..." />
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </section>

                <section className="contact-cta">
                    <div>
                        <span>Need urgent shipment support?</span>
                        <h2>Our team is ready to help you plan the next move.</h2>
                    </div>
                    <a href="/tracking">Track Shipment</a>
                </section>
            </main>
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

function Icon({ name }) {
    const icons = {
        phone:
            "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z",
        mail:
            "M4 4h16v16H4V4zm0 4l8 5 8-5",
        map:
            "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zm0 0V3m6 18V6",
    };

    return (
        <svg className="contact-icon" viewBox="0 0 24 24" fill="none">
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