import React from "react";
import "./style.css";

const ESIRegistration = () => {
  return (
    <div className="esi-registration-page">
      {/* Banner Section */}
      <header className="banner-section">
        <h1>ESI Registration</h1>
        <p>
          Secure your employees' health and well-being with ESI Registration. Comply with legal requirements and enjoy numerous benefits.
        </p>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About ESI Registration</h2>
        <p>
          The Employees' State Insurance (ESI) scheme is a social security and health insurance program for Indian workers, managed by the Employees' State Insurance Corporation (ESIC). It is mandatory for organizations with 10 or more employees earning up to ₹21,000 per month.
        </p>
        <h3>Key Benefits of ESI Registration:</h3>
        <ul>
          <li>Medical care for employees and their families.</li>
          <li>Sickness benefits for temporary disabilities.</li>
          <li>Maternity benefits for female employees.</li>
          <li>Funeral expenses in case of an unfortunate event.</li>
        </ul>
      </section>

      {/* Grid Section */}
      <section className="grid-section">
        <h2>Why Choose Us for ESI Registration?</h2>
        <div className="grid-container">
          <div className="grid-box">
            <h3>Expert Guidance</h3>
            <p>Our team provides step-by-step assistance for seamless ESI registration.</p>
          </div>
          <div className="grid-box">
            <h3>Compliance Guarantee</h3>
            <p>Ensure your organization meets all legal requirements efficiently.</p>
          </div>
          <div className="grid-box">
            <h3>Affordable Charges</h3>
            <p>Get professional services at competitive pricing with no hidden costs.</p>
          </div>
          <div className="grid-box">
            <h3>24/7 Support</h3>
            <p>Our experts are available around the clock to resolve your queries.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Contact Us for ESI Registration</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Phone:
            <input type="tel" placeholder="Enter your phone number" required />
          </label>
          <label>
            Message:
            <textarea placeholder="How can we help you?" rows="4"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      
    </div>
  );
};

export default ESIRegistration;
