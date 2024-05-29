import React from "react";
import "./component style/Header.css";
import site_logo from "./assests/logo/trendy.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img className="Logo" alt="logo_img_not_found" src={site_logo}></img>
      </Link>
      <ul>
        <li>
          <Link to="/shop" className="link_txt">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/mens" className="link_txt">
            Men
          </Link>
        </li>
        <li>
          <Link to="/womens" className="link_txt">
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" className="link_txt">
            Kids
          </Link>
        </li>
      </ul>
      <div className="btn_container">
        <button className="login">
          <Link to="/login" class="login_txt">
            Login
          </Link>
        </button>
        <button className="cart">
          <Link to="/cart" className="cart_txt">
            <ShoppingCartIcon className="cart_icon" />
            <span className="cart_icon_number">{4}</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Header;
