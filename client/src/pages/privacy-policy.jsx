import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/terms-and-conditions.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Privacy Policy | Movexolog Logistics</title>

        <meta
          name="description"
          content="Read the Movexolog Privacy Policy to understand how we collect, use, protect and manage your personal information and shipment-related data."
        />

        <meta
          name="keywords"
          content="Movexolog privacy policy, logistics privacy policy, freight company privacy, shipment data protection"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />

        <link
          rel="canonical"
          href="https://www.movexolog.com/privacy"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Movexolog" />

        <meta
          property="og:description"
          content="Learn how Movexolog collects, protects and manages your information."
        />

        <meta
          property="og:url"
          content="https://www.movexolog.com/privacy"
        />

        <meta
          property="og:image"
          content="https://www.movexolog.com/logo.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.movexolog.com/privacy",
            description:
              "Official Privacy Policy for Movexolog logistics and freight services.",
            publisher: {
              "@type": "Organization",
              name: "Movexolog",
              url: "https://www.movexolog.com/",
              logo: "https://www.movexolog.com/logo.png",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section className="legal-hero">
          <div className="legal-hero-content">
            <span className="legal-kicker">
              Home <span className="sep">&gt;</span> Privacy Policy
            </span>

            <h1>Privacy Policy</h1>

            <p>
              At Movexolog, protecting your information is important to us.
              This Privacy Policy explains how we collect, use, store and
              protect customer and shipment-related information when using our
              website and logistics services.
            </p>
          </div>
        </section>

        <section className="legal-container">

          <div className="legal-card">
            <h2>1. Information We Collect</h2>

            <p>
              We may collect personal and business information when you use our
              website, request logistics services or communicate with our team.
            </p>

            <ul>
              <li>Full name and company details</li>
              <li>Email address and contact information</li>
              <li>Shipment and cargo information</li>
              <li>Pickup and delivery addresses</li>
              <li>Technical and website usage information</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2>2. How We Use Your Information</h2>

            <p>
              Information collected through our website and services may be used
              to:
            </p>

            <ul>
              <li>Provide logistics and shipment support</li>
              <li>Coordinate freight movement and delivery updates</li>
              <li>Improve website functionality and user experience</li>
              <li>Respond to service requests and inquiries</li>
              <li>Maintain operational communication</li>
              <li>Protect against fraud or unauthorized activity</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2>3. Website Analytics & Cookies</h2>

            <p>
              Our website may use cookies, analytics tools and server logs to
              understand visitor behavior, improve performance and maintain
              security.
            </p>

            <p>
              These technologies may collect browser type, IP address, device
              information and pages visited on the website.
            </p>
          </div>

          <div className="legal-card">
            <h2>4. Data Protection</h2>

            <p>
              Movexolog applies reasonable administrative and technical measures
              to protect customer information from unauthorized access,
              disclosure or misuse.
            </p>

            <p>
              While we take security seriously, no online platform or data
              transmission method can be guaranteed to be completely secure.
            </p>
          </div>

          <div className="legal-card">
            <h2>5. Third-Party Services</h2>

            <p>
              Some logistics operations may involve third-party carriers,
              warehouse providers, tracking tools or transportation partners.
            </p>

            <p>
              Third-party websites and services operate under their own privacy
              policies and practices.
            </p>
          </div>

          <div className="legal-card">
            <h2>6. Information Sharing</h2>

            <p>
              Movexolog does not sell or rent customer information to third
              parties.
            </p>

            <p>
              Information may only be shared when required for shipment
              coordination, operational support, legal compliance or service
              fulfillment.
            </p>
          </div>

          <div className="legal-card">
            <h2>7. Your Rights</h2>

            <p>
              Depending on your region and applicable laws, you may have rights
              related to accessing, correcting or requesting deletion of your
              personal information.
            </p>

            <p>
              You may contact us regarding any data privacy concerns or
              information requests.
            </p>
          </div>

          <div className="legal-card">
            <h2>8. Children’s Privacy</h2>

            <p>
              Movexolog does not knowingly collect personal information from
              individuals under the age of 13.
            </p>

            <p>
              If such information is identified, we will take reasonable steps
              to remove it from our records.
            </p>
          </div>

          <div className="legal-card">
            <h2>9. Policy Updates</h2>

            <p>
              We may update this Privacy Policy periodically to reflect changes
              in operational practices, legal requirements or website features.
            </p>

            <p>
              Continued use of the website after updates indicates acceptance of
              the revised policy.
            </p>
          </div>

          <div className="legal-card">
            <h2>10. Contact Information</h2>

            <div className="legal-contact">
              <p><strong>Company:</strong> Movexolog</p>
              <p><strong>Website:</strong> www.movexolog.com</p>
              <p><strong>Email:</strong> info@movexolog.com</p>

              <p>
                <strong>Address:</strong> 30 N Gould St Ste R Sheridan,
                WY 82801
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}