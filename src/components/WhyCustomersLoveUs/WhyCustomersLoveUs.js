import React from "react";
import "./WhyCustomersLoveUs.css";
import logo from '../../assect/2.png'

const WhyCustomersLoveUs = () => {
  return (
    <div className="customers-love-container">
      <div className="stats-container">
        <div className="stat">
          <div className="stat-circle">500+ Professionals</div>
        </div>
        <div className="stat">
          <div className="stat-circle">5,00,000+ Businesses</div>
        </div>
        <div className="stat">
          <div className="stat-circle">1 lakh+ TM Registered</div>
        </div>
        <div className="logo">
         <img src={logo} alt="Company Logo" />
        </div>
      </div>
      <div className="features-container">
        <h2>Why Do Customers Love Us?</h2>
        <div className="feature">
          <div className="feature-icon">₹</div>
          <div className="feature-text">
            <h3>Affordable Professional Services</h3>
            <p>Proven legal and financial solutions with senior experts.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">📊</div>
          <div className="feature-text">
            <h3>Diverse Expert Network</h3>
            <p>
              Talk to lawyers, chartered accountants (CAs), and company
              secretaries (CSs) to meet your legal and financial needs.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">👥</div>
          <div className="feature-text">
            <h3>Easy-to-use dashboard</h3>
            <p>
              Streamlined navigation for service requests and tracking.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">⏱</div>
          <div className="feature-text">
            <h3>Quick Customer Support</h3>
            <p>Queries are responded within 24 hours*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCustomersLoveUs;
