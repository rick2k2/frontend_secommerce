import React from "react";
import "./component style/payment.css";
import pqr from "./assests/paymentqr/pqr.jpg";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div className="PaymentContainer">
      <h1>Scan this Qr code and Pay</h1>
      <img src={pqr} alt="payment_qr" />
      <Link to="/" className="payment_done_btn">
        Done
      </Link>
    </div>
  );
}
