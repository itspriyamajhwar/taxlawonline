import React from "react";
import Slider from "react-slick";
import "./style.css";


const Section8Company = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="page-container">
      <h1>Section 8 Company Partnership</h1>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <img src="https://vakilsearch.com/blog/wp-content/uploads/2022/11/Section-8-Company.png" alt="Section 8 Company 1" className="slider-image" />
          <img src="https://taxguru.in/wp-content/uploads/2021/07/Incorporation-Procedure-for-Section-8-Company.jpg" alt="Section 8 Company 2" className="slider-image" />
          <img src="https://th.bing.com/th/id/OIP.0FfSeHlAVkSJ6o6yFXQJIgHaEU?rs=1&pid=ImgDetMain" alt="Section 8 Company 3" className="slider-image" />
        </Slider>
      </div>
      <p>
        Section 8 Companies are registered for the purpose of promoting
        charitable objectives such as arts, commerce, education, protection of
        the environment, science, and sports. These companies reinvest their
        profits towards achieving their objectives rather than distributing them
        as dividends.
      </p>
      <div className="info-box">
        <h2>Key Features of Section 8 Company</h2>
        <ul>
          <li>Incorporated with charitable objectives.</li>
          <li>No minimum capital requirement.</li>
          <li>Exemptions under tax laws.</li>
          <li>Governed by the Companies Act, 2013.</li>
        </ul>
      </div>
      <div className="steps-box">
        <h2>Steps to Register a Section 8 Company</h2>
        <ol>
          <li>Obtain a Digital Signature Certificate (DSC).</li>
          <li>Apply for Director Identification Number (DIN).</li>
          <li>File the name reservation form with the MCA.</li>
          <li>Prepare the Memorandum and Articles of Association (MoA and AoA).</li>
          <li>Submit the incorporation application.</li>
        </ol>
      </div>
      <div className="highlight-box">
        <h2>Benefits of Section 8 Company</h2>
        <p>
          Section 8 Companies are ideal for those who want to create a legal
          entity for charitable work. They enjoy various tax exemptions and can
          accept donations and grants from different sources.
        </p>
      </div>
    </div>
  );
};

export default Section8Company;
