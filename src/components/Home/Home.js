import { useState } from 'react';

import { HomeSection, HomeInformation, HomeTitle, HomeDesc, HomeBtn } from './style.js'

import About from "../About";
import Footer from "../Footer/Footer";
import CocktailCategory from "../CocktailCategory/CocktailCategory.js";
import CocktailsByCategory from "../CocktailsByCategory.js";

function Home() {
  //const [category, setCategory]=useState('Alcoholic')
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

      <CocktailCategory />
      <div>
        {/* <CocktailsByCategory cocktailsCategory={category} /> */}
        
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
