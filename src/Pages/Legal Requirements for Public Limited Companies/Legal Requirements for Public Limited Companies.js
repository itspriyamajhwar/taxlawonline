import React from 'react';
import './style.css'; // Importing the custom CSS file

const LegalRequirementsForPublicLimitedCompanies = () => {
  return (
    <div className="container">
      <h1 className="page-title">Legal Requirements for Public Limited Companies</h1>

      {/* Introduction Section */}
      <div className="content-section">
        <h2 className="section-title">What are the Legal Requirements for Public Limited Companies?</h2>
        <p className="section-text">
          A Public Limited Company (PLC) must comply with specific legal and regulatory requirements to be incorporated and operate legally. These requirements ensure transparency, accountability, and corporate governance, and they vary depending on jurisdiction.
        </p>
      </div>

      {/* Legal Requirements List Section */}
      <div className="legal-requirements-section">
        <h2 className="section-title">Key Legal Requirements for PLCs</h2>
        <ul className="legal-requirements-list">
          <li>Must adhere to the Companies Act and Securities Exchange Commission (SEC) regulations.</li>
          <li>Must have a minimum share capital (this amount may vary depending on the jurisdiction).</li>
          <li>Obligation to disclose annual financial statements, including income statements, balance sheets, and cash flow statements.</li>
          <li>Requirement to hold an Annual General Meeting (AGM) and appoint a Board of Directors.</li>
          <li>Must maintain accurate and up-to-date records of shareholders and directors.</li>
          <li>Must comply with corporate governance guidelines, ensuring transparency and fair practices.</li>
          <li>Obligation to undergo periodic audits by external auditors to ensure compliance with accounting standards.</li>
          <li>Must register with the relevant stock exchange if the company is publicly traded.</li>
        </ul>
      </div>

      {/* Compliance and Penalties Section */}
      <div className="compliance-section">
        <h2 className="section-title">Compliance and Penalties</h2>
        <p className="section-text">
          Failure to comply with the legal requirements of a Public Limited Company can result in severe penalties, including fines, legal action, or the dissolution of the company. It is essential for PLCs to meet all legal obligations to avoid any legal or financial repercussions.
        </p>
      </div>

      {/* Closing Section */}
      <div className="closing-section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Legal requirements are a critical aspect of operating a Public Limited Company. Adhering to these regulations not only ensures the company’s legality but also builds investor confidence, transparency, and accountability. It’s essential to understand and meet all legal obligations to ensure the continued success and operation of the company.
        </p>
      </div>
    </div>
  );
};

export default LegalRequirementsForPublicLimitedCompanies;
