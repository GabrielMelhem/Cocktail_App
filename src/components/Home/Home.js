import { useState } from "react";

import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeDesc,
  HomeBtn,
} from "./style.js";

import About from "../About";
import Footer from "../Footer/Footer";
import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailInput from "../CocktailInput.js";

function Home() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktailData, setCocktailData] = useState([]);

  const fetchCocktailByName = async (cocktailName) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      const data = await response.json();
      console.log("Get Data", data);
      setCocktailData(data.drinks);
      console.log("cocktail Data", cocktailData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const cocktailSelection = (e) => {
    e.preventDefault();
    setSelectedCocktail(e.target.value);
    fetchCocktailByName(selectedCocktail);
    console.log("cocktail selected", selectedCocktail);
  };

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

      <div>
        <CocktailCategory />
      </div>
      <div>
        <CocktailInput
          cocktailSelection={cocktailSelection}
          selectedCocktail={selectedCocktail}
          setSelectedCocktail={setSelectedCocktail}
        />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
