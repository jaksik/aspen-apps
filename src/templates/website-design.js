import React from "react"
import Img from "gatsby-image"

import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collapse from "../components/collapse"

import "./index.css"

const ServicesPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Web Design" keywords={[`aspen`, `marketing`, `website`, `design`, `development`]} />
      <div className="page-container">
        <div style={{ maxWidth: `960px`, margin: `0 auto` }}>
          <h2 style={{ textAlign: `center` }} className="red-font page-title">Website Design & Development</h2>
          <h5 style={{ textAlign: `center` }}>Every website we design and develop includes the following:</h5>
          {data.markdownRemark.frontmatter.features.map((feature, index) => {
            return (
              <>
                <Row className="no-gutters mt-5 mb-5 align-items-center">
                  <Col xs="12" sm="4" className={(index % 2 ? `order-first pr-2` : `order-last pl-2`) + ` first`}>
                    <Img fluid={feature.image.childImageSharp.fluid} className="info-image mb-4" style={{ margin: `0 auto`, maxHeight: `300px` }} />
                  </Col>
                  <Col xs="12" sm="8" className={(index % 2 ? `order-last` : `order-first`) + ` last`}>
                    <h4 className="red-font feature-title" style={{}}>{feature.title}</h4>
                    <p className="page-text">{feature.description}</p>
                  </Col>
                </Row>
                <Col xs="12" className="align-self-center order-12">
                  <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>
                </Col>
              </>
            )
          })}
          <Row className="no-gutters mt-5 mb-5">
            <Col xs="12" lg="6">
              <h2 className="red-font page-title">Less Haggling, More Art</h2>
              <p className="page-text pr-lg-2">
                We love designing and building websites, but we hate haggling.
                That's why we've created flat rates for our most populart web development packages.
                The less time we spend worrying about a price, the more time we can focus on creating unique and powerful digital ecosystems.
                  </p>
            </Col>
            <Col xs="12" lg="6">
              <h2 className="red-font page-title">Try Before you Buy</h2>
              <p className="page-text">
                Uniquely, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design.
                That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want.
                  </p>
            </Col>
          </Row>
          <Col xs="12" className="align-self-center order-12">
            <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>
          </Col>
          <Row className="no-gutters justify-content-center">
            <Col xs="12">
              <h2 className="red-font mt-5 mb-5" style={{ textAlign: `center`, fontWeight: `lighter` }}>Website Packages</h2>
            </Col>
            {data.allMarkdownRemark.edges.map((node, index) => {
              const frontmatter = node.node.frontmatter
              return (
                <Col xs="12" md="6" lg="3" className="m-3">
                  <div className="accordian-wrapper">
                    <h4 className="accordian-title">{frontmatter.title}</h4>
                    <div className="accordian-cell">
                      <span className="accordian-price">{frontmatter.price}</span>
                    </div>
                    {frontmatter.details.map((service, i) => (
                      <Collapse service={service.name} description={service.description} />
                    ))}
                    <div className="accordian-cell">
                      <Link to={node.node.fields.slug}>
                        <Button className="card-button">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row className="no-gutters">
            <Col xs="12" xl="7">
              <h2 className="red-font page-title" style={{ marginBottom: `0px` }}>Get a Free Consultation</h2>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input style={{ display: `none` }} type="text" />

                <label for="name">Name *</label>
                <input required className="form-input" name="name" type="text" />

                <label for="email">Email *</label>
                <input required className="form-input" name="email" type="email" />

                <label for="phone">Phone</label>
                <input className="form-input" name="phone" type="number" />

                <label for="company">Company</label>
                <input className="form-input" name="company" type="text" /><br />

                <label for="message">Message</label>
                <textarea className="form-input" name="message" type="textarea" /><br />

                <button className="submit-button">Submit</button>

              </form>
            </Col>
            <Col xs="12" xl="5">
              {/* <h2 className="red-font page-title">Don't See What You Need?</h2>
              <p className="page-text pr-xl-2">
                We've listed the most popular and in demmand products, but we recognize that the online needs of a business can often be unique.
                We're excited to work with you and develop a unique plan that meets your challenges and needs. 
                Get in contact with us for a free consultation and we'll help you find exactly what you're looking for.
                <br/>
                <Link to="/contact"> Contact Us</Link>
              </p> */}
              <h2 className="red-font page-title">Need Proof?</h2>
              <p className="page-text pr-xl-2">
                We proudly show off the websites and apps that we've build.
                Your digital ecosystem presents and makes your business available to the world, we understand that you don't want to hand this responcibility off to just anyone.
                Check out some our previous work to ease your worries.
                <br />
                <Link to="/our-work"> This is our work.</Link>
              </p>
              <h2 className="red-font page-title">Our Process</h2>
              <p className="page-text">
                Partnerships, not transactions. We believe the best work is done through strategic partnerships, and not one off transactions.
                Before we write one line of code we get to know your business inside and out, then strategically craft a long term plan, make sure your absolutely in love with it, and then we get pretty busy.
                <br />
                <Link to="/process"> This is our process.</Link>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        features {
          title
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: {type: {regex: "/product/"}}} sort: { order: ASC, fields: [frontmatter___price] }) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            title
            price
            details {
              name
              description
            }
          }
        }
      }
    }
  }
`