import React from "react"
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import PageHeader from "../../../components/page-header"
import SEO from "../../../components/seo"
import Collapse from "../../../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = ({ data }) => {
  console.log("data: ", data)

  return (
    <Layout>

      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />    

       <div className="page-container">
          {/* <Row className="no-gutters mt-4 mb-4">
          <Col xs="2" md="2" lg="1" className="offset-1 offset-md-0 offset-lg-1">
          <Img fluid={data.file.childImageSharp.fluid}/>
          </Col>
          <Col xs="8" md="7" className="align-self-center">
          <h2>Website Design</h2>
          </Col>
        </Row>
 */}

        <h2 style={{textAlign:`center`}} className="red-font page-subtitle">Website Design & Development Packages</h2><br/>
        <h6 className="section-subtitle text-center">Every website we design and develop includes the following:</h6>

          <Row className="no-gutters justify-content-center m-md-3">
            <Col xs="12" md="3" className="p-md-1">
                <h5>Easy to Update with Netlify</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5>Mobile-Friendly (Responsive)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5>Fast, Secure, Reliable</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5>Search Engine Optimized (SEO)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
          </Row>
    

          <Row className="no-gutters">
            {data.allMarkdownRemark.edges.map((node, index) => {
              const frontmatter = node.node.frontmatter
          
              return (
                <Col xs="12" md="6" lg="3" className="mb-5">
                  <div className="accordian-wrapper">
                    <h3 className="accordian-title">{frontmatter.title}</h3>
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

                    {frontmatter.services.map((service, i) => (
                      <Collapse service={service.service} description={service.description} />
                    ))}
                    <div className="accordian-cell">
                      <Link to={node.node.fields.slug}>
                        <Button className="red-button">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              )}
            )}
          </Row>

       </div>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query {
    file(relativePath: { eq: "graphics/logo-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/product/"}}} sort: { order: ASC, fields: [frontmatter___price] }) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            title
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
    }
  }
`