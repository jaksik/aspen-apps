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

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`aspen`, `applications`, `web`, `mobile`, `app`, `development`]} />
      <div className="landing-header">
        <Img fluid={data.file.childImageSharp.fluid} className="header-image" style={{ position: `absolute` }} />
        <div className="header-overlay"></div>
        <div className="header-title w-100">
          <h1 style={{ fontWeight: `bold`, fontSize: `3.5rem` }}>Business First.<br />Online Second.</h1>
          <Link to="/our-work">
            <Button style={{ marginRight: `25px` }} className="green-button">Our Work</Button>
          </Link>

          <Link to="/about">
            <Button className="red-button">Our Process</Button>
          </Link>
        </div>
      </div>
      <div className="slant">
        <div className="slant-container text-center">
          <h2 className="red-font page-title">How Can We Help You?</h2>
          <h4 style={{ maxWidth: `70%`, textAlign: `center`, margin: `15px auto`, fontSize: `20px` }}>We are a full service media and digital marketing agency.</h4>
        </div>
      </div>

      <div className="page-container mt-md-5 pt-md-3">
        <Row className="no-gutters justify-content-center">
          <Col xs="12" md="4" >
            <div className="card-wrapper">
              <div className="card-body card-border">
                <Img fluid={data.creative.childImageSharp.fluid} className="landing-image" />
                <h4 className="card-title" style={{ margin: `15px auto` }}>Creative</h4>
                <h5 className="secondary-font">Developing your digital ecosystem in a way that represents your brand identy.</h5>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" >
            <div className="card-wrapper">
              <div className="card-body card-border">
                <Img fluid={data.marketing.childImageSharp.fluid} className="landing-image" />
                <h4 className="card-title" style={{ margin: `15px auto` }}>Marketing</h4>
                <h5 className="secondary-font">We get to know you and your target audience, then build the bridge.</h5>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" >
            <div className="card-wrapper">
              <div className="card-body card-border">
                <Img fluid={data.tech.childImageSharp.fluid} className="landing-image" />
                <h4 className="card-title" style={{ margin: `15px auto` }}>Technology</h4>
                <h5 className="secondary-font">We love what technology can do and are excited to help you implement it in your business.</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Divider button="About Aspen Apps" address="/about/" />

      <div className="page-container">
        <Row className="no-gutters justify-content-center">
          <Col xs="12">
            <h2 className="landing-title">Our Services</h2>
          </Col>
          <Col xs="12">
            <Row className="no-gutters justify-content-center">
              {data.services.edges.map((service, index) => {
                const serviceData = service.node.frontmatter
                return (
                  <Col xs="6" md="4" lg="3">
                    <div className="card-wrapper">
                      <div className="card-border">
                        <Link to={service.node.fields.slug} style={{ textDecoration: `none` }} className="red-font card-border">
                          <Row className="no-gutters p-2">
                            <Img fluid={serviceData.image.childImageSharp.fluid} className="landing-image" />
                          </Row>
                          <Row className="no-gutters justify-content-center">
                            <h5 style={{ textAlign: `center` }} className="card-title p-2">{serviceData.title}</h5>
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

      <Divider button="Web Design Packages" address="/web-design/" />

      <div className="page-container">
        <Row className="no-gutters justify-content-center">
          <Col xs="12">
            <h2 className="landing-title">Portfolio</h2>
          </Col>
          {data.ourWork.edges[0].node.frontmatter.projects.map((project, index) => {
            return (
              <PortfoliCard project={project} />
            )
          })}
        </Row>
      </div>

      <Divider button="See More Of Our Work" address="/our-work/" />

      <div className="page-container">
        <Row className="no-gutters justify-content-center">
          <Col xs="12">
            <h2 className="landing-title">Testimonials</h2>
          </Col>
          <Col xs="12" xl="8">
            <p className="page-text mb-0" style={{ textIndent: `50px` }}>
              I had a great experience working with Connor at Aspen Apps. Connor built a website from scratch for my small business that has greatly increased my client market reach.
              Connor helped me to outline the most important element needs of my website and he made sure to build the website around them. Connor set realistic timelines and kept track of our phone discussions through follow-up email transcripts of the work to be completed.
              Connor was very flexible to adjust any visual and grammatical elements that tailored the website to my needs.
              After getting the website live, Connor worked with me to create an admin portal so that I can make any minor adjustments such as pricing, timing, and location updates.
              Aspen Apps has succeeded in allowing my business to be more interactive for customers and simple to find on Google. This has translated to more costumer contacts and referrals.
              I recommend Aspen Apps to anyone looking for a straightforward website buildout. Connor is a webpage developer who is there to design to your needs from the top to bottom.
          </p>
            <p className="w-100 text-right mb-5"><strong>-Chandler<br/><a href="https://limitlesswake.com" target="_blank" rel="noopener noreferrer">limitlesswake.com</a></strong></p>
          </Col>
          <div className="w-100"></div>
          <Col xs="12" xl="8">
            <p className="page-text mb-0" style={{ textIndent: `50px` }}>
              I love my new website! Aspen Apps went all out to build an amazing website for my media business. My business revolves around digital photo and video assets and my website does an amazing job of showing them off.
              My website is actually a "web application", so anyone can download it straight from the web browser and use it offline as well. I really couldn't be happier with my website and I'm glad I didn't use a cookie cutter website builder.
              The digital assets on my website create a "traced SVG" when loading and it looks awesome.
          </p>
            <p className="w-100 text-right">-<strong>Dave<br/><a href="https://montezumamedia.com" target="_blank" rel="noopener noreferrer">montezumamedia.com</a></strong></p>
          </Col>
        </Row>
      </div>

      <Divider button="Contact Us" address="/contact/" />

    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query {
    file(name: { eq: "capital" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketing: file(name: { eq: "marketing" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creative: file(name: { eq: "light" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tech: file(name: { eq: "tech" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ourWork: allMarkdownRemark(filter: { frontmatter: {templateKey: {regex: "/our-work/"}}}) {
      edges {
        node {
          frontmatter {
            projects {
              description
              address
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
  }
`