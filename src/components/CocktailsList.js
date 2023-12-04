import React from "react";
import CocktailCard from "./CocktailCard";

const CocktailsList = ({ cocktailsData }) => {
  return (
    <div>
      {cocktailsData &&
        cocktailsData.map((cocktail, index) => {
          console.log("drinks", cocktail.strDrink);
          return <CocktailCard key={index} cocktail={cocktail[index].strDrink} />;
        })}
    </div>
  );
};

export default CocktailsList;
