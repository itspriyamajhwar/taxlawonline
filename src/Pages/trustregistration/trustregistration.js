import React from "react";
import "./style.css";


const TrustRegistration = () => {
  return (
    <div className="page-container">
      <h1>Trust Registration</h1>
      <div className="hero-section">
        <img src="https://todayswillsandprobate.co.uk/wp-content/uploads/2022/08/Trust-Registration-4-850x560.jpg" alt="Trust Registration" className="hero-image" />
        <p className="hero-text">
          A trust is a legal entity created to hold and manage assets for the
          benefit of others. Trust registration is essential for ensuring legal
          compliance and safeguarding the interests of beneficiaries.
        </p>
      </div>

      <div className="grid-container">
        <div className="info-box animate-box">
          <h2>Types of Trusts</h2>
          <ul>
            <li>Public Trust</li>
            <li>Private Trust</li>
            <li>Charitable Trust</li>
            <li>Religious Trust</li>
          </ul>
        </div>

        <div className="info-box animate-box">
          <h2>Documents Required</h2>
          <ul>
            <li>Trust Deed</li>
            <li>Proof of Identity of Trustees</li>
            <li>Proof of Address</li>
            <li>PAN Card of the Trust</li>
          </ul>
        </div>

        <div className="info-box animate-box">
          <h2>Steps for Registration</h2>
          <ol>
            <li>Draft the Trust Deed.</li>
            <li>Choose a name for the trust.</li>
            <li>Submit the required documents.</li>
            <li>Pay the registration fees.</li>
            <li>Get the registration certificate.</li>
          </ol>
        </div>

        <div className="info-box animate-box">
          <h2>Benefits of Registration</h2>
          <p>
            Registering a trust provides legal recognition, tax exemptions,
            credibility, and ensures smooth management of assets and funds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustRegistration;
