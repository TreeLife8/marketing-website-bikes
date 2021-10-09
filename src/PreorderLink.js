import React, { useEffect } from "react";
import "./PreorderLink.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function PreorderLink() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="PreorderLink">
      {" "}
      <Link className="preorder-link mb-1" to="/Features.js">
        <h5>preorder c9 now for $150</h5>
        <i data-aos="fade-right" class="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
}
