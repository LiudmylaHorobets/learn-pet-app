import { createGlobalStyle } from 'styled-components';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoItalic from '../assets/fonts/Roboto-Italic.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-white: #ffffff;
    --primary-black: #121417;
    --primary-light-pink: #F2C0BD;
    --primary-yellow: #F4C550;

    --secondary-dark-pink: #E0A39A;
    --secondary-light-yellow: #FFDC86;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url(${RobotoBold}) format('truetype');
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular}) format('truetype');
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${RobotoMedium}) format('truetype');
  } 
  
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url(${RobotoItalic}) format('truetype');
  }

  
 body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 16px;
  }

  /* RESET */

 * {
  box-sizing: border-box;
  margin: 0;
}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  input:hover,
  input:focus {
    outline: none;
  }

  button {
    font-family: 'Roboto';
    border: none;
    outline: none;
  }
`;
