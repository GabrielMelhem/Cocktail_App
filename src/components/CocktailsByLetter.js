import React from 'react'
import { useState } from "react";
import CocktailInput from "./CocktailInput.js";
import DrinkCard from '../components/DrinkCard/DrinkCard';

const CocktailsByLetter = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [cocktailsData, setCocktailsData] = useState([]);

  const fetchCocktailByLetter = async (letter) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data = await response.json();
      console.log("Get Data", data.drinks);
      setCocktailsData(data.drinks);
      console.log("cocktail Data", cocktailsData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const letterSelection = () => {
    
  };

  return (
    <div>CocktailsByLetter
      {cocktailsData &&
        cocktailsData.map((drink) => {
          return <li key={drink.idDrink}>{<DrinkCard drink={drink} />}</li>;
        })}
    </div>
  )
}

export default CocktailsByLetter