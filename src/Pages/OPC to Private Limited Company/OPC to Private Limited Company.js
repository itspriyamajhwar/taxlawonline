import React from "react";
import "./style.css"; // Import your CSS file

const OPCToPrivateLimited = () => {
  return (
    <div className="opc-container">
      {/* Page Header */}
      <header className="opc-header">
        <h1>OPC to Private Limited Company Conversion</h1>
        <p>
          Converting your One Person Company (OPC) to a Private Limited Company
          opens up new avenues for growth and investment opportunities. Let us
          guide you through the process seamlessly.
        </p>
      </header>

      {/* Main Content Section */}
      <div className="opc-main-content">
        <div className="opc-text">
          <p>
            Converting an OPC to a Private Limited Company is a strategic move
            for businesses that aim to expand operations, attract investors, or
            comply with growing financial and operational requirements. The
            process is straightforward and includes approval from the Registrar
            of Companies (RoC), updating Memorandum of Association (MoA), and
            filing necessary documents.
          </p>
          <p>
            A Private Limited Company provides advantages like better access to
            funding, limited liability for shareholders, and enhanced
            credibility in the market. It also allows for more shareholders,
            making it easier to raise capital from angel investors or venture
            capitalists.
          </p>
        </div>
        <div className="opc-image">
          <img
            src="https://images.pexels.com/photos/7875949/pexels-photo-7875949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="OPC to Private Limited"
            className="responsive-img"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="opc-grid-section">
        <h2>Key Steps in Conversion</h2>
        <div className="opc-grid">
          <div className="grid-box">
            <h3>1. Board Resolution</h3>
            <p>
              The first step is to pass a resolution for conversion and
              authorize a director to proceed with necessary filings.
            </p>
          </div>
          <div className="grid-box">
            <h3>2. Filing Application</h3>
            <p>
              File the application for conversion with the RoC, along with
              updated MoA and AoA.
            </p>
          </div>
          <div className="grid-box">
            <h3>3. Legal Compliance</h3>
            <p>
              Ensure compliance with all legal and tax regulations during the
              conversion process.
            </p>
          </div>
          <div className="grid-box">
            <h3>4. Certificate of Incorporation</h3>
            <p>
              Once approved, a new Certificate of Incorporation will be issued,
              marking the successful conversion.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us for OPC to Private Limited Conversion?</h2>
        <ul>
          <li>Experienced professionals to guide you through the process.</li>
          <li>End-to-end service, from documentation to RoC approval.</li>
          <li>Transparent pricing with no hidden charges.</li>
          <li>Quick turnaround time to ensure smooth operations.</li>
        </ul>
      </div>

      {/* Trusted Companies Banner */}
      <div className="trusted-banner">
        <h2>Trusted By</h2>
        <div className="company-logos">
          <img
            src="https://via.placeholder.com/100"
            alt="Company 1"
            className="logo-img"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Company 2"
            className="logo-img"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Company 3"
            className="logo-img"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Company 4"
            className="logo-img"
          />
        </div>
      </div>
    </div>
  );
};

export default OPCToPrivateLimited;
