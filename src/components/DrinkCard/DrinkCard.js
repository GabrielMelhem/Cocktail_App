import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';


const DrinkCard = (drink) => {
  return (
    <div className="drinkCard">
      <Card border="secondary" style={{ width: "18rem", padding: "20px" }}>
        <Card.Img
          variant="top"
          width="150rem"
          src={drink.drink.strDrinkThumb}
        />
        <Card.Body>
          {/* <Card.Title >{drink.drink.strDrink}</Card.Title> */}
          <Button variant="primary">
            {
              <Link style={{color: "#fff", textDecoration: 'none'}} to={`/DrinksDetails/${drink.drink.idDrink}`}>
                {drink.drink.strDrink}
              </Link>
            }
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DrinkCard;
