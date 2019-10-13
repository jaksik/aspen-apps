import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data);

  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
    
       <h1>{info.frontmatter.title}</h1>
     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
      }
    }
  }
`