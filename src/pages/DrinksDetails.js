import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const DrinksDetails = () => {
  const [details, setDetails] = useState([]);
  const { idDrink } = useParams();
  console.log("idDrinkParameter: ", idDrink);

  const fetchDrinkDetails = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
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
    <div>

      {details &&
        details.map((detail) => {
          return (
            <MDBRow>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Name</p>
                        <p className="text-muted mb-0">{detail.strDrink}</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Category</p>
                        <p className="text-muted mb-0">{detail.strCategory}</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Alcoholic</p>
                        <p className="text-muted mb-0">
                        {detail.strAlcoholic}
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Instructions</p>
                        <p className="text-muted mb-0">
                        {detail.strInstructions}
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Ingredients</p>
                        <p className="text-muted mb-0">
                        {detail.strIngredient1}, {detail.strIngredient2}, {detail.strIngredient3}, {detail.strIngredient4}, {detail.strIngredient5}
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Measure</p>
                        <p className="text-muted mb-0">{detail.strMeasure1}, {detail.strMeasure2}, {detail.strMeasure3},{detail.strMeasure4},{detail.strMeasure5}</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src={detail.strDrinkThumb}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Last updated</p>
                        <p className="text-muted mb-0">{detail.dateModified}</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          );
        })}
    </div>
  );
};

export default DrinksDetails;
