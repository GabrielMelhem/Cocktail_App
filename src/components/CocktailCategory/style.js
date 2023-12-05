import styled from "styled-components";

export const CategorySection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;
export const CategoryTitle = styled.h2`
  font-size: 60px;
`;
export const Span = styled.span`
  font-weight: normal;
`;
export const CategoryPart = styled.div`
  margin-top: 20px;
  width: 43%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  background: url(${props=>props.first === "1"
    ? "images/Alcoholic.jpg"
    : "images/Non_Alcoholic.jpg"});
`;
export const PartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;
export const PartLine = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
export const PartDesc = styled.p`
  font-size: 14px;
  color: black;
  padding: 20px;
`;
