import React from "react"
import { graphql, Link } from 'gatsby'
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const ProcessPage = ({ data }) => {
  const graphics = data.graphics.edges

  return (
    <Layout>
      <SEO title="Process" keywords={[`aspen`, `digital`, `marketing`, `strategy`]} />

      <div className="page-container">
        <Row className="no-gutters mt-5 mb-5">
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Our Process</h2>
            <p className="page-text pr-xl-2">
              Partnerships, not transactions. We believe the best work is done through strategic partnerships, and not one off transactions.
              Before we write one line of code we get to know your business inside and out, then strategically craft a long term plan, make sure your absolutely in love with it, and then we pretty busy.
            </p>
          </Col>
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Partnerships. Not Transactions</h2>
            <p className="page-text">This is self-explanatory. We're in this for the long haul, and here's the proof. We will be open and transparent in our communications - bad news doesn't get better with age. We will place a premium on managing budget, scope and expectations. And we'll make sure to have some fun along the way.</p>
          </Col>
        </Row>
        <Row className="no-gutters">
          {data.markdownRemark.frontmatter.processes.map((process, index) => (
            <Col xs="12" md="4" >
              <div className="card-wrapper">
                <div className="card-body card-border">
                  <Img fluid={process.image.childImageSharp.fluid} className="landing-image" style={{ maxWidth: `100px` }} />
                  <h4 className="card-title" style={{ margin: `15px auto` }}>{process.title}</h4>
                  <p className="card-text">{process.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="no-gutters mb-5">
          <h2 style={{ width: `100%`, textAlign: `left`, marginBottom: `20px` }} className="red-font page-title">Ways we engage</h2><br />
          {data.markdownRemark.frontmatter.engagement.map((section, index) => {
            const image = graphics.find(n => {
              return n.node.relativePath === `graphics/${section.graphic}.png`;
            });
            return (
              <Col xs="12" md="6">
                <Row className="no-gutters">
                  <Col xs="2" sm="1" md="2" style={{ paddingRight: `10px` }} className="pl-xl-4 pr-xl-4">
                    <Img fluid={image.node.childImageSharp.fluid} />
                  </Col>
                  <Col xs="10">
                    <h5>{section.title}</h5>
                    <p className="page-text">{section.description}</p>
                  </Col>
                </Row>
              </Col>
            )
          })}
        </Row>

        <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>

        <Row className="no-gutters mt-3 mb-5">
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Website Design</h2>
            <p className="page-text pr-xl-2">We love helping our clients reach their goals and grow their business through developing their online presense. Aspen Apps is passionate about utilizing new technologies and building high quality digital assets, that's why the first thing we do is get to know your business and brand.<Link to="web-design">Web Design</Link></p>
          </Col>
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Aspen Applications LLC</h2>
            <p className="page-text">Born in the high country, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design. That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want. <Link to="about">About Aspen Apps</Link></p>
          </Col>

        </Row>
      </div>



      <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      processes {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 786) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
      engagement {
          title
          description
          graphic
      }
      image {
        childImageSharp {
          fluid(maxWidth: 786) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
    discover: file(name: { eq: "microscope" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphics: allFile(filter: {relativePath: {regex: "/graphics/.*.png/"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
    } 
  }
`