import React from "react";
import m1 from "./assests/mens/m1.jpg";
import m2 from "./assests/mens/m2.jpg";
import m3 from "./assests/mens/m3.jpg";
import m4 from "./assests/mens/m4.jpg";
import m5 from "./assests/mens/m5.jpg";
import m6 from "./assests/mens/m6.jpg";
import m7 from "./assests/mens/m7.jpg";
import m8 from "./assests/mens/m8.jpg";
import "./component style/Men.css";
import { Offer } from "../component/Offer";

function Men() {
  return (
    <div className="men_container">
      <Offer />
      <h1>Popular in Men</h1>
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
          <img src={m3} alt="m3" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={m4} alt="m4" />
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
          <img src={m7} alt="m7" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_men_product">
          <img src={m8} alt="m8" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Men;
