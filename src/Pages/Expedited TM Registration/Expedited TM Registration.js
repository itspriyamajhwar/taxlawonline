import React from "react";

import "./style.css";

const ExpeditedTMRegistration = () => {
  return (
    <div className="page-container">
      {/* Banner Section */}
      <section className="banner-section">
        <h1>Expedited TM Registration</h1>
        <p>
          Secure your brand identity quickly and efficiently with our expedited trademark registration service. Fast, reliable, and hassle-free.
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <h2>Benefits of Expedited Registration</h2>
        <div className="image-grid">
          <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.0sNY-A1kHbrXfUfjQFd3uQHaEK?rs=1&pid=ImgDetMain" alt="Time Efficiency" />
            <h3>Time Efficiency</h3>
            <p>Fast-track your trademark application with priority processing.</p>
          </div>
          <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.JGbae89suCdyOnuCEC9M3AAAAA?rs=1&pid=ImgDetMain" alt="Expert Assistance" />
            <h3>Expert Assistance</h3>
            <p>Get support from experienced trademark specialists.</p>
          </div>
          <div className="grid-item">
            <img src="https://madesimplegroup-static.s3-eu-west-1.amazonaws.com/msg-blog/wp-content/uploads/2015/11/Brand-protection.png" alt="Brand Security" />
            <h3>Brand Security</h3>
            <p>Protect your intellectual property from infringement risks.</p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider-section">
        <h2>Steps in Expedited TM Registration</h2>
        <div className="slider-container">
          <div className="slider-item">
            <h3>Step 1</h3>
            <p>Initial consultation to understand your brand and requirements.</p>
          </div>
          <div className="slider-item">
            <h3>Step 2</h3>
            <p>Preparation and submission of application with priority status.</p>
          </div>
          <div className="slider-item">
            <h3>Step 3</h3>
            <p>Follow-ups with the authorities to ensure a quick response.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpeditedTMRegistration;
