import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './footer.css'

const Footer = () => (
        <Row className="no-gutters pt-md-3 footer-wrapper pt-3">
            {/* <Col xs="12" lg="2" className="offset-xl-0">
                <Row className="no-gutters justify-content-center" style={{margin:`20px auto`}}>
                    <img className="footer-graphic" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="footer-graphic" src="https://image.flaticon.com/icons/png/512/33/33702.png"/>
                    <img className="footer-graphic" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="footer-graphic" src="https://image.flaticon.com/icons/png/512/33/33702.png"/>
                </Row>
            </Col> */}

            {/* <Col xs="11" className="offset-1 align-self-start mt-2 mb-5">
                <h2>Aspen Applications LLC</h2>
            </Col> */}

            <Col xs="12" className="align-self-center">
                <Row className="no-gutters">
                    
                    <Col xs="11" md="3" className="offset-1">
                        <h5>420 Summit Blvd <br/>
                            Silverthorne, CO 80223
                        </h5>
                    </Col>

                    <Col xs="11" md="3" className="offset-1 offset-md-0">
                        <h5>970-777-7777<br/>
                        info@aspenapps.com</h5>
                    </Col>


                    <Col xs="12" md="4" lg="3">
                        <Row className="no-gutters justify-content-center">
                            {/* <Link to="/support">
                                <Button className="mr-2 support-button">Support</Button>
                            </Link> */}

                            <Link to="/payments">
                                <Button className="green-button">Payments</Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col xs="12" className="align-self-end">
                <p style={{textAlign:`center`, fontSize:`13px`}} className="mb-0 mt-4 pb-3 pt-2">© 2019 Aspen Applications LLC All Rights Reserved. Here's our Privacy Policy.</p>
            </Col>
        </Row>
)

export default Footer