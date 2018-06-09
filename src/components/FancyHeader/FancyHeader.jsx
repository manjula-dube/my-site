import styled from "react-emotion";

export const FancyH1 = styled("h1")`
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-left: 10px;
  position: relative;
  margin-bottom: 10px;
  font-family: 'Contrail One', sans-serif;
  text-transform: uppercase;
  transition: transform 200ms;
  transform: skewX(0deg) skewY(0.1deg);

  :before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: -5px;
    bottom: -10px;
    background-color: #5e35b1;
    opacity: 0.6;
    border-radius: 50%;
    z-index: -2;
  }

  &:hover {
    transition: transform 200ms;
    transform: skewX(4deg) skewY(-4deg);
  }
`;

export const FancyH2 = styled(`h2`)`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;

  :before {
    content: "";
    width: 90%;
    height: 15px;
    position: absolute;
    left: -10px;
    bottom: -5px;
    background-color: #5e35b1;
    opacity: 0.6;
    z-index: -2;
  }
`;
