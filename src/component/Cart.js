import React from "react";
import "./component style/cart.css";
import m1 from "./assests/mens/m1.jpg";
import w1 from "./assests/womens/w1.jpg";
import k1 from "./assests/kids/k1.jpg";
import m2 from "./assests/mens/m2.jpg";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Cart() {
  return (
    <div className="cart_container">
      <h1>All Products List</h1>
      <div className="cart_heading">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div className="cart_products">
        <div className="cart_single_products">
          <img src={m1} alt="p1" />
          <p>Men Black T-shirt</p>
          <p>$100</p>
          <input type="text" />
          <p>$100</p>
          <CancelIcon className="cancel_btn" />
        </div>
        <div className="cart_single_products">
          <img src={w1} alt="p1" />
          <p>Women white Fork</p>
          <p>$120</p>
          <input type="text" />
          <p>$120</p>
          <CancelIcon className="cancel_btn" />
        </div>
        <div className="cart_single_products">
          <img src={k1} alt="p1" />
          <p>Kids Jacket T-shirt</p>
          <p>$50</p>
          <input type="text" />
          <p>$50</p>
          <CancelIcon className="cancel_btn" />
        </div>
        <div className="cart_single_products">
          <img src={m2} alt="p1" />
          <p>Men Touser with T-shirt</p>
          <p>$200</p>
          <input type="text" />
          <p>$200</p>
          <CancelIcon className="cancel_btn" />
        </div>
      </div>
      <div className="checkout_container">
        <h3>Cart Total</h3>
        <p>Sub Total:470$</p>
        <p>Shipping Fee:Free</p>
        <p>Discount:70$</p>
        <p>Total:400$</p>
        <Link to="/payment" className="checkout">
          Procced To checkout
        </Link>
      </div>
    </div>
  );
}
