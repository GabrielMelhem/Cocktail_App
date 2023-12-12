import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CocktailLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  console.log("alphabet :>> ", alphabet);

  return (
    <div>
      <h2
        className="title"
        style={{ fontSize: "40px", marginLeft: "5%", marginTop: "40px" }}
      >
        <span>Search By Letter</span>
      </h2>
      <div className="lettersLink">
        {alphabet &&
          alphabet.map((letter) => {
            return <Link  to={`/CocktailsByLetter/${letter}`} className="letterLink">{letter}</Link>;
            })}
      </div>
    </div>
  );
};

export default CocktailLetter;
