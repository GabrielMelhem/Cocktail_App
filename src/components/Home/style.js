import styled from "styled-components";

export const HomeSection = styled.div`
    height: 500px;
    background: url('images/home12.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`


export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #fff;
`

export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 20px;
`
   

export const HomeBtn = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: #fff;
        color: #eb5424;
    }
` 


