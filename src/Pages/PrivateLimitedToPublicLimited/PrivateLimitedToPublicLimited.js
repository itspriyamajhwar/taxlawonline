import React from 'react';
import './style.css'; // Custom CSS file for styling

const PrivateLimitedToPublicLimited = () => {
  return (
    <div className="container">
      {/* Page Title */}
      <h1 className="page-title">Private Limited to Public Limited Company</h1>
      
      {/* Introduction Section */}
      <div className="content-section">
        <div className="left-image">
          <img
            src="https://www.seedup.in/knowledge/wp-content/uploads/2021/05/Private-Limited-Company-to-Public-Limited-Company-Conversion-1024x683.jpg"
            alt="Private Limited to Public Limited"
            className="section-image"
          />
        </div>
        <div className="right-text">
          <p>
            Converting a Private Limited Company into a Public Limited Company is a significant
            step for businesses looking to expand their operations and raise capital through public
            investment. The process involves various legal and procedural steps to comply with
            regulatory frameworks, including approvals from shareholders, the Securities and Exchange
            Board of India (SEBI), and other relevant authorities. Here, we guide you through the 
            conversion process, advantages, and legal requirements.
          </p>
        </div>
      </div>

      {/* Key Steps List */}
      <div className="steps-section">
        <h2>Key Steps for Conversion</h2>
        <ul>
          <li>Approval from the board and shareholders</li>
          <li>Amendment of the Memorandum of Association (MOA)</li>
          <li>Appointment of additional directors</li>
          <li>Filing with the Registrar of Companies (RoC)</li>
          <li>Obtaining the Certificate of Incorporation as a Public Limited Company</li>
        </ul>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="review-card">
          <p className="review-text">
            "The process of converting our Private Limited to a Public Limited was seamless. The team
            guided us through every step and ensured compliance with all the legal formalities. Highly
            recommended!"
          </p>
          <h4 className="review-author">John Doe</h4>
          <p className="review-position">CEO, XYZ Corporation</p>
        </div>
        <div className="review-card">
          <p className="review-text">
            "We were unsure about the complexity of the conversion, but thanks to the expert team, we
            were able to complete the process smoothly and efficiently."
          </p>
          <h4 className="review-author">Jane Smith</h4>
          <p className="review-position">Founder, ABC Enterprises</p>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="resources-section">
        <h2>Related Topics</h2>
        <ul>
          <li><a href="/understanding-public-limited-companies">Understanding Public Limited Companies</a></li>
          <li><a href="/steps-to-register-public-limited-company">Steps to Register a Public Limited Company</a></li>
          <li><a href="/benefits-of-public-limited-companies">Benefits of Public Limited Companies</a></li>
          <li><a href="/legal-requirements-for-public-limited-companies">Legal Requirements for Public Limited Companies</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PrivateLimitedToPublicLimited;
