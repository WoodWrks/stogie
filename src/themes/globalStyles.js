import { createGlobalStyle } from 'styled-components';

import ProximaNovaRegEOT from "../assets/fonts/proximanova/ProximaNova-Reg.eot";
import ProximaNovaRegWOFF from "../assets/fonts/proximanova/ProximaNova-Reg.woff";
import ProximaNovaRegOTF from "../assets/fonts/proximanova/ProximaNova-Reg.otf";
import ProximaNovaLightEOT from "../assets/fonts/proximanova/ProximaNova-Light.eot";
import ProximaNovaLightWOFF from "../assets/fonts/proximanova/ProximaNova-Light.woff";
import ProximaNovaLightOTF from "../assets/fonts/proximanova/ProximaNova-Light.otf";
import ProximaNovaBoldEOT from "../assets/fonts/proximanova/ProximaNova-Bold.eot";
import ProximaNovaBoldWOFF from "../assets/fonts/proximanova/ProximaNova-Bold.woff";
import ProximaNovaBoldOTF from "../assets/fonts/proximanova/ProximaNova-Bold.otf";
import ProximaNovaSemiBoldEOT from "../assets/fonts/proximanova/ProximaNova-Semibold.eot";
import ProximaNovaSemiBoldWOFF from "../assets/fonts/proximanova/ProximaNova-Semibold.woff";
import ProximaNovaSemiBoldOTF from "../assets/fonts/proximanova/ProximaNova-Semibold.otf";
//
import NorwesterEOT from "../assets/fonts/norwester/Norwester.eot";
import NorwesterWOFF from "../assets/fonts/norwester/Norwester.woff";
import NorwesterTTF from "../assets/fonts/norwester/Norwester.ttf";

