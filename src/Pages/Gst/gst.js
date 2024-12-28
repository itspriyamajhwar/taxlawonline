import React from 'react';
import './style.css';  // Import the CSS file

function GST() {
  return (
    <div className="gst-container">
      <h1 className="page-title">Our GST Services</h1>

      {/* Services Grid */}
      <div className="services-grid">
        {/* GST Registration */}
        {/* You can add the GST Registration card similarly to the others */}

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

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>

        <div className="faq-item">
          <h3 className="faq-question">What is GST?</h3>
          <p className="faq-answer">
            GST (Goods and Services Tax) is a value-added tax that is levied on the sale of goods and services in India. It aims to create a single unified tax system across the country.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Who needs to register for GST?</h3>
          <p className="faq-answer">
            Any business whose turnover exceeds the prescribed limit must register for GST. Additionally, businesses involved in interstate supply of goods and services are also required to register.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How can I file for GST refund?</h3>
          <p className="faq-answer">
            If you've paid more GST than you owe, you can file for a GST refund through the GST portal. Our team will assist you in the refund process and ensure all necessary forms are submitted.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What is the deadline for filing GST returns?</h3>
          <p className="faq-answer">
            The GST return filing deadline depends on your GST registration type. Monthly returns are typically due on the 20th of the following month, while annual returns are usually due by December 31st.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Can I amend my GST registration details?</h3>
          <p className="faq-answer">
            Yes, you can amend your GST registration details such as business name, address, and type of business. Our team will guide you through the process to ensure all amendments are made correctly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GST;
