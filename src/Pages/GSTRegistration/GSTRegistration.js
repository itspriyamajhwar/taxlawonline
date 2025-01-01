import React, { useState } from "react";
import "./style.css";
import axios from 'axios'; // Import axios for making HTTP requests

const GSTRegistration = () => {
  const [dealerType, setDealerType] = useState("regular"); // State to track dealer type selection
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Handle radio button change for dealer type
  const handleDealerChange = (event) => {
    setDealerType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/submit-gst-registration' 
      : 'https://backend-one-snowy-88.vercel.app/submit-gst-registration';
    try {
      const response = await axios.post(serverUrl, {
        fullName,
        email,
        mobileNumber,
        businessName,
        businessAddress,
        dealerType,
        additionalDetails
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFullName('');
      setEmail('');
      setMobileNumber('');
      setBusinessName('');
      setBusinessAddress('');
      setDealerType('regular');
      setAdditionalDetails('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="gst-container">
      {/* Information Section */}
      <div className="gst-info">
        <h1>GST Registration Made Easy</h1>
        <p>
          Get your business GST registered quickly and efficiently. Our experts ensure
          hassle-free documentation and filing for you. GST (Goods and Services Tax) is a
          mandatory requirement for businesses in India.
        </p>

        <h3>Benefits of GST Registration</h3>
        <ul>
          <li>Legal recognition as a supplier of goods or services</li>
          <li>Seamless input tax credit</li>
          <li>Improved business reputation</li>
          <li>Easy compliance and tax structure</li>
        </ul>
      </div>

      {/* GST Dealer Types Section */}
      <div className="gst-dealer-info">
        <h2>Regular vs Composite GST Dealers</h2>
        <div className="dealer-cards">
          {/* Regular GST Dealer */}
          <div className="dealer-card">
            <h3>Regular GST Dealer</h3>
            <p>
              Regular GST Dealers are businesses that are required to collect and pay tax on their sales
              and purchases. These businesses can claim input tax credit (ITC) for the tax they pay on
              business expenses.
            </p>
            <ul>
              <li>Eligibility: Annual turnover above ₹40 lakhs (₹20 lakhs for special category states)</li>
              <li>Tax Payment: Standard GST rates (5%, 12%, 18%, 28%)</li>
              <li>File Returns: Monthly/Quarterly & Annual returns</li>
              <li>Input Tax Credit: Available</li>
            </ul>
          </div>

          {/* Composite GST Dealer */}
          <div className="dealer-card">
            <h3>Composite GST Dealer</h3>
            <p>
              Composite GST Dealers are businesses with a small turnover who are eligible to pay a lower tax
              rate and avoid the complexity of frequent return filing. However, they cannot claim input tax credit.
            </p>
            <ul>
              <li>Eligibility: Annual turnover up to ₹1.5 crore</li>
              <li>Tax Payment: Fixed low tax rate (1%, 5%, 6%)</li>
              <li>File Returns: Annual returns only</li>
              <li>Input Tax Credit: Not available</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GST Dealer Selection Form */}
      <div className="gst-form">
        <h2>Apply for GST Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Business Address"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            required
          />
          
          {/* Dealer Type Selection */}
          <div className="dealer-type-selection">
            <label>
              <input
                type="radio"
                name="dealerType"
                value="regular"
                checked={dealerType === "regular"}
                onChange={handleDealerChange}
              />
              Regular GST Dealer
            </label>
            <label>
              <input
                type="radio"
                name="dealerType"
                value="composite"
                checked={dealerType === "composite"}
                onChange={handleDealerChange}
              />
              Composite GST Dealer
            </label>
          </div>

          <textarea
            placeholder="Additional Details (Optional)"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )} {/* Display success message */}
      </div>
    </div>
  );
};

export default GSTRegistration;
