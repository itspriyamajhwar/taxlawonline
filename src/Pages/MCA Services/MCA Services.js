
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const McaServices = () => {
  const services = [
    { name: "Company Compliance", price: "₹ 8,999/-", description: "Complete company compliance, filings, and documentation." },
    { name: "LLP Compliance", price: "₹ 8,999/-", description: "LLP compliance services including form filings and record keeping." },
    { name: "OPC Compliance", price: "₹ 8,999/-", description: "OPC registration and compliance services." },
    { name: "DIN Web KYC Filing", price: "₹ 1,500/-", description: "Filing of DIN Web KYC for companies and directors." },
    { name: "DIN eKYC Filing", price: "₹ 2,500/-", description: "Electronic KYC filing for Directors Identification Number (DIN)." },
    { name: "Closure of Company/LLP", price: "₹ 8,999/-", description: "Complete assistance with the closure of your company or LLP." },
    { name: "ADT-1 Filing", price: "₹ 2,500/-", description: "Filing of ADT-1 for company director appointments." },
    { name: "DPT-3 Filing", price: "₹ 4,000/-", description: "Filing of DPT-3 for companies to report deposits." },
    { name: "DIN Reactivation", price: "₹ 2,500/-", description: "Reactivation of Director Identification Number (DIN)." },
    { name: "Name Change - Company", price: "₹ 5,000/-", description: "Company name change services, including necessary filings." },
    { name: "Registered Office Change", price: "₹ 5,000/-", description: "Change your company's registered office with ease." },
    { name: "Remove Director", price: "₹ 7,000/-", description: "Director removal process for company or LLP." },
    { name: "LLP Form 11 Filing", price: "₹ 3,500/-", description: "Annual LLP filing with Form 11." },
    { name: "Alteration of MOA/AOA", price: "₹ 4,999/-", description: "Amendment of Memorandum and Articles of Association." },
    { name: "Appointment/Resignation of Director - LLP", price: "₹ 6,999/-", description: "Appointment or resignation of directors in an LLP." },
    { name: "Authorized Capital Increase", price: "₹ 6,999/-", description: "Increase authorized capital of your company." },
    { name: "Appointment/Resignation of Director - Company", price: "₹ 4,999/-", description: "Manage director appointments or resignations." },
    { name: "Maintenance of Minutes", price: "₹ 7,999/-", description: "Maintain and record company minutes for compliance." },
    { name: "Paid up Capital Increase", price: "₹ 5,999/-", description: "Increase the paid-up capital for your company." },
    { name: "Due Diligence of Company", price: "₹ 7,999/-", description: "Comprehensive due diligence for your company." },
    { name: "Shops & Establishment Registration", price: "₹ 4,999/-", description: "Registration of your business under Shops & Establishment Act." },
    { name: "PAN/TAX Apply", price: "₹ 2,999/-", description: "Apply for PAN and tax registration." },
    { name: "MSME Registration", price: "₹ 2,999/-", description: "Registration under MSME for small and medium enterprises." },
    { name: "Director Change", price: "₹ 2,999/-", description: "Process of changing directors in a company or LLP." },
    { name: "Share Transfer", price: "₹ 4,999/-", description: "Transfer shares within your company." }
  ];

  return (
    <div className="mca-services-page">
      <h1>MCA Services</h1>
      <p className="intro-description">
        MCA services are crucial for businesses to maintain legal compliance and to handle various regulatory filings.
        These services include company and LLP filings, director-related filings, and much more to ensure that your
        business is compliant with the Ministry of Corporate Affairs (MCA).
      </p>
      <section className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p className="price">{service.price}</p>
            <p className="service-description">{service.description}</p>
            <Link to={`/service/${index}`} className="btn-more">More</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default McaServices;
