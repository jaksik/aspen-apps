import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Divider from "../components/landing-divider"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  console.log("info: ", data);

  return (
    <Layout>

        <Row className="no-gutters mt-4 mb-4">
          <Col xs="2" md="1" className="offset-1">
            <Img fluid={info.frontmatter.image.childImageSharp.fluid}/>
          </Col>
          <Col xs="8" md="7" className="align-self-center">
            <h2>{info.frontmatter.title}</h2>
          </Col>
        </Row>

        <Row className="no-gutters">
            <Col xs="10" md="7" lg="7" className="offset-1 offset-md-1 offset-lg-1 pl-md-3">
                <Row className="no-gutters">
                <h4 className="red-font">If You Can Dream It, We Can Code It.</h4>
                <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
            
                </Row>
                <Row className="no-gutters">
                <h4 className="red-font">What Will It Cost?</h4>
                <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
            
                </Row>
                <Row className="no-gutters">
                <h4 className="red-font">How Can We Keep The Cost Down?</h4>
                <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
            
                </Row>
            
            </Col>
            <Col xs="12" md="3" lg="2" className="offset-lg-1">
            <Row className="no-gutters">
                <Col xs="10" className="offset-1">
                    <h4 style={{textAlign:`center`}} className="red-font">Our Coding Expertise</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>

                        <li>JavaScript</li>

                        <li>Backup</li>

                        <li>Backup</li>

                        <li>Backup</li>
                    </ul>
                </Col>
                </Row>
            </Col>
        </Row>
  
        <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

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