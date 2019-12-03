import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import './footer.css'

const Footer = () => (
    <div className="footer-wrapper">
        <div className="footer-container pb-0">
            <Row className="no-gutters" style={{ minHeight: `20vh` }}>
                <Col xs="12" md="5" lg="3">
                    <h6 className="footer-item">
                        Silverthorne, CO
                        <br/>
                        Elevation: 9,035'
                    </h6>
                </Col>
                <Col xs="12" md="5" lg="3">
                    <h6 className="footer-item">
                        720-469-9516
                        <br />
                        connorjaksik@gmail.com
                    </h6>
                </Col>
                <Col xs="12" md="2" lg="2" className="offset-lg-4 ">
                    <Button className="green-button payment-button btn-lg footer-item">Payments</Button>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col xs="12">
                    <p style={{ textAlign: `center`, fontSize: `13px`, width: `100%`, bottom: `0` }} className="mt-5 mt-md-0">© 2019 Aspen Applications LLC All Rights Reserved. Here's our Privacy Policy.</p>

                </Col>
            </Row>
        </div>

    </div>
)

export default Footer