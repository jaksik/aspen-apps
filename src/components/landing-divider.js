import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "reactstrap"

const landingDivider = ({ button, address }) => (
    <Row className="no-gutters justify-content-center mt-5 mb-5 pb-5">

      <Col xs="12">
        <div style={{position:`relative`, width:`100%`}}>
          <div className="divider"></div>
          <Row className="no-gutters justify-content-center">
            <Link to={address}>
              <Button size="lg" className="divider-button">{button}</Button>
            </Link>
          </Row>
        </div>
      </Col>
    </Row>
)

export default landingDivider