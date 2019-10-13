import React from "react"
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from "reactstrap"
import Layout from "../../components/layout"
import PageHeader from "../../components/page-header"
import SEO from "../../components/seo"
import Collapse from "../../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css"

const ServicesPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
      <PageHeader image={data.file.childImageSharp.fluid} title="Capabilities and Services" subtitle="Website Development Packages" description="The first thing we do is get know everything about your business. We learn what you do, how you do it, and (most importantly) why you do it. That's B1O2. Then we get busy. Really busy."/>
      
      <Row className="no-gutters">
        <Col xs="12" sm="8" md="10" lg="12" xl="8" className="offset-sm-2 offset-md-1 offset-lg-0 offset-xl-2">
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
    file(relativePath: { eq: "capital.jpg" }) {
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