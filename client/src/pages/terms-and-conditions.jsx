import { Helmet } from "react-helmet-async";
import Header from "../components/navbar";
import "../css/terms-and-conditions.css";

export default function TermsConditions() {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Terms & Conditions | Movexolog Logistics</title>

        <meta
          name="description"
          content="Read the Terms & Conditions of Movexolog regarding logistics services, shipment handling, website usage, customer responsibilities and service limitations."
        />

        <meta
          name="keywords"
          content="Movexolog terms and conditions, logistics terms, freight service terms, shipment policies, transportation agreement"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Movexolog" />
        <meta name="publisher" content="Movexolog Logistics" />

        <link
          rel="canonical"
          href="https://www.movexolog.com/terms"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | Movexolog" />

        <meta
          property="og:description"
          content="Review the official terms and conditions governing Movexolog logistics and freight services."
        />

        <meta
          property="og:url"
          content="https://www.movexolog.com/terms"
        />

        <meta
          property="og:image"
          content="https://www.movexolog.com/logo.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions",
            url: "https://www.movexolog.com/terms",
            description:
              "Official Terms & Conditions for Movexolog logistics and freight services.",
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
              Home <span className="sep">&gt;</span> Terms & Conditions
            </span>

            <h1>Terms & Conditions</h1>

            <p>
              These Terms & Conditions govern your use of Movexolog’s website,
              logistics solutions and freight-related services. By accessing or
              using our services, you agree to comply with these terms.
            </p>
          </div>
        </section>

        <section className="legal-container">

          <div className="legal-card">
            <h2>1. Acceptance of Terms</h2>

            <p>
              By accessing the Movexolog website or using our logistics,
              transportation or shipment coordination services, you agree to be
              legally bound by these Terms & Conditions.
            </p>

            <p>
              If you do not agree with any part of these terms, you should not
              use our website or services.
            </p>
          </div>

          <div className="legal-card">
            <h2>2. Services Overview</h2>

            <p>
              Movexolog provides freight coordination, logistics planning,
              shipment movement support, transportation assistance and related
              operational services.
            </p>

            <p>
              Service availability may vary depending on route access, shipment
              category, carrier support and operational conditions.
            </p>
          </div>

          <div className="legal-card">
            <h2>3. Customer Responsibilities</h2>

            <ul>
              <li>Provide accurate shipment and contact information.</li>
              <li>Ensure cargo complies with transportation regulations.</li>
              <li>Submit valid documents when required.</li>
              <li>Ensure restricted or prohibited items are not shipped.</li>
              <li>Maintain proper packaging and cargo labeling.</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2>4. Shipment & Delivery</h2>

            <p>
              Delivery timelines are estimates and may be affected by weather,
              customs clearance, traffic conditions, carrier delays or other
              operational circumstances beyond our control.
            </p>

            <p>
              Movexolog will make reasonable efforts to maintain shipment
              visibility and communication throughout the process.
            </p>
          </div>

          <div className="legal-card">
            <h2>5. Restricted Items</h2>

            <p>
              Customers must not ship illegal, hazardous, prohibited or
              restricted materials unless approved and compliant with applicable
              transportation laws and carrier requirements.
            </p>
          </div>

          <div className="legal-card">
            <h2>6. Payment Terms</h2>

            <p>
              All pricing, freight charges and service fees are subject to
              agreement before shipment confirmation.
            </p>

            <p>
              Additional charges may apply for storage, route changes, customs
              delays, oversized cargo or special handling requirements.
            </p>
          </div>

          <div className="legal-card">
            <h2>7. Limitation of Liability</h2>

            <p>
              Movexolog shall not be liable for indirect, incidental or
              consequential damages resulting from shipment delays, operational
              interruptions or third-party carrier actions.
            </p>

            <p>
              Liability limitations may apply according to shipment category,
              carrier terms and applicable transportation regulations.
            </p>
          </div>

          <div className="legal-card">
            <h2>8. Website Usage</h2>

            <p>
              Users agree not to misuse the website, attempt unauthorized
              access, distribute malicious software or interfere with website
              functionality.
            </p>

            <p>
              All content, branding, graphics and materials on this website are
              the intellectual property of Movexolog unless otherwise stated.
            </p>
          </div>

          <div className="legal-card">
            <h2>9. Privacy & Data Usage</h2>

            <p>
              Information submitted through forms, emails or service inquiries
              may be used for shipment coordination, customer support and
              operational communication.
            </p>

            <p>
              We implement reasonable security measures to protect customer
              information.
            </p>
          </div>

          <div className="legal-card">
            <h2>10. Third-Party Services</h2>

            <p>
              Some logistics operations may involve third-party transportation
              providers, warehouse operators or customs partners.
            </p>

            <p>
              Movexolog is not responsible for policies, delays or operational
              actions performed directly by third-party entities.
            </p>
          </div>

          <div className="legal-card">
            <h2>11. Changes to Terms</h2>

            <p>
              Movexolog reserves the right to update or modify these Terms &
              Conditions at any time without prior notice.
            </p>

            <p>
              Continued use of the website or services after updates indicates
              acceptance of revised terms.
            </p>
          </div>

          <div className="legal-card">
            <h2>12. Contact Information</h2>

            <div className="legal-contact">
              <p><strong>Company:</strong> Movexolog</p>
              <p><strong>Website:</strong> www.movexolog.com</p>
              <p><strong>Email:</strong> info@movexolog.com</p>
              <p>
                <strong>Address:</strong> 30 N Gould St Ste R Sheridan, WY
                82801
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}