import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoSlack,
} from "react-icons/io5";
import { FaPhone, FaFax, FaEnvelope, FaHome } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a
            href="https://github.com/GabrielMelhem/Cocktail_App"
            className="me-4 text-reset"
          >
            <IoLogoGithub color="#211F1F" size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-melhem-9b714821a/"
            className="me-4 text-reset"
          >
            <IoLogoLinkedin color="#0077B5" size={40} />
          </a>
          <Link to="" className="me-4 text-reset">
            <IoLogoFacebook color="#3b5998" size={40} />
          </Link>
          <Link to="" className="me-4 text-reset">
            <IoLogoSlack color="#4A154B" size={40} />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Cocktail</h6>
              <p>Cocktail Provide you all the Drinks around the world.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/Alcoholic" className="text-reset">
                  Alcoholic
                </Link>
              </p>
              <p>
                <Link to="/Non_Alcoholic" className="text-reset">
                  Non Alcoholic
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact us
                </Link>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome size={15} className="me-3" color="secondary" />
                 Paulsborner Str. 88, 10709 Berlin
              </p>
              <p>
                <FaEnvelope size={13} className="me-3" color="secondary" />
                Gabrielmelhem@gmail.com
              </p>
              <p>
                <FaPhone size={13} className="me-3" color="secondary" />+ 01 234
                567 88
              </p>
              <p>
                <FaFax size={13} className="me-3" color="secondary" />+ 01 234
                567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <Link className="text-reset fw-bold" to="https://www.linkedin.com/in/gabriel-melhem-9b714821a/">
          Gabriel
        </Link>
      </div>
    </MDBFooter>
  );
}

export default Footer;
