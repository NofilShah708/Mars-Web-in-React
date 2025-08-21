import React, { useState } from "react";
import "../assets/stylesheets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-orange">MARS</span>
        <span className="logo-black">EXPLORER</span>
      </div>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>

        <div
          className="navbar-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-toggle">
            Adventure <span className="dropdown-arrow">&#9662;</span>
          </span>
          {dropdownOpen && (
            <div
              className="dropdown-menu"
              style={{ display: "block", width: "160px" }}
            >
              <Link to="/mission-data">Mission Data</Link>
              <Link to="/technical-role">Technical Role</Link>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="navbar-btn1"
          style={{ color: "white", width: "150px", textAlign: "center" }}
        >
          Join US
        </Link>
      </div>
      <div
        className={`navbar-hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
