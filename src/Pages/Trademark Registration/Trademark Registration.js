import React from "react";
import "./style.css";

const TrademarkRegistration = () => {
  return (
    <div className="trademark-registration-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Trademark Registration</h1>
        <p>
          Secure your brand identity and protect your intellectual property with
          a trademark registration. This process ensures exclusive rights to
          your logo, name, or design.
        </p>
      </section>

     

      {/* Details Section */}
      <section className="details-section">
        <div className="content-container">
          <div className="text-content">
            <h2>What is Trademark Registration?</h2>
            <p>
              A trademark is a unique symbol, word, or design that distinguishes
              your brand from others in the marketplace. Registration ensures
              your rights to use it exclusively.
            </p>
          </div>
          <div className="image-content">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.wxQddEDY1SCe_umsoKiBlgHaER&pid=Api&P=0&h=180"
              alt="Trademark Explanation"
            />
          </div>
        </div>

        <div className="content-container reverse">
          <div className="image-content">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.z5wQD7mx8eCPYtAHDmzvUwHaEP&pid=Api&P=0&h=180"
              alt="Benefits of Trademark"
            />
          </div>
          <div className="text-content">
            <h2>Benefits of Registering a Trademark</h2>
            <p>
              A registered trademark not only safeguards your brand but also
              builds trust with customers. It prevents unauthorized use of your
              brand and boosts its credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid-section">
        <h2>Steps for Trademark Registration</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Step 1</h3>
            <p>Choose a unique and distinct trademark for your brand.</p>
          </div>
          <div className="grid-item">
            <h3>Step 2</h3>
            <p>File the trademark application with all required details.</p>
          </div>
          <div className="grid-item">
            <h3>Step 3</h3>
            <p>Await examination and address any objections raised.</p>
          </div>
          <div className="grid-item">
            <h3>Step 4</h3>
            <p>
              Upon approval, receive the certificate of trademark registration.
            </p>
          </div>
        </div>
      </section>

      {/* Client Feedback Slider */}
      <section className="feedback-section">
        <h2>What Our Clients Say</h2>
        <div className="feedback-slider">
          <div className="feedback-item">
            <p>"The process was smooth, and now my brand is protected!"</p>
            <span>- John Doe</span>
          </div>
          <div className="feedback-item">
            <p>"Highly professional service with timely updates."</p>
            <span>- Jane Smith</span>
          </div>
          <div className="feedback-item">
            <p>"I feel secure knowing my logo is now a trademark."</p>
            <span>- Mark Lee</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Enter your message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default TrademarkRegistration;