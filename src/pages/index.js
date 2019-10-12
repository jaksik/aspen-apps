import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import PortfoliCard from "../components/portfolio-card"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import Carousel from "../components/carousel"

const IndexPage = ({data}) => {
  console.log("data", data)
  const info = data.allMarkdownRemark.edges;
  return (
  <Layout>
    <SEO title="Home" />

    <div style={{position: `relative`, height: `65vh`, overflow:`hidden`}}>
         <Img fluid={data.file.childImageSharp.fluid} style={{position: `absolute`, zIndex:`1`, height: `65vh`, width: `100%`}}/>
         <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            {/* <h4 style={{fontSize:`17px`, color:`orange`, fontWeight:`bold`}}>Discover</h4> */}
            <h1 style={{fontWeight:`bold`, fontSize:`3.5rem`}}>Business First.<br/>Online Second</h1>
            <h4 style={{maxWidth:`70%`, textAlign:`center`, margin:`15px auto`, fontSize:`20px`}}>Web & Mobile App Development By Aspen Apps</h4>
            <Link to="/portfolio">
              <Button style={{marginRight:`25px`}} className="green-button">Our Work</Button>
            </Link>
            
            <Link to="/process">
              <Button id="button-two">Our Process</Button>
            </Link>
         </div>
      </div>
    <div className="slant"></div>
    <Container>
      <Row className="no-gutters justify-content-center p-5 mt-3">
        <h2 style={{fontWeight:`bold`}}>How can we help you?</h2>
        <div className="w-100"></div>
        <div style={{textAlign:`center`}}>
          <h3 style={{color:`#f03517`}}>We specialize in web development and mobile app development.</h3>
        </div>
        <div className="w-100"></div>
        {/* <Link to="/services">
          <Button className="green-button">Capabilities & Services</Button>
        </Link> */}
      </Row>
      </Container>

      <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
        <Col xs="12" md="4" className="p-3">
          <div className="landing-card p-2">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h4>Creative</h4>
            <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
          </div>
        </Col>
        <Col xs="12" md="4" className="p-3">
          <div className="landing-card p-2">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h4>Marketing</h4>
            <p>Creating seamless, reliable and effective solutions from engagement through post-purchase delight and back again.</p>
          </div>
        </Col>
        <Col xs="12" md="4" className="p-3">
          <div className="landing-card p-2">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h4>Technology</h4>
            <p>Smart, strategic thinking that provides a pathway and a plan to successfully grow your business and your brand.</p>
          </div>
        </Col>
      </Row>

    <Row className="no-gutters justify-content-center mb-5">
      <h6>PORTFOLIO</h6>
      <div className="w-100"></div>
      <h4>Need proof?</h4>

      <Col xs="12" className="mb-4">
        <div style={{position:`relative`, width:`100%`}}>
          <div className="divider"></div>
          <Row className="no-gutters justify-content-center">
            <Link to="/portfolio">
              <Button className="divider-button">See Our Work</Button>
            </Link>
          </Row>
        </div>
      </Col>

      <Col xs="12" md="10" lg="6">
        <Row className="no-gutters">
          {info.map((project, index) => {
            console.log()
            let projectData = project.node;
            return (
              <PortfoliCard projectData={projectData}/>             
              )
          })}
        </Row>
      </Col>
    </Row>

    <Row className="no-gutters justify-content-center mt-5 mb-5">
      <h6>TESTIMONIALS</h6>
      <div className="w-100"></div>

      <h4>Kind words from our friends</h4>
      <div className="w-100"></div>

      <Col xs="12">
      <div style={{position:`relative`, width:`100%`}}>
        <div className="divider"></div>
        <Row className="no-gutters justify-content-center">
          <Link to="/portfolio">
            <Button className="divider-button">More Testimonials</Button>
          </Link>
        </Row>
      </div>
      </Col>
    </Row>
    <Row className="no-gutters justify-content-center">
      <Col xs="12">
      <h4 style={{textAlign:`center`}}>Testimonials</h4>
      </Col>
      <Col xs="12" md="6">
        <Row className="no-gutters justify-content-center">
          <p>It was really great working with Aspen Apps. They really know what theyre doing and they know how to make awesome websites. We would love to work with them again.</p>
        </Row>
      </Col>
    </Row>
    
  </Layout>
)}

export default IndexPage

export const listQuery = graphql`
  query {
    file(relativePath: { eq: "aspens.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creative: file(relativePath: { eq: "red.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketing: file(relativePath: { eq: "red.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    technology: file(relativePath: { eq: "red.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
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