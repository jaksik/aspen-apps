import React from "react"
import { graphql } from "gatsby"
import { Container, Row } from "reactstrap"
import Layout from "../../components/layout"
import PortfolioCard from "../../components/portfolio-card"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioPage = ({ data }) => {
  console.log("data:", data);
  return (
    <Layout>

      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
{/* 
      <PageHeader 
        image={data.file.childImageSharp.fluid} 
        headerTitle="Portfolio" 
        pageTitle="Our Work"
      /> */}
                  

      <div className="page-container">
      <h2 className="red-font">Our Work</h2>
      <h5>We proudly present...</h5>
        <Row className="no-gutters">
          {data.allMarkdownRemark.edges.map((project, index) => {
            const projectData = project.node;
            return (
              <PortfolioCard projectData={projectData}/>             
            )
          })}
        </Row>
      </div>

    </Layout>
  )
}

export default PortfolioPage

export const query = graphql`
  query {
    file(relativePath: { eq: "independance.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/portfolio/"}}} sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
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
    }
  }
`;