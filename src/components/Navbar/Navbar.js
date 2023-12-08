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

        <div class="nav-wrapper">
          <div class="grad-bar"></div>
          <nav class="navbar">
            <img
              src=""
              alt="Company Logo"
            />
            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="nav no-search">
              <li class="nav-item">
                <a href="#">Home</a>
              </li>
              <li class="nav-item">
                <a href="#">About</a>
              </li>
              <li class="nav-item">
                <a href="#">Work</a>
              </li>
              <li class="nav-item">
                <a href="#">Careers</a>
              </li>
              <li class="nav-item">
                <a href="#">Contact Us</a>
              </li>
              <i class="fas fa-search" id="search-icon"></i>
              <input class="search-input" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
