import "./App.css";
import React, { useEffect } from "react";
import "./Landing.css";
import Aos from "aos";
import { Link } from "react-router-dom";

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="container-fluid Landing">
      <div className="hero">
        <h1 data-aos="zoom-in">
          15% off <div className="light">your first purchase</div>
        </h1>
        <form>
          <label data-aos="zoom-in" data-aos-duration="6000">
            enter your email to recieve 15% off
          </label>
          <input
            data-aos="zoom-in"
            className="form form-control"
            type="email"
            placeholder="your email..."
          ></input>
          <input
            data-aos="zoom-in"
            className="form form-control btn-dark"
            type="submit"
            value="order now"
          ></input>
        </form>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Link to="/Contact.js">
            <button className="contact btn-design btn btn-control">
              contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
