import React, { useEffect } from 'react'
import { useState } from 'react'

const CocktailsByCategory = ({cocktailsCategory}) => {
  const [Drinks, setDrinks]=useState([]);

  const fetchCocktailsByCategory = async () =>{
    try {
        const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cocktailsCategory}`);
        const data=await response.json();
        console.log('Cocktails By Category', data)
        setDrinks(data);
        console.log('Cocktails By Category',Drinks)
    } catch (error) {
        console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCocktailsByCategory();
  });

  return (
    <div>CocktailsByCategory</div>
  )
}

export default CocktailsByCategory