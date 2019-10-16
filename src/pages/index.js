import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import PortfoliCard from "../components/portfolio-card"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import Divider from "../components/landing-divider"

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
            <h1 style={{fontWeight:`bold`, fontSize:`3.5rem`}}>Inspired By Nature.<br/>Driven By Passion</h1>
            <h4 style={{maxWidth:`70%`, textAlign:`center`, margin:`15px auto`, fontSize:`20px`}}>Website & Mobile App Development</h4>
            <Link to="/portfolio">
              <Button style={{marginRight:`25px`}} className="green-button">Our Work</Button>
            </Link>
            
            <Link to="/process">
              <Button id="button-two">Our Process</Button>
            </Link>
         </div>
      </div>
      <div className="slant pt-5 pb-5">
         <div className="slant-container">
            <h4 className="slant-title" style={{}}>How Can We Help You?</h4>
            <div style={{textAlign:`center`}}>
              <h3 className="landing-subtitle red-font">It's our passion to collaborate closely and create elegant technologies that help your business thrive.</h3>
            </div>
         </div>
      </div>

    <Row className="no-gutters justify-content-center">
      <Col xs="12" md="4" className="p-3">
        <div className="landing-card card-border p-2">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Creative</h4>
          <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
        </div>
      </Col>
      <Col xs="12" md="4" className="p-3">
        <div className="landing-card card-border p-2">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Marketing</h4>
          <p>Creating seamless, reliable and effective solutions from engagement through post-purchase delight and back again.</p>
        </div>
      </Col>
      <Col xs="12" md="4" className="p-3">
        <div className="landing-card card-border p-2">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Technology</h4>
          <p>Smart, strategic thinking that provides a pathway and a plan to successfully grow your business and your brand.</p>
        </div>
      </Col>
    </Row>

    <Divider button="Aspen Apps's Story" address="/services"/>

    <Row className="no-gutters justify-content-center">
      <Col xs="12">
        <h2 className="page-title">Our Services</h2>
      </Col>
      <Col xs="12" sm="10">
        <Row className="no-gutters m-2">
          {data.services.edges.map((service, index) => {
            const serviceData = service.node.frontmatter
            return (
              <Col xs="6" md="4" lg="3">
                <div className="card-border m-1">
                  <Link to={service.node.fields.slug} className="red-font card-border">
                    <Row className="no-gutters p-2">
                      <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image"/>
                    </Row>
                    <Row className="no-gutters justify-content-center">
                      <p style={{textAlign:`center`}} className="card-text p-2">{serviceData.title}</p>
                    </Row>
                  </Link>
                </div>
              </Col>        
            )
          })}
        </Row>
      </Col>
    </Row>

    <Divider button="See Our Prices" address="/services/pricing" />

    <Row className="no-gutters justify-content-center">
      <Col xs="12">
          <h2 className="page-title">Portfolio</h2>
      </Col>
      <Col xs="12" md="10">
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

    <Divider button="See More Of Our Work" address="/portfolio" />

    <Row className="no-gutters justify-content-center">
      <Col xs="12">
        <h2 className="page-title">Testimonials</h2>
      </Col>
      <Col xs="12" md="6">
          <p style={{textAlign:`center`}}>It was really great working with Aspen Apps. They really know what theyre doing and they know how to make awesome websites. We would love to work with them again.</p>
      </Col>
    </Row>
    
  </Layout>
)}

export default IndexPage

export const listQuery = graphql`
  query {
    file(relativePath: { eq: "aspens.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
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
    service: file(relativePath: { eq: "service.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/portfolio/"}}} sort: { order: DESC, fields: [frontmatter___date] }) {
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