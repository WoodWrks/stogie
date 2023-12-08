import React from "react";

import Layout from '../templates/layout';

import Hero from '../templates/hero';
import Intro from '../templates/intro';
import Craft from '../templates/craft';
import Product from '../templates/product';
import About from '../templates/about';
import Quote from '../templates/quote';
import Contact from '../templates/contact';
import SEO from '../templates/seo';


export const Head = () => (
  <SEO></SEO>
)

const IndexPage = () => {

  return (
    <Layout className="layout">
      <Head />
      <Hero />
      <Intro />
      <Product />
      <Craft />
      <About  />
      <Quote />
      <Contact />
    </Layout>
  )
}

export default IndexPage