import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import "./contact.css"

const ContactPage = ({ data }) => {
    return (
        <Layout>

          <h4 style={{width:`100%`, textAlign:`center`, marginTop:`50px`}} className="red-font">Go Ahead, Ask Us Anything.</h4>

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
    file(relativePath: { eq: "goat.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`