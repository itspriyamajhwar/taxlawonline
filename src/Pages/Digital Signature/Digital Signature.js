import React, { useState } from 'react';
import './style.css';

// Client Reviews Data
const clientReviews = [
  {
    name: "John Doe",
    review: "This digital signature service is amazing. It saved me so much time and effort. Highly recommended!",
    image: "https://via.placeholder.com/100x100"
  },
  {
    name: "Jane Smith",
    review: "A seamless experience! The process was smooth, and I can now sign documents digitally without any hassle.",
    image: "https://via.placeholder.com/100x100"
  },
  {
    name: "Mark Lee",
    review: "I was skeptical at first, but now I use this service for all my business needs. Fast, reliable, and secure.",
    image: "https://via.placeholder.com/100x100"
  },
  {
    name: "Emily Davis",
    review: "Excellent service for digital signatures. Easy to use, and great customer support when needed.",
    image: "https://via.placeholder.com/100x100"
  }
];

const DigitalSignature = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  return (
    <div className="digital-signature-page">
      <header className="page-header">
        <h1>Digital Signature Service</h1>
        <p>Secure, easy, and legally accepted digital signatures for your documents.</p>
      </header>

      <section className="image-grid-section">
        <h2>Why Choose Digital Signature?</h2>
        <div className="image-grid">
          <div className="grid-item">
            <img src="https://images.pexels.com/photos/4440885/pexels-photo-4440885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Secure Signing" />
            <p>Secure Signing</p>
          </div>
          <div className="grid-item">
            <img src="https://images.pexels.com/photos/8850721/pexels-photo-8850721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Legally Accepted" />
            <p>Legally Accepted</p>
          </div>
          <div className="grid-item">
            <img src="https://images.pexels.com/photos/7489095/pexels-photo-7489095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Easy to Use" />
            <p>Easy to Use</p>
          </div>
          <div className="grid-item">
            <img src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10" alt="Efficient Process" />
            <p>Efficient Process</p>
          </div>
        </div>
      </section>

      <section className="description-section">
        <h2>What is a Digital Signature?</h2>
        <p>
          A Digital Signature is a cryptographic mechanism used to verify the authenticity and integrity of digital documents or messages.
          It provides the highest level of security and is legally binding. Digital signatures eliminate the need for paper-based signatures, 
          reducing time and increasing efficiency.
        </p>
        <p>
          With our Digital Signature service, you can sign contracts, agreements, forms, and other documents securely online, ensuring that they 
          cannot be altered after signing.
        </p>
      </section>

      <section className="client-reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="slider">
          <div className="review">
            <img src={clientReviews[currentReview].image} alt={clientReviews[currentReview].name} />
            <p className="review-text">"{clientReviews[currentReview].review}"</p>
            <p className="client-name">- {clientReviews[currentReview].name}</p>
          </div>
          <button className="prev-btn" onClick={prevReview}>❮</button>
          <button className="next-btn" onClick={nextReview}>❯</button>
        </div>
      </section>

     
    </div>
  );
};

export default DigitalSignature;
