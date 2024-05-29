import React from "react";
import { Link } from "react-router-dom";
import "./component style/Signup.css";

function Signup() {
  return (
    <div className="signup_container">
      <div className="signup_field">
        <h1>Signup</h1>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your Password" />
        <Link to="/login/submit" className="continue_btn_signup">
          Continue
        </Link>
        <p>
          Already have an account?
          <Link to="/login" className="account_login_txt">
            Login here
          </Link>
        </p>
        <div className="radio_check_signup">
          <input type="radio" />
          <span className="side_text_of_radio_signup">
            By Continuing. I agree to the terms of use & Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}
export default Signup;
