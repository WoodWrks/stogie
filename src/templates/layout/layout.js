import React, {useRef, useEffect} from "react"
import styled, {ThemeProvider} from 'styled-components';
import {GlobalFonts,GlobalVars,GlobalStyles} from '../../themes/globalStyles';
import Lenis from "@studio-freight/lenis";
import lightTheme from "../../themes/lightTheme";
import Header from "../../components/header";
import Footer from "../footer";

const LayoutStyled = styled.div`
  background: ${({theme}) => theme.neutralBackgroundInverted2};
`

const Layout = (props) => {
  const layoutRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {
      //console.log(e)
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    layoutRef.querySelectorAll('a').forEach(anchor => {
      console.log('anchorfound');
      anchor.addEventListener('click', function (e) {
        // console.log('click');
        // console.log(e);
        e.preventDefault();
        lenis.scrollTo(e.currentTarget.hash, { 
          duration: 3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          smooth: true })
      });
    })

  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalFonts />
      <GlobalVars />
      <GlobalStyles />
      <LayoutStyled className="layout" location={props.location} ref={layoutRef}>
        <Header />
        {props.children}
        <Footer />
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout
