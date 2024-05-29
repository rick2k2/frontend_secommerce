import React from "react";
import "./component style/pagenotfound.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page_not_found_container">
      <h1> Page Not Found </h1>
      <h2>404 Error!</h2>
      <Link to="/" className="page_not_found_link">
        <ReplayIcon className="reload_icon" />
      </Link>
    </div>
  );
}
