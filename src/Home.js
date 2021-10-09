import "./App.css";
import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PreorderLink from "./PreorderLink";
import ExploreLink from "./ExploreLink";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Home">
      <header className="container-fluid">
        <h1 className="title">
          cloud<span>nine</span>
        </h1>
        <h4>glide through the skies</h4>
        <Link to="/Features.js">
          <button className="explore btn btn-control">explore</button>
        </Link>
        <PreorderLink />
      </header>
      <div className="mid d-flex">
        <h2 data-aos="fade-down" data-aos-duration="3000">
          always a great day for a ride
        </h2>
      </div>
      <section className="container-fluid">
        <div data-aos="fade-up">
          <h2>
            lightning<span>nine</span>
          </h2>
          <h4 className="text-start">stricking speed for a lightning fight</h4>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Link className="text-center ms-5" to="/Features.js">
            <button className="explore btn btn-control">explore</button>
          </Link>
        </div>
        <ExploreLink />
      </section>
      <main>
        <div data-aos="fade-up">
          <h2>
            ride into the <div> future with style</div>
          </h2>
        </div>
      </main>
    </div>
  );
}
