import React from "react";
import "./style.css";

const PFRegistration = () => {
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
        <form className="registration-form">
          <label>
            Organization Name:
            <input type="text" placeholder="Enter your organization name" required />
          </label>
          <label>
            Employer Name:
            <input type="text" placeholder="Enter employer name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter email address" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter phone number" required />
          </label>
          <label>
            Number of Employees:
            <input type="number" placeholder="Enter the number of employees" required />
          </label>
          <label>
            Message (Optional):
            <textarea placeholder="Write any additional information"></textarea>
          </label>
          <button type="submit">Register</button>
        </form>
      </section>

     
    </div>
  );
};

export default PFRegistration;
