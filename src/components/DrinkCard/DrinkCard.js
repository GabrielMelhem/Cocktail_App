import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DrinksDetails from "../../pages/DrinksDetails";
import { Link } from "react-router-dom";


const DrinkCard = (drink) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBtnClick = () => {
    setIsClicked(true);
  };
  return (
    <div className="drinkCard">
      <Card style={{ width: "18rem",padding:"20px"}}>
        <Card.Img
          variant="top"
          width="150rem"
          src={drink.drink.strDrinkThumb}
        />
        <Card.Body>
          <Card.Title>{drink.drink.strDrink}</Card.Title>
          <Button variant="primary" onClick={handleBtnClick}>
            Go somewhere
          </Button>
          {/* {isClicked && <DrinksDetails idDrink={drink.drink.idDrink}/>} */}
          {isClicked && <Link to="/DrinksDetails">DrinksDetails</Link>}
          {/* {isClicked && <Link to="/DrinksDetails" params={{idDrinkParameter: drink.drink.idDrink}}>DrinksDetails</Link>} */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default DrinkCard;
