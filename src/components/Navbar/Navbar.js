import React from "react";
import "./navBar.css";

const Navbar = () => {
  return (
    <div class="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <img src="images/logo.png" alt="Company Logo" />
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav no-search">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/Alcoholic">Alcoholic</a>
            </li>
            <li className="nav-item">
              <a href="/Non_Alcoholic">Non Alcoholic</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
  );
};

export default Navbar;
