import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../templates/layout';

import Hero from '../templates/hero';
import Intro from '../templates/intro';
import Craft from '../templates/craft';
import Product from '../templates/product';
import About from '../templates/about';
import Contact from '../templates/contact';

const Body = styled.div`
  height: 100vh;
`

const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.timeline()
    .set(".body div",{
        opacity: '0.0',
        x: "-500px",
    })
    .to(".body div",{
        opacity: '1.0',
        x: '50%',
        duration: 1,
        scrollTrigger: {
          trigger: ".body",
          start: "-20% center",
          end: "80% center",
          scrub: true,
          markers: true
        }
    });
  }, []);

  return (
    <Layout className="layout" ref={ref}>
      <Hero />
      <Intro />
      <Product />
      <Craft />
      <About />
      <Contact />
      <Body className="body">
        Body
        <div style={{background:'red',padding:'100px'}}>Hi I am div</div>
      </Body>
    </Layout>
  )
}

export default IndexPage