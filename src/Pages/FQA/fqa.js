import React from "react";
import "./style.css";

const FAQPage = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>

      <div className="faq-info">
        <p>
          At TaxLawOnline, we understand that navigating through tax and legal
          matters can be challenging. Our expert team of legal professionals and
          Chartered Accountants (CAs) are here to simplify the process for you.
          Below, we’ve answered some of the most common questions we get to help
          you get started.
        </p>
      </div>

      <div className="faq-list">
        <div className="faq-item">
          <h2 className="faq-question">What is TaxLawOnline?</h2>
          <p className="faq-answer">
            TaxLawOnline is an online platform that connects individuals and
            businesses with verified legal and tax experts to streamline business
            operations, ensure compliance, and provide professional guidance.
          </p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">How can I contact a tax expert?</h2>
          <p className="faq-answer">
            You can easily contact a tax expert through our platform by browsing
            the available experts in the “Talk to an Expert” section. Select the
            relevant professional category and book a consultation.
          </p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">Are your services affordable?</h2>
          <p className="faq-answer">
            Yes! We aim to make legal and tax services affordable and accessible
            to everyone. You can compare pricing for various services before
            booking an expert.
          </p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">What documents do I need to consult with a lawyer?</h2>
          <p className="faq-answer">
            It depends on the type of consultation. For general inquiries, you
            may not need any documents, but for specific services (like contract
            drafting), we may ask you to provide the relevant documents to
            ensure accuracy in advice.
          </p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">How can I track my consultation progress?</h2>
          <p className="faq-answer">
            After booking a consultation, you will receive updates regarding your
            appointment, including confirmation, reminders, and any follow-up
            information from your assigned expert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
