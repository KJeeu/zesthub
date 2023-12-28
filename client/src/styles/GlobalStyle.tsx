import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;