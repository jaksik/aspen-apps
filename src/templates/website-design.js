import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Collapse from "../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = ({ data }) => {
  console.log("data: ", data)

  return (
    <Layout>
      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />    
       <div className="page-container">
       
        
        <h2 style={{textAlign:`center`}} className="red-font page-title">Website Design & Development</h2>
        <h5 className="" style={{textAlign:`center`}}>Every website we design and develop includes the following:</h5>
        
          {data.markdownRemark.frontmatter.features.map((feature, index) => {
            return (
              <>
              <Row className="no-gutters mt-5 mb-5">
                <Col xs="6" className={(index % 2 ? `order-first pr-2` : `order-last pl-2`)}>
                  <Img fluid={data.discover.childImageSharp.fluid} style={{width:`200px`, margin:`0 auto`, maxHeight:`300px`}}/>
                </Col>
                <Col xs="6" className={`align-self-center ` + (index % 2 ? `order-last` : `order-first`)}>
                  <h4 className="red-font" style={{fontWeight:`lighter`}}>{feature.title}</h4>
                  <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime. We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime. We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
                </Col>
            
              </Row>
              <Col xs="12" className="align-self-center order-12">
              <div style={{width:`80%`, margin:`0 auto`, borderBottom:`1px solid #dddddd`}}></div>
            </Col>
              </>
            )
          })}
         
          
           
        <Row className="no-gutters mt-5 mb-5">
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Here's the Deal...</h2>
            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. </p>
          </Col>
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Try Before you Buy</h2>
            <p className="page-text">Uniquely, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design. That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want.</p>
          </Col>
         
        </Row>
        <Col xs="12" className="align-self-center order-12">
              <div style={{width:`80%`, margin:`0 auto`, borderBottom:`1px solid #dddddd`}}></div>
            </Col>
          <Row className="no-gutters justify-content-center">
            <Col xs="12">
            <h2 className="red-font mt-5 mb-5" style={{textAlign:`center`, fontWeight:`lighter`}}>Website Packages</h2>

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
                    <div className="accordian-cell">
                        <p>Up to {frontmatter.pagecount} pages of content</p>
                      </div>
                    <div className="accordian-cell">
                        <p>Configuring up to {frontmatter.pagecount} email addreses</p>
                      </div>

                    {frontmatter.details.map((service, i) => (
                      <Collapse service={service.name} description={service.description} />
                    ))}
                    <div className="accordian-cell">
                      <Link to={node.node.fields.slug}>
                        <Button className="red-button" style={{background:`#f03517`}}>Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              )}
            )}
          </Row>
          <Row className="no-gutters">
          
          <Col xs="12" xl="6">
          <h2 className="red-font page-title" style={{marginBottom:`0px`}}>Get a Free Consultation</h2>

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input style={{display: `none`}} type="text" />

            <label for="name">Name *</label>
            <input required className="form-input" name="name" type="text"/>

            <label for="email">Email *</label>
            <input required className="form-input" name="email" type="email"/>

            <label for="phone">Phone</label>
            <input className="form-input" name="phone" type="number" />
           
            <label for="company">Company</label>
            <input className="form-input" name="company" type="text" /><br />

            <label for="message">Message</label>
            <textarea className="form-input" name="message" type="textarea" /><br />

            <button className="submit-button">Submit</button>

          </form>
           </Col>

           <Col xs="12" xl="6">
            <h2 className="red-font page-title">Need Proof?</h2>
            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. <Link to="our-work">See Our Work</Link> </p>
            <h2 className="red-font page-title">Our Process</h2>
            <p className="page-text">Uniquely, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design. That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want. <Link to="about">See Our Process</Link> </p>
         
          </Col>
        </Row>

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
          description
        }
      }
    }
    file(relativePath: { eq: "graphics/logo-design.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discover: file(relativePath: { eq: "phone.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
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
            pagecount
            bellsWhistles
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