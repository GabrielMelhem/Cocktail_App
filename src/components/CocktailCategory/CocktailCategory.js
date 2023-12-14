import React from "react";
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

  return (
    <CategorySection>
      {/* <div className="container"> */}
        <h4 className="title" style={{ fontSize: "30px" ,marginLeft:'5%', marginTop: '30px'}}>
          <span >Cocktail Category</span>
        </h4>
        <CategoryPart first="1">
          <PartTitle><Link to="/Alcoholic" style={{ textDecoration: "none" , color:"gray", margin: '0'}}>AlCoholic</Link></PartTitle>
          <PartLine />
          <PartDesc>
            Explore all the Drinks and Cocktails, that contain alcohol.
          </PartDesc>
        </CategoryPart>

        <CategoryPart>
          <PartTitle><Link to="/Non_Alcoholic" style={{ textDecoration: "none", color:"gray" }}>Non AlCoholic</Link></PartTitle>
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
