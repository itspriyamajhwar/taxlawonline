import React from "react";
import "./style.css";

const TrademarkCertificate = () => {
  return (
    <div className="trademark-certificate-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h1>Trademark Certificate</h1>
          <p>
            Protect your brand with a registered trademark certificate. This
            certificate ensures the exclusivity of your brand, logo, or design.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Our Trademark Certificates</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img
              src="https://th.bing.com/th/id/OIP.LL1_VcMDBe93j_why2jLnQHaJ4?rs=1&pid=ImgDetMain"
              alt="Trademark Certificate Example"
            />
            <p>Example Certificate 1</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://www.aicpeindia.ac.in/resources/docs/AICPE_Trade_Certificate.jpg"
              alt="Trademark Certificate Example"
            />
            <p>Example Certificate 2</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://catalog.wlimg.com/1/6581352/small-images/registration-certificate-2769022.jpg"
              alt="Trademark Certificate Example"
            />
            <p>Example Certificate 3</p>
          </div>
        </div>
      </section>

      {/* How to Get Trademark Certificate */}
      <section className="how-to-section">
        <h2>How to Get a Trademark Certificate</h2>
        <p>To obtain a trademark certificate, you need to:</p>
        <ul>
          <li>Choose a unique trademark for your brand.</li>
          <li>Conduct a trademark search to ensure availability.</li>
          <li>File a trademark application with all the required details.</li>
          <li>Complete the examination process and address any objections.</li>
          <li>Receive your trademark certificate upon approval.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Need Assistance? Contact Us Now!</h2>
        <p>
          Our team is here to assist you through the trademark registration and
          certification process. Don't hesitate to reach out for more information.
        </p>
        <a
          href="tel:+1234567890"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default TrademarkCertificate;
