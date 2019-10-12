import React from "react"
import { Link } from "gatsby"
import { Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./portfolio-card.css"

function PortfolioCard ({ projectData, key}) {
  console.log("port card: ", projectData)
    return (
      <Col xs="12" sm="6" md="4" style={{height:`200px`, overflow:`hidden`}}>
          <div style={{position:`relative`}}>
            <Img style={{zIndex: `1`, position:`absolute`, width: `100%`}} fluid={projectData.frontmatter.image.childImageSharp.fluid}/>
            <div className="portfolio-overlay">
              <div style={{margin:`50px 20px`}}>
                  <h5 style={{color:`white`}}>{projectData.frontmatter.title}</h5>
                  <Link to={projectData.fields.slug}>
                  <Button className="green-button">Case Study</Button>
                </Link>
              </div>
            </div>
          </div>
      </Col>
    )
}

export default PortfolioCard