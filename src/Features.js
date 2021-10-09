import React from "react";
import "./Features.css";
// import bananaPink from "./bananasPinkBg.jpg";s
import bananaHappy from "./happyBanana.jpg";
import bananaSun from "./sunBanana.jpg";

export default function Features() {
  // const [features, setFeatures] = useState("");
  // const [feature, setFeature] = useState("");
  let features = [
    {
      img: "/bananasPinkBg.jpg",
      title: "big bananas",
      text: "fantastic bananas that make you smile",
    },
    {
      img: { bananaHappy },
      title: "pealing bananas",
      text: "laughing with peals",
    },
    {
      img: { bananaSun },
      title: "shinning with bananas",
      text: "silly sun soaked bananas",
    },
  ];
  // function meow() {
  //   setFeature({
  //     img: { bananaPink },
  //     title: "big bananas",
  //     text: "fantastic bananas that make you smile",
  //   });
  // }
  // if (feature) {
  return (
    <div className="Features container">
      <div className="row">
        <div className="col-sm-4 text-center">
          {}
          <div class="card">
            <img
              src={features[0].img}
              class="card-img-top img-fluid"
              alt="pealed bananas with pink background"
            />
            <div class="card-body">
              <h3 class="card-title">{features[0].title}</h3>
              <p class="card-text">{features[0].text}</p>
              <a href="/" class="btn btn-secondary">
                slip into sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // } else {
  //   meow();
  //   return null;
  // }
}
