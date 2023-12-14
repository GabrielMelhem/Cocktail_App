import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailsByName from "../CocktailsByName/CocktailsByName.js";
import Footer from "../Footer/Footer";
import CocktailLetter from "../CocktailLetter/CocktailLetter.js";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { app } from "../../config/firebaseConfig";
import { AuthContext } from "../../context/AuthContext";
import {userTitle,Span} from './style.js';

function Home() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Subscribe Home to the context
  const { user } = useContext(AuthContext);
  console.log(app);

  return (
    <>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src="images/home12.jpg" className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>Cocktail provide you</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src="images/home1.jpg" className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>The all Informations about Drinks and Cocktails</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src="images/home7.jpg" className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h5>around the World.</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      <userTitle>
        <Span style={{ left: `${position}px` , marginTop:'800px'}}>
          Welcome {user ? user.email : " Gast"} to Cocktail App
        </Span>
      </userTitle>

      <div className="categorySection">
        <CocktailCategory />
      </div>

      <div className="cocktailByNameSection">
        <CocktailsByName />
      </div>

      <div className="cocktailLetterSection">
        <CocktailLetter />
      </div>

      <Footer />
    </>
  );
}

export default Home;
