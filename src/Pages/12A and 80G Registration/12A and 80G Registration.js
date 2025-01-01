import React, { useState } from "react";
import "./style.css";
import axios from 'axios'; // Import axios for making HTTP requests

const TwelveAandEightyGRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-12a-80g-registration', formData);
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="registration-page">
      <header className="page-header">
        <h1>12A and 80G Registration</h1>
        <p>
          Obtain tax exemptions and increase credibility for your NGO or
          charitable trust with 12A and 80G registrations.
        </p>
      </header>

      <section className="information-section">
        <h2>About 12A and 80G Registration</h2>
        <p>
          <strong>12A Registration</strong> allows Non-Governmental
          Organizations (NGOs) and charitable trusts to be exempted from paying
          income tax on their surplus income. It is a one-time registration
          that serves as proof of the organization’s commitment to its
          charitable objectives.
        </p>
        <p>
          <strong>80G Registration</strong> enables donors to claim tax
          deductions on the donations made to NGOs or charitable organizations.
          It not only encourages donations but also enhances the credibility of
          the organization.
        </p>
        <h3>Benefits of 12A and 80G Registration</h3>
        <ul>
          <li>Tax exemption for NGOs under Section 12A.</li>
          <li>Increased credibility and trust among donors.</li>
          <li>Encouragement for donors through tax deductions under 80G.</li>
          <li>Compliance with legal requirements and guidelines.</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>NGOs, charitable trusts, and Section 8 companies are eligible.</li>
          <li>The organization must not use its income for personal gains.</li>
          <li>Charitable purposes should include education, medical relief,
            or other activities for the benefit of the public.
          </li>
          <li>Proper documentation and audit reports are required.</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Contact Us for Registration</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" placeholder="Write your query here" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'green', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default TwelveAandEightyGRegistration;
