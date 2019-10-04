import React from "react"
import { Link, graphql } from "gatsby"
import { Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./portfolio-card"

function PortfolioCard ({ projectData, key}) {
  console.log("port card: ", projectData)
    return (
      <Col xs="12" sm="6" md="4" style={{height:`200px`, padding:`10px`, overflow:`hidden`}}>
          <div style={{position:`relative`}}>
            <Img style={{zIndex: `1`, position:`absolute`, width: `100%`}} fluid={projectData.frontmatter.image.childImageSharp.fluid}/>
            <div className="portfolio-overlay">
              <div style={{margin:`50px 20px`}}>
                  <h5 style={{color:`white`}}>{projectData.frontmatter.title}</h5>
                  <Link to={projectData.fields.slug}>
                  <Button color="info">Case Study</Button>
                </Link>
              </div>
            </div>
          </div>
      </Col>
    )
}

export default PortfolioCard