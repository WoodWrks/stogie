import * as React from "react"
import Layout from '../templates/layout';
import SEO from '../templates/seo';


export const Head = () => (
  <SEO></SEO>
)

const NotFoundPage = () => {
  return (
    <Layout className="layout">
      <Head />
      <main>
        <h1>Page not found</h1>
      </main>
    /</Layout>
  )
}

export default NotFoundPage