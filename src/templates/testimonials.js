import React from "react"
import { graphql, Link} from "gatsby"
import { Button } from "reactstrap"
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
         <Link to="/portfolio">
           Back To Portfolio
         </Link>
       <h1>{info.frontmatter.title}</h1>
        <Link to={info.frontmatter.address}>
          <Button>
            Visit Site
          </Button>
        </Link>

        <p style={{ textAlign: `center`, fontWeight:`bold`}}>{info.frontmatter.description}</p>

        <div style={{ textIndent: `50px` }}>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title  
        testimonials {
            author
            testimonial
        }
      }
    }
  }
`