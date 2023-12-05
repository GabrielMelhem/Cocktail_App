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
      <div className="container">
        <CategoryTitle>
          <Span>Cocktail</Span> Category
        </CategoryTitle>
        <CategoryPart first="1">
          <PartTitle><Link to="/Alcoholic">AlCoholic</Link></PartTitle>
          <PartLine />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </CategoryPart>

        <CategoryPart>
          <PartTitle><Link to="/Non_Alcoholic">Non_AlCoholic</Link></PartTitle>
          <PartLine />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </CategoryPart>
      </div>
    </CategorySection>
  );
}

export default CocktailCategory;
