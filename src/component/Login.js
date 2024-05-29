import React from "react";
import { Link } from "react-router-dom";
import "./component style/login.css";

function Login() {
  return (
    <div className="login_contrainer">
      <div className="login_field">
        <h1>Login</h1>
        <input type="text" placeholder="Enter your email address" />
        <input type="text" placeholder="Enter your Password" />
        <Link to="/login/submit" className="continue_btn">
          Continue
        </Link>
        <p>
          Create an account?{" "}
          <Link to="/signup" className="account_create_txt">
            Click here
          </Link>
        </p>
        <div className="radio_check">
          <input type="radio" />
          <span className="side_text_of_radio">
            By Continuing. I agree to the terms of use & Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
