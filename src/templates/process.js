import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ProcessPage = ({ data }) => {
  console.log("data: ", data);
  const graphics = data.graphics.edges
  return (
    <Layout>

      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
      
      <div className="page-container">
        <h1 className="red-font page-title text-center">Our Process</h1>
        <h5 className="text-center">Partnerships, not transactions.</h5>
    
        <Row className="no-gutters">
          {data.markdownRemark.frontmatter.processes.map((process, index) => (
            <Col xs="12" md="4" >
              <div className="card-wrapper">
                <div className="card-body card-border">
                  <Img fluid={data.discover.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/>
                  <h4 className="card-title" style={{margin:`15px auto`}}>{process.title}</h4>
                  <p className="card-text">{process.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="no-gutters">
          <h2 style={{width:`100%`, textAlign:`left`, marginBottom:`20px`}} className="red-font page-title">Ways we engage</h2><br/>
            {data.markdownRemark.frontmatter.engagement.map((section, index) => {
              const image = graphics.find(n => {
                  return n.node.relativePath === `graphics/${section.graphic}.png`;
                });
                console.log("Image: ", image)
              return (
                <Col xs="12" md="6">
                  <Row className="no-gutters">
                    <Col xs="2" sm="1" style={{marginRight:`10px`}}>
                        <Img fluid={image.node.childImageSharp.fluid}/>
                    </Col>
                    <Col xs="10">
                        <h5>{section.title}</h5>
                        <p className="page-text">{section.description}</p>
                    </Col>
                  </Row>
                </Col>
              )
            })}
        </Row>
      </div>

      <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      processes {
          title
          description
      }
      engagement {
          title
          description
          graphic
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
    discover: file(relativePath: { eq: "red.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphics: allFile(filter: {relativePath: {regex: "/graphics/.*.png/"}}) {
        edges {
          node {
            relativePath
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