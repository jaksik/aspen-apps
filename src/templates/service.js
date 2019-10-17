import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Divider from "../components/landing-divider"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data);

  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
        <Img fluid={info.frontmatter.image.childImageSharp.fluid} className="landing-image" />
       <h1>{info.frontmatter.title}</h1>
      {info.frontmatter.services.map((service, index) => (
        <>
          <h2 className="red-font">{service.service}</h2>
          <p>{service.description}</p>
        </>        
      ))}
      <button>Contact Us</button>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        services {
          description
          service
        }
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