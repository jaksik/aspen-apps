import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
import "../styles/index.css"

export default ({ data }) => {
    const info = data.markdownRemark.frontmatter

    return (
        <Layout>
            <SEO title="Consulting" keywords={[`aspen`, `applications`, `consulting`, `technology`, `colorado`]} />

            <div className="page-container">
        <div style={{ maxWidth: `960px`, margin: `0 auto` }}>

                <h1 style={{ textAlign: `center` }} className="red-font page-title">Technology Consulting</h1>
                <h5 style={{ textAlign: `center` }}>Ways We Engage...</h5>
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
                </div>
                <Row>
                    <Col xs="12" lg="6">
                        <h2 className="red-font page-title">Tech Can Be Overwhelming</h2>
                        <p className="page-text pr-lg-2">
                            We know how overwhelming technology can be. Often it seems like what ever the buzz was about yesterday is already irrelevant today. This can be both good and bad,
                            it means that technology is rapidly improving, but it also makes it difficult to stay on top of it and use it effectively in your business.
                            That's why were excited to offer our expert technology services.
                        </p>
                    </Col>
                    <Col xs="12" lg="6">
                        <h2 className="red-font page-title">Advice From The Nerds</h2>
                        <p className="page-text">
                            We know nothing about cars and that's why go to our local mechanic for advice about cars. However, we know a lot about technology and that's why we proudly offer advice to those who don't.
                            Technology is our passion, we love what it can do and the tools that it provides.
                        </p>
                    </Col>
                </Row>
            </div>

            <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                features {
                    title
                    image {
                      childImageSharp {
                        fluid(maxWidth: 1000, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    description
                  }
            }
        }
    }
`