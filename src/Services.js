import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BikeSun from "./photos/pexels-haydan-assoendawy-2883462.jpg";
import BikeRacer from "./photos/pexels-saurabh-narwade-2924491.jpg";
import BikeRider from "./photos/dan-russo-XGkl5yYHxyA-unsplash.jpg";
import "./Services.css";
import Aos from "aos";

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  let serviceCards = [
    {
      src: `${BikeSun}`,
      alt: "bike back wheel in the sunlight",
      service: "theft protection",
    },
    {
      src: `${BikeRacer}`,
      alt: "racer bike handles riding over road",
      service: "mobile services",
    },
    {
      src: `${BikeRider}`,
      alt: "man in red top riding a bike",
      service: "app & road support",
    },
  ];
  return (
    <div className="services container-fluid">
      <h4 data-aos="fade-right">experience unparalleled service</h4>
      <h3 data-aos="fade-right">
        support for <br /> all your road needs
      </h3>
      <Link className="text-center ms-5" to="/Features.js">
        <button data-aos="fade-right" className="btn-design btn btn-control">
          learn more
        </button>
      </Link>
      <div className="row service-cards">
        {serviceCards.map(function (bike, index) {
          return (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="col-sm card"
            >
              <div className="img-overlay">
                <img className="img-fluid " src={bike.src} alt={bike.alt} />
              </div>
              <div className="d-flex">
                <i data-aos="fade-right" class="fas fa-chevron-right"></i>
                <h2>{bike.service}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
