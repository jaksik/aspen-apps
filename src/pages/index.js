import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import Divider from "../components/divider-button"
import PortfoliCard from "../components/portfolio-card"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "./index.css"

const IndexPage = ({data}) => {
  console.log("Data: ", data)
  const info = data.allMarkdownRemark.edges;
  return (
  <Layout>
    <SEO title="Home" />

    <div style={{position: `relative`, height: `65vh`, overflow:`hidden`}}>
      <Img fluid={data.file.childImageSharp.fluid} style={{position: `absolute`, zIndex:`1`, height: `65vh`, width: `100%`}}/>
      <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            <h1 style={{fontWeight:`bold`, fontSize:`3.5rem`}}>Business First.<br/>Online Second.</h1>
            <h4 style={{maxWidth:`70%`, textAlign:`center`, margin:`15px auto`, fontSize:`20px`}}>Website & Mobile App Development</h4>
            <Link to="/portfolio">
              <Button style={{marginRight:`25px`}} className="green-button">Our Work</Button>
            </Link>
            
            <Link to="/process">
              <Button className="red-button">Our Process</Button>
            </Link>
         </div>
      </div>
      <div className="slant">
         <div className="slant-container text-center">
            <h2 className="red-font page-title">How Can We Help You?</h2>
         </div>
      </div>

    <div className="page-container">
      <Row className="no-gutters justify-content-center">
        <Col xs="12" md="4" >
          <div className="card-wrapper">
          <div className="card-body card-border">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h3 className="box-title">Creative</h3>
            <h5 className="secondary-font">Developing your digital ecosystem in a way that represents your brand identy.</h5>
          </div>
          </div>
        </Col>
        <Col xs="12" md="4" >
          <div className="card-wrapper">
          <div className="card-body card-border">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h3 className="box-title">Marketing</h3>
            <h5 className="secondary-font">We get to know you and your target audience, then build the bridge.</h5>
          </div>
          </div>
        </Col>
        <Col xs="12" md="4" >
          <div className="card-wrapper">
          <div className="card-body card-border">
            <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
            <h3 className="box-title" style={{fontWeight:``}}>Technology</h3>
            <h5 className="secondary-font">We love what technology can do and are excited to help you implement it in your business.</h5>
          </div>
          </div>
        </Col>
      </Row>
    </div>

    <Divider button="About Aspen Apps" address="/services"/>
    
    <div className="page-container">
      <Row className="no-gutters justify-content-center">
        <Col xs="12">
          <h2 className="landing-title">Our Services</h2>
        </Col>
        <Col xs="12">
          <Row className="no-gutters">
            {data.services.edges.map((service, index) => {
              const serviceData = service.node.frontmatter
              return (
                <Col xs="6" md="4" lg="3">
                  <div className="card-wrapper">
                  <div className="card-border">
                    <Link to={service.node.fields.slug} style={{textDecoration:`none`}} className="red-font card-border">
                      <Row className="no-gutters p-2">
                        <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image"/>
                      </Row>
                      <Row className="no-gutters justify-content-center">
                        <h5 style={{textAlign:`center`}} className="card-title p-2">{serviceData.title}</h5>
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
          <h2 className="landing-title">Portfolio</h2>
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
          <h2 className="landing-title">Testimonial</h2>
        <Col xs="12" md="6">
          <p className="page-text" style={{textIndent:`50px`}}>{data.testimonials.edges[0].node.frontmatter.testimonials[0].testimonial}</p>
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
            address
            date(formatString: "MMMM Do YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
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
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    testimonials: allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/testimonials/"}}}) {
      edges {
        node {
          frontmatter {
            title
            testimonials {
              author
              testimonial
            }
          }
        }
      }
    }
  }
`