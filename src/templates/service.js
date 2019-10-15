import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Divider from "../components/landing-divider"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data);

  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
        {/* <Img fluid={} /> */}
       <h1>{info.frontmatter.title}</h1>
      <p>Pricing starts at bla bla bla bla.</p>
      <button>Contact Us</button>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        image {
          childImageSharp {
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`