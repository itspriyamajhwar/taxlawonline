import React from "react";

import "./style.css";

const LogoDesigning = () => {
  return (
    <div className="page-container">
      {/* Banner Section */}
      <section className="banner-section">
        <h1>Logo Designing</h1>
        <p>
          Create a unique identity for your brand with our professional logo designing services. Memorable, creative, and tailored to your business.
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <h2>Our Design Services</h2>
        <div className="image-grid">
          <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.qM3DjLYAEs_h5jZr5Dc0kgHaE7?rs=1&pid=ImgDetMain" alt="Custom Designs" />
            <h3>Custom Designs</h3>
            <p>We create logos that reflect your brand's unique identity.</p>
          </div>
          <div className="grid-item">
            <img src="https://thumbs.dreamstime.com/b/file-formats-icons-vector-set-take-your-organization-to-next-level-versatile-format-covers-popular-documents-269246940.jpg" alt="Versatile Formats" />
            <h3>Versatile Formats</h3>
            <p>Logos optimized for web, print, and social media.</p>
          </div>
          <div className="grid-item">
            <img src="https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/shutterstock_247547953.jpg" alt="Creative Team" />
            <h3>Creative Team</h3>
            <p>Our designers bring creativity and expertise to every project.</p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider-section">
        <h2>Why Choose Us for Logo Design?</h2>
        <div className="slider-container">
          <div className="slider-item">
            <h3>Originality</h3>
            <p>We ensure every design is unique and crafted just for you.</p>
          </div>
          <div className="slider-item">
            <h3>High Quality</h3>
            <p>Premium-quality designs that leave a lasting impression.</p>
          </div>
          <div className="slider-item">
            <h3>Quick Turnaround</h3>
            <p>Receive your custom logo within a short time frame.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesigning;
