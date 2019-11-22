import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import "./contact.css"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <div className="page-container">
        <Row className="no-gutters">
          <Col xs="12" lg="8">
          <h2 className="red-font page-title">Go Ahead, Ask Us Anything</h2>
            <h5>Seriously, ask us anything.</h5>
            <p className="page-text pr-xl-2">
              Incase you haven't noticed, we love what we do. We love being creative, helping others, and simply being apart of the community.
              We also recognize that technology evolves fast and that not everyone is as passionate about it as we are.
              That's why you shouldn't hesitate to ask us anything, there is no stupid question, we want to help.
            </p>
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

          <Col xs="12" lg="3" className="offset-xs-0 offset-lg-1">
            <h2 className="red-font page-title">The Team</h2>
            <Img fluid={data.summit.childImageSharp.fluid} className="mb-4"/>
            <h5>Mike Durigan:</h5>
            <p className="page-text">
              Marketing <br/>
              Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span>
            </p>

            <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>

            <h5>Kyle Slates:</h5>
            <p className="page-text">
              Graphic Designer <br/>
              Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span>
            </p>

            <div style={{ width: `80%`, margin: `0 auto`, borderBottom: `1px solid #dddddd` }}></div>

            <h5>Connor Jaksik:</h5>
            <p className="page-text">
              PWA Developer <br/>
              Email: <span className="red-font">connorjaksik@gmail.com</span><br />
              Phone: <span className="red-font">830-302-3308</span></p>
          </Col>
        </Row>
        <Row className="no-gutters mb-5">
          <Col xs="12" xl="6">
            <h2 className="red-font page-title">Areas We Serve</h2>
            <h5>Colorado High Country</h5>
            <p className="page-text pr-xl-2">
              Located in the High Rockies? Let's grab a coffee or jump on the ski lift and talk technology. The energy, community, and beauty of our home is large in part what inspires us. 
              We love where we live and love helping these high altiude communities thrive. The mountains humble us and the wildlife remind us of simplicity and elegance which is shown in the work that we do.
            </p>
            <h5>World Wide</h5>
            <p className="page-text pr-xl-2">
              We love being apart of our local communities and just as much, love being apart of the global community.
              It doesn't matter where in the world you are, if you have an internet connection let's jump on a video chat and talk business.
            </p>
          
          </Col>
          <Col xs="12" xl="5" className="offset-xl-1">
            <h2 className="red-font page-title">Our Home</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98312.70026854055!2d-106.13113525855272!3d39.64359531368454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a5cb86b1d4285%3A0xee63350e2b758bb8!2sSilverthorne%2C%20CO!5e0!3m2!1sen!2sus!4v1573916686623!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style={{border:`0`}} allowfullscreen=""></iframe>

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
    summit: file(relativePath: { eq: "summit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`