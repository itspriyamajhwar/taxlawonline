import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const ServiceDetail = () => {
  const { id } = useParams();  // Getting the service id from the URL
  
    const services = [
        { 
          name: "Company Compliance", 
          price: "₹ 8,999/-", 
          description: "Complete company compliance, filings, and documentation to ensure your company meets all legal requirements.", 
          image: "https://images.pexels.com/photos/7715105/pexels-photo-7715105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
          name: "LLP Compliance", 
          price: "₹ 8,999/-", 
          description: "LLP compliance services including form filings, record keeping, and legal documentation for smooth business operation.", 
          image: "https://images.pexels.com/photos/7054505/pexels-photo-7054505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "OPC Compliance", 
          price: "₹ 8,999/-", 
          description: "OPC registration and compliance services to ensure your One Person Company meets all legal and financial requirements.", 
          image: "https://provenience.in/wp-content/uploads/2020/04/opc-compliance.png" 
        },
        { 
          name: "DIN Web KYC Filing", 
          price: "₹ 1,500/-", 
          description: "Filing of DIN Web KYC for companies and directors, ensuring the accuracy and validity of the director's details.", 
          image: "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "DIN eKYC Filing", 
          price: "₹ 2,500/-", 
          description: "Electronic KYC filing for Directors Identification Number (DIN) to complete necessary compliance tasks for directors.", 
          image: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "Closure of Company/LLP", 
          price: "₹ 8,999/-", 
          description: "Complete assistance with the closure of your company or LLP, including necessary filings and documentation.", 
          image: "https://images.pexels.com/photos/5912614/pexels-photo-5912614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "ADT-1 Filing", 
          price: "₹ 2,500/-", 
          description: "Filing of ADT-1 for company director appointments to ensure proper registration and compliance.", 
          image: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "DPT-3 Filing", 
          price: "₹ 4,000/-", 
          description: "Filing of DPT-3 for companies to report deposits and comply with financial regulations.", 
          image: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "DIN Reactivation", 
          price: "₹ 2,500/-", 
          description: "Reactivation of Director Identification Number (DIN) for directors whose DIN has expired or been deactivated.", 
          image: "https://legalxindia.com/wp-content/uploads/2023/08/Your-paragraph-text-12.jpg" 
        },
        { 
          name: "Name Change - Company", 
          price: "₹ 5,000/-", 
          description: "Company name change services, including necessary filings, documentation, and legal procedures.", 
          image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/change-the-name-of-a-company.jpg" 
        },
        { 
          name: "Registered Office Change", 
          price: "₹ 5,000/-", 
          description: "Change your company's registered office with ease, including filings with relevant authorities.", 
          image: "https://www.legalbabu.com/assets/img/office-change.jpg" 
        },
        { 
          name: "Remove Director", 
          price: "₹ 7,000/-", 
          description: "Director removal process for company or LLP, including all legal filings and procedures.", 
          image: "https://www.frettens.co.uk/cms/photo/article/main_removecompanydirector.png" 
        },
        { 
          name: "LLP Form 11 Filing", 
          price: "₹ 3,500/-", 
          description: "Annual LLP filing with Form 11, ensuring compliance with regulatory requirements for LLPs.", 
          image: "https://blog.saginfotech.com/wp-content/uploads/2022/05/annual-return-form-11.jpg" 
        },
        { 
          name: "Alteration of MOA/AOA", 
          price: "₹ 4,999/-", 
          description: "Amendment of Memorandum and Articles of Association (MOA/AOA) for company adjustments and legal changes.", 
          image: "https://www.getmyca.com/images/sliders/AOAMOA%20AMMENDMENT.webp" 
        },
        { 
          name: "Appointment/Resignation of Director - LLP", 
          price: "₹ 6,999/-", 
          description: "Appointment or resignation of directors in an LLP, including required documentation and regulatory compliance.", 
          image: "https://th.bing.com/th/id/OIP.FmXvkJ3OrZX24HzihmwtgwHaEH?rs=1&pid=ImgDetMain" 
        },
        { 
          name: "Authorized Capital Increase", 
          price: "₹ 6,999/-", 
          description: "Increase authorized capital of your company through necessary filings and amendments to the corporate documents.", 
          image: "https://images.pexels.com/photos/6289026/pexels-photo-6289026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "Appointment/Resignation of Director - Company", 
          price: "₹ 4,999/-", 
          description: "Manage director appointments or resignations, ensuring all legal requirements and filings are completed accurately.", 
          image: "https://th.bing.com/th/id/OIP.6-zl0JbkL45Ch83G76c3AgHaEK?rs=1&pid=ImgDetMain" 
        },
        { 
          name: "Maintenance of Minutes", 
          price: "₹ 7,999/-", 
          description: "Maintain and record company minutes for compliance with corporate governance and legal documentation requirements.", 
          image: "https://www.legalraasta.com/learn/wp-content/uploads/2016/03/maintenance-of-minutes-of-a-company-legalraasta.png" 
        },
        { 
          name: "Paid up Capital Increase", 
          price: "₹ 5,999/-", 
          description: "Increase the paid-up capital for your company to meet growing business needs and regulatory requirements.", 
          image: "https://images.shiksha.com/mediadata/images/articles/1705061604phpT3gZGd.jpeg" 
        },
        { 
          name: "Due Diligence of Company", 
          price: "₹ 7,999/-", 
          description: "Comprehensive due diligence for your company to ensure that all business practices, filings, and records are in order.", 
          image: "https://th.bing.com/th/id/OIP.Syz7pQN6tGSewOWgCXRw4gHaEd?rs=1&pid=ImgDetMain" 
        },
        { 
          name: "Shops & Establishment Registration", 
          price: "₹ 4,999/-", 
          description: "Registration of your business under the Shops & Establishment Act, ensuring that your business meets all local regulations.", 
          image: "https://images.pexels.com/photos/10504510/pexels-photo-10504510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "PAN/TAX Apply", 
          price: "₹ 2,999/-", 
          description: "Apply for PAN and tax registration to ensure your business is compliant with tax laws and regulations.", 
          image: "https://housing.com/news/wp-content/uploads/2023/02/income-tax-pan-card-apply-FEATURE-compressed.jpg" 
        },
        { 
          name: "MSME Registration", 
          price: "₹ 2,999/-", 
          description: "Registration under MSME for small and medium enterprises to unlock government benefits and financial opportunities.", 
          image: "https://images.pexels.com/photos/6929017/pexels-photo-6929017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "Director Change", 
          price: "₹ 2,999/-", 
          description: "Process of changing directors in a company or LLP, including filings and paperwork required for director change.", 
          image: "https://images.pexels.com/photos/6120219/pexels-photo-6120219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        },
        { 
          name: "Share Transfer", 
          price: "₹ 4,999/-", 
          description: "Transfer shares within your company to other stakeholders, ensuring compliance with corporate laws and regulations.", 
          image: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        }
      ];
      

  const service = services[parseInt(id)];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/submit-service-detail' 
      : 'https://backend-one-snowy-88.vercel.app/submit-service-detail';
    try {
      const response = await axios.post(serverUrl, formData);
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="service-detail-page">
      <div className="service-header">
        <h1>{service.name}</h1>
        <img src={service.image} alt={service.name} className="service-image" />
        <p className="price">{service.price}</p>
      </div>

      <p className="description">{service.description}</p>

      <div className="contact-form">
        <h3>Contact Us for More Info</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
