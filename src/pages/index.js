import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import Divider from "../components/divider-button"
import PortfoliCard from "../components/portfolio-card"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "./index.css"

const IndexPage = ({data}) => {
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
         <div className="slant-container text-center">
            <h2 className="red-font">How Can We Help You?</h2>
            <h3 className="landing-subtitle">It's our passion to collaborate closely and create elegant technologies that help your business thrive.</h3>
         </div>
      </div>

    <div className="page-container">
    <Row className="no-gutters justify-content-center">
      <Col xs="12" md="4" >
        <div className="card-wrapper">
        <div className="card-body card-border">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Creative</h4>
          <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
        </div>
        </div>
      </Col>
      <Col xs="12" md="4" >
        <div className="card-wrapper">
        <div className="card-body card-border">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Marketing</h4>
          <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
        </div>
        </div>
      </Col>
      <Col xs="12" md="4" >
        <div className="card-wrapper">
        <div className="card-body card-border">
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h4 className="box-title">Technology</h4>
          <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
        </div>
        </div>
      </Col>
    </Row>
    </div>

    <Divider button="Aspen Apps's Story" address="/services"/>
    <div className="page-container">

    <Row className="no-gutters justify-content-center">
      <Col xs="12">
        <h2 className="page-title">Our Services</h2>
      </Col>
      <Col xs="12">
        <Row className="no-gutters">
          {data.services.edges.map((service, index) => {
            const serviceData = service.node.frontmatter
            return (
              <Col xs="6" md="4" lg="3">
                <div className="card-wrapper">
                <div className="card-border">
                  <Link to={service.node.fields.slug} className="red-font card-border">
                    <Row className="no-gutters p-2">
                      <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image"/>
                    </Row>
                    <Row className="no-gutters justify-content-center">
                      <p style={{textAlign:`center`}} className="card-text p-2">{serviceData.title}</p>
                    </Row>
                  </Link>
                </div>
                </div>
              </Col>        
            )
          })}
        </Row>
      </Col>
    </Row>
    </div>

    <Divider button="See Our Prices" address="/services/pricing" />

      
      <div className="page-container">
      <Row className="no-gutters justify-content-center">
        <Col xs="12">
          <h2 className="page-title">Portfolio</h2>
      </Col>
          {info.map((project, index) => {
            let projectData = project.node;
            return (
              <PortfoliCard projectData={projectData}/>             
              )
          })}
        </Row>
      </div>
    
    <Divider button="See More Of Our Work" address="/portfolio" />

    <div className="page-container">
      <Row className="no-gutters justify-content-center">
        <Col xs="12"></Col>
          <h2 className="page-title">Testimonials</h2>
        <Col xs="12" md="6">
            <p style={{textAlign:`center`}}>I had a great experience working with Conner at Jaksik web development. Conner built a website from scratch for my small business that has greatly increased my client market reach.

              Conner help me to outline the most important element needs of my website and he made sure to build the website around them. Conner set realistic timelines and kept track of our phone discussions through follow-up email transcripts of the work to be completed. 

              Conner was very flexible to adjust any visual and grammatical elements that tailored the website to my needs.<br/>

              After getting the website live, Conner worked with me to create an admin portal so that I can make any minor adjustments such as pricing, timing, and location updates.

              Jaksik web development has succeeded in allowing my business to be more interactive for customers and simple to find on Google. This has translated to more costumer contacts and referrals. 

              I recommend Jaksik web development to anyone looking for a straightforward website buildout. Conner is a webpage developer who is there to design to your needs from the top to bottom.</p>
        </Col>
      </Row>
    </div>
    <Divider button="Contact Us" address="/contact/"/>

  </Layout>
)}

export default IndexPage

export const listQuery = graphql`
  query {
    file(relativePath: { eq: "peakone.jpg" }) {
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
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
           }
          }
        }
      }
    }
    services: allMarkdownRemark(filter: { frontmatter: {type: {regex: "/service/"}}}) {
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