import React from "react";
import k1 from "./assests/kids/k1.jpg";
import k2 from "./assests/kids/k2.jpg";
import k3 from "./assests/kids/k3.jpg";
import k4 from "./assests/kids/k4.jpg";
import k5 from "./assests/kids/k5.jpg";
import k6 from "./assests/kids/k6.jpg";
import k7 from "./assests/kids/k7.jpg";
import m8 from "./assests/mens/m8.jpg";
import "./component style/Kids.css";
import { Offer } from "../component/Offer";

function Kid() {
  return (
    <div className="kid_container">
      <Offer />
      <h1>Popular in Kids</h1>
      <div className="kid_tshirt_container">
        <div className="single_kid_product">
          <img src={k1} alt="k1" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k2} alt="k2" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k3} alt="k3" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k4} alt="k4" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k5} alt="k5" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k6} alt="k6" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
          <img src={k7} alt="k7" />
          <p>Good Quality Product</p>
          <p className="new_price">
            $80 <span>$120</span>
          </p>
        </div>
        <div className="single_kid_product">
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

export default Kid;
