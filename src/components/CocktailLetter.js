import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CocktailLetter = () => {
   const [selectedLetter, setSelectedLetter] = useState();

  const letterSelection = (e) => {
    //  e.preventDefault();
    // console.log('e',e.target.textContent)
    const Letter = e.target.textContent;
    console.log('Letter',Letter)
    setSelectedLetter(Letter);
    console.log("selectedLetter1", selectedLetter);
  };
  return (
    <div>
      <div className="container">
      <h2 className="title" style={{fontSize: '60px'}}>
          <span>Search By Letter</span> 
      </h2>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        A
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        B
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        C
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        D
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        E
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        F
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        G
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        H
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        I
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        J
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        K
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        L
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        M
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        N
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        O
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        P
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        Q
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        R
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        S
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        T
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        U
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        V
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        W
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        X
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        Y
      </Link>
      <span> </span>
      <Link
        to={`/CocktailsByLetter/${selectedLetter}`}
        onClick={letterSelection}
      >
        Z
      </Link>
      </div>
    </div>
  );
};

export default CocktailLetter;
