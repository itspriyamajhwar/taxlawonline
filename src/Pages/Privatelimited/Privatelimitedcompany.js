import React from "react";
import './style.css';

const PrivateLimitedCompany = () => {
  return (
    <div className="private-limited-container">
      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-heading">Private Limited Company</h1>
        <p className="banner-subheading">
          Simplifying the process of company incorporation for your business.
        </p>
      </div>

      {/* Content Section */}
      <div className="content">
        <section className="section">
          <h2>What is a Private Limited Company?</h2>
          <p>
            A Private Limited Company is a type of privately held business entity in which the
            liability of its members is limited to the amount of shares they hold. This
            structure provides numerous benefits, including separate legal identity, limited
            liability, and access to funding.
          </p>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <ul>
            <li>Separate legal identity.</li>
            <li>Limited liability for shareholders.</li>
            <li>Easy access to funding and investment.</li>
            <li>Suitable for startups and growing businesses.</li>
          </ul>
        </section>

        <section className="section">
          <h2>How We Help</h2>
          <p>
            We offer comprehensive services to help you incorporate your Private Limited
            Company, including:
          </p>
          <ul>
            <li>Company name approval.</li>
            <li>Drafting and filing of incorporation documents.</li>
            <li>Obtaining PAN and TAN.</li>
            <li>Support with compliance and legal documentation.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivateLimitedCompany;
