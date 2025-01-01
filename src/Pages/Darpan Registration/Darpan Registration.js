import React, { useState } from 'react';
import './style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const DarpanRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/submit-darpan-registration' 
      : 'https://backend-one-snowy-88.vercel.app/submit-darpan-registration';
    try {
      const response = await axios.post(serverUrl, formData);
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="darpan-registration-page">
      <header className="page-header">
        <h1>Darpan Registration</h1>
        <p>Join the Darpan Registration program to get connected with government services.</p>
      </header>

      <section className="registration-form-section">
        <h2>Register for Darpan</h2>
        <p>Fill out the form below to get started with the Darpan Registration:</p>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'green', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )}
      </section>

      <section className="info-paragraph-section">
        <h2>About Darpan Registration</h2>
        <p>
          The Darpan Registration is a platform designed to enable citizens to connect with various government 
          schemes and services. By registering, users can access real-time information about government 
          programs, benefits, and more. This initiative aims to bring transparency and accessibility to 
          government schemes and services.
        </p>
      </section>
    </div>
  );
};

export default DarpanRegistration;
