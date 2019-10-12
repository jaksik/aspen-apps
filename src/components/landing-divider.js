import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "reactstrap"

const landingDivider = ({ title, subtitle, button}) => (
    <Row className="no-gutters justify-content-center mt-5 mb-5">
      <h6>{title}</h6>
      <div className="w-100"></div>
      <h4>{subtitle}</h4>

      <Col xs="12" className="mb-4">
        <div style={{position:`relative`, width:`100%`}}>
          <div className="divider"></div>
          <Row className="no-gutters justify-content-center">
            <Link to="/portfolio">
              <Button className="divider-button">{button}</Button>
            </Link>
          </Row>
        </div>
      </Col>
    </Row>
)

export default landingDivider