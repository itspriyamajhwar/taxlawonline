import React from 'react';
import './style.css'; // Importing the custom CSS file

const StepsToRegisterPublicLimitedCompany = () => {
  return (
    <div className="container">
      <h1 className="page-title">Steps to Register a Public Limited Company</h1>

      {/* Introduction Section */}
      <div className="content-section">
        <h2 className="section-title">How to Register a Public Limited Company?</h2>
        <p className="section-text">
          Registering a Public Limited Company (PLC) involves a series of legal steps and compliance with regulatory requirements. It allows the company to offer shares to the public and be listed on a stock exchange. Below are the steps to follow to successfully register your Public Limited Company.
        </p>
      </div>

      {/* Steps List Section */}
      <div className="steps-section">
        <h2 className="section-title">Key Steps to Register a Public Limited Company</h2>
        <ul className="steps-list">
          <li>Choose a unique name for your company and ensure it complies with naming regulations.</li>
          <li>Obtain the necessary approvals and certifications, including the Digital Signature Certificate (DSC) and Director Identification Number (DIN).</li>
          <li>Draft the Memorandum of Association (MOA) and Articles of Association (AOA) with legal formalities.</li>
          <li>File the incorporation application with the Registrar of Companies (RoC), along with all the required documents.</li>
          <li>Obtain the Certificate of Incorporation from the RoC, which confirms the company’s registration as a Public Limited Company.</li>
          <li>Comply with ongoing regulatory requirements such as appointing auditors, issuing shares, and maintaining corporate governance.</li>
        </ul>
      </div>

      {/* Legal Documentation Section */}
      <div className="legal-documents-section">
        <h2 className="section-title">Legal Documents Required</h2>
        <ul className="documents-list">
          <li>Memorandum of Association (MOA) and Articles of Association (AOA)</li>
          <li>Digital Signature Certificate (DSC) of directors</li>
          <li>Director Identification Number (DIN) of the directors</li>
          <li>Proof of office address (e.g., lease agreement or utility bill)</li>
          <li>Identity and address proof of the directors</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div className="closing-section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Registering a Public Limited Company is a detailed process that requires legal expertise and careful attention to regulatory requirements. Once registered, your company will have access to a wider pool of capital, enhanced credibility, and opportunities for growth. Ensure you follow each step carefully to ensure smooth registration and compliance.
        </p>
      </div>
    </div>
  );
};

export default StepsToRegisterPublicLimitedCompany;
