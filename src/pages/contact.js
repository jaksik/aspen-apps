import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import "./contact.css"

const ContactPage = ({ data }) => {
    return (
        <Layout>
          
          <div className="page-container">
            {/* <h2 className="page-title red-font">Contact Us</h2>
            <div className="col col-12">
              <Img fluid={data.file.childImageSharp.fluid} className="contact-image"/>
            </div> */}
            <h2 className="red-font page-title">Go Ahead, Ask Us Anything.</h2>
            <h5>Seriously, ask us anything.</h5>
            <p className="page-text">Were here to form partnerships, not transactions. We enjoy being able to create a valuable platform for your business and want to know how we can help.</p>  
          

          <Row className="no-gutters">
            <Col xs="12" lg="8">
            <h2 className="red-font page-title">We Look Forward to Hearing From You!</h2>

            <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />

            <input type="hidden" name="form-name" value="contact" />

            <input style={{display: `none`}} type="text" /><br />

            <input required className="form-input" name="name" placeholder="First and Last Name*" type="text" /><br />

            <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />

            <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />
           
            <input className="form-input" name="company" placeholder="Company" type="text" /><br />

            <textarea className="form-input" name="message" placeholder="Seriously, ask us anything..." type="textarea" /><br />

            <button className="submit-button">Submit</button>

          </form>
            </Col>
            <Col xs="12" lg="4">
              <h2 className="red-font page-title">The Team</h2>
              <h5>Connor Jaksik:</h5>
              <p className="page-text">Email: <span className="red-font">connorjaksik@gmail.com</span><br/>
              Phone: <span className="red-font">830-302-3308</span></p>

            </Col>
          </Row>
          
          </div>
        </Layout>
    )
}

export default ContactPage

export const query = graphql`
  query {
    file(relativePath: { eq: "goat-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`