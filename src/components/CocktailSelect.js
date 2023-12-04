import React from "react";

function CocktailSelect({cocktailSelection,selectedCocktail,setSelectedCocktail}) {
  return (
    <div>
      <form onSubmit={cocktailSelection}>
        <input
          type="text"
          placeholder="Search for a Cocktail"
          id="cocktailInput"
          value={selectedCocktail}
          onChange={setSelectedCocktail}
        />
        <button>search</button>
      </form>
    </div>
  );
}

export default CocktailSelect;
