import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import Collapse from "../components/collapse"
import Divider from "../components/landing-divider"

import SEO from "../components/seo"
import "../pages/services/services.css"

export default ({ data }) => {
  const info = data.markdownRemark
  const frontmatter = data.markdownRemark.frontmatter
  console.log("info: ", data);

  return (
    <Layout>
      <div className="page-container">
        <Row className="no-gutters">
          <Col xs="12" lg="8">
            <h4 className="red-font">{frontmatter.price} Gets you Everything you Need and Nothing You Don't</h4>
            <h6>What Will It Cost?</h6>
            <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
            <p><strong>Timeframe: </strong>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>    
          </Col>

          <Col xs="12" lg="4">
            <h4 style={{textAlign:`center`, width:`100%`}} className="red-font">What's In The Box</h4>
            <div className="service-wrapper">
              <h4 className="service-title">{frontmatter.title} Website Package</h4>
              <div className="service-cell">
                  <span className="service-price">{frontmatter.price}</span>
                </div>
              <div className="service-cell">
                  <p>Up to {frontmatter.pagecount} pages of content</p>
                </div>
              <div className="service-cell">
                  <p>Configuring up to {frontmatter.pagecount} email addreses</p>
                </div>
              {frontmatter.services.map((service, i) => (
                <Collapse service={service} />
              ))} 
            </div>
          </Col>
        </Row>
      </div> 
      <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        price
        pagecount
        bellsWhistles
        services {
          service
          description
        }
      }
    }
  }
`