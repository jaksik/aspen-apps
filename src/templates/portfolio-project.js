import React from "react"
import { graphql, Link} from "gatsby"
import { Container, Button } from "reactstrap"
import Img from 'gatsby-image';
import PageHeader from "../components/page-header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data);

  return (
    <Layout>
      <SEO title="About Limitless Wake" keywords={info.frontmatter.tags} />
      <PageHeader image={info.frontmatter.image.childImageSharp.fluid} title={info.frontmatter.title} subTitle={info.frontmatter.title} description={info.frontmatter.title} titlethree={info.frontmatter.title}/>
       <Container>
         <Link to="/portfolio">
           Back To Portfolio
         </Link>
       <h1>{info.frontmatter.title}</h1>
        <Link to={info.frontmatter.address}>
          <Button>
            Visit Site
          </Button>
        </Link>
          {/* About Page Title */}
        <p style={{ textAlign: `center`, fontWeight:`bold`}}>{info.frontmatter.description}</p>
        {/* About Page Photo */}
        {/* <div style={{ maxWidth: `50%`, margin: `25px auto` }}>
          <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
        </div> */}

        {/* About Page Body Text */}
        <div style={{ textIndent: `50px` }}>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </div>
       </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        address
        description
        tags
        image {
            childImageSharp {
              resize(width: 1500, height: 1500) {
                src
              }
              fluid(maxWidth: 786) {
                ...GatsbyImageSharpFluid
              }
            }
         }
      }
    }
  }
`