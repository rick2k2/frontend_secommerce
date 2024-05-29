import React from "react";
import "./component style/Hero.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import banner_img from "./assests/womens/g1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <p className="hero_caption">New ARRIVALS ONLY</p>
        <h1 className="hero_banner_txt">New 👋 </h1>
        <h1 className="hero_banner_txt">Collections</h1>
        <h1 className="hero_banner_txt">for Everyone</h1>
        <Link to="/latest" className="latest_btn">
          Latest Collection <ArrowRightAltIcon />
        </Link>
      </div>
      <div className="right">
        <img src={banner_img} alt="banner_img_not_found" className="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
