/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      services: allMarkdownRemark(filter: { frontmatter: {type: {regex: "/service/"}}}) {
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
          <Navbar siteTitle={data.site.siteMetadata.title} services={data.services}/>

    <div style={{maxWidth:`2000px`, margin: `0 auto`}}>
        <main style={{minHeight:`65vh`}}>{children}</main>
    </div>
    <Footer/>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
