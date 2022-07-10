import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    font-family: var(--fonts);
  }

  body {
    background-color: #D8D8D8;
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-family: Montserrat;
    text-align: center;
    font-weight: 700;
  }

  p, h1, h2, h3, h4, h4 {
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
