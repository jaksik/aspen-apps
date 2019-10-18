import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
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
          <Col xs="2" md="2" lg="1" className="offset-1 offset-md-0 offset-lg-1 p-0">
            <Img fluid={info.frontmatter.image.childImageSharp.fluid} style={{paddingLeft:`0px`}}/>
          </Col>
          <Col xs="8" md="7" className="align-self-center">
            <h2>{info.frontmatter.title}</h2>
          </Col>
        </Row>

      <Row className="no-gutters pl-md-4 pr-md-4">
            <Col xs="10" md="8" lg="7" className="offset-1 offset-md-0 offset-lg-1">
                <Row className="no-gutters">
                  <h4 className="red-font">This is what you get.</h4>
                  <p>Whether your website is loaded with complex features or just a bare-bones design, all websites require regular maintenance to ensure they remain functional over time. We’ve designed 3 different maintenance plans to help websites of all sizes stay in top form.</p>
                </Row>
                <Row className="no-gutters">
                  <h4 className="red-font">This is what you get.</h4>
                  <p>Whether your website is loaded with complex features or just a bare-bones design, all websites require regular maintenance to ensure they remain functional over time. We’ve designed 3 different maintenance plans to help websites of all sizes stay in top form.</p>
                </Row>
            </Col>

            <Col xs="12" md="4" lg="4" className="p-4">
              <Row className="no-gutters">
                <h4 style={{textAlign:`center`, width:`100%`}} className="red-font">You also get this</h4>
                  <Col xs="10" className="offset-1">
                  <ul>
                    <li>Backup</li>
                    <li>Backup</li>
                    <li>Backup</li>
                    <li>Backup</li>
                    <li>Backup</li>
                    <li>Backup</li>
                  </ul>
                </Col>
              </Row>
            </Col>
        </Row>
    
       <Row className="no-gutters justify-content-center pl-5 pr-5">
        <Col xs="12" md="4" className="p-3">
          <div className="landing-card card-border p-2">
            <h4 className="card-title">The Minimum</h4>
            <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
          </div>
        </Col>
        <Col xs="12" md="4" className="p-3">
        <div className="landing-card card-border p-2">
            <h4 className="card-title">The Standard</h4>
            <p>Creating seamless, reliable and effective solutions from engagement through post-purchase delight and back again.</p>
          </div>
        </Col>
        <Col xs="12" md="4" className="p-3">
        <div className="landing-card card-border p-2">
            <h4 className="card-title">The Works </h4>
            <p>Smart, strategic thinking that provides a pathway and a plan to successfully grow your business and your brand.</p>
          </div>
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