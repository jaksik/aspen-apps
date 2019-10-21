import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Collapse from "../components/collapse"
import Divider from "../components/divider-button"
import SEO from "../components/seo"

export default ({ data }) => {
  const info = data.markdownRemark
  const frontmatter = data.markdownRemark.frontmatter
  console.log("info: ", data);

  return (
    <Layout>
      <div className="page-container">
        <Row className="no-gutters">
          <Col xs="12" lg="8">
            <div className="p-md-5 p-lg-1 m-md-2 m-lg-0 m-xl-2">
              <h3 className="red-font">{frontmatter.pageTitle}</h3>
              <h6>What Will It Cost?</h6>
              <p>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>
              <p><strong>Timeframe: </strong>Coding is our passion, we see coding as an opportunity to bring dreams and ideas into reality. If we don't know how to do something, we learn how to do it. Because that's who we are.</p>    
            </div>
          </Col>

          <Col xs="12" lg="4" className="">
           <div className="p-md-5 p-lg-1 m-md-2 m-lg-0 m-xl-2">
            <h4 style={{textAlign:`center`, width:`100%`}} className="red-font">{frontmatter.subTitle}</h4>
              <div className="accordian-wrapper">
                <div style={{display:(frontmatter.type === "service" ? `none` : `block`)}}>
                <h4 className="accordian-title">{frontmatter.title} Website Package</h4>
                <div className="accordian-cell">
                    <span className="accordian-price">{frontmatter.price}</span>
                  </div>
                <div className="accordian-cell">
                    <p>Up to {frontmatter.pagecount} pages of content</p>
                  </div>
                <div className="accordian-cell">
                    <p>Configuring up to {frontmatter.pagecount} email addreses</p>
                  </div>

                  <div style={{display:(frontmatter.bellsWhistles ? `block` : `none`)}}>
                        <Collapse service={frontmatter.bellsWhistles} description="Bells and Whistles are extra add ons." show={true} />
                      </div>
                </div>
                {frontmatter.details.map((service, i) => (
                  <Collapse service={service.name} description={service.description} />
                  ))} 
              </div>
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
        type
        title
        pageTitle
        subTitle
        price
        pagecount
        bellsWhistles
        details {
          name
          description
        }
      }
    }
  }
`