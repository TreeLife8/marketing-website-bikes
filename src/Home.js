import "./App.css";
import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PreorderLink from "./PreorderLink";
import ExploreLink from "./ExploreLink";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import DiscoverApp from "./DiscoverApp";

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
          <button className="explore btn-design btn btn-control">
            explore
          </button>
        </Link>
        <PreorderLink />
      </header>
      <DiscoverApp />
      <section className="container-fluid">
        <div data-aos="fade-up">
          <h2>
            lightning<span>nine</span>
          </h2>
          <h4 className="text-start">stricking speed for a lightning fight</h4>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Link className="text-center ms-5" to="/Features.js">
            <button className="explore btn-design btn btn-control">
              explore
            </button>
          </Link>
        </div>
        <ExploreLink />
      </section>
      <main>
        <div data-aos="fade-up">
          <h2>
            ride into the <br /> future with<span> style</span>
          </h2>
        </div>
      </main>
      <Services />
    </div>
  );
}
