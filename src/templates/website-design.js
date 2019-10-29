import React from "react"
import { graphql, Link } from 'gatsby'
import { Container, Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SEO from "../components/seo"
import Collapse from "../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = ({ data }) => {
  console.log("data: ", data)

  return (
    <Layout>

      <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />    

       <div className="page-container">
      <Row className="no-gutters">
        <Col xs="12" xl="6">
        <h2 className="red-font page-title">Here's the Deal...</h2>
       <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. </p>
       
        </Col>

        <Col xs="12" xl="6">
        <h2 className="red-font page-title">Try Before you Buy</h2>
        <p className="page-text">Uniquely, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design. That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want.</p>
        
        </Col>
      </Row>
        
        <h2 style={{textAlign:`center`}} className="red-font page-title">Website Design & Development Packages</h2>
        <h5 className="third-font" style={{fontWeight:`bold`, textAlign:`center`}}>Every website we design and develop includes the following:</h5>
          <Row className="no-gutters justify-content-center" style={{padding:`30px 0px`}}>
            <Col xs="12" md="3" className="p-md-1">
                <h5 className="third-font">Easy to Update with Netlify</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5 className="third-font">Mobile-Friendly (Responsive)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5 className="third-font">Fast, Secure, Reliable</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
              <Col xs="12" md="3" className="p-md-1">
                <h5 className="third-font">Search Engine Optimized (SEO)</h5>
                <p className="page-text">We always include lifetime, offsite backups, lifetime daily security scans by Sucuri, and lifetime monitoring by UpTime.</p>
              </Col>
          </Row>
    

          <Row className="no-gutters">
            {data.allMarkdownRemark.edges.map((node, index) => {
              const frontmatter = node.node.frontmatter
          
              return (
                <Col xs="12" md="6" lg="3" className="mb-5">
                  <div className="accordian-wrapper">
                    <h3 className="accordian-title">{frontmatter.title}</h3>
                    <div className="accordian-cell">
                        <span className="accordian-price">{frontmatter.price}</span>
                      </div>
                    <div className="accordian-cell">
                        <p>Up to {frontmatter.pagecount} pages of content</p>
                      </div>
                    <div className="accordian-cell">
                        <p>Configuring up to {frontmatter.pagecount} email addreses</p>
                      </div>

                      <div style={{display:(frontmatter.bellsWhistles ? `block` : `none`)}}>
                        <Collapse service={frontmatter.bellsWhistles} description="Bells and Whistles are extra add ons." show={true} />
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

       </div>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        type
        title
        pageTitle
        subTitle
        price
        pagecount
        bellsWhistles
        details {
          name
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