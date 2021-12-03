import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Landing from "./Landing";
import Contact from "./Contact";
import NavBar from "./NarBar";
import Footer from "./Footer";

export default function App() {
  const [state, toggle] = useState(false);
  function toggleNavbar() {
    toggle(!state);
  }
  function handleTouch() {
    if (state) {
      toggleNavbar();
    }
  }
  return (
    <div className="App" onClick={handleTouch}>
      <NavBar toggleNavbar={toggleNavbar} state={state} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Features" component={Features} />
      <Route exact path="/Landing" component={Landing} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </div>
  );
}
