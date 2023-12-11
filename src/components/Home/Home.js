import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeDesc,
  HomeBtn,
} from "./style.js";

import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailsByName from "../CocktailsByName.js";
import Footer from "../Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import CocktailLetter from "../CocktailLetter.js";

function Home() {
  
  return (
    <>
      {/* <HomeSection>
        <div className="container">
          <HomeInformation>
            <HomeTitle>Your Cocktail</HomeTitle>
            <HomeDesc>
              Your Cocktail provide you Drinks and Cocktail around the World.
            </HomeDesc>
            <HomeBtn>Let's Begain</HomeBtn>
          </HomeInformation>
        </div>
      </HomeSection> */}

<HomeSection>
        <div className="container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/home12.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/home1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/home7.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      </HomeSection>
      <div className="categorySection">
        <CocktailCategory />
      </div>

      <div className="cocktailByNameSection">
        <CocktailsByName />
      </div>

      <div className="cocktailLetterSection">
        <CocktailLetter />
      </div>

      {/* <About /> */}
      <Footer />
    </>
  );
}

export default Home;
