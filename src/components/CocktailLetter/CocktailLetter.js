import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CocktailLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  console.log("alphabet :>> ", alphabet);

  return (
    <div>
      <h4 className="title" style={{ fontSize: "30px" ,marginLeft:'5%', marginTop: '30px'}}>
          <span >Cocktail Letter</span>
      </h4>
      <div className="lettersLink">
        {alphabet &&
          alphabet.map((letter,index) => {
            return <Link key={index} to={`/CocktailsByLetter/${letter}`} className="letterLink">{letter}</Link>;
            })}
      </div>
    </div>
  );
};

export default CocktailLetter;
