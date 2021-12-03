import React from "react";
// import logo from "./logo.png";
import "./Footer.css";

export default function Footer() {
  let navMenu = [
    {
      title: "EXPLORE",
      listOne: "cloudnine",
      listTwo: "lightningnine",
      listThree: "app",
    },
    {
      title: "ABOUT",
      listOne: "careers",
      listTwo: "contact us",
      listThree: "reviews",
    },
    {
      title: "HELP",
      listOne: "support",
      listTwo: "delivery",
      listThree: "returns",
    },
    {
      title: "CONNECT",
      listOne: "Facebook",
      listTwo: "Instagram",
      listThree: "Twitter",
    },
  ];
  return (
    <div className="Footer">
      <div className="row nav-menu">
        {navMenu.map(function (navMenu, index) {
          return (
            <div className="col-sm-2">
              <ul key={index}>
                <li>
                  <h5>{navMenu.title}</h5>
                </li>
                <li>{navMenu.listOne}</li>
                <li>{navMenu.listTwo}</li>
                <li>{navMenu.listThree}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="footer-details">
        <span className="mt-2"> Crafted by Regina Maher</span>
        {/* <img src={logo} className="logo" alt="Squiggle Code logo" /> */}
      </div>
    </div>
  );
}
