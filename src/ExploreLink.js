import React, { useEffect } from "react";
import "./ExploreLink.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ExploreLink() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="ExploreLink">
      {" "}
      <Link className="explore-link mb-1" to="/Features">
        <h5>preorder l9 now for $199</h5>
        <i data-aos="fade-right" class="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
}
