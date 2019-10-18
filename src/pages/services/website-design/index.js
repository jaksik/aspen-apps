import React from "react"
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import PageHeader from "../../../components/page-header"
import SEO from "../../../components/seo"
import Collapse from "../../../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../services.css"

const ServicesPage = ({ data }) => {
  console.log("data: ", data)

  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
    

        <Row className="no-gutters mt-4 mb-4">
          <Col xs="2" md="2" lg="1" className="offset-1 offset-md-0 offset-lg-1">
          <Img fluid={data.file.childImageSharp.fluid}/>
          </Col>
          <Col xs="8" md="7" className="align-self-center">
          <h2>Website Design</h2>
          </Col>
        </Row>


      <Row className="no-gutters">
        <h2 className="red-font page-subtitle">Development Packages</h2>
        <h6 className="section-subtitle text-center">Every website we design and develop includes the following:</h6>

        <Col xs="10" md="12" xl="10" className="offset-1 offset-md-0 offset-xl-1 pl-md-3 pr-md-3 pl-lg-4 pr-lg-4 mt-5 mb-5">
          <Row className="no-gutters justify-content-center">
            <Col xs="12" md="3" className="p-md-2">
                <h5>Easy to Update with Netlify</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-2">
                <h5>Mobile-Friendly (Responsive)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-2">
                <h5>Fast, Secure, Reliable</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-2">
                <h5>Search Engine Optimized (SEO)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
          </Row>
        </Col>
    

        <Col xs="12" sm="8" md="10" lg="12" xl="10" className="offset-sm-2 offset-md-1 offset-lg-0 offset-xl-1">
          <Row className="no-gutters">
            {data.allMarkdownRemark.edges.map((node, index) => {
              const frontmatter = node.node.frontmatter
              return (
                <Col xs="12" md="6" lg="3" className="mb-5">
                  <div className="service-wrapper">
                    <h3 className="service-title">{frontmatter.title}</h3>
                    <div className="service-cell">
                      <span className="service-price">{frontmatter.price}</span>
                    </div>
                    <div className="service-cell">
                      <p>{frontmatter.pagecount}</p>
                    </div>
                    {frontmatter.services.map((service, i) => (
                      <Collapse service={service} />
                    ))}
                    <div className="service-cell">
                      <Link to={node.node.fields.slug}>
                        <Button className="red-button">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              )}
            )}
          </Row>
        </Col>
      </Row>

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
    allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/website-design/"}}} sort: { order: ASC, fields: [frontmatter___price] }) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            title
            price
            pagecount
            services {
              service
              description
            }
          }
        }
      }
    }
  }
`