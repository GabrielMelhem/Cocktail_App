import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdb-react-ui-kit";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState, useEffect } from 'react';

const DrinkCard = (drink) => {
  // const [currentTime, setCurrentTime] = useState(new Date());
  const [rating, setRating] = useState(0)

  // useEffect(() => {
  //   // Update the current time every second
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(interval);
  // }, []); // Empty dependency array to run this effect only once on mount


  return (
    <>
      <MDBCard className="h-100" border="secondary" style={{ width: "18rem", padding: "20px" }} >
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
          {/* <small className="text-muted">Time: {currentTime.toLocaleTimeString()}</small> */}
          <small className="text-muted"><Rating style={{ maxWidth: 130 }} value={rating} onChange={setRating} /></small>
        </MDBCardFooter> 
      </MDBCard>
    </>
  );
};

export default DrinkCard;
