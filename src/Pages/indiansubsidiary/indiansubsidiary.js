// src/pages/IndianSubsidiary.js
import React from 'react';
import './style.css';  // Import the CSS file

function IndianSubsidiary() {
  return (
    <div className="indian-subsidiary-container">
      {/* Section 1: Paragraph + Image (Left side Image, Right side Text) */}
      <section className="info-section">
        <div className="container">
          <div className="section-content">
            <div className="left-side">
              <img
                src="https://corpbiz.io/learning/wp-content/uploads/2021/01/Registering-an-Indian-Subsidiary-Company.png"
                alt="Indian Subsidiary"
                className="section-image"
              />
            </div>
            <div className="right-side">
              <h2>What is an Indian Subsidiary?</h2>
              <p>
                An Indian Subsidiary is a company in India that is owned and controlled by another company, known as the parent company.
                The parent company can be either an Indian company or a foreign company. The Indian Subsidiary operates under Indian laws
                but has its operations and financial matters handled by the parent company. Subsidiaries offer businesses a unique way to
                expand their operations in India while leveraging the resources and expertise of their parent company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image + Paragraph (Right side Image, Left side Text) */}
      <section className="info-section reverse">
        <div className="container">
          <div className="section-content">
            <div className="left-side">
              <h2>Key Benefits of an Indian Subsidiary</h2>
              <p>
                The key benefits of having an Indian Subsidiary include access to a large consumer market, the ability to control operations,
                the ability to raise capital in India, and reduced tax liabilities through certain regulations. By setting up a subsidiary,
                foreign companies can enter the Indian market and expand their business while mitigating risks. The subsidiary benefits from
                legal recognition as a separate entity, making it easier to conduct business, raise funds, and establish a market presence.
              </p>
            </div>
            <div className="right-side">
              <img
                src="https://enterslice.com/learning/wp-content/uploads/2020/11/image-61.png"
                alt="Indian Subsidiary Benefits"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Long Paragraph */}
      <section className="long-paragraph">
        <div className="container">
          <p>
            Setting up an Indian Subsidiary involves multiple legal and regulatory steps that must be followed to ensure compliance with Indian
            laws. The subsidiary needs to be registered with the Ministry of Corporate Affairs (MCA) and follow the guidelines established by the
            Foreign Direct Investment (FDI) policy of India. The process involves determining the subsidiary's structure, choosing the type of
            business entity (such as a private limited company or public limited company), and obtaining all necessary approvals and licenses.
            Once established, the subsidiary operates as a separate legal entity, with its own financials, employees, and operations, while being
            overseen by the parent company. The subsidiary also enjoys various advantages in terms of tax exemptions, government incentives, and
            easier access to Indian markets. However, it is crucial for the parent company to monitor the subsidiary's operations closely to ensure
            that business objectives are met and compliance with local regulations is maintained. The Indian Subsidiary model is an excellent choice
            for foreign companies looking to establish a strong presence in India, enabling them to build brand recognition and expand their market
            share.
          </p>
        </div>
      </section>
    </div>
  );
}

export default IndianSubsidiary;
