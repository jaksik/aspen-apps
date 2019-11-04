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
        {/* <h2 className="page-title red-font">Contact Us</h2> */}
        <div className="col col-12">
        </div>
       
        <Row className="no-gutters mt-5 mb-5">
          <Col xs="12" xl="6" className="align-self-center">
            <h2 className="red-font page-title">Go Ahead, Ask Us Anything</h2>
            <h5>Seriously, ask us anything.</h5>

            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. </p>
          </Col>
          <Col xs="12" xl="6">
          <Img fluid={data.file.childImageSharp.fluid} className="contact-image" />
 </Col>

        </Row>

        <Row className="no-gutters">
          <Col xs="12" lg="8">
            <h2 className="red-font page-title" style={{marginBottom:`-30px`}}>We Look Forward to Hearing From You!</h2>

            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <input style={{ display: `none` }} type="text" /><br />

              <Row className="no-gutters">
                <Col xs="12" md="4">
                  <label for="name">Name *</label>
                  <input required className="form-input" name="name" type="text" />
                  <label for="phone">Phone</label>
                  <input className="form-input" name="phone" type="number" />
                </Col>
                <Col xs="12" md="4">
                  <label for="name">Email *</label>
                  <input required className="form-input" name="email" type="email" />
                  <label for="Company">How you hear about us?</label>
                  <input className="form-input" name="company" type="text" />
                </Col>
  
                <Col md="4">
                  <label for="message">Message *</label>
                  <textarea className="form-input" style={{ height:`115px`}} name="message" type="textarea" /><br />
                </Col>
                <Col xs="12">
                <button className="submit-button" style={{float:`right`}}>Submit</button>

                </Col>
              </Row>
           


            </form>
          </Col>
          <Col xs="12" lg="3" className="offset-1">
            <h2 className="red-font page-title">The Team</h2>
            <h5>Mike Durigan:</h5>
            <p className="page-text">
              Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span>
            </p>

            <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>

            <h5>Kyle Slates:</h5>
            <p className="page-text">
              Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span>
            </p>

            <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>

            <h5>Connor Jaksik:</h5>
            <p className="page-text">Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span></p>

          </Col>
        </Row>
        <Row className="no-gutters mb-5">
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Areas We Serve</h2>
            <h5>Colorado Front Range</h5>
            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. </p>
            <h5>World Wide</h5>
            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. </p>
          
          </Col>
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Social Media</h2>

            <h5>Seriously, ask us anything.</h5>
            <p className="page-text">Were here to form partnerships, not transactions. We enjoy being able to create a valuable platform for your business and want to know how we can help.</p>
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