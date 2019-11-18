import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body{
    font-family : "yg-jalnan", serif;
    margin : 0;
    padding : 0;
    height: 100%;
  }
`;

export default GlobalStyle;
