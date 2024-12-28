import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <div className="customers-container">
      <h2 className="customers-title">Our Customers</h2>
      <div className="customers-logos">
        <img src="https://static.vecteezy.com/system/resources/previews/022/100/821/non_2x/oyo-logo-transparent-free-png.png" alt="OYO" className="logo" />
        <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Swiggy-Logo.png" alt="Swiggy" className="logo" />
        <img src="https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png" alt="Big Basket" className="logo" />
        <img src="https://th.bing.com/th/id/OIP.WA01fwIfuodvmDVtgxH_CgHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="HDFC Bank" className="logo" />
        <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="Amazon" className="logo" />
      </div>
    </div>
  );
};

export default Customers;
