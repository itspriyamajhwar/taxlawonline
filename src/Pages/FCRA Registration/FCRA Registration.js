import React, { useState } from "react";
import "./style.css";

const faqData = [
  {
    question: "What is FCRA Registration?",
    answer:
      "FCRA (Foreign Contribution Regulation Act) registration is mandatory for NGOs or associations in India to receive foreign funds for specific purposes such as educational, social, religious, and cultural activities."
  },
  {
    question: "Who is eligible for FCRA Registration?",
    answer:
      "Organizations that have been in existence for at least three years and have spent a minimum of INR 10 lakhs on their charitable activities are eligible for FCRA registration."
  },
  {
    question: "What is the validity of FCRA Registration?",
    answer: "FCRA Registration is valid for five years and needs to be renewed before expiration."
  },
  {
    question: "What are the penalties for non-compliance?",
    answer:
      "Non-compliance with FCRA guidelines can result in hefty fines, cancellation of the registration, or even legal proceedings."
  }
];

const FCRARegistration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fcra-registration-page">
      <header className="page-header">
        <h1>FCRA Registration</h1>
        <p>
          FCRA registration allows NGOs and other eligible entities in India to
          receive foreign contributions legally.
        </p>
      </header>

      <section className="information-section">
        <h2>About FCRA Registration</h2>
        <p>
          FCRA (Foreign Contribution Regulation Act) registration is a legal
          prerequisite for organizations in India that intend to receive
          foreign funding. It ensures proper utilization of foreign funds for
          activities that benefit society.
        </p>
        <p>
          The registration is governed by the Ministry of Home Affairs and
          applies to NGOs, charitable trusts, and other associations. It
          promotes transparency and accountability in the utilization of
          foreign contributions.
        </p>
      </section>

      <section className="service-charges-section">
        <h2>Our Service Plans</h2>
        <div className="service-grid">
          <div className="grid-item">
            <h3>Basic Plan</h3>
            <p>Includes FCRA application filing and documentation support.</p>
            <p className="price">₹10,000</p>
          </div>
          <div className="grid-item">
            <h3>Standard Plan</h3>
            <p>
              Includes application filing, documentation support, and follow-up
              with authorities.
            </p>
            <p className="price">₹15,000</p>
          </div>
          <div className="grid-item">
            <h3>Premium Plan</h3>
            <p>
              Comprehensive service including consultancy, application filing,
              documentation, and renewal support.
            </p>
            <p className="price">₹25,000</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Message:
            <textarea placeholder="Write your query here" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

     
    </div>
  );
};

export default FCRARegistration;
