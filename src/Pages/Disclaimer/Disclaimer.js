import React from "react";
import "./style.css"; // Add your styling file

function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h1 className="disclaimer-title">Disclaimer</h1>
      <p className="disclaimer-intro">
        Welcome to TaxLawOnline. This website is provided for general informational purposes only and does not constitute legal or tax advice. By using this website, you acknowledge and agree to the terms of this disclaimer.
      </p>

      <section className="disclaimer-section">
        <h2>1. General Information</h2>
        <p>
          The information on this website is intended to provide users with an overview of tax-related topics. While we strive to keep the content accurate and up-to-date, we do not guarantee its accuracy, completeness, or reliability.
        </p>
      </section>

      <section className="disclaimer-section">
        <h2>2. No Professional Relationship</h2>
        <p>
          Using this website or contacting us through it does not establish a professional or attorney-client relationship. For specific advice regarding your tax matters, consult with a qualified professional.
        </p>
      </section>

      <section className="disclaimer-section">
        <h2>3. No Liability</h2>
        <p>
          TaxLawOnline shall not be held liable for any losses or damages resulting from the use of the information provided on this website. Users are advised to seek professional assistance for their specific needs.
        </p>
      </section>

      <section className="disclaimer-section">
        <h2>4. External Links</h2>
        <p>
          This website may contain links to external websites for your convenience. TaxLawOnline is not responsible for the content, accuracy, or availability of these external sites.
        </p>
      </section>

      <section className="disclaimer-section">
        <h2>5. Changes to Content</h2>
        <p>
          TaxLawOnline reserves the right to update, modify, or remove content from this website without prior notice.
        </p>
      </section>

      <section className="disclaimer-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at: <strong>support@taxlawonline.com</strong>.
        </p>
      </section>

      <footer className="disclaimer-footer">
        <p>Last Updated: December 28, 2024</p>
      </footer>
    </div>
  );
}

export default Disclaimer;
