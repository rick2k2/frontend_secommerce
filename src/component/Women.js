import React from "react";
import w1 from "./assests/womens/w1.jpg";
import w2 from "./assests/womens/w2.jpg";
import w3 from "./assests/womens/w3.jpg";
import w4 from "./assests/womens/w4.jpg";
import w5 from "./assests/womens/w5.jpg";
import w6 from "./assests/womens/w6.jpg";
import k1 from "./assests/kids/k1.jpg";
import k2 from "./assests/kids/k2.jpg";
import "./component style/Women.css";
import "./component style/Men.css";
import { Offer } from "../component/Offer";

function Women() {
  return (
    <div className="women_container">
      <Offer />
      <h1>Popular in women</h1>
      <div className="women_tshirt_container">
        <div className="single_women_product">
          <img src={w1} alt="w1" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={w2} alt="w2" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={w3} alt="w3" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={w4} alt="w4" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={w5} alt="w5" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={w6} alt="w6" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={k1} alt="w7" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
        <div className="single_women_product">
          <img src={k2} alt="w8" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span className="old_price">$120</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Women;
