import React from 'react';
import './style.css'; // Importing the custom CSS file

const BenefitsOfPublicLimitedCompanies = () => {
  return (
    <div className="container">
      <h1 className="page-title">Benefits of Public Limited Companies</h1>

      {/* Introduction Section */}
      <div className="content-section">
        <h2 className="section-title">Why Choose a Public Limited Company?</h2>
        <p className="section-text">
          A Public Limited Company (PLC) offers several advantages that can help a business grow, raise capital, and gain public recognition. In this section, we explore the key benefits of becoming a Public Limited Company and why it might be the right choice for your business.
        </p>
      </div>

      {/* Benefits List Section */}
      <div className="benefits-section">
        <h2 className="section-title">Key Benefits of Public Limited Companies</h2>
        <ul className="benefits-list">
          <li>Access to a larger pool of capital by offering shares to the public.</li>
          <li>Increased public profile and recognition, enhancing the company’s credibility and trustworthiness.</li>
          <li>Ability to issue bonds or other financial instruments to raise funds.</li>
          <li>Limited liability for shareholders, meaning personal assets are protected from company debts.</li>
          <li>Shares are freely transferable, offering liquidity for shareholders.</li>
          <li>Greater ability to expand and grow due to increased capital and public investment.</li>
          <li>Attracts high-quality talent with the possibility of offering stock options as part of compensation.</li>
          <li>Increased market share through visibility and brand recognition.</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div className="closing-section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          The benefits of being a Public Limited Company are numerous, ranging from access to capital and liquidity to enhanced reputation and growth opportunities. While there are legal and regulatory responsibilities, the advantages of becoming a PLC far outweigh the challenges for many businesses looking to expand and scale up operations.
        </p>
      </div>
    </div>
  );
};

export default BenefitsOfPublicLimitedCompanies;
