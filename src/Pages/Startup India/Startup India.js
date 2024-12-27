import React from 'react';
import './style.css';

const StartupIndia = () => {
  return (
    <div className="startup-india-page">
      <header className="page-header">
        <h1>Startup India Initiative</h1>
        <p>Everything you need to know about the Indian Government's Startup India Program</p>
      </header>

      <section className="intro-section">
        <h2>What is Startup India?</h2>
        <p>
          Startup India is an initiative launched by the Government of India to promote and support the growth of startups in India. 
          The program provides an ecosystem for startups to thrive through various schemes and incentives aimed at creating jobs, 
          boosting innovation, and driving economic growth.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Benefits of Startup India</h2>
        <ul>
          <li><strong>Tax Exemptions:</strong> Exemption from income tax for the first three years of the startup.</li>
          <li><strong>Self-Certification:</strong> Ease of compliance with labor and environmental laws.</li>
          <li><strong>Faster Patent Filing:</strong> Facilitating faster and more affordable patent filing.</li>
          <li><strong>Funding Support:</strong> Access to venture funds and government schemes.</li>
          <li><strong>Networking Opportunities:</strong> Access to a network of entrepreneurs and mentors.</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>Eligibility Criteria</h2>
        <p>To register under the Startup India program, the following criteria need to be met:</p>
        <ul>
          <li>Startup must be incorporated as a private limited company, limited liability partnership, or a partnership firm.</li>
          <li>The company must be working towards innovation, development, or improvement of products or processes.</li>
          <li>The startup must not be older than 10 years from the date of incorporation.</li>
          <li>The turnover of the startup must not exceed ₹100 Crore in any of the previous financial years.</li>
        </ul>
      </section>

      <section className="registration-process-section">
        <h2>How to Register for Startup India?</h2>
        <p>Follow these steps to register your startup with the Startup India portal:</p>
        <ol>
          <li>Visit the official Startup India website: <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer">startupindia.gov.in</a></li>
          <li>Click on the 'Register' button and create a login account.</li>
          <li>Complete the application form with details about your business and your startup.</li>
          <li>Submit your application and wait for verification.</li>
        </ol>
      </section>

      <section className="resources-section">
        <h2>Resources for Startups</h2>
        <p>The Startup India initiative offers various resources to support startups, including:</p>
        <ul>
          <li><strong>Startup India Hub:</strong> A platform connecting startups with investors, mentors, and service providers.</li>
          <li><strong>Incubators:</strong> Government-supported incubators for nurturing innovation.</li>
          <li><strong>Mentorship:</strong> Access to experienced entrepreneurs and business professionals.</li>
        </ul>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <strong>Q1: What are the tax benefits under Startup India?</strong>
          <p>The government offers tax exemptions for the first three years of operation for eligible startups.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Can foreign nationals apply for Startup India?</strong>
          <p>Yes, foreign nationals can apply for the program if they meet the eligibility criteria.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: How can I access funding through Startup India?</strong>
          <p>Eligible startups can access funding through government venture funds or through various initiatives under the program.</p>
        </div>
      </section>

     
    </div>
  );
};

export default StartupIndia;
