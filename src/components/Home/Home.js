import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailsByName from "../CocktailsByName/CocktailsByName.js";
import Footer from "../Footer/Footer";
import CocktailLetter from "../CocktailLetter.js";

function Home() {
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
