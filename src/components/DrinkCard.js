import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DrinksDetails from "../pages/DrinksDetails";
import { Link} from 'react-router-dom';

const DrinkCard = (drink) => {
  const [isClicked,setIsClicked]=useState(false);
  
  const handleBtnClick =()=>{
    setIsClicked(true);    
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" width="150rem" src={drink.drink.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{drink.drink.strDrink}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleBtnClick}>Go somewhere</Button>
        {/* {isClicked && <DrinksDetails idDrink={drink.drink.idDrink}/>} */}
        {isClicked && <Link to="/DrinksDetails">DrinksDetails</Link>}
        {/* {isClicked && <Link to="/DrinksDetails" params={{idDrinkParameter: drink.drink.idDrink}}>DrinksDetails</Link>} */}
      </Card.Body>
    </Card>
  );
};

export default DrinkCard;
