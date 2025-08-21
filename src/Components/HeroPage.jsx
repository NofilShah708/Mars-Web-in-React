import React from "react";
import "../assets/stylesheets/HeroPage.css";
import HeroBG from "../assets/images/New Project.jpg";
import Astronot from "../assets/images/bc476d94-fdd0-4552-a050-644e1372254b.png";

const HeroPage = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <div className="hero-container">
        <img src={HeroBG} alt="" />
        <div className="hero-content-container">
          <div className="hero-content">
            <div className="hero-content-section">
              <h1 style={{ marginBottom: "-2%" }}>Revealing the</h1>
              <h1 style={{ marginBottom: "-2%" }}>Treasures of the</h1>
              <h1>Universe</h1>
              <p>
                Explore the wonders of Mars with our latest discoveries and
                insights. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sed, quae magnam explicabo doloremque doloremque
                voluptatibus voluptas dolore, quidem, quia voluptate asperiores!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati iste quia dicta
              </p>

              <div style={{ display: "flex", marginTop: "5%" }}>
                <button className="hero-button-1">Get Started</button>
                <button className="hero-button-2">Watch The Video</button>
              </div>
            </div>
          </div>

          <div className="hero-human-img">
            <img src={Astronot} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
