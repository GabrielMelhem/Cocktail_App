import React from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import DrinkCard from '../components/DrinkCard/DrinkCard';
import CocktailLetter from './CocktailLetter.js';

const CocktailsByLetter = () => {
  
  const [cocktailsData, setCocktailsData] = useState([]);
  const {selectedLetter} = useParams();
  console.log('selectedLetter: ', selectedLetter);

  const fetchCocktailByLetter = async (letter) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${selectedLetter}`
      );
      const data = await response.json();
      console.log("Get Data", data.drinks);
      setCocktailsData(data.drinks);
      console.log("cocktail Data", cocktailsData);
    } catch (error) {
      console.log("error", error);
    }
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