import { createGlobalStyle } from "styled-components";
import DMMonoMedium from "../assets/fonts/dm-mono/DMMono-Medium.ttf";
import DMMonoRegular from "../assets/fonts/dm-mono/DMMono-Regular.ttf";
import DMSans from "../assets/fonts/dm-sans/DMSans-VariableFont_opsz,wght.ttf";
import FrauncesItalic from "../assets/fonts/fraunces/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf";
import FrauncesVariable from "../assets/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DM Mono";
    src: url(${DMMonoRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Mono";
    src: url(${DMMonoMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url(${DMSans}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fraunces";
    src: url(${FrauncesItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    font-variation-settings:
    "SOFT" 0,
    "WONK" 0;
  }

  @font-face {
    font-family: "Fraunces";
    src: url(${FrauncesVariable}) format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    font-variation-settings:
    "SOFT" 0,
    "WONK" 0;
  }
`;
