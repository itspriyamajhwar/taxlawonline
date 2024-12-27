import React from 'react';
import './style.css';

const DarpanRegistration = () => {
  return (
    <div className="darpan-registration-page">
      <header className="page-header">
        <h1>Darpan Registration</h1>
        <p>Join the Darpan Registration program to get connected with government services.</p>
      </header>

     

      <section className="registration-form-section">
        <h2>Register for Darpan</h2>
        <p>Fill out the form below to get started with the Darpan Registration:</p>
        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter your address" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
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
