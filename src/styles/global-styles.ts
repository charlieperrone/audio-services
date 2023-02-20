import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Varela Round', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  h1, h2, h3 {
    font-family: 'Fredoka One'
  }
   
  h4, h5, h6 {
    font-family: 'Varela Round'
  }

  h1 {
    font-size: xx-large;
  }

  h2 {
    font-size: x-large;
  }

  h3 {
    font-size: large;
  }

  h4 {
    font-size: medium;
  }
`;
