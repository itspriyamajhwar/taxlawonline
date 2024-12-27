import React from 'react';
import './footer.css';
import logo from '../../assect/taxlaw.png'; // Import the image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="company-info">
          <img src={logo} alt="Taxlawonline Logo" className="logo" />
          <p className="company-name">Taxlawonline</p>
        </div>

        {/* Navigation Section */}
        <div className="navigation">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Office Address and Contact Info Section */}
        <div className="contact-info">
          <p><strong>Office Address:</strong> A-722, Sector-2, Rohini Avantika, Delhi-110085</p>
          <p><strong>Email:</strong> <a href="mailto:contact.taxlawonline@gmail.com">contact.taxlawonline@gmail.com</a></p>
          <p><strong>Contact:</strong> +91 9220635131</p>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
