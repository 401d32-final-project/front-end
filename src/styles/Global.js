import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  @import url('https://fonts.googleapis.com/css?family=Ruslan+Display');
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 100.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Permanent Marker';
  }
`;

export default GlobalStyles;