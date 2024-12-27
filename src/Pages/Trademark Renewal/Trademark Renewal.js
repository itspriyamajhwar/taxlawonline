// src/components/TrademarkRenewalPage.js
import React from "react";
import "./style.css";  // Import the CSS file

const TrademarkRenewalPage = () => {
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
          <form>
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
        </div>
      </div>
    </div>
  );
};

export default TrademarkRenewalPage;
