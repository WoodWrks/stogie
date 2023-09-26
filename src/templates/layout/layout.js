import React, {useRef, useEffect} from "react"
import styled, {ThemeProvider} from 'styled-components';
import {GlobalFonts,GlobalVars,GlobalStyles} from '../../themes/globalStyles';
import Lenis from "@studio-freight/lenis";
import lightTheme from "../../themes/lightTheme";
import Header from "../../components/header";

const LayoutStyled = styled.div`
  background: ${({theme}) => theme.neutralBackgroundInverted2};
`

const Layout = (props) => {
  useEffect(() => {
    const lenis = new Lenis;
    lenis.on('scroll', (e) => {
      //console.log(e)
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalFonts />
      <GlobalVars />
      <GlobalStyles />
      <LayoutStyled className="layout" location={props.location}>
        <Header />
        {props.children}
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout
