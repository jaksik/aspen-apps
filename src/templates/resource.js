import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"
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
          <Col xs="10" className="offset-1">
            {/* <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><Link to="/services/website-design/">Website Design</Link></BreadcrumbItem>
            <BreadcrumbItem active>Bells & Whistles</BreadcrumbItem>
            </Breadcrumb> */}
            <Link to="/services/website-design/">Back To Development Packages</Link>
          </Col>
          <Col xs="2" md="2" lg="1" className="offset-1 offset-md-0 offset-lg-1">
            <Img fluid={info.frontmatter.image.childImageSharp.fluid} style={{paddingLeft:`0px`}}/>
          </Col>
          <Col xs="8" md="7" className="align-self-center">
            <h2>{info.frontmatter.title}</h2>
          </Col>
        </Row>

        <Row className="no-gutters pl-md-4 pr-md-4">
            <Col xs="10" md="8" lg="7" className="offset-1 offset-md-0 offset-lg-1">
                <Row className="no-gutters">
                  <h4 className="red-font">What is a, "Bell and Whistle?"</h4>
                  <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
                </Row>
                <Row className="no-gutters">
                  <h4 className="red-font">Why are they free?</h4>
                  <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
                </Row>
                <Row className="no-gutters">
                  <h4 className="red-font">How Can We Keep The Cost Down?</h4>
                  <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>    
                </Row>
            </Col>

            <Col xs="12" md="4" lg="4" className="p-4">
              <Row className="no-gutters">
                <h4 style={{textAlign:`center`, width:`100%`}} className="red-font">Examples of Bells & Whistles</h4>
                  <Col xs="10" className="offset-1">
                    <ul>
                        <li>Elaborate Form</li>
                        <li>Video Background</li>
                        <li>Payment Form</li>
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