import React from 'react';
import './footer.css';
import logo from '../../assect/1-removebg-preview (1).png'; // Import the image

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
          <a href="/blog">Blog</a>
          <a href="/fqa">FAQ</a>
        </div>

        {/* Important Links Section */}
        <div className="important-links">
          <h3>Important Links</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>

        {/* News Section */}
        <div className="news">
          <h3>News</h3>
          <a href="/news">Latest News</a>
          <a href="/press-release">Press Releases</a>
        </div>

        {/* Write to Us Section */}
        <div className="write-to-us">
          <h3>Write to Us</h3>
          <a href="mailto:contact.taxlawonline@gmail.com">Send Us an Email</a>
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
