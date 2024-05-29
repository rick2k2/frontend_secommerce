import React from "react";
import { Link } from "react-router-dom";
import "./component style/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="Footer">
      <Link to="" className="social_icon">
        <InstagramIcon />
      </Link>
      <Link to="" className="social_icon">
        <PinterestIcon />
      </Link>
      <Link to="" className="social_icon">
        <WhatsAppIcon />
      </Link>
    </div>
  );
}

export default Footer;
