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
    
          <Row className="no-gutters pl-md-4 pr-md-4">

          <Col xs="10" md="8" lg="7" className="offset-1 offset-md-0 offset-lg-1">
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

            <Col xs="12" md="4" lg="4" className="p-4">
                <Row className="no-gutters">
                  <h4 style={{textAlign:`center`, width:`100%`}} className="red-font">Our Coding Expertise</h4>
                    <Col xs="10" className="offset-1">
                    <div className="service-wrapper">
                    <h3 className="service-title">{frontmatter.title}</h3>
                    <div className="service-cell">
                        <span className="service-price">{frontmatter.price}</span>
                      </div>
                    <div className="service-cell">
                        <p>Up to {frontmatter.pagecount} pages of content</p>
                      </div>
                    <div className="service-cell">
                        <p>Configuring up to {frontmatter.pagecount} email addreses</p>
                      </div>
                    <div className="service-cell" style={{display:(frontmatter.bellsWhistles ? `block` : `none`)}}>
                        <p>Up to {frontmatter.bellsWhistles} Bells & Whistles. <Link to="services/website-design/bells-and-whistles/">Learn More</Link></p>
                      </div>
                    {frontmatter.services.map((service, i) => (
                      <Collapse service={service} />
                    ))}
                    
                  </div>
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