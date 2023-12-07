import React from "react";
import { useState } from "react";
import CocktailInput from "./CocktailInput.js";
import DrinkCard from '../components/DrinkCard/DrinkCard';

const CocktailsByName = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktailData, setCocktailData] = useState([]);

  const fetchCocktailByName = async (cocktailName) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      const data = await response.json();
      console.log("Get Data", data.drinks);
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
    <div>
      CocktailsByName
      <CocktailInput
        cocktailSelection={cocktailSelection}
        selectedCocktail={selectedCocktail}
        setSelectedCocktail={setSelectedCocktail}
      />
      {cocktailData &&
        cocktailData.map((drink) => {
          return <li key={drink.idDrink}>{<DrinkCard drink={drink} />}</li>;
        })}
    </div>
  );
};

export default CocktailsByName;
