import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./portfolio-card.css"

function PortfolioCard ({ projectData, key}) {
    return (
      <Col xs="6" sm="6">
        <div className="card-wrapper">
          <div className="card-border">
          <Link to={projectData.fields.slug} style={{textDecoration:`none`}}>
            <div style={{position:`relative`, overflow:`hidden`}} className="portfolio-container">
              <div className="portfolio-overlay" style={{position:`absolute`}}>
                <h3 className="card-title card-lg-title mb-0 d-none d-xl-block" style={{color:`white`}}>{projectData.frontmatter.title}</h3>
              </div>
              <Img style={{position:`absolute`, width: `100%`, height:`100%`}} fluid={projectData.frontmatter.image.childImageSharp.fluid}/>
            </div>
            <h5 className="card-title mb-0 p-2 d-xl-none">{projectData.frontmatter.title}</h5>
          </Link>
          </div>
        </div>
      </Col>
    )
}

export default PortfolioCard