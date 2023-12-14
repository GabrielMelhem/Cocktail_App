import React from "react";
import { useState } from "react";
import CocktailInput from "../CocktailInput/CocktailInput.js";
import DrinkCard from "../DrinkCard/DrinkCard.js";

const CocktailsByName = () => {
  const [selectedCocktail, setSelectedCocktail] = useState("");
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
    <>
      <h4 className="title" style={{ fontSize: "30px" ,marginLeft:'5%', marginTop: '30px'}}>
          <span >Cocktail Name</span>
      </h4>

      <CocktailInput style={{ width: "40%"}}
        cocktailSelection={cocktailSelection}
        selectedCocktail={selectedCocktail}
        setSelectedCocktail={setSelectedCocktail}
      />
      {cocktailData &&
        cocktailData.map((drink) => {
          return (
            <p
              key={drink.idDrink}
              style={{ display: "inline-flex", padding: "40px" }}
            >
              {<DrinkCard drink={drink} />}
            </p>
          );
        })}
    </>
  );
};

export default CocktailsByName;
