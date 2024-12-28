import React, { useState } from 'react';
import './style.css'; // For styling

function IncomeTax() {
  // Data for services
  const services = [
    {
      title: 'TDS Return',
      description:
        'We provide complete assistance in filing your TDS returns, ensuring accuracy and compliance with tax laws.',
      image: 'https://th.bing.com/th/id/OIP.A2W9aDXhNaASejV_ASdRyQHaEK?rs=1&pid=ImgDetMain',
      alt: 'TDS Return',
    },
    {
      title: '15 CA-CB',
      description:
        'Need assistance with foreign payments? We guide you through Form 15CA and 15CB for hassle-free filing.',
      image: 'https://th.bing.com/th/id/OIP.u7wl4xON4CGCxKof7oNhVQHaEc?rs=1&pid=ImgDetMain',
      alt: '15 CA-CB',
    },
    {
      title: 'ITR for Salary',
      description:
        'Ensure proper filing of ITR for your salary income while optimizing deductions and exemptions.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308157159/PO/HB/XD/188877046/salary-itr-return-1000x1000.jpg',
      alt: 'ITR for Salary',
    },
    {
      title: 'ITR for Capital Gains',
      description:
        'Let us help you with the accurate filing of ITR for capital gains, ensuring all required documentation is included.',
      image: 'https://th.bing.com/th/id/OIP.1f2dNIXekAZlpLV3_gYn1wHaD5?rs=1&pid=ImgDetMain',
      alt: 'ITR for Capital Gains',
    },
    {
      title: 'ITR for Rent',
      description:
        'We ensure accurate filing of ITR for rental income, optimizing deductions and keeping your taxes in check.',
      image: 'https://cdn.zeebiz.com/sites/default/files/2023/07/29/253800-news18-bl-zb.jpg?im=FitAndFill=(1200,900)',
      alt: 'ITR for Rent',
    },
    {
      title: 'Income Tax Notice',
      description:
        'We provide professional assistance in handling Income Tax Notices, ensuring that all compliance requirements are met.',
      image: 'https://static.toiimg.com/thumb/msid-107416826,width-1070,height-580,imgsize-48474,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      alt: 'Income Tax Notice',
    },
  ];

  // FAQ Section Data
  const faqItems = [
    { question: "What is TDS?", answer: "TDS stands for Tax Deducted at Source, a method of income tax collection." },
    { question: "How to file 15 CA and 15 CB?", answer: "We guide you step by step in filing 15 CA and 15 CB for foreign payments." },
    { question: "What is ITR for salary?", answer: "ITR for salary helps you file taxes based on your salary income." },
    { question: "What are Capital Gains?", answer: "Capital gains refer to the profit from the sale of assets or investments." },
    { question: "How to file ITR for rental income?", answer: "We help you file ITR for rental income while ensuring deductions." },
    { question: "What to do if you get an Income Tax Notice?", answer: "Our experts assist in handling tax notices to ensure compliance." },
  ];

  // State for FAQ drag-and-drop
  const [faqList, setFaqList] = useState(faqItems);

  // Handle drag start
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('draggedItem', index);
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  // Handle drop and reorder
  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData('draggedItem');
    const updatedFaqList = [...faqList];
    const [draggedItem] = updatedFaqList.splice(draggedIndex, 1);
    updatedFaqList.splice(index, 0, draggedItem);
    setFaqList(updatedFaqList);
  };

  // Pricing Plans Data
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Standard income tax filing services with essential features.',
      price: 'Rs. 499/-',
      features: ['TDS Return', 'ITR for Salary', 'Basic Assistance'],
    },
    {
      name: 'Standard',
      description: 'Intermediate services with added features and support.',
      price: 'Rs. 1299/-',
      features: ['TDS Return', 'ITR for Salary', 'ITR for Rent', 'Basic Assistance'],
    },
    {
      name: 'Premium',
      description: 'Comprehensive services with personalized assistance and priority support.',
      price: 'Rs. 1499/-',
      features: ['All Standard Features', 'ITR for Capital Gains', 'Income Tax Notice Handling'],
    },
  ];

  return (
    <div className="income-tax-container">
      <h1 className="page-title">Our Income Tax Services</h1>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.alt}
              className="service-image"
            />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Plans Grid */}
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="pricing-title">{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Section for Details */}
      <div className="info-section">
        <div className="info-text">
          <h2 className="section-title">Why Choose Us for Your Income Tax Filing?</h2>
          <p className="section-description">
            Our team of experts is dedicated to providing accurate, timely, and cost-effective income tax services. Whether you need help with TDS returns, foreign payments, or responding to notices, we ensure that your filings are compliant with the latest tax laws, maximizing your tax savings. We handle all aspects of tax filing and notice resolution so you can focus on what matters most—your business and personal life.
          </p>
        </div>
        <div className="info-image">
          <img
            src="https://th.bing.com/th/id/OIP.02N2XC-FIAn4IjZI3FeJzQHaDp?rs=1&pid=ImgDetMain"
            alt="Income Tax Support"
            className="info-image-style"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqList.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncomeTax;
