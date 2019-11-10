import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import "./portfolio-card.css"

function PortfolioCard ({ project, cardKey}) {
  console.log("project: ", project)
  return (
    <Col xs="12" sm="6">
      <div style={{padding:(cardKey % 2 === 0 ? `10px 10px 10px 0px` : `10px 0px 10px 10px`)}}>
        <div className="card-border">
        <a href={project.address} style={{textDecoration:`none`}}>
          <div style={{position:`relative`, overflow:`hidden`}} className="portfolio-container">
            <div className="portfolio-overlay" style={{position:`absolute`}}>
              {/* <h3 className="card-title card-lg-title mb-0 d-none d-xl-block" style={{color:`white`}}>{project.title}</h3> */}
            </div>
            <Img style={{position:`absolute`, width: `100%`, height:`100%`}} fluid={project.image.childImageSharp.fluid}/>
          </div>
          <h5 className="card-title mb-0 p-2">{project.title}</h5>
          <p className="page-text" style={{color:`black`, margin:`0px 20px 20px`}}>{project.description}</p>
        </a>
        </div>
      </div>
    </Col>
  )
}

export default PortfolioCard