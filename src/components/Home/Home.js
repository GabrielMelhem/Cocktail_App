
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeDesc,
  HomeBtn,
} from "./style.js";

import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailsByName from "../CocktailsByName.js";
import SocialMedia from "../SocialMedia/SocialMedia.js";
import About from "../About";
import Footer from "../Footer/Footer";

function Home() {
  
  return (
    <>
      <HomeSection>
        <div className="container">
          <HomeInformation>
            <HomeTitle>Your Cocktail</HomeTitle>
            <HomeDesc>
              Your Cocktail provide you Drinks and Cocktail around the World.
            </HomeDesc>
            <HomeBtn>Let's Begain</HomeBtn>
          </HomeInformation>
        </div>
      </HomeSection>

      <div className="categorySection">
        <CocktailCategory />
      </div>

      <div className="cocktailByNameSection">
        <CocktailsByName />
      </div>

      <About />
      {/* <SocialMedia /> */}
      <Footer />
    </>
  );
}

export default Home;
