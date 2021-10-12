import React, { useEffect } from "react";
import "./Contact.css";
import Bike from "./photos/bikeHandles.png";
import Aos from "aos";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Contact container-fluid">
      <div className="row">
        <div className="col-sm-7">
          <h1>CONTACT</h1>
          <p>
            Need to tell us something?
            <br />
            Send us an email through this form
          </p>
          <form>
            <input
              name="name"
              className="form form-control"
              type="text"
              placeholder="name..."
            ></input>
            <input
              name="number"
              className="form form-control"
              type="number"
              placeholder="phone number..."
            ></input>
            <textarea
              className="form form-control"
              name="message"
              placeholder="message..."
              rows="5"
              cols="30"
            ></textarea>
            <input
              className="btn-design form form-control"
              type="submit"
              value="send"
            ></input>
          </form>
        </div>
        <div className="col-sm-5 bike-image">
          <img
            data-aos="fade-up"
            src={Bike}
            alt="bike handles"
            className="img-fluid rotate"
          />
        </div>
      </div>
    </div>
  );
}
