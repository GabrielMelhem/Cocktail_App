import React, { useState ,useEffect,useParams} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const DrinksDetails = () => {
  const [details,setDetails]=useState([]);
  // const idDrinkParameter = useParams();
  // console.log('idDrinkParameter: ', idDrinkParameter);

  const fetchDrinkDetails = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14610`
      );

      const data = await response.json();
      console.log("data", data);
      setDetails(data.drinks);
      console.log("Drink Details", details);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDrinkDetails();
  }, []);

  return (
    <div>DrinksDetails
      {details &&
        details.map((detail) => {
          return (
            <ListGroup key={detail.idDrink}>
              <ListGroup.Item>Name: {detail.strDrink}</ListGroup.Item>
              <ListGroup.Item>Instructions: {detail.strInstructions}</ListGroup.Item>
              <ListGroup.Item>strIngredients: {detail.strIngredient1} {detail.strIngredient2} {detail.strIngredient3}</ListGroup.Item>
              <ListGroup.Item>Measure: {detail.strMeasure1} {detail.strMeasure2} {detail.strMeasure3}</ListGroup.Item>
            </ListGroup>
          );
        // <p key={detail.idDrink}>{detail.strInstructions}</p>;
        })}
    </div>
  )
}

export default DrinksDetails