import React from "react"
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from "reactstrap"
import Divider from "../components/landing-divider"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ProcessPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageHeader 
          image={data.file.childImageSharp.fluid} 
          headerTitle="PROCESS" 
          pageTitle="Why. How. What." 
          description="Any Thing At All!"
       />
       
      <h2 className="page-title">Our Process</h2>

       <Container>
          <Row>
            <Col xs="12" md="4" >
              <Img fluid={data.discover.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/>
              <h4>Discover</h4>
              <p>We dig deep to learn about your business, your goals, and your vision. We identify the pain points, pinpoint any potential obstacles, and determine the full scope of the issues that need to be addressed.</p>
            </Col>

            <Col xs="12" md="4">
              <Img fluid={data.plan.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/>
              <h4>Plan</h4>
              <p>We dig deep to learn about your business, your goals, and your vision. We identify the pain points, pinpoint any potential obstacles, and determine the full scope of the issues that need to be addressed.</p>
            </Col>

            <Col xs="12" md="4">
              <Img fluid={data.execute.childImageSharp.fluid} className="landing-image" style={{maxWidth:`100px`}}/>
              <h4>Execute</h4>
              <p>We dig deep to learn about your business, your goals, and your vision. We identify the pain points, pinpoint any potential obstacles, and determine the full scope of the issues that need to be addressed.</p>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <h3 style={{textAlign:`center`, margin:`20px auto`}}>Ways We Engage</h3>
            </Col>

            <Col xs="12" md="6">
              <Row>
                <Col xs="2" style={{padding:`0px`}}>
                  <Img fluid={data.execute.childImageSharp.fluid}/>
                </Col>
                <Col xs="10">
                  <h5>Full Site Build</h5>
                  <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
                </Col>
              </Row>
            </Col>
            
            <Col xs="12" md="6">
            <h5>Managed Services</h5>
              <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
            </Col>
            <Col xs="12" md="6">
            <h5>Rescues</h5>
              <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
            </Col>
            <Col xs="12" md="6">
            <h5>Ongoing Support</h5>
              <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
            </Col>
            <Col xs="12" md="6">
            <h5>Digital Marketing</h5>
              <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
            </Col>
            <Col xs="12" md="6">
            <h5>Brand & Identity</h5>
              <p>From concept to launch, Irish Titan has you covered in all aspects of your digital strategy, design, development, and testing. We have a proven process (that reflects our B1O2 philosophy) to provide you with a website that is user-friendly, business-focused, and tailored for effective search engine optimization.</p>
            </Col>
          </Row>
       </Container>

       <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

       <Row className="no-gutters justify-content-center pl-4 pr-4">
      <h2 className="page-title">Our Services</h2>
      <Col xs="10">
        <Row className="no-gutters">
          {data.services.edges.map((service, index) => {
            const serviceData = service.node.frontmatter
            return (
              <Col xs="6" md="4" lg="3">
                <Link to={service.node.fields.slug}>
                  <div className="portfolio-wrapper m-2">
                      <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image"/>
                      <p style={{textAlign:`center`}}>{serviceData.title}</p>
                    </div>
                </Link>
              </Col>          
            )
          })}
        </Row>
      </Col>
    </Row>

    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
  query {
    file(relativePath: { eq: "bells.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    plan: file(relativePath: { eq: "plan.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discover: file(relativePath: { eq: "discover.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    execute: file(relativePath: { eq: "execute.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
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
    }
  }
`