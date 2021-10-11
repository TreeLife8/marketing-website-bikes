import React from "react";
import Phone from "./photos/phone.png";
import { Link } from "react-router-dom";
import "./DiscoverApp.css";

export default function DiscoverApp() {
  let phoneImages = [
    {
      src: `${Phone}`,
      alt: "mobile phone displaying riding app",
      duration: 3000,
    },
    {
      src: `${Phone}`,
      alt: "mobile phone displaying riding app",
      duration: 6000,
    },
    {
      src: `${Phone}`,
      alt: "mobile phone displaying riding app",
      duration: 3000,
    },
  ];
  return (
    <div className="mid container-fluid d-flex">
      <h2 data-aos="fade-down" data-aos-duration="3000">
        always a great day for a ride
      </h2>
      <h6 data-aos="fade-down" data-aos-duration="4000">
        guide your connection with speed and your path
      </h6>
      <Link to="/Features.js">
        <button
          data-aos="fade-down"
          data-aos-duration="4500"
          className="app btn-design btn btn-control"
        >
          discover the app
        </button>
      </Link>
      <div className="app-photos">
        {phoneImages.map(function (phone, index) {
          return (
            <img
              key={index}
              className="phone"
              data-aos="zoom-in"
              data-aos-duration={phone.duration}
              src={phone.src}
              alt={phone.alt}
            />
          );
        })}
      </div>
    </div>
  );
}
