import React, { useState } from 'react';
import './style.css';

const GSTAnnualReturnPage = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [turnover, setTurnover] = useState('');
  const [gstPaid, setGstPaid] = useState('');
  const [filedDate, setFiledDate] = useState('');
  const [dealerType, setDealerType] = useState('regular');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', { gstNumber, businessName, turnover, gstPaid, filedDate, dealerType });
  };

  return (
    <div className="container">
      <h1 className="main-heading">GST Annual Return Submission</h1>

      {/* GST Dealer Information Section */}
      <section className="dealer-info">
        <h2 className="subheading">What is GST?</h2>
        <p className="description">
          The Goods and Services Tax (GST) is a single tax on the supply of goods and services, right from the manufacturer to the consumer. GST is designed to replace multiple indirect taxes levied by the government.
        </p>
        <div className="dealer-types">
          <div className="dealer-card">
            <h3>Regular GST Dealer</h3>
            <p>
              Regular GST Dealers are businesses that are registered under GST and are required to pay GST on their sales and purchases. These dealers can claim input tax credit (ITC) for the GST paid on their business expenses.
            </p>
            <p><strong>Eligibility:</strong> Annual turnover above ₹40 lakhs (₹20 lakhs for special category states).</p>
            <p><strong>Compliance:</strong> Must file monthly/quarterly returns and annual returns.</p>
          </div>
          <div className="dealer-card">
            <h3>Composite GST Dealer</h3>
            <p>
              Composite GST Dealers are small businesses who have opted for a simplified scheme with a lower tax rate and no eligibility for claiming input tax credit (ITC).
            </p>
            <p><strong>Eligibility:</strong> Annual turnover up to ₹1.5 crore.</p>
            <p><strong>Compliance:</strong> Only required to file an annual return.</p>
          </div>
        </div>
        <h3>Benefits & Key Differences</h3>
        <p className="description">
          GST Regular Dealers can claim ITC and have access to the full set of tax credits, while Composite Dealers benefit from a simpler taxation process with lower rates but cannot claim input tax credits.
        </p>

        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Regular GST Dealer</th>
                <th>Composite GST Dealer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eligibility</td>
                <td>Annual turnover above ₹40 lakhs (₹20 lakhs for special category states)</td>
                <td>Annual turnover up to ₹1.5 crore</td>
              </tr>
              <tr>
                <td>Input Tax Credit (ITC)</td>
                <td>Eligible to claim ITC</td>
                <td>Not eligible for ITC</td>
              </tr>
              <tr>
                <td>Tax Rate</td>
                <td>Standard GST rates (5%, 12%, 18%, 28%)</td>
                <td>Lower fixed GST rate (1%, 5%, 6%)</td>
              </tr>
              <tr>
                <td>Return Filing</td>
                <td>Monthly/Quarterly returns, Annual return</td>
                <td>Annual return only</td>
              </tr>
              <tr>
                <td>Compliance Burden</td>
                <td>Higher due to frequent filings</td>
                <td>Lower due to simplified tax filing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* GST Annual Return Form */}
      <section className="form-section">
        <h2 className="subheading">Submit Your GST Annual Return</h2>
        <form onSubmit={handleSubmit} className="form">
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

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="turnover" className="label">Annual Turnover</label>
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
              <label htmlFor="gstPaid" className="label">GST Paid</label>
              <input
                type="number"
                id="gstPaid"
                value={gstPaid}
                onChange={(e) => setGstPaid(e.target.value)}
                required
                className="input"
              />
            </div>
          </div>

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

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="dealerType" className="label">Dealer Type</label>
              <select
                id="dealerType"
                value={dealerType}
                onChange={(e) => setDealerType(e.target.value)}
                className="input"
              >
                <option value="regular">Regular GST Dealer</option>
                <option value="composite">Composite GST Dealer</option>
              </select>
            </div>
          </div>

          <div className="submit-btn">
            <button type="submit" className="submit-button">Submit Return</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GSTAnnualReturnPage;
