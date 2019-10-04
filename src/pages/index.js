import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import PortfoliCard from "../components/portfolio-card"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import PortfolioCard from "../components/portfolio-card"


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
            <h5 style={{fontSize:`17px`, color:`orange`, fontWeight:`bold`}}>Discover</h5>
            <h1 style={{fontWeight:`bold`}}>Peak One Apps</h1>
            <h5 style={{maxWidth:`70%`, textAlign:`center`, margin:`15px auto`, fontSize:`20px`}}>Web & Mobile App Development</h5>
            <Link to="/portfolio">
              <Button style={{marginRight:`25px`}} color="success">Our Work</Button>
            </Link>
            
            <Link to="/process">
              <Button color="info">Our Process</Button>
            </Link>
         </div>
      </div>
    <div className="slant"></div>
    <Container>
      <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
        <h2>How can we help you?</h2>
        <div className="w-100"></div>
        <div style={{maxWidth:`600px`, textAlign:`center`}}>
          <p>We'll identify your pain points, collaborate with you to define the real problems, and deliver digital solutions that support your business strategies.</p>
        </div>
        <div className="w-100"></div>
        <Link to="/services">
          <Button color="info">Capabilities & Services</Button>
        </Link>
      </Row>

      <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
        <Col xs="12" md="4" style={{textAlign:`center`}}>
          <Img fluid={data.creative.childImageSharp.fluid} className="landing-image"/>
          <h5>Creative</h5>
          <p>Building the functionality, tools, and assets to fashion a look, feel, tone and experience consistent with your brand and your mission.</p>
        </Col>
        <Col xs="12" md="4" style={{textAlign:`center`}}>
          <Img fluid={data.marketing.childImageSharp.fluid} className="landing-image"/>
          <h5>Marketing</h5>
          <p>Creating seamless, reliable and effective solutions from engagement through post-purchase delight and back again.</p>
        </Col>
        <Col xs="12" md="4" style={{textAlign:`center`}}>
          <Img fluid={data.technology.childImageSharp.fluid} className="landing-image"/>
          <h5>Technology</h5>
          <p>Smart, strategic thinking that provides a pathway and a plan to successfully grow your business and your brand.</p>
        </Col>
      </Row>
    </Container>

    <Row className="no-gutters justify-content-center" style={{padding:`30px`}}>
      <h6>PORTFOLIO</h6>
      <div className="w-100"></div>

      <h4>Need proof?</h4>
      <div className="w-100"></div>

      <Link to="/portfolio">
          <Button color="success">See Our Work</Button>
        </Link>
    </Row>

    <Row className="no-gutters">
      {info.map((project, index) => {
        console.log()
        let projectData = project.node;

        return (
          <PortfoliCard projectData={projectData}/>             
          )
      })}
    </Row>
  </Layout>
)}

export default IndexPage

export const listQuery = graphql`
  query {
    file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creative: file(relativePath: { eq: "creative.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketing: file(relativePath: { eq: "marketing.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    technology: file(relativePath: { eq: "technology.png" }) {
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