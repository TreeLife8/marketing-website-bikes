import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "./Features.css";

export default function Features() {
  let features = [
    {
      title: "assistance",
      description:
        "Enjoy your ride with ease as our automatic assistance provides you comfort through difficulty.",
    },
    {
      title: "removable battery",
      description:
        "Take only the battery inside for a charge. Bringing ease with every part of your journey",
    },
    {
      title: "kinetic recharge",
      description:
        "Save on power as your journey recharges your battery on the go.",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Features container-fluid">
      <div className="hero">
        <h1 data-aos="fade-in">take control</h1>
        <h2 data-aos="fade-in" data-aos-duration="6000">
          with the cloud<span>nine</span>
        </h2>
        <h3>and let us handle the rest</h3>
        <div>
          <Link to="/Contact">
            <button className="contact btn-design btn btn-control">
              contact us
            </button>
          </Link>
        </div>
      </div>
      <div className="mid">
        <h2>glide with ease</h2>
        <hr data-aos="fade-right" />
        <div className="row tiles">
          {features.map(function (feature, index) {
            return (
              <div key={index} className="tile col-sm-4">
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
