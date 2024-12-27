import React, { useState } from 'react';
import './style.css';

const sliderContent = [
  {
    title: "What is FSSAI?",
    text: "FSSAI stands for the Food Safety and Standards Authority of India. It ensures the safety and quality of food consumed in India."
  },
  {
    title: "Who Needs FSSAI Registration?",
    text: "Any business involved in food manufacturing, processing, packaging, or distribution must register with FSSAI."
  },
  {
    title: "Why is FSSAI Important?",
    text: "It ensures customer safety, builds trust, and is legally mandatory for food-related businesses."
  },
  {
    title: "Types of FSSAI Licenses",
    text: "FSSAI licenses include Basic Registration, State License, and Central License, based on the scale of operations."
  }
];

const FSSAIRegistration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
  };

  return (
    <div className="fssai-registration-page">
      <header className="page-header">
        <h1>FSSAI Registration</h1>
        <p>Your gateway to legally compliant and quality food business operations.</p>
      </header>

      <section className="slider-section">
        <h2>Key Highlights</h2>
        <div className="slider">
          <div className="slide">
            <h3>{sliderContent[currentSlide].title}</h3>
            <p>{sliderContent[currentSlide].text}</p>
          </div>
          <button className="prev-btn" onClick={prevSlide}>❮</button>
          <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>
      </section>

      <section className="information-section">
        <h2>What is FSSAI Registration?</h2>
        <p>
          FSSAI registration is a mandatory compliance required for all food-related businesses in India to ensure food safety and quality. 
          It is governed by the Food Safety and Standards Act, 2006. The FSSAI registration number is a unique 14-digit code that provides 
          information about the license or registration of the food producer.
        </p>
        <p>
          FSSAI is essential for all businesses involved in the food supply chain, including manufacturers, traders, restaurants, small 
          eateries, and home-based food businesses.
        </p>
      </section>

      <section className="registration-form-section">
        <h2>FSSAI Registration Form</h2>
        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input type="text" id="businessName" name="businessName" placeholder="Enter your business name" required />
          </div>
          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select id="businessType" name="businessType" required>
              <option value="">Select your business type</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="retailer">Retailer</option>
              <option value="restaurant">Restaurant</option>
              <option value="home-business">Home-based Food Business</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit Registration</button>
        </form>
      </section>

     
    </div>
  );
};

export default FSSAIRegistration;