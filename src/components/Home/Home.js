import { useState } from "react";
import CocktailSelect from "../CocktailSelect";
import CocktailsList from "../CocktailsList";

import {HomeSection,HomeInformation,HomeTitle,HomeDesc,HomeBtn} from './style.js'

import About from "../About";
import Footer from "../Footer/Footer";

function Home() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktailsData, setCocktailsData] = useState(null);

  const fetchCocktails = async (cocktailName) => {
    console.log("selectedCocktail", selectedCocktail);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito`
        //  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      const data = await response.json();
      console.log("Get Data", data);
      setCocktailsData(data);
      console.log("CocktailsData", cocktailsData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const cocktailSelection = (e) => {
    e.preventDefault();
    setSelectedCocktail(e.target.value);
    console.log("e", e.target.value);
    fetchCocktails(selectedCocktail);
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
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </div>
      </HomeSection>
      <div>
        
        <CocktailSelect
          cocktailSelection={cocktailSelection}
          selectedCocktail={selectedCocktail}
          setSelectedCocktail={selectedCocktail}
        />
        {cocktailsData && <CocktailsList cocktailsData={cocktailsData} />}
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
