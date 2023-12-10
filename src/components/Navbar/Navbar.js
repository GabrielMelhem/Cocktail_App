import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
} from "./style.js";
import "./navBar.css";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        {/* <Logo>
                <LogoText>Cocktail</LogoText>
            </Logo>
  
            <UlList>
                <ListItem><Link to='/'>Home</Link></ListItem>
                <ListItem><Anchor to='/about'>About</Anchor></ListItem>
                <ListItem><Link to='/Alcoholic'>Alcoholic</Link></ListItem>
                <ListItem><Link to='/Non_Alcoholic'>Non_Alcoholic</Link></ListItem>
                <ListItem><Link to='/contact'>contact</Link></ListItem>
            </UlList> */}

        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <img
              src=""
              alt="Company Logo"
            />
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
                <a href="/Non_Alcoholic">Non_Alcoholic</a>
              </li>
              <li className="nav-item">
                <a href="/contact">Contact Us</a>
              </li>
              <i className="fas fa-search" id="search-icon"></i>
              <input className="search-input" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
