import React from "react"
import { Link } from "gatsby"
import { Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./portfolio-card.css"

function PortfolioCard ({ projectData, key}) {
    return (
      <Col xs="6" sm="6" style={{height:`200px`, overflow:`hidden`}} className="p-3">
        <Link to={projectData.fields.slug}>
          <div className="portfolio-container">
            <div className="portfolio-overlay"></div>
            <Img style={{zIndex: `1`, width: `100%`}} fluid={projectData.frontmatter.image.childImageSharp.fluid}/>
            <h5 className="card-title">{projectData.frontmatter.title}</h5>
          </div>
        </Link>
      </Col>
    )
}

export default PortfolioCard