import "./App.css";
import React from "react";
import Features from "./Features";
import ShapeDivider from "./ShapeDivider";

export default function Landing() {
  return (
    <div className="Landing">
      {" "}
      <header>
        <h1 className="Title">
          15% off <div>ALL bananas!</div>
        </h1>
      </header>
      <ShapeDivider />
      <div className="Features">
        <h2>
          go bananas for <strong>BANANAS</strong> 🍌
        </h2>
      </div>
      <Features />
    </div>
  );
}
