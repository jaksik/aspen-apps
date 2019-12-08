import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

export default ({ data }) => {
  const info = data.markdownRemark
  const frontmatter = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={frontmatter.subTitle} keywords={[`aspen`, `applications`, `website`, `pwa`, `design`, `development`, `package`]} />
      <div className="content-container" style={{maxWidth:`960px`, margin:`0 auto`}}>
        <h1>{info.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: info.html }} />

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`