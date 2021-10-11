import React from "react";
import logo from "./logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-details">
        <span className="mt-2"> Crafted by</span>{" "}
        <img src={logo} className="logo" alt="Squiggle Code logo" />
      </div>
    </div>
  );
}
