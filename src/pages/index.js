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
      <div className="slant">
         <div className="slant-container">
            <h2 className="slant-title" style={{fontWeight:`bold`}}>How Can We Help You?</h2>
            <div style={{textAlign:`center`}}>
              <h4 className="slant-text" style={{color:`#f03517`}}>We specialize in web development and mobile app development.</h4>
            </div>
         </div>
      </div>

      <Row className="no-gutters justify-content-center pl-5 pr-5">
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

    <Divider title="SERVICES" subtitle="Our Services" button="Our Services"/>

    <Row className="no-gutters justify-content-center pl-4 pr-4">
      <Col xs="10">
        <Row className="no-gutters">
          {data.services.edges.map((service, index) => {
            const serviceData = service.node.frontmatter
            return (
              <Col xs="6" md="4" lg="3">
                <div className="portfolio-wrapper m-2">
                  <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image"/>
                  <p style={{textAlign:`center`}}>{serviceData.title}</p>
                </div>
              </Col>          
            )
          })}
        </Row>
      </Col>
    </Row>

    <Divider title="PORTFOLIO" subtitle="Need Proof?" button="See Our Work"/>

    <Row className="no-gutters justify-content-center">
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

    <Divider title="SERVICES" subtitle="Our Services" button="Our Services"/>

    <Row className="no-gutters justify-content-center">
      <Col xs="12">
      <h4 style={{textAlign:`center`}}>Testimonials</h4>
      </Col>
      <Col xs="12" md="6">
        <Row className="no-gutters justify-content-center p-4">
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