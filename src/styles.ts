import styled, { createGlobalStyle } from "styled-components"
import UbuntuRegular from "./assets/fonts/Ubuntu-Regular.ttf"
import UbuntuMedium from "./assets/fonts/Ubuntu-Medium.ttf"
import UbuntuBold from "./assets/fonts/Ubuntu-Bold.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu-Regular"),
    url(${UbuntuRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu-Medium"),
    url(${UbuntuMedium}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: "Ubuntu";
    src: local("Ubuntu-Bold"),
    url(${UbuntuBold}) format('truetype');
    font-weight: 700;
  }

  html {
    font-family: "Ubuntu", sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  body {
    background-color: #f0f6ff;
  }
`

export const AppStyled = styled.div`
  max-width: 940px;
  margin: 105px auto;
  padding: 1rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 4px 4px 20px -10px rgba(2,42,90,0.5);

  @media (orientation: portrait) {
    margin: 100px 1rem;
    border-radius: 10px;
  }
`