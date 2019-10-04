import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"

const ContactPage = ({ data }) => {
    return (
        <Layout>
            <PageHeader image={data.file.childImageSharp.fluid} title="CONTACT" subtitle="All The Ways To Reach Us"  titlethree="Go Ahead, Ask Us Anything!" description="Any Thing At All!"/>
            <form
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input style={{ display: `none` }} type="text" /><br />
                <label for="name">Name: *</label>
                <input name="name" placeholder="  First and Last Name" type="text" /><br />
                <label for="email">Email: *</label>
                <input name="email" placeholder="  Email" type="email" /><br />
                <label for="phone">Phone:</label>
                <input name="phone" placeholder="  Phone Number" type="number" /><br />
                <label for="message">Message:</label>
                <textarea name="message" placeholder="Your Message Here: " type="textarea" /><br />
                <button style={{ margin: `15px auto`, borderRadius: `10px` }}>Submit</button>
            </form>
        </Layout>
    )
}

export default ContactPage

export const query = graphql`
  query {
    file(relativePath: { eq: "capital.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`