import React from 'react';
import './style.css';

const Contact = () => {
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
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
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
