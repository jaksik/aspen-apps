import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import "../styles/contact.css"

const ContactPage = ({ data }) => {
    return (
        <Layout>
          <PageHeader 
            image={data.file.childImageSharp.fluid} 
            headerTitle="CONTACT" 
            pageTitle="COMPANY"  
            titlethree="Born In The High Country" 
            description="Any Thing At All!"
          />
            <p>Aspen Apps Company was founded on </p>
            
        </Layout>
    )
}

export default ContactPage

export const query = graphql`
  query {
    file(relativePath: { eq: "summit.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`