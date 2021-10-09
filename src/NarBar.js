import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="Squiggle Code logo" />
        </Link>
        <button
          class="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto pe-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Landing">
                Landing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
