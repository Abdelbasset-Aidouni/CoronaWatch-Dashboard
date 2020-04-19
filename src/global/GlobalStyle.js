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
  /* .leaflet-tile {
    -webkit-filter: hue-rotate(180deg) invert(100%);
  } */
`;



export default GlobalStyle;