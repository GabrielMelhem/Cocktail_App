import React from 'react'

const CocktailInput = ({cocktailSelection,selectedCocktail,setSelectedCocktail}) => {
  return (
    <form onSubmit={cocktailSelection}>
        <input type="text" placeholder="Search for a Cocktail..." id="cocktailInput" value={selectedCocktail} onChange={(e)=>setSelectedCocktail(e.target.value)}/>
        <button>Search</button>
    </form>
  )
}

export default CocktailInput