import * as React from "react"
import Layout from '../templates/layout';
import SEO from '../templates/seo';

export const Head = () => (
  <SEO></SEO>
)

const Success = () => {
  return (
    <Layout className="layout">
    <Head />
    <main>
      <h1>Success</h1>
    </main>
    </Layout>
  )
}

export default Success