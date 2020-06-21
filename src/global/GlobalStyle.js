import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    
  }
  html body .leaflet-container{
    height:100%;
    background: #cbcbcb !important;
  }
  .leaflet-tile{
    background: #cbcbcb !important;
    
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button
  {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number]
  {
    -moz-appearance: textfield;
  }
  /* .leaflet-tile {
    -webkit-filter: hue-rotate(180deg) invert(100%);
  } */

  label.error{
    display:block;
    font-size:.725rem;
    color:red;
    margin-left:1rem;
  }
`;



export default GlobalStyle;