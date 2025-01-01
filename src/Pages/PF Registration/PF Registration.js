import React, { useState } from "react";
import "./style.css";
import axios from 'axios'; // Import axios for making HTTP requests

const PFRegistration = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    employerName: '',
    email: '',
    phone: '',
    numberOfEmployees: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/submit-pf-registration' 
      : 'https://backend-one-snowy-88.vercel.app/submit-pf-registration';
    try {
      const response = await axios.post(serverUrl, formData);
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFormData({
        organizationName: '',
        employerName: '',
        email: '',
        phone: '',
        numberOfEmployees: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="pf-registration-page">
      <header className="page-header">
        <h1>PF Registration</h1>
        <p>
          Ensure your employees' financial security by registering for the Employee Provident Fund (EPF).
        </p>
      </header>

      <section className="about-section">
        <h2>About PF Registration</h2>
        <p>
          The Employee Provident Fund (EPF) is a retirement savings scheme for employees governed by the Employees' Provident Fund Organization (EPFO) under the Ministry of Labour and Employment. It provides financial stability to employees after retirement and is mandatory for organizations with 20 or more employees.
        </p>
        <h3>Why is PF Registration Important?</h3>
        <ul>
          <li>Helps employees save for their retirement.</li>
          <li>Ensures financial independence and security.</li>
          <li>Mandatory compliance for businesses to avoid penalties.</li>
        </ul>
      </section>

      <section className="benefits-section">
        <h2>Benefits of PF Registration</h2>
        <ul>
          <li>Retirement savings for employees.</li>
          <li>Life insurance benefits under the EDLI scheme.</li>
          <li>Partial withdrawals for emergencies like education, marriage, or medical needs.</li>
          <li>Employer contribution matches the employee's contribution.</li>
        </ul>
      </section>

      <section className="registration-form-section">
        <h2>PF Registration Form</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Organization Name:
            <input type="text" name="organizationName" placeholder="Enter your organization name" value={formData.organizationName} onChange={handleChange} required />
          </label>
          <label>
            Employer Name:
            <input type="text" name="employerName" placeholder="Enter employer name" value={formData.employerName} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Number of Employees:
            <input type="number" name="numberOfEmployees" placeholder="Enter the number of employees" value={formData.numberOfEmployees} onChange={handleChange} required />
          </label>
          <label>
            Message (Optional):
            <textarea name="message" placeholder="Write any additional information" value={formData.message} onChange={handleChange}></textarea>
          </label>
          <button type="submit">Register</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'green', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default PFRegistration;
