import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Collapse from "../components/collapse"
import Divider from "../components/divider-button"
import SEO from "../components/seo"
import "./index.css"

export default ({ data }) => {
  const info = data.markdownRemark
  const frontmatter = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={frontmatter.subTitle} keywords={[`aspen`, `marketing`, `website`, `pwa`, `design`, `development`]} />
      <div className="page-container">
        <Row className="no-gutters">
          <Col xs="12" lg="8">
            <div dangerouslySetInnerHTML={{ __html: info.html }} />
          </Col>

          <Col xs="12" lg="4" className="">
           <div className="p-md-5 p-lg-1 m-md-3 m-lg-0 mt-lg-3 m-xl-2 mt-xl-3">
            <div className="accordian-wrapper" style={{borderTop:(frontmatter.type === "product" ? `` : `none`)}}>
              <div className="accordian-cell red-background">
                <h4 className="accordian-title red-background" style={{ color:`white` }}>{frontmatter.subTitle}</h4>
              </div>
                <div style={{display:(frontmatter.type === "service" ? `none` : `block`)}}>
                  <div className="accordian-cell">
                      <span className="accordian-price">{frontmatter.price}</span>
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
      html
      frontmatter {
        type
        subTitle
        price
        details {
          name
          description
        }
      }
    }
  }
`