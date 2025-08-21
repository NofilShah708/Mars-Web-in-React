import React from "react";
import "../assets/stylesheets/Footer.css"; // Assuming you have a CSS file for styling
import logo from "../assets/images/aldkal.JPG"; // Replace with your logo image path

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-inner">
          <img src={logo} alt="" />
          <div className="footer-content">
            {" "}
            <p>contact@marsexplorer.com</p> <p>Privacy Policy</p>{" "}
            <p>Terms & Conditions</p>{" "}
          </div>
        </div>
      </div>
      <div className="footer-container-content">
        {" "}
        <p>@2023 MARS EXPLORER</p>
      </div>
    </>
  );
};

export default Footer;
