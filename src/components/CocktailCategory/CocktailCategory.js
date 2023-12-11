import React from "react";
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import {
  CategorySection,
  CategoryTitle,
  Span,
  CategoryPart,
  PartTitle,
  PartLine,
  PartDesc,
} from "./style.js";


function CocktailCategory() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => prevPosition + 1); 
    }, 50); 

    return () => clearInterval(interval);
  }, []);
  return (
    <CategorySection>
      {/* <div className="container"> */}
        <CategoryTitle>
          <Span style={{ left: `${position}px` }}>Cocktail Category</Span> 
        </CategoryTitle>
        <CategoryPart first="1">
          <PartTitle><Link to="/Alcoholic" style={{ textDecoration: "none" }}>AlCoholic</Link></PartTitle>
          <PartLine />
          <PartDesc>
            Explore all the Drinks and Cocktails, that contain alcohol.
          </PartDesc>
        </CategoryPart>

        <CategoryPart>
          <PartTitle><Link to="/Non_Alcoholic" style={{ textDecoration: "none" }}>Non AlCoholic</Link></PartTitle>
          <PartLine />
          <PartDesc>
          Explore all the Drinks and Cocktails, that don't contain alcohol.
          </PartDesc>
        </CategoryPart>
      {/* </div> */}
    </CategorySection>
  );
}

export default CocktailCategory;
