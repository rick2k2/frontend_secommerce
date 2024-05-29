import React from "react";
import "./component style/Contact_footer.css";
import logo from "./assests/logo/trendy.png";

function Contactfooter() {
  return (
    <div className="contact_footer">
      <div className="up">
        <img src={logo} alt="logo_not_found"></img>
      </div>
      <div className="down">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Conatact</li>
        </ul>
      </div>
    </div>
  );
}

export default Contactfooter;
