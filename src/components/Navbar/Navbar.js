import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useContext } from "react";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  //   console.log("user :>> ", user);
  const user = true;
  const logoutUser = () => {
    logout();
  };
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
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="register">Register</Link> <Link to="login">Login</Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Button variant="danger" onClick={logoutUser}>
                  Logout
                </Button>
              ) : (
                <Button variant="info">Login</Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
