import React from "react";
import "./style.css";


const SoleProprietorship = () => {
  return (
    <div className="page-container">
      <h1>Sole Proprietorship</h1>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20230329113214/Sole-Proprietorship-copy.webp"
        alt="Sole Proprietorship"
        className="page-image"
      />
      <p>
        A sole proprietorship is the simplest and oldest form of business
        structure. It is owned and managed by a single individual, making it
        ideal for small businesses, freelancers, and self-employed individuals.
      </p>
      <div className="info-box">
        <h2>Key Features</h2>
        <ul>
          <li>Owned and operated by one person.</li>
          <li>No legal distinction between owner and business.</li>
          <li>Minimal regulatory compliance.</li>
          <li>Full control and decision-making power.</li>
        </ul>
      </div>
      <div className="info-box">
        <h2>Advantages of Sole Proprietorship</h2>
        <ul>
          <li>Easy to establish with minimal costs.</li>
          <li>Direct control over all aspects of the business.</li>
          <li>Simple taxation process.</li>
          <li>All profits belong to the owner.</li>
        </ul>
      </div>
      <div className="info-box">
        <h2>Disadvantages</h2>
        <ul>
          <li>Unlimited personal liability for business debts.</li>
          <li>Limited access to capital and resources.</li>
          <li>No separate legal identity for the business.</li>
          <li>Business continuity depends on the owner's health and presence.</li>
        </ul>
      </div>
      <div className="steps-box">
        <h2>Steps to Start a Sole Proprietorship</h2>
        <ol>
          <li>Choose a business name.</li>
          <li>Register for local licenses and permits.</li>
          <li>Open a business bank account.</li>
          <li>File taxes as an individual under your name.</li>
        </ol>
      </div>
      <div className="highlight-box">
        <h2>Is Sole Proprietorship Right for You?</h2>
        <p>
          Sole proprietorship is a perfect choice for small-scale businesses,
          freelancers, and individuals who want to test a business idea with
          minimal risks and investment.
        </p>
      </div>
    </div>
  );
};

export default SoleProprietorship;
