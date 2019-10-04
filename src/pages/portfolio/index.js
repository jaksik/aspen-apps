import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../../components/layout"
import PortfoliCard from "../../components/portfolio-card"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioCard from "../../components/portfolio-card"

const PortfoliPage = ({ data }) => {
  console.log("data:", data);
  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
      <PageHeader image={data.file.childImageSharp.fluid} title="Our Work" subtitle="Let's play show and tell"/>
      <Container>
        <Row className="no-gutters">
          {data.allMarkdownRemark.edges.map((project, index) => {
            const projectData = project.node;
            return (
                <PortfoliCard projectData={projectData}/>             
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default PortfoliPage

export const query = graphql`
  query {
    file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    }
  }
`;