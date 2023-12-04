import './App.css';
import { useState } from "react";
import CocktailSelect from './components/CocktailSelect';

function App() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktailData, setCocktailData] = useState(null);

  const fetchCocktail= async (cocktailName) => {
    console.log("selectedCocktail",selectedCocktail)
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito`
        //  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      const data = await response.json();
      console.log("Get Data", data);
      setCocktailData(data);
      console.log("CocktailData", cocktailData)
    } catch (error) {
      console.log("error", error);
    }
  }


  const cocktailSelection = (e) => {
    e.preventDefault();
    setSelectedCocktail(e.target.value);
    fetchCocktail(selectedCocktail);
  }

  return (
    <div className="App">
      Your Cocktail
      <CocktailSelect cocktailSelection={cocktailSelection} selectedCocktail={selectedCocktail} setSelectedCocktail={selectedCocktail}/>
    </div>
  );
}

export default App;
