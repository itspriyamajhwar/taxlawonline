import React, { useState } from 'react';
import './style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const GSTReturnPage = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [turnover, setTurnover] = useState('');
  const [taxPaid, setTaxPaid] = useState('');
  const [filedDate, setFiledDate] = useState('');
  const [dealerName, setDealerName] = useState('');
  const [dealerGstNumber, setDealerGstNumber] = useState('');
  const [dealerType, setDealerType] = useState('regular'); // regular or composite
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-gst-return', {
        gstNumber,
        businessName,
        turnover,
        taxPaid,
        filedDate,
        dealerName,
        dealerGstNumber,
        dealerType
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setGstNumber('');
      setBusinessName('');
      setTurnover('');
      setTaxPaid('');
      setFiledDate('');
      setDealerName('');
      setDealerGstNumber('');
      setDealerType('regular');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">GST Return Submission</h1>

      <div className="intro-container">
        <p className="intro-text">
          The GST Return Submission form allows businesses to file their GST return details, including GST number,
          business name, turnover, tax paid, and the filing date. Ensure that all information provided is accurate and up-to-date
          to ensure proper filing and compliance with GST regulations.
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.-bEXSkogm4tXisbrOLPPRQHaFl?rs=1&pid=ImgDetMain" // Replace with your image URL
          alt="GST Illustration"
          className="intro-image"
        />
      </div>

      {successMessage && (
        <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
          {successMessage}
        </p>
      )} {/* Display success message */}

      <form onSubmit={handleSubmit} className="form">
        {/* GST Number and Business Name */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="gstNumber" className="label">GST Number</label>
            <input
              type="text"
              id="gstNumber"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="businessName" className="label">Business Name</label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>

        {/* Turnover and Tax Paid */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="turnover" className="label">Turnover</label>
            <input
              type="number"
              id="turnover"
              value={turnover}
              onChange={(e) => setTurnover(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="taxPaid" className="label">Tax Paid</label>
            <input
              type="number"
              id="taxPaid"
              value={taxPaid}
              onChange={(e) => setTaxPaid(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>

        {/* Filing Date */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="filedDate" className="label">Date of Filing</label>
            <input
              type="date"
              id="filedDate"
              value={filedDate}
              onChange={(e) => setFiledDate(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>

        {/* Dealer Type Selection */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="dealerType" className="label">Select Dealer Type</label>
            <select
              id="dealerType"
              value={dealerType}
              onChange={(e) => setDealerType(e.target.value)}
              className="input"
            >
              <option value="regular">Regular Dealer</option>
              <option value="composite">Composite Dealer</option>
            </select>
          </div>
        </div>

        {/* Dealer Information Section */}
        <div className="dealer-info">
          <h2>Dealer Information</h2>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="dealerName" className="label">Dealer Name</label>
              <input
                type="text"
                id="dealerName"
                value={dealerName}
                onChange={(e) => setDealerName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="form-field">
              <label htmlFor="dealerGstNumber" className="label">Dealer GST Number</label>
              <input
                type="text"
                id="dealerGstNumber"
                value={dealerGstNumber}
                onChange={(e) => setDealerGstNumber(e.target.value)}
                required
                className="input"
              />
            </div>
          </div>
        </div>

        {/* Benefits and Information based on Dealer Type */}
        <div className="dealer-benefits">
          {dealerType === 'regular' ? (
            <div>
              <h3>Benefits of Being a Regular Dealer:</h3>
              <ul>
                <li>Eligible for input tax credit on purchases.</li>
                <li>Required to file GST returns monthly or quarterly.</li>
                <li>Can collect GST from customers.</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3>Benefits of Being a Composite Dealer:</h3>
              <ul>
                <li>Lower tax rates compared to regular dealers.</li>
                <li>No need to file GST returns monthly/quarterly (annual return only).</li>
                <li>No input tax credit on purchases, but simplified compliance.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="submit-btn">
          <button type="submit" className="submit-button">Submit Return</button>
        </div>
      </form>

      {/* Footer Text */}
      <p className="footer-text">
        Please double-check all the information entered before submitting. If you have any queries regarding the filing,
        feel free to contact our support team. Thank you for using our service!
      </p>
    </div>
  );
};

export default GSTReturnPage;
