import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
  padding: 0;
  margin: 0;
  outline: none;
  border: 0px;
  box-sizing: border-box;
}
html{
 font-size:62.5%;
}
body {
    font-family: 'Spartan', sans-serif;
    font-size: 1.6rem;
    background-color:${(props) => props.theme.bodyBackgroundColor};
    transition: background-color 0.2s 
    /* Bug: transition gives a flash affect on first load in dark theme */
}
`;
export default GlobalStyles;
