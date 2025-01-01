import React from 'react';
import './style.css'; // Importing the custom CSS file

const UnderstandingPublicLimited = () => {
  return (
    <div className="container">
      <h1 className="page-title">Understanding Public Limited Companies</h1>
      
      {/* Introduction Section */}
      <div className="content-section">
        <h2 className="section-title">What is a Public Limited Company?</h2>
        <p className="section-text">
          A Public Limited Company (PLC) is a type of company that offers shares to the public and is listed on the stock exchange. These companies are typically larger and can raise capital by selling shares to the public. Public Limited Companies are required to comply with specific legal and regulatory frameworks, including financial transparency and corporate governance rules.
        </p>
      </div>

      {/* Features of Public Limited Company */}
      <div className="features-section">
        <h2 className="section-title">Features of a Public Limited Company</h2>
        <ul className="features-list">
          <li>Ability to raise capital by offering shares to the public.</li>
          <li>Limited liability for shareholders, meaning personal assets are protected.</li>
          <li>Shares are freely transferable, making it easy to buy and sell on the stock exchange.</li>
          <li>Requires a minimum number of shareholders, typically two or more.</li>
          <li>Subject to strict regulatory requirements, including annual financial reporting.</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2 className="section-title">Benefits of Public Limited Companies</h2>
        <ul className="benefits-list">
          <li>Access to a larger pool of capital through public investment.</li>
          <li>Increased public profile and credibility, attracting investors and customers.</li>
          <li>Shares can be used as a form of payment or for employee stock options.</li>
          <li>Ability to raise funds through debt by issuing bonds or other financial instruments.</li>
          <li>Potential for better growth and expansion due to more resources.</li>
        </ul>
      </div>

      {/* Legal Requirements Section */}
      <div className="legal-requirements-section">
        <h2 className="section-title">Legal Requirements for Public Limited Companies</h2>
        <ul className="legal-requirements-list">
          <li>Must adhere to the Companies Act and Securities Exchange Commission (SEC) regulations.</li>
          <li>Require a minimum share capital (which may vary depending on jurisdiction).</li>
          <li>Obligation to disclose financial statements and hold annual meetings.</li>
          <li>Subject to periodic audits by external auditors.</li>
          <li>Must comply with corporate governance guidelines and transparency standards.</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div className="closing-section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Public Limited Companies play a significant role in the economy by enabling businesses to raise capital and expand. While the process to establish a public company can be complex and requires adherence to various legal and regulatory requirements, the benefits of raising public funds, offering shares to the public, and expanding the business are substantial.
        </p>
      </div>
    </div>
  );
};

export default UnderstandingPublicLimited;
