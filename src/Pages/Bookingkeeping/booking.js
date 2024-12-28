import React, { useState } from 'react';
import Slider from 'react-slick'; // Importing the slider component
import './style.css'; // Import the CSS file

function BookKeeping() {
  const [formData, setFormData] = useState({
    name: '',  
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  // Slider settings for customer reviews
  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bookkeeping-container">
      <h1 className="page-title">Bookkeeping Services</h1>

      {/* Service 1: Indian Book Keeping */}
      <div className="service-section">
        <div className="service-text">
          <h2 className="service-title">Indian Book Keeping</h2>
          <p className="service-description">
            Indian bookkeeping services help businesses maintain accurate financial records and comply with Indian tax laws. Our services include managing ledgers, accounts receivable, accounts payable, and preparing financial statements to ensure transparency and accuracy.
          </p>
        </div>
        <div className="service-image">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.J0z6ghePnMntluzF5hsYlAHaE8&pid=Api&P=0&h=180"
            alt="Indian Book Keeping"
            className="service-img"
          />
        </div>
      </div>

      {/* Service 2: Foreign Book Keeping */}
      <div className="service-section">
        <div className="service-image">
          <img
            src="https://global-uploads.webflow.com/5ee73c29288d4558008fc54a/63ff6eb6ed6aba67df9691bc_sage%20vs%20quickbooks%20vs%20xero%20(1).png"
            alt="Foreign Book Keeping"
            className="service-img"
          />
        </div>
        <div className="service-text">
          <h2 className="service-title">Foreign (Zero, Quick Book)</h2>
          <p className="service-description">
            We offer bookkeeping services for international businesses using popular software like Xero and QuickBooks. These tools allow for seamless integration of global financial transactions, and we ensure timely, accurate entries while adhering to international financial regulations.
          </p>
        </div>
      </div>

      {/* Additional Information Section 1 */}
      <div className="additional-info">
        <div className="info-text">
          <h2 className="section-title">Why Choose Our Bookkeeping Services?</h2>
          <p className="section-description">
            Whether you're a small business or a large enterprise, we help maintain your financial health with our expert bookkeeping services. Our team uses the latest software and ensures all records are compliant with local and international standards, giving you peace of mind and accurate financial reporting.
          </p>
        </div>
        <div className="info-image">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.94ATdfA-2dAYZU37HAnPqwHaD4&pid=Api&P=0&h=180"
            alt="Bookkeeping Services"
            className="info-image-style"
          />
        </div>
      </div>

      {/* Additional Information Section 2 */}
      <div className="additional-info">
        <div className="info-image">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.xkpj8pi9ZG2FxzAQ8tYckAHaDA&pid=Api&P=0&h=180"
            alt="Financial Growth"
            className="info-image-style"
          />
        </div>
        <div className="info-text">
          <h2 className="section-title">Helping Your Business Grow</h2>
          <p className="section-description">
            Our bookkeeping services are more than just number crunching. We provide valuable insights into your business's financial health, helping you make informed decisions for growth and stability. From cash flow management to tax planning, we are here to help you at every step.
          </p>
        </div>
      </div>

      {/* Service 3: Accounting (Tally, Busy, Zoho) */}
      <div className="service-section">
        <div className="service-text">
          <h2 className="service-title">Accounting (Tally, Busy, Zoho)</h2>
          <p className="service-description">
            We offer comprehensive accounting services using popular accounting software like Tally, Busy, and Zoho. These tools provide detailed financial insights, simplified management of accounts, and integration with other systems, helping businesses manage their finances efficiently.
          </p>
        </div>
        <div className="service-image">
          <img
            src="https://th.bing.com/th/id/OIP.JEPYhbasR9rN5DYEAKuPIQHaE3?rs=1&pid=ImgDetMain"
            alt="Accounting Tools"
            className="service-img"
          />
        </div>
      </div>

      {/* Service 4: Foreign Accounting (Xero, QuickBooks) */}
      <div className="service-section">
        <div className="service-image">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/5/416808705/LT/EO/QR/67189188/accounting-tally-quickbooks-zoho-books-500x500.jpg"
            alt="Foreign Accounting"
            className="service-img"
          />
        </div>
        <div className="service-text">
          <h2 className="service-title">Foreign Accounting (Xero, QuickBooks)</h2>
          <p className="service-description">
            We specialize in foreign accounting services, offering expertise in software like Xero and QuickBooks to help manage international accounts. Our services ensure seamless management of multi-currency transactions, taxes, and reports, making it easier for global businesses to stay compliant.
          </p>
        </div>
      </div>

      {/* Service 5: Payroll Services */}
      <div className="service-section">
        <div className="service-text">
          <h2 className="service-title">Payroll Services</h2>
          <p className="service-description">
            Our payroll services handle all aspects of employee compensation, including calculating salaries, deductions, benefits, and tax filing. We use advanced payroll systems to ensure accuracy and timely processing, helping businesses comply with labor laws and maintain employee satisfaction.
          </p>
        </div>
        <div className="service-image">
          <img
            src="https://th.bing.com/th/id/OIP.t1b7juqIl_UoQX9-oTKhJwHaFS?rs=1&pid=ImgDetMain"
            alt="Payroll Services"
            className="service-img"
          />
        </div>
      </div>

      {/* Customer Reviews Slider */}
      <div className="reviews-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <Slider {...reviewSettings} className="reviews-slider">
          <div className="review-slide">
            <p className="review-text">
              "The bookkeeping services provided were exceptional! They helped us maintain our financial records with precision and helped us comply with all tax requirements."
            </p>
            <h4 className="review-author">John Doe</h4>
            <p className="review-position">CEO, XYZ Corp.</p>
          </div>
          <div className="review-slide">
            <p className="review-text">
              "The team is highly professional and efficient. They streamlined our financial management and provided valuable insights into our business's financial health."
            </p>
            <h4 className="review-author">Jane Smith</h4>
            <p className="review-position">Founder, ABC Ltd.</p>
          </div>
          <div className="review-slide">
            <p className="review-text">
              "Highly recommended! They made bookkeeping effortless and compliant with all financial regulations. The reports were always accurate and delivered on time."
            </p>
            <h4 className="review-author">Alex Williams</h4>
            <p className="review-position">Managing Director, Global Tech</p>
          </div>
        </Slider>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2 className="form-title">Have Questions? Get in Touch!</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookKeeping;
