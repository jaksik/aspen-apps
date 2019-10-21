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
            <h2 className="red-font">Our Process</h2>
            <h5>Partnerships, not transactions.</h5>
            <p>At Aspen Apps, we focus on getting to know your business inside and out that way we can make a website that suits your needs.</p>
        </div>
        
         <Row className="no-gutters">
                    {data.process.edges[0].node.frontmatter.processes.map((process, index) => (
                        <Col xs="12" md="4" >
                                   <div className="card-wrapper">
                                   <div className="card-body card-border">
                                   <Img fluid={data.discover.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/>

                                    <h4 className="card-title">{process.title}</h4>
                                    <p className="card-text">{process.description}</p>
                            </div>
                                   </div>
                        </Col>
                    ))}
                </Row>
        
         <div className="page-container">
         
        
                <Row className="no-gutters">
                <h2 style={{width:`100%`, textAlign:`left`}} className="red-font page-subtitle">Ways we engage</h2><br/>


                    {data.process.edges[0].node.frontmatter.engagement.map((section, index) => {
                        const image = graphics.find(n => {
                            return n.node.relativePath === `graphics/${section.graphic}.png`;
                          });
                        return (
                            <Col xs="12" md="6">
                                <Row className="no-gutters">
                                    <Col xs="2" sm="1" style={{padding:`0px`}}>
                                        <Img fluid={image.node.childImageSharp.fluid}/>
                                    </Col>
                                    <Col xs="10">
                                        <h4 className="">{section.title}</h4>
                                        <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
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
  query {
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