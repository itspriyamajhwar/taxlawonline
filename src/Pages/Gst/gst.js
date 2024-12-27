// src/pages/GST.js
import React from 'react';
import './style.css';  // Import the CSS file

function GST() {
  return (
    <div className="gst-container">
      <h1 className="page-title">Our GST Services</h1>

      {/* Services Grid */}
      <div className="services-grid">
        {/* GST Registration */}
        <div className="service-card">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.nIZVNhODscgSd4QhSZikHgHaEK&pid=Api&P=0&h=180"
            alt="GST Registration"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">GST Registration</h3>
            <p className="service-description">
              GST registration is mandatory for businesses whose turnover exceeds the threshold limit. We assist you in the registration process, ensuring compliance with GST laws.
            </p>
           
          </div>
        </div>

        {/* Return Filing */}
        <div className="service-card">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.wM8ulZd5db5XMpy5PceHFQHaEH&pid=Api&P=0&h=180"
            alt="Return Filing"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">Return Filing</h3>
            <p className="service-description">
              Timely filing of GST returns is crucial to avoid penalties. We help you file your returns accurately and on time, ensuring full compliance.
            </p>
           
          </div>
        </div>

        {/* Annual Return */}
        <div className="service-card">
          <img
            src="https://acheampongassociates.com/wp-content/uploads/2023/06/filing-all-annual-returns-and-financial-statements-is-important-for-your-company-in-Ghana.jpg"
            alt="Annual Return"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">Annual Return</h3>
            <p className="service-description">
              Filing the GST annual return is mandatory for businesses. We help you complete the process accurately and ensure that all required forms are filed.
            </p>
           
          </div>
        </div>

        {/* LUT Form */}
        <div className="service-card">
          <img
            src="https://img.indiafilings.com/og/GST+LUT+Form.jpg"
            alt="LUT Form"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">LUT Form</h3>
            <p className="service-description">
              The LUT (Letter of Undertaking) form allows export businesses to avail GST exemption. We assist you with the complete process of filing the LUT form.
            </p>
            
          </div>
        </div>

        {/* GST Notice */}
        <div className="service-card">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.IvGONpjI7TbIz5c4BZOiYQHaFG&pid=Api&P=0&h=180"
            alt="GST Notice"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">GST Notice</h3>
            <p className="service-description">
              If you receive a GST notice, we help you respond and resolve any discrepancies, ensuring you stay compliant with the tax laws.
            </p>
          
          </div>
        </div>

        {/* GST Amendment */}
        <div className="service-card">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.G4zkzm3Ft15i4ZpyKQCoqwHaFQ&pid=Api&P=0&h=180"
            alt="GST Amendment"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">GST Amendment</h3>
            <p className="service-description">
              We help amend your GST registration details if there are changes in your business structure, such as a change in address, business name, or other details.
            </p>
           
          </div>
        </div>

        {/* GST Closure */}
        <div className="service-card">
          <img
            src="https://www.nyca.in/wp-content/uploads/2024/02/Steps-Involved-In-The-Closure-Of-Private-Limited-Companies-In-India.jpg"
            alt="GST Closure"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">GST Closure</h3>
            <p className="service-description">
              If you close your business, we assist you in closing your GST registration by filing the necessary forms and ensuring proper compliance.
            </p>
           
          </div>
        </div>

        {/* New Service: GST Refund */}
        <div className="service-card">
          <img
            src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/gst-refund.jpg"
            alt="GST Refund"
            className="service-image"
          />
          <div className="service-info">
            <h3 className="service-title">GST Refund</h3>
            <p className="service-description">
              If you've paid more GST than your actual liability, you are eligible for a refund. We assist businesses in filing for GST refunds and recovering excess tax paid.
            </p>
           
          </div>
        </div>
      </div>

      {/* Section for Detailed Information */}
      <div className="gst-info-section">
        <div className="gst-info-text">
          <h2 className="section-title">Why Choose Our GST Services?</h2>
          <p className="section-description">
            Our experienced team helps you navigate the complexities of GST, ensuring you remain compliant with all tax regulations. From registration to filing and notices, we take care of everything, so you can focus on running your business. Our service charges are transparent, and we ensure timely processing of all GST-related matters.
          </p>
        </div>
        <div className="gst-info-image">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.-kzmMmLWKqrtE9nfF631TAHaEK&pid=Api&P=0&h=180"
            alt="GST Compliance"
            className="gst-info-image-style"
          />
        </div>
      </div>
    </div>
  );
}

export default GST;
