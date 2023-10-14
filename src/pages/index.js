import React, {useRef, useEffect} from "react";
import styled from "styled-components";

import Layout from '../templates/layout';

import Hero from '../templates/hero';
import Intro from '../templates/intro';
import Craft from '../templates/craft';
import Product from '../templates/product';
import About from '../templates/about';
import Quote from '../templates/quote';
import Contact from '../templates/contact';

const IndexPage = () => {
  return (
    <Layout className="layout">
      <Hero />
      <Intro />
      <Product />
      <Craft />
      <About />
      <Quote />
      <Contact />
    </Layout>
  )
}

export default IndexPage