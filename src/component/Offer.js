import React from "react";
import { Link } from "react-router-dom";
import offer from "./assests/womens/g1.png";
import "./component style/Offer.css";

function Offer() {
  return (
    <div className="offer">
      <div className="offer_left">
        <h1>FLAT 50% OFF</h1>
        <p>
          <span className="time_txt">12</span> Hours
          <span className="time_txt">20</span> Mins
        </p>
        <Link to="/explore" className="explore_btn">
          Explore now
        </Link>
      </div>
      <div className="offer_right">
        <img src={offer} alt="offer_img"></img>
      </div>
    </div>
  );
}

export { Offer };
