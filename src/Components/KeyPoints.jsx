import React from "react";
import "../assets/stylesheets/KeyPoints.css"; // Assuming you have a CSS file for styling
import KeyPointsBg from "../assets/images/76a0f9eb-354a-4855-8496-c010faae3332.jpg";

const KeyPoints = () => {
  return (
    // <<!-- About Section -->
    <div className="about-container">
      <div className="about-content">
        <img src={KeyPointsBg} alt="" />
        <div className="about-content-inner-main">
          <div className="about-content-inner">
            <h1>
              Mars is a fascinating planet with a rocky surface, a thin
              atmosphere and a temperamental climate.
            </h1>
          </div>
          <div className="about-box-container">
            <div className="about-box">
              <h2 style={{ fontSize: "20px", color: "orange" }}>
                Mars Research
              </h2>
              <p style={{ marginTop: "5%", fontSize: "14px" }}>
                Mars is a prime target for future robotic and human exploration.
                The planet's surface has many features that suggest it may have
                had a more Earth-like environment in the past.
              </p>
            </div>
            <div className="about-box">
              {" "}
              <h2 style={{ fontSize: "20px", color: "orange" }}>
                Moon Research
              </h2>
              <p style={{ marginTop: "5%", fontSize: "14px" }}>
                Moon is a prime target for future robotic and human exploration.
                The planet's surface has many features that suggest it may have
                had a more Earth-like environment in the past.
              </p>
            </div>
            <div className="about-box">
              {" "}
              <h2 style={{ fontSize: "20px", color: "orange" }}>
                Space Station
              </h2>
              <p style={{ marginTop: "5%", fontSize: "14px" }}>
                Space Station is a prime target for future robotic and human exploration.
                The planet's surface has many features that suggest it may have
                had a more Earth-like environment in the past.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
