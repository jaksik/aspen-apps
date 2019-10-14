import React from "react"
import { graphql } from "gatsby"
import { Button, Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Divider from "../../components/landing-divider"
import Layout from "../../components/layout"
import PageHeader from "../../components/page-header"
import "../../styles/contact.css"

const ContactPage = ({ data }) => {
    return (
      <Layout>
        <PageHeader 
          image={data.file.childImageSharp.fluid} 
          headerTitle="SERVICES"
          pageTitle="If You Can Dream It, We Can Build It"  
          titlethree="Go Ahead, Ask Us Anything!" 
          description="Any Thing At All!"
        />
      
        <Row className="no-gutters">
          <Col xs="12" sm="10" md="12" lg="10" xl="8" className="offset-sm-1 offset-md-0 offset-lg-1 offset-xl-2">
            <Row className="no-gutters">
              {data.services.edges.map((service, index) => {
                const serviceData = service.node.frontmatter
                return (
                  <Col xs="12" md="6" className="p-2 mb-1">
                      <Row className="no-gutters">
                        <Col xs="2" className="p-0">
                          <Img fluid={serviceData.image.childImageSharp.fluid} className="ml-2 mr-2 mb-2"/>
                        </Col>
                        <Col xs="10">
                          <h3>{serviceData.title}</h3>
                          <p>{serviceData.description}</p>
                          <div className="w-100"></div>
                          {/* <Row className="no-gutters justify-content-center">
                            <Button size="sm" outline>Learn More</Button>
                          </Row> */}
                        </Col>
                      </Row>
                  </Col>          
                )
              })}
            </Row>
          </Col>
        </Row>

        <Divider title="PORTFOLIO" subtitle="Need Proof?" button="See Our Prices" address="/services/pricing" names="no-title" />

      </Layout>
    )
}

export default ContactPage

export const query = graphql`
  query {
    file(relativePath: { eq: "goat.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    services: allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/service/"}}}) {
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  resize(width: 1500, height: 1500) {
                    src
                  }
                  fluid(maxWidth: 786) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }
`