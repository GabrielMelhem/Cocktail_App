import React from "react";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ cocktailData }) => {
  return (
    <div>
      {cocktailData &&
        cocktailData.map((cocktail, index) => {
          console.log("drink", cocktail.strDrink);
          return <CocktailCard key={index} cocktail={cocktail} />;
        })}
    </div>
  );
};

export default CocktailList;
