import React, { useState } from "react";
import "./style.css";
import axios from 'axios'; // Import axios for making HTTP requests

const TrustRegistration = () => {
  const [trustName, setTrustName] = useState('');
  const [trustType, setTrustType] = useState('');
  const [trustees, setTrustees] = useState('');
  const [address, setAddress] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-trust-registration', {
        trustName,
        trustType,
        trustees,
        address
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setTrustName('');
      setTrustType('');
      setTrustees('');
      setAddress('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="page-container">
      <h1>Trust Registration</h1>
      <div className="hero-section">
        <img src="https://todayswillsandprobate.co.uk/wp-content/uploads/2022/08/Trust-Registration-4-850x560.jpg" alt="Trust Registration" className="hero-image" />
        <p className="hero-text">
          A trust is a legal entity created to hold and manage assets for the
          benefit of others. Trust registration is essential for ensuring legal
          compliance and safeguarding the interests of beneficiaries.
        </p>
      </div>

      <div className="grid-container">
        <div className="info-box animate-box">
          <h2>Types of Trusts</h2>
          <ul>
            <li>Public Trust</li>
            <li>Private Trust</li>
            <li>Charitable Trust</li>
            <li>Religious Trust</li>
          </ul>
        </div>

        <div className="info-box animate-box">
          <h2>Documents Required</h2>
          <ul>
            <li>Trust Deed</li>
            <li>Proof of Identity of Trustees</li>
            <li>Proof of Address</li>
            <li>PAN Card of the Trust</li>
          </ul>
        </div>

        <div className="info-box animate-box">
          <h2>Steps for Registration</h2>
          <ol>
            <li>Draft the Trust Deed.</li>
            <li>Choose a name for the trust.</li>
            <li>Submit the required documents.</li>
            <li>Pay the registration fees.</li>
            <li>Get the registration certificate.</li>
          </ol>
        </div>

        <div className="info-box animate-box">
          <h2>Benefits of Registration</h2>
          <p>
            Registering a trust provides legal recognition, tax exemptions,
            credibility, and ensures smooth management of assets and funds.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="trustName" className="label">Trust Name</label>
          <input
            type="text"
            id="trustName"
            value={trustName}
            onChange={(e) => setTrustName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="trustType" className="label">Trust Type</label>
          <input
            type="text"
            id="trustType"
            value={trustType}
            onChange={(e) => setTrustType(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="trustees" className="label">Trustees</label>
          <input
            type="text"
            id="trustees"
            value={trustees}
            onChange={(e) => setTrustees(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {successMessage && (
        <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
          {successMessage}
        </p>
      )} {/* Display success message */}
    </div>
  );
};

export default TrustRegistration;
