import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdb-react-ui-kit";

const DrinkCard = (drink) => {
  return (
    <>
      <MDBCard className="h-100" border="secondary" style={{ width: "18rem", padding: "20px" }}>
        <MDBCardImage
          variant="top"
          src={drink.drink.strDrinkThumb}
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'15px'}}>{drink.drink.strDrink}</MDBCardTitle>
          <MDBCardText>
               <Link
               style={{ color: "gray", textDecoration: "none" }}
                 to={`/DrinksDetails/${drink.drink.idDrink}`}
               >
                More Info
               </Link>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className="text-muted">Last updated 3 mins ago</small>
        </MDBCardFooter> 
      </MDBCard>
    </>
  );
};

export default DrinkCard;
