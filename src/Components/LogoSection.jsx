import React from "react";
import "../assets/stylesheets/LogoSection.css"; // Assuming you have a CSS file for styling
import LogoList from "../assets/images/be311559-9a46-471e-a826-e72eb2ea5dde.png"; // Assuming you have a list of logos in this file

const LogoSection = () => {
  return (
    // <!-- Logos Section -->
    <div className="logos-container">
      <div className="logo-img-container">
        <img src={LogoList} alt="" />
      </div>
    </div>
  );
};

export default LogoSection;
