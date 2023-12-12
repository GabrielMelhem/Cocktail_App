import React from 'react'
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import DrinkCard from '../components/DrinkCard/DrinkCard';
import Footer from "./Footer/Footer";

const CocktailsByLetter = () => {
  
  const [cocktailsData, setCocktailsData] = useState([]);
  const {selectedLetter} = useParams();
  console.log('selectedLetter: ', selectedLetter);

  const fetchCocktailByLetter = async () => {
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

  useEffect(() => {
    fetchCocktailByLetter();
  }, []);

  return (
    <>
    <div>
      {cocktailsData &&
        cocktailsData.map((drink) => {
          return <p key={drink.idDrink} style={{display: 'inline-flex', padding:'40px'}}>{<DrinkCard drink={drink} />}</p>;
        })}
    </div>
    <Footer />
    </>
  )
}

export default CocktailsByLetter