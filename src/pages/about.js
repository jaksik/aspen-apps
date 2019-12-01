import React from "react"
import { graphql, Link } from 'gatsby'
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
import '../styles/index.css'

const ProcessPage = ({ data }) => {
    console.log("data: ", data);
    
    return (
        <Layout>

            <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
      
            <div className="page-container">
                <Row className="no-gutters mt-5 mb-5">
                    <Col xs="12" xl="6">
                        <h2 className="red-font page-title">Inspired by Nature, Driven by Passion</h2>
                        <p className="page-text pr-xl-2">At Aspen Apps, we strive to make all of our products as simple and elegant as nature it's self.
                        We believe that technology should be created as an intuitive tool that makes life easier
                        </p>
                    </Col>
                    <Col xs="12" xl="6">
                        <h2 className="red-font page-title">Founded in the High Country</h2>
                        <p className="page-text">This is self-explanatory. We're in this for the long haul, and here's the proof. We will be open and transparent in our communications - bad news doesn't get better with age. We will place a premium on managing budget, scope and expectations. And we'll make sure to have some fun along the way.</p>
                    </Col>
                </Row>

                <div style={{width:`80%`, margin:`0 auto`, borderBottom:`1px solid #dddddd`}}></div>

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
query {
    discover: file(name: { eq: "microscope" }) {
        childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`