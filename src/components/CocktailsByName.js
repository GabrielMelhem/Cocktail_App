import React from "react";
import { useState } from "react";
import CocktailInput from "./CocktailInput.js";
import DrinkCard from '../components/DrinkCard/DrinkCard';

const CocktailsByName = () => {
  const [selectedCocktail, setSelectedCocktail] = useState('');
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
      <div className="container">
        <h2 className="title" style={{fontSize: '60px'}}>
          <span>Search By Name</span> 
        </h2>
      
      <CocktailInput
        cocktailSelection={cocktailSelection}
        selectedCocktail={selectedCocktail}
        setSelectedCocktail={setSelectedCocktail}
      />
      {cocktailData &&
        cocktailData.map((drink) => {
          return <p key={drink.idDrink} style={{display: 'inline-flex', padding:'40px'}}>{<DrinkCard drink={drink} />}</p>;
        })}
        </div>
    </div>
  );
};

export default CocktailsByName;
