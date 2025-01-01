import React, { useState } from 'react';
import './style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-contact', {
        name,
        email,
        phone,
        message
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Feel free to get in touch with us.</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {successMessage && (
            <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
              {successMessage}
            </p>
          )} {/* Display success message */}
        </div>
      </section>

      {/* Office Information Section */}
      <section className="office-info-section">
        <h2>Our Office</h2>
        <p><strong>Office Address:</strong> A-722, Sector-2, Rohini Avantika, Delhi-110085</p>
        <p><strong>Email:</strong> <a href="mailto:contact.taxlawonline@gmail.com">contact.taxlawonline@gmail.com</a></p>
        <p><strong>Contact:</strong> +91 9220635131</p>
      </section>

      {/* Image Section */}
    
    </div>
  );
};

export default Contact;
