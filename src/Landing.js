import "./App.css";
import React, { useEffect } from "react";
import "./Landing.css";
import Aos from "aos";
import BikeHandles from "./photos/bikeHandles.png";

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="container-fluid Landing">
      <div className="hero  d-flex">
        <img
          data-aos="fade-left"
          className="img-fluid"
          src={BikeHandles}
          alt="bike handles"
        />
        <h1>15% off your first purchase</h1>
      </div>
    </div>
  );
}
