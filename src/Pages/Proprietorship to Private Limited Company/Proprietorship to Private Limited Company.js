import React from "react";
import Slider from "react-slick";
import "./style.css"; // Import your CSS file

const ProprietorshipToPrivateLimited = () => {
  // Slider settings for client reviews
  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="proprietorship-container">
      {/* Page Header */}
      <header className="page-header">
        <h1>Proprietorship to Private Limited Company</h1>
        <p>
          Transitioning from a Proprietorship to a Private Limited Company is a
          significant step for entrepreneurs looking to expand their business
          operations and enhance credibility.
        </p>
      </header>

      {/* Content with Right Side Image */}
      <div className="content-section">
        <div className="text-content">
          <p>
            A Private Limited Company provides several benefits, including
            limited liability, better access to funding, and increased
            credibility in the market. This conversion is ideal for businesses
            planning to expand operations or secure investments from venture
            capitalists or other financial institutions.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://th.bing.com/th/id/OIP._kRC3rdbrC5dv6k1ZoyZAQHaEK?rs=1&pid=ImgDetMain"
            alt="Proprietorship to Private Limited Conversion"
            className="responsive-img"
          />
        </div>
      </div>

      {/* Content with Left Side Image */}
      <div className="content-section reverse">
        <div className="image-content">
          <img
            src="https://th.bing.com/th/id/OIP.3QdjGBvLOmNaZa8W0sEy4QHaGU?rs=1&pid=ImgDetMain"
            alt="Private Limited Benefits"
            className="responsive-img"
          />
        </div>
        <div className="text-content">
          <p>
            The process involves obtaining approval from the Registrar of
            Companies (RoC), drafting a Memorandum of Association (MoA) and
            Articles of Association (AoA), and complying with regulatory
            requirements. This ensures a smooth and legally compliant
            transition.
          </p>
        </div>
      </div>

      {/* Topic Banner */}
      <div className="topic-banner">
        <h2>Empower Your Business with the Right Structure</h2>
        <p>
          Upgrade your proprietorship to a Private Limited Company to unlock
          your business's true potential.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid-section">
        <h2>Key Benefits of Conversion</h2>
        <div className="grid-container">
          <div className="grid-box">
            <h3>Limited Liability</h3>
            <p>Owners' personal assets are protected against business debts.</p>
          </div>
          <div className="grid-box">
            <h3>Better Credibility</h3>
            <p>
              A Private Limited Company adds professional credibility to your
              business.
            </p>
          </div>
          <div className="grid-box">
            <h3>Easy Fundraising</h3>
            <p>
              Attract investors and secure funding more effectively with this
              structure.
            </p>
          </div>
          <div className="grid-box">
            <h3>Separate Legal Entity</h3>
            <p>
              The company has a distinct legal identity separate from its
              owners.
            </p>
          </div>
        </div>
      </div>

      {/* Client Reviews */}
      <div className="client-reviews">
        <h2>What Our Clients Say</h2>
        <Slider {...reviewSettings} className="reviews-slider">
          <div className="review-slide">
            <p>
              "Converting my proprietorship to a Private Limited Company was
              seamless with their guidance. It helped me secure funding for
              expansion."
            </p>
            <h4>John Smith</h4>
          </div>
          <div className="review-slide">
            <p>
              "The team was professional and efficient. The conversion process
              was hassle-free and timely."
            </p>
            <h4>Jane Doe</h4>
          </div>
          <div className="review-slide">
            <p>
              "Highly recommended! They handled everything from documentation to
              compliance, making the transition smooth."
            </p>
            <h4>Alex Brown</h4>
          </div>
        </Slider>
      </div>

      {/* Best Employee Section */}
      <div className="best-employee-section">
        <h2>Meet Our Top Performers</h2>
        <div className="employee-images">
          <img
            src="https://via.placeholder.com/150"
            alt="Best Employee 1"
            className="employee-img"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Best Employee 2"
            className="employee-img"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Best Employee 3"
            className="employee-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ProprietorshipToPrivateLimited;
