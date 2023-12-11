import React from "react";
import "./Footer.css";
import { IoLogoGithub , IoLogoFacebook,IoLogoLinkedin ,IoLogoSlack  } from 'react-icons/io5';

function Footer() {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Alcoholic">Alcoholic</a>
                </li>
                <li>
                  <a href="/Non_Alcoholic">Non Alcoholic</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://github.com/GabrielMelhem/Cocktail_App">
                <IoLogoGithub color="#211F1F" size={40} />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-melhem-9b714821a/">
                <IoLogoLinkedin color="#0077B5" size={40} />
                </a>
                <a href="#">
                <IoLogoFacebook color="#3b5998" size={40} />
                </a>
                <a href="#">
                <IoLogoSlack  color="#4A154B" size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
