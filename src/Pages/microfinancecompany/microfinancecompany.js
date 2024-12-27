// src/pages/MicroFinanceCompany.js
import React from 'react';
import './style.css';  // Importing the CSS file

function MicroFinanceCompany() {
  return (
    <div className="microfinance-container">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-heading">Micro Finance Company</h1>
          <p className="banner-subheading">Empowering Communities with Financial Services</p>
        </div>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <div className="container">
          <div className="grid">
            <div className="info-left">
              <h2>What is a Micro Finance Company?</h2>
              <p>A Micro Finance Company (MFC) is a financial institution that provides small loans to individuals or groups, especially in underprivileged communities. These loans often have low-interest rates and aim to support small-scale businesses or empower individuals to improve their living standards.</p>
              <p>Microfinance is a powerful tool in promoting financial inclusion, allowing individuals who don't have access to traditional banking services to start or expand businesses, improve their health, and secure their futures.</p>
            </div>
            <div className="info-right">
              <h2>Key Features of Micro Finance Companies:</h2>
              <ul>
                <li>Small loan amounts tailored for low-income groups.</li>
                <li>Loans are provided with flexible repayment schedules.</li>
                <li>Helps promote financial literacy and business skills.</li>
                <li>Supports women and marginalized groups in the economy.</li>
                <li>Focuses on sustainable development through social impact.</li>
              </ul>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="testimonials">
            <h3>Our Impact</h3>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p>"Microfinance helped me start my small business and support my family."</p>
                <p>- Ayesha, Entrepreneur</p>
              </div>
              <div className="testimonial">
                <p>"I was able to get a loan to buy livestock and improve my farming practices."</p>
                <p>- Rajesh, Farmer</p>
              </div>
              <div className="testimonial">
                <p>"With a small loan, I was able to educate my children and improve our living standards."</p>
                <p>- Suman, Mother</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MicroFinanceCompany;
