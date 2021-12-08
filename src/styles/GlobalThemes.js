import { createGlobalStyle } from 'styled-components';
import rockin_soda from '../fonts/Rockinsoda.otf';
export const GlobalStyles = createGlobalStyle`

@font-face {
font-family: 'Rockinsoda';
src: url(${rockin_soda}) format('otf');
}


html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  cursor: none;
}

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.font.family.mainFont};
  font-size: ${props => props.theme.font.size.medium};
 
}


a {
  text-decoration: none;
  cursor: pointer;

}

ul {
  list-style-type: none;
}

li {
  list-style-type: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

h1, h2, h3 {
  line-height: 1;
  -webkit-font-smoothing: antialiased;

}

 `;
