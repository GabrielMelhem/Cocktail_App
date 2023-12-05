import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DrinkCard from "../components/DrinkCard";

function Alcoholic() {
  const location = useLocation();
  const urlCategory = location.pathname.slice(1);
  console.log("urlCategory", urlCategory);
  const [category, setCategory] = useState(urlCategory);
  // const urlParameter = useParams();
  // console.log('urlParameter :>> ', urlParameter);
  console.log("location :>> ", location.pathname);
  const [drinks, setDrinks] = useState([]);

  const fetchAlcoholicCocktails = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`
      );

      const data = await response.json();
      console.log("data", data);
      setDrinks(data.drinks);
      console.log("Alcoholic Cocktails", drinks);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAlcoholicCocktails();
  }, []);

  return (
    <div>
      Alcoholic
      {drinks &&
        drinks.map((drink) => {
          return <p key={drink.idDrink}>{<DrinkCard drink={drink} />}</p>;
        })}
    </div>
  );
}

export default Alcoholic;