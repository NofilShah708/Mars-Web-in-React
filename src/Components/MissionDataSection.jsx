import React, { useState } from "react";
import "../assets/stylesheets/MissionDataSection.css";
import MissionDataImg from "../assets/images/;adas.JPG";

const TABS = [
  { key: "mars", label: "Mars" },
  { key: "spaceStation", label: "Space Station" },
  { key: "moon", label: "Moon" },
];

const DATA = {
  mars: {
    text: "Venturing to Mars is a leap into the unknown, driven by a thirst for knowledge and a spirit of exploration...",
  },
  spaceStation: {
    text: "Venturing to Space Station is a leap into the unknown, driven by a thirst for knowledge and a spirit of exploration...",
  },
  moon: {
    text: "Venturing to Moon is a leap into the unknown, driven by a thirst for knowledge and a spirit of exploration...",
  },
};

const MissionDataSection = () => {
  const [activeTab, setActiveTab] = useState("mars");

  return (
    <>
      <div className="main-data-container">
        <div className="data-container">
          <h2>Mission Data</h2>
          <div className="tabs">
            {TABS.map((tab) => (
              <div
                key={tab.key}
                className={`tab${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
                style={{ cursor: "pointer" }}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div className="about-content" id="content">
            {TABS.map((tab) =>
              activeTab === tab.key ? (
                <div key={tab.key} id={tab.key} className="data">
                  <p className="tab-pera">{DATA[tab.key].text}</p>
                  <div className="data-item">
                    <strong>Diameter:</strong> 5,851 km / 2,240 mi
                  </div>
                  <div className="data-item">
                    <strong>Day Length:</strong> 78% of Earth
                  </div>
                  <div className="data-item">
                    <strong>Force of Gravity:</strong> 9,328 km / 8,231 mi
                  </div>
                  <div className="data-item">
                    <strong>Avg Distance from Earth:</strong> 238Mkm / 1122Mmi
                  </div>
                  <div className="data-item">
                    <strong>Age:</strong> 50 billion years
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="sm-about-main-container">
          <div className="sm-about-container">
            <img src={MissionDataImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionDataSection;
