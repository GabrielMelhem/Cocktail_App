import React, { useEffect, useCallback } from 'react'
import { useState } from 'react'

const CocktailsByCategory = ({cocktailsCategory}) => {
  const [drinks, setDrinks]=useState([]);

  // const fetchCocktailsByCategory = useCallback(
  //   async () =>{
  //     try {
  //       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cocktailsCategory}`);
        
  //         const data=await response.json();
  //         console.log('Cocktails By Category', data)
  //         setDrinks(data);
  //         console.log('Cocktails By Category',Drinks)
  //     } catch (error) {
  //         console.log("error", error);
  //     }
  //   },
  //   [Drinks],
  // )
    ;
  const fetchCocktailsByCategory = 
    async () =>{
      try {
        
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cocktailsCategory}`);
        
          const data=await response.json();
          console.log('data', data)
          setDrinks(data.drinks);
          console.log('Cocktails By Category',drinks)
      } catch (error) {
          console.log("error", error);
      }
    }
  

  useEffect(() => {
    fetchCocktailsByCategory();
  },[]);

  return (
    <div>
      <h1>CocktailsByCategory</h1>
      {drinks && drinks.map((drink) => {
        
        return <p key={drink.idDrink}>{drink.strDrink}</p>
      })}
    </div>
  )
}

export default CocktailsByCategory