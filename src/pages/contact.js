import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import "./contact.css"

const ContactPage = ({ data }) => {
    return (
        <Layout>

          <div className="page-container row">
          
            <div className="col col-8">
              <h2 className="red-font">Go Ahead, Ask Us Anything.</h2>
              <h5>Seriously, ask us anything.</h5>
              <p>Were here to form partnerships, not transactions. We enjoy being able to create a valuable platform for your business and want to know how we can help.</p>  
            </div>
            <div className="col col-4">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          </div>
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