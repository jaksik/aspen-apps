import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "reactstrap"

const landingDivider = ({ button, address }) => (
    <Row className="no-gutters justify-content-center divider-row">
      <Col xs="12">
        <div style={{position:`relative`, width:`100%`}}>
          <div className="divider-line"></div>
          <Row className="no-gutters justify-content-center">
            <Link to={address}>
              <Button size="lg" className="divider-button font-weight-light pl-5 pr-5">{button}</Button>
            </Link>
          </Row>
        </div>
      </Col>
    </Row>
)

export default landingDivider