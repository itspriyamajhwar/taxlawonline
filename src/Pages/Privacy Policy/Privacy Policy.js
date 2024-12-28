import React from "react";
import "./style.css"; // Add your styling file

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-intro">
        Welcome to TaxLawOnline. Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>

      <section className="privacy-section">
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when registering or using our services.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interactions with our website, such as pages visited, time spent, and technical data like your IP address.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to enhance your browsing experience. Learn more in our Cookies Policy.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To respond to your inquiries and offer customer support.</li>
          <li>To send updates about our services, policies, and promotions.</li>
          <li>To ensure compliance with legal obligations.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>How We Protect Your Information</h2>
        <p>
          We implement advanced security measures to safeguard your data from unauthorized access, disclosure, or destruction. However, no online platform is completely secure, and we encourage you to protect your login information.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Third-Party Services</h2>
        <p>
          We may share your data with trusted third-party service providers for payment processing, analytics, and other services necessary to operate our website. These providers are obligated to protect your data.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Your Rights</h2>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving marketing emails by following the unsubscribe link in our communications.</li>
          <li>Request details about how we process your data.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be reflected on this page, and the updated date will be noted at the bottom.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <strong>contact.taxlawonline@gmail.com</strong>
        </p>
      </section>

      <footer className="privacy-policy-footer">
        <p>Last Updated: December 28, 2024</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
