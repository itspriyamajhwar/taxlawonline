import React from "react";
import "./style.css";
//import opcImage from "../assets/one-person-company.jpg"; // Add this image to your assets folder

const OnePersonCompany = () => {
  return (
    <div className="page-container">
      <h1>One Person Company (OPC)</h1>
      <img src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="One Person Company" className="page-image" />
      <p>
        A One Person Company (OPC) is a modern business structure introduced
        under the Companies Act, 2013. It allows a single entrepreneur to enjoy
        the benefits of a corporate entity while maintaining full control over
        the business.
      </p>
      <h2>Features of an OPC</h2>
      <ul>
        <li>Single owner with full control.</li>
        <li>Limited liability protection.</li>
        <li>Separate legal identity.</li>
        <li>Minimal compliance requirements.</li>
      </ul>
      <h2>Benefits of an OPC</h2>
      <ul>
        <li>Ease of starting and managing the business.</li>
        <li>Protection of personal assets against business liabilities.</li>
        <li>Perpetual succession of the company.</li>
        <li>Opportunities for funding through loans or investors.</li>
      </ul>
      <h2>Steps to Register an OPC</h2>
      <ol>
        <li>Obtain a Digital Signature Certificate (DSC).</li>
        <li>Apply for a Director Identification Number (DIN).</li>
        <li>Register the company name with the Ministry of Corporate Affairs (MCA).</li>
        <li>File incorporation forms with required documents.</li>
      </ol>
      <h2>Is OPC Right for You?</h2>
      <p>
        OPCs are ideal for individuals who wish to start their business without
        the complexities of partnerships or multiple shareholders. It is a great
        option for startups, freelancers, and consultants.
      </p>
    </div>
  );
};

export default OnePersonCompany;
