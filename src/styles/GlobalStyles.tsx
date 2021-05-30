import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyles;
