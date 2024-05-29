import React from "react";
import { Link } from "react-router-dom";
import "./component style/Emailoffer.css";

function Emailoffer() {
  return (
    <div className="email_offer">
      <h1>Get Exclusive offers on your email</h1>
      <p> Subscribe to our newsletter and stay updated</p>
      <div className="input_container">
        <input type="text" placeholder="Enter email id" />
        <Link to="/subscribe" className="subscribe_btn">
          Subscribe
        </Link>
      </div>
    </div>
  );
}

export default Emailoffer;
