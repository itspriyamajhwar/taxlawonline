import React, { useState } from "react";
import "./style.css";  // Import the CSS file
import axios from 'axios'; // Import axios for making HTTP requests

const TrademarkRenewalPage = () => {
  const [trademarkName, setTrademarkName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const [renewalFee, setRenewalFee] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-trademark-renewal', {
        trademarkName,
        registrationNumber,
        applicantName,
        contactEmail,
        renewalDate,
        renewalFee
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setTrademarkName('');
      setRegistrationNumber('');
      setApplicantName('');
      setContactEmail('');
      setRenewalDate('');
      setRenewalFee('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="title">Trademark Renewal</h1>
          <p className="subtitle">Complete your trademark renewal easily</p>
        </header>

        {/* Trademark Renewal Form */}
        <div className="form-container">
          <h2 className="form-title">Renew Trademark</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid-container">
              {/* Trademark Information */}
              <div>
                <label htmlFor="trademarkName" className="label">Trademark Name</label>
                <input
                  type="text"
                  id="trademarkName"
                  name="trademarkName"
                  className="input"
                  placeholder="Enter Trademark Name"
                  value={trademarkName}
                  onChange={(e) => setTrademarkName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="registrationNumber" className="label">Registration Number</label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  className="input"
                  placeholder="Enter Registration Number"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  required
                />
              </div>

              {/* Applicant Information */}
              <div>
                <label htmlFor="applicantName" className="label">Applicant Name</label>
                <input
                  type="text"
                  id="applicantName"
                  name="applicantName"
                  className="input"
                  placeholder="Enter Applicant Name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="label">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="input"
                  placeholder="Enter Contact Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              {/* Renewal Information */}
              <div>
                <label htmlFor="renewalDate" className="label">Renewal Date</label>
                <input
                  type="date"
                  id="renewalDate"
                  name="renewalDate"
                  className="input"
                  value={renewalDate}
                  onChange={(e) => setRenewalDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="renewalFee" className="label">Renewal Fee</label>
                <input
                  type="number"
                  id="renewalFee"
                  name="renewalFee"
                  className="input"
                  placeholder="Enter Renewal Fee"
                  value={renewalFee}
                  onChange={(e) => setRenewalFee(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="submit-btn-container">
                <button
                  type="submit"
                  className="submit-btn"
                >
                  Submit Renewal Request
                </button>
              </div>
            </div>
          </form>
          {successMessage && (
            <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
              {successMessage}
            </p>
          )} {/* Display success message */}
        </div>
      </div>
    </div>
  );
};

export default TrademarkRenewalPage;
