import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <div className="customers-container">
      <h2 className="customers-title">Our Customers</h2>
      <div className="customers-logos">
        <img src="/images/oyo.png" alt="OYO" className="logo" />
        <img src="/images/swiggy.png" alt="Swiggy" className="logo" />
        <img src="/images/bigbasket.png" alt="Big Basket" className="logo" />
        <img src="/images/hdfc.png" alt="HDFC Bank" className="logo" />
        <img src="/images/amazon.png" alt="Amazon" className="logo" />
      </div>
    </div>
  );
};

export default Customers;
