import React from 'react';
import './stlye.css';  // Import the CSS file

function ProducerCompany() {
  return (
    <div className="producer-company-container">
      {/* Image Section */}
      <section className="image-section">
        <img 
          src="https://legacypartners.in/uploads/images/blog/producer-company-ideal-structure-for-agri-business-india.jpeg" 
          alt="Producer Company" 
          className="main-image" 
        />
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="grid-layout">
            <div className="info-left">
              <h2>What is a Producer Company?</h2>
              <p>
                A Producer Company is a type of company formed to promote the interests of its members who are producers. 
                It works towards the collective growth and development of individuals or entities that engage in producing goods 
                or services in any sector, including agriculture, manufacturing, or services. 
              </p>
              <p>
                These companies aim to provide financial, technical, and marketing support to members to maximize their collective success. 
                Producer companies enable better bargaining power, access to resources, and value-added services for producers.
              </p>
            </div>
            <div className="info-right">
              <img 
                src="https://www.rajstartup.com/productImage/What%20is%20producer%20company%20and%20registration%20process.jpg" 
                alt="Producer Company" 
                className="right-image" 
              />
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid-boxes">
            <div className="grid-box">
              <h3>Collaborative Growth</h3>
              <p>Producer Companies help members collaborate for better resource management and distribution, leading to shared profits.</p>
            </div>
            <div className="grid-box">
              <h3>Marketing Strength</h3>
              <p>By joining forces, members can access larger markets and benefit from collective marketing strategies.</p>
            </div>
            <div className="grid-box">
              <h3>Financial Support</h3>
              <p>Producer Companies offer access to financing options tailored to the needs of producers, helping them scale their operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProducerCompany;
