import React from "react";
import m1 from "./assests/mens/m1.jpg";
import m2 from "./assests/mens/m2.jpg";
import w3 from "./assests/womens/w3.jpg";
import w4 from "./assests/womens/w4.jpg";
import m5 from "./assests/mens/m5.jpg";
import m6 from "./assests/mens/m6.jpg";
import k6 from "./assests/kids/k6.jpg";
import k7 from "./assests/kids/k7.jpg";
import "./component style/Men.css";
import { Link } from "react-router-dom";

function TShirts() {
  return (
    <div className="men_container">
      <h1>T-shirts</h1>
      <Link to="/product" className="link_of_all_products">
        <div className="men_tshirt_container">
          <div className="single_men_product">
            <img src={m1} alt="m1" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={m2} alt="m2" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={w3} alt="w3" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_women_product">
            <img src={w4} alt="w4" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={m5} alt="m5" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={m6} alt="m6" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={k7} alt="k7" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
          <div className="single_men_product">
            <img src={k6} alt="k6" />
            <p>Good Quality Product</p>
            <p className="new_price">
              $80 <span>$120</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TShirts;