export const GlobalFonts = createGlobalStyle`
    @font-face{
      font-family: Proxima Nova;
      font-weight:300;
      src:url(${ProximaNovaLightEOT}) format("eot"),url(${ProximaNovaLightWOFF}) format("woff"),url(${ProximaNovaLightOTF}) format("opentype")
    }
    @font-face{
      font-family: Proxima Nova;
      font-weight:400;
      src:url(${ProximaNovaRegEOT}) format("eot"),url(${ProximaNovaRegWOFF}) format("woff"),url(${ProximaNovaRegOTF}) format("opentype")
    }
    @font-face{
      font-family: Proxima Nova;
      font-weight:600;
      src:url(${ProximaNovaSemiBoldEOT}) format("eot"),url(${ProximaNovaSemiBoldWOFF}) format("woff"),url(${ProximaNovaSemiBoldOTF}) format("opentype")
    }
    @font-face{
      font-family: Proxima Nova;
      font-weight:700;
      src:url(${ProximaNovaBoldEOT}) format("eot"),url(${ProximaNovaBoldWOFF}) format("woff"),url(${ProximaNovaBoldOTF}) format("opentype")
    }
    @font-face{
      font-family: Norwester;
      font-weight:normal;
      src:url(${NorwesterEOT}) format("eot"),url(${NorwesterWOFF}) format("woff"),url(${NorwesterTTF}) format("truetype")
    }

`;
export const GlobalVars = createGlobalStyle`
  :root {
    --theme-font-primary: "Proxima Nova", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
    
    --theme-font-secondary: "Norwester", 'Courier New', Courier, monospace;
    
    --theme-light-swatch: rgba(245, 245, 245, 1.0);
    --theme-dark-swatch: rgba(20, 20, 70, 1.0);

    --screen-max: 120rem;
    --screen-xl: 80rem;
    --screen-lg: 64rem;
    --screen-md: 32rem;
    --screen-sm: 24rem;

    --base-size:20px;
    --font-xs: 0.875rem;
    --font-sm: 1.0rem;
    --font-md: 1.15rem;
    --font-lg: 1.5rem;
    --font-xl: 2.25rem;
    --font-xxl: 3rem;
    --font-xxxl: 5rem;
    --font-xxxxl: 7rem;

    --gutter-xs:0.5rem;
    --gutter-sm:1rem;
    --gutter-md:2rem;
    --gutter-lg:4rem;
    --gutter-xl:6rem;
    --gutter-xxl:12rem;

    --underline-weight: -0.0625em;
    --shadow-weight: -0.110rem;
    --border-weight: 0.125rem;

    --borderRadiusNone: 0;
    --borderRadius-xs: 2px;
    --borderRadius-sm: 4px;
    --borderRadius-md: 6px;
    --borderRadius-lg: 8px;
    --borderRadius-xl: 10000px;

    --durationUltraFast: 50ms;
    --durationFaster: 100ms;
    --durationFast: 150ms;
    --durationNormal: 200ms;
    --durationSlow: 300ms;
    --durationSlower: 400ms;
    --durationUltraSlow: 1500ms;

    --curveAccelerateMax: cubic-bezier(1,0,1,1);
    --curveAccelerateMid: cubic-bezier(0.7,0,1,0.5);
    --curveAccelerateMin: cubic-bezier(0.8,0,1,1);
    --curveDecelerateMax: cubic-bezier(0,0,0,1);
    --curveDecelerateMid: cubic-bezier(0.1,0.9,0.2,1);
    --curveDecelerateMin: cubic-bezier(0,0,0.1,1);
    --curveEasyEaseMax: cubic-bezier(0.8,0,0.1,1);
    --curveEasyEase: cubic-bezier(0.33,0,0.67,1);
    --curveLinear: cubic-bezier(0,0,1,1);
  

    --shadow2: 0 0 2px rgba(0, 0, 0,0.12); 0 1px 2px rgba(0, 0, 0,0.14);
    --shadow4: 0 0 2px rgba(0, 0, 0,0.12); 0 2px 4px rgba(0, 0, 0,0.14);
    --shadow8: 0 0 2px rgba(0, 0, 0,0.12); 0 4px 8px rgba(0, 0, 0,0.14);
    --shadow16: 0 0 2px rgba(0, 0, 0,0.12); 0 8px 16px rgba(0, 0, 0,0.14);
    --shadow28: 0 0 8px rgba(0, 0, 0,0.12); 0 14px 28px rgba(0, 0, 0,0.14);
    --shadow64: 0 0 8px rgba(0, 0, 0,0.12); 0 32px 64px rgba(0, 0, 0,0.14);


  }
`;
export const GlobalStyles = createGlobalStyle`
  html{
    font-size:var(--base-size);
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior: none;
  }
  html,body{margin:0;padding:0;}
  *, :before, :after {
    box-sizing: border-box;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--theme-font-primary);
    font-weight:400;
    font-size: var(--font-md);
    color: ${( {theme} ) => theme.neutralForeground1};
    background: ${({ theme }) => theme.neutralBackground1};
  }
  @media screen and (min-width: --screen-lg){
    .app,body{
      /* font-size: var(--font-sm)rem; */
    }
  }
  h1,h2,h3,h4{
    font-family: var(--theme-font-secondary);
  }
  h1{
    font-size:var(--font-xxl);
    font-weight:400;
  }
  h2{
    font-size:var(--font-lg);
    font-weight:400;
  }
  h3{
    font-size:var(--font-md);
    font-weight:700;
  }
  p,li,pre{
    font-size:var(--font-md);
    font-weight:300;
  }
  a:not(.button){
    color: ${({ theme }) => theme.colorLinkRest};
    color: ${( {theme} ) => theme.neutralForeground1};
    text-decoration: none;
    outline:none;
    transition: all var(--curveAccelerateMax) var(--durationFast);
    box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2};
    &:hover, &:focus{
      color: ${({ theme }) => theme.colorLinkRest};
      text-decoration: none;
      outline:none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHover};
    }
  }
  pre{
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .button{
    display: inline-block;
    padding:var(--gutter-xs) var(--gutter-sm);
    border-radius: var(--borderRadius-md);
    color: ${({ theme }) => theme.neutralForegroundInverted1};
    background: ${({ theme }) => theme.colorLinkRest};
    &:hover{
      color: ${({ theme }) => theme.neutralForegroundInverted1};
      background: ${({ theme }) => theme.colorLinkHover};
    }
  }
  .blurred{
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
  .u-gutters{
    padding-left: $universal-gutter;
    padding-right: $universal-gutter;
  }
  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  acronym{
    cursor: help;
    position:relative;
  }
  acronym[title]:hover::after {
      content: attr(title);
      position: absolute;
      top: -100%;
      left: 0;
      font-size:24px; 
      background:red;
    }
  }
`;