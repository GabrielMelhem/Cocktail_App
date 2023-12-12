import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="page-wrapper">
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
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Alcoholic">Alcoholic</Link>
            </li>
            <li className="nav-item">
              <Link to="/Non_Alcoholic">Non Alcoholic</Link>
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
