import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/landing-divider"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ProcessPage = ({ data }) => {
  console.log("data: ", data);
  const graphics = data.graphics.edges
  return (
    <Layout>
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
       
        <h2 className="page-title">Our Process</h2>

          <Row className="no-gutters">
            <Col xs="10" md="10" lg="10" className="offset-1 offset-md-1 offset-lg-1">
                <Row className="no-gutters">
                    {data.process.edges[0].node.frontmatter.processes.map((process, index) => (
                        <Col xs="12" md="4" >
                            {/* <Img fluid={data.discover.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/> */}
                            <div className="card-border m-1 p-2">
                                <h4 className="card-title">{process.title}</h4>
                                <p className="card-text">{process.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="no-gutters">
                    <Col xs="12">
                        <h3 className="page-title">Ways We Engage</h3>
                    </Col>

                    {data.process.edges[0].node.frontmatter.engagement.map((section, index) => {
                        const image = graphics.find(n => {
                            return n.node.relativePath === `graphics/${section.graphic}.png`;
                          });
                        return (
                            <Col xs="12" md="6">
                                <Row className="no-gutters">
                                    <Col xs="2" style={{padding:`0px`}}>
                                        <Img fluid={image.node.childImageSharp.fluid}/>
                                    </Col>
                                    <Col xs="10">
                                        <h4 className="red-font">{section.title}</h4>
                                        <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
          </Row>

       <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
  query {
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
    process: allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/process/"}}}) {
      edges {
        node {
          fields{
            slug
          }
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
      }
    }
  }
`