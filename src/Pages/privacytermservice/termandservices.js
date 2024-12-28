import React from "react";
import "./style.css"; // Add your styling file

function TermsAndService() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-intro">
        Welcome to TaxLawOnline. These terms and conditions outline the rules and regulations for using our website. By accessing this website, you accept these terms. If you disagree with any part of these terms, please do not use our services.
      </p>

      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our website, you agree to comply with these terms. Additional terms may apply for specific services.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Services Provided</h2>
        <p>
          TaxLawOnline offers various tax-related services, including TDS filing, ITR preparation, and assistance with tax notices. The details of the services are provided on the website.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate and up-to-date information for using our services.</li>
          <li>Maintain the confidentiality of your login credentials.</li>
          <li>Comply with all applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>4. Payment and Refunds</h2>
        <p>
          All payments for services must be made in advance. Refunds will be provided only under exceptional circumstances and at the discretion of TaxLawOnline.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Intellectual Property</h2>
        <p>
          All content on the website, including text, graphics, and logos, is the intellectual property of TaxLawOnline. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          TaxLawOnline shall not be held liable for any damages arising from the use of our website or services, including but not limited to financial loss or data breaches.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of India. Any disputes will be resolved in the jurisdiction of Delhi, India.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. Changes to Terms</h2>
        <p>
          TaxLawOnline reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.
        </p>
      </section>

      <section className="terms-section">
        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these terms, please contact us at: <strong> contact.taxlawonline@gmail.com</strong>.
        </p>
      </section>

      <footer className="terms-footer">
        <p>Last Updated: December 28, 2024</p>
      </footer>
    </div>
  );
}

export default TermsAndService;
