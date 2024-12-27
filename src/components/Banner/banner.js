import React from "react";
import "./banner.css"; // Add CSS file for styling

const Banner = () => {
  return (
    <div className="container">
      <h1 className="header">
        350+ Verified CA, CS, and Legal Experts Ready to Streamline Your Business
        Operations.
      </h1>
      <div className="content">
        <div className="image-section">
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/602/158/large_2x/letter-ca-law-firm-logo-design-for-lawyer-justice-law-attorney-legal-lawyer-service-law-office-scale-law-firm-attorney-corporate-business-free-vector.jpg"
            alt="Expert Illustration"
            className="responsive-image"
          />
        </div>
        <div className="options-section">
          <div className="option">
            <div className="icon">⚖️</div>
            <div className="details">
              <h2>Talk to Lawyer</h2>
              <p>
                Provide legal advice, draft contracts, handle litigation, and
                offer legal representation.
              </p>
            </div>
          </div>
          <div className="option highlighted">
            <div className="icon">📊</div>
            <div className="details">
              <h2>Talk to Chartered Accountant</h2>
              <p>
                Provide financial auditing, taxation advice, and financial
                planning services.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon">@</div>
            <div className="details">
              <h2>Talk to Company Secretary</h2>
              <p>
                Advisory on corporate governance, regulatory compliance, and
                secretarial services for businesses and enterprises.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon">🏛️</div>
            <div className="details">
              <h2>Talk to Intellectual Property Lawyer</h2>
              <p>
                Assist with trademarks, copyrights, patents, and other
                intellectual property-related matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;