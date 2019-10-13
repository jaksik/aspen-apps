import React from "react"
import { graphql } from 'gatsby'
import { Row, Col, Container } from "reactstrap"
import Layout from "../../components/layout"
import PageHeader from "../../components/page-header"
import SEO from "../../components/seo"
import servicesData from "../../data/service-data"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css"
const ServicesPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

      {/* SEO keywords */}
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
      <PageHeader image={data.file.childImageSharp.fluid} title="Capabilities and Services" subtitle="Services" description="The first thing we do is get know everything about your business. We learn what you do, how you do it, and (most importantly) why you do it. That's B1O2. Then we get busy. Really busy."/>
      <Row className="no-gutters">
        <Col xs="12" sm="8" md="5" lg="3" xl="2" className="offset-sm-2 offset-md-1 offset-lg-0 offset-xl-2">
          <div className="service-wrapper">
            <h3 className="service-title">Standard</h3>
            <div className="service-cell">
                <span className="service-price">$2750</span>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Configuring up to 5 e-mail address</p>
            </div>
            <div className="service-cell">
              <p>Turnaround in 3-4 weeks + lead time</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
          </div>
        </Col>
        <Col xs="12" sm="8" md="5" lg="3" xl="2" className="offset-sm-2 offset-md-0">
          <div className="service-wrapper">
            <h3 className="service-title">Standard</h3>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Configuring up to 5 e-mail address</p>
            </div>
            <div className="service-cell">
              <p>Turnaround in 3-4 weeks + lead time</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
          </div>
        </Col>
        <Col xs="12" sm="8" md="5" lg="3" xl="2" className="offset-sm-2 offset-md-1 offset-lg-0">
          <div className="service-wrapper">
            <h3 className="service-title">Standard</h3>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Configuring up to 5 e-mail address</p>
            </div>
            <div className="service-cell">
              <p>Turnaround in 3-4 weeks + lead time</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
          </div>
        </Col>
        <Col xs="12" sm="8" md="5" lg="3" xl="2" className="offset-sm-2 offset-md-0">
          <div className="service-wrapper">
            <h3 className="service-title">Standard</h3>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Configuring up to 5 e-mail address</p>
            </div>
            <div className="service-cell">
              <p>Turnaround in 3-4 weeks + lead time</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
            <div className="service-cell">
              <p>Up to 5 pages of content</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Container>
        {servicesData.map((category, index) => {
          console.log("Category: ", category)
          return (
            <Row className="no-gutters justify-content-center">
              <Col xs="12" sm="8">
                <h4 style={{textAlign:`center`, margin:`50px auto`}}>{category.title}</h4>
              </Col>
              {category.subcategories.map((subcategory, i) => {
                  return (
                    <Col xs="12" sm="8" md="4">
                        <h6 style={{margin:`20px 0`}}>{subcategory.title}</h6>
                        <ul>
                          {subcategory.services.map((service) => (
                            <li>{service}</li>
                          ))}
                        </ul>
                    </Col>
                  )
                })}
            </Row>
          )
        })}
      </Container> */}
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
    allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/website-design/"}}}) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`