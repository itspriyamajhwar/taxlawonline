import React from "react";
import "./style.css";

const TrademarkHearing = () => {
  return (
    <div className="trademark-hearing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Trademark Hearing</h1>
          <p>
            A trademark hearing is a crucial step when your trademark application
            faces objections. Learn more about the process, its significance, and how
            to navigate through it effectively.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="details-section">
        <h2>What is Trademark Hearing?</h2>
        <p>
          Trademark hearings occur when the Registrar of Trademarks issues a formal objection
          or when an opposition is filed against a trademark application. These hearings
          are critical in determining whether the trademark should be registered.
        </p>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <h2>Steps Involved in Trademark Hearing</h2>
        <div className="steps-container">
          <div className="step-item">
            <h3>Step 1: Receiving the Hearing Notice</h3>
            <p>
              Once an objection or opposition is raised, you will receive an official hearing notice from the Trademark Registry.
            </p>
          </div>
          <div className="step-item">
            <h3>Step 2: Preparing for the Hearing</h3>
            <p>
              Prepare and submit your evidence or arguments to demonstrate why your trademark should be accepted.
            </p>
          </div>
          <div className="step-item">
            <h3>Step 3: Attending the Hearing</h3>
            <p>
              During the hearing, a hearing officer will review your case, listen to both parties, and decide whether the trademark can proceed.
            </p>
          </div>
          <div className="step-item">
            <h3>Step 4: The Decision</h3>
            <p>
              Following the hearing, a decision will be made. If accepted, your trademark will be registered, and you'll receive a certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="importance-section">
        <h2>Why is Trademark Hearing Important?</h2>
        <p>
          A trademark hearing offers you a chance to defend your application and provide the necessary evidence
          to overcome any objections. It's a crucial step in ensuring your brand remains protected by law.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-us-section">
        <h2>Need Help with Trademark Hearing?</h2>
        <p>
          Our experienced team is here to guide you through the trademark hearing process and help resolve any challenges.
        </p>
        <a href="tel:+1234567890" className="contact-button">
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default TrademarkHearing;
