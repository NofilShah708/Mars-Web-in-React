import React from "react";
import "../assets/stylesheets/SmallAbout.css";

const SmallAbout = () => {
  return (
    <div className="smallabout-section">
      <div className="smallabout-bg"></div>
      <div className="smallabout-content">
        <h2 className="smallabout-title">To Mars and back</h2>
        <p className="smallabout-desc">
          Together the Starship spacecraft and Super Heavy rocket create a
          reusable transportation system capable of on orbit refueling and
          leveraging Mars' natural H2O and CO2 resources to refuel on the
          surface of Mars.
        </p>
        <div className="smallabout-stats">
          <div className="smallabout-stat">
            <span className="stat-number">6</span>
            <span className="stat-label">MONTHS TO MARS</span>
          </div>
          <div className="smallabout-stat">
            <span className="stat-number">2</span>
            <span className="stat-label">MOONS</span>
          </div>
          <div className="smallabout-stat">
            <span className="stat-number">14</span>
            <span className="stat-label">SATELLITES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallAbout;
