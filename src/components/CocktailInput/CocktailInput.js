import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "./style.css";

const CocktailInput = ({
  cocktailSelection,
  selectedCocktail,
  setSelectedCocktail,
}) => {
  return (
    <div className="cocktailInput">
      <form onSubmit={cocktailSelection} className="cocktailForm">
        <MDBInput
          placeholder="Search for a Cocktail..."
          id="cocktailInput"
          type="text"
          value={selectedCocktail}
          onChange={(e) => setSelectedCocktail(e.target.value)}
        />
        <MDBBtn className="mx-2 sBtn" color="secondary">
          Search
        </MDBBtn>
      </form>
    </div>
  );
};

export default CocktailInput;
