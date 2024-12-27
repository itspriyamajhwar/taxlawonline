import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick"; // Using react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PublicLimitedCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send to an API or handle validation)
    alert("Form submitted!");
  };

  return (
    <div className="page-container">
      <h1>Public Limited Company</h1>

      <div className="grid-container">
        <div className="info-box">
          <h2>What is a Public Limited Company?</h2>
          <p>
            A Public Limited Company is a company that is managed by directors and owned by
            shareholders. It offers limited liability and allows the public to buy shares.
          </p>
        </div>

        <div className="info-box">
          <h2>Benefits of a Public Limited Company</h2>
          <ul>
            <li>Access to capital through public investment.</li>
            <li>Limited liability for shareholders.</li>
            <li>Enhanced credibility and trust.</li>
            <li>Transferability of shares.</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>Documents Required</h2>
          <ul>
            <li>DIN (Director Identification Number).</li>
            <li>PAN and Aadhar of directors.</li>
            <li>MOA (Memorandum of Association).</li>
            <li>Proof of address for the company office.</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>Steps to Register</h2>
          <ol>
            <li>Obtain DSC (Digital Signature Certificate) for directors.</li>
            <li>Apply for DIN and name approval.</li>
            <li>Draft MOA and AOA.</li>
            <li>File incorporation forms with the ROC (Registrar of Companies).</li>
            <li>Receive the certificate of incorporation.</li>
          </ol>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PublicLimitedCompany;
