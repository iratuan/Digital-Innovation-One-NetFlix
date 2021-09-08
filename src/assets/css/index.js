import { createGlobalStyle } from "styled-components";
import { preto, vermelho } from "./variaveis";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }

  body, input, button {
    background: ${preto};
    font: 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

`;