import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './footer.css'

const Footer = () => (
    <div className="footer-wrapper">

        {/* Form Row */}
        {/* <Row className="no-gutters">
            <Col xs="12" md="3" className="offset-md-1">
                <h2 style={{textAlign:`center`}}>Go ahead, ask us anything!</h2>
                <p className="footer-text">Anything at all.</p>
            </Col>

            <Col xs="12" md="8">
                <Row className="no-gutters">
                    <Form inline>
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input className="footer-input"  type="text" name="first" id="firstName" placeholder="First Name *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input type="text" name="last" id="lastName" placeholder="Last Name *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="5">
                            <FormGroup>
                                <input type="email" name="email" id="exampleEmail" placeholder="Email *" className="footer-input"/>
                            </FormGroup>
                        </Col>
                            {' '}
                        <Col xs="12" md="10">
                            <Row className="no-gutters justify-content-center justify-content-xs-start">
                                <Button color="success" style={{margin:`20px`, width: `150px`}}>Submit</Button>
                            </Row>
                        </Col>
                    </Form>
                </Row>
            </Col>
        </Row> */}

        {/* <Row className="no-gutters">
            <div style={{borderBottom:`1px solid white`, width:`80%`, margin:`0 auto 30px`, color:`blue`}}>.</div>
        </Row> */}

        {/* Social Row */}
        <Row className="no-gutters pt-md-3">
            <Col xs="12" lg="2" className="offset-md-1">
                <Row className="no-gutters justify-content-center" style={{margin:`20px auto`}}>
                    <img className="footer-graphic" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="footer-graphic" src="https://image.flaticon.com/icons/png/512/33/33702.png"/>
                    <img className="footer-graphic" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="footer-graphic" src="https://image.flaticon.com/icons/png/512/33/33702.png"/>
                </Row>
            </Col>

            <Col xs="11" md="2" className="offset-1 offset-lg-0">
                <p>420 Summit Blvd <br/>
                    Frisco, CO 80223
                </p>
            </Col>

            <Col xs="11" md="2" className="offset-1 offset-lg-0">
                <p>777-777-7777</p>
                <p>info@summitweb.com</p>
            </Col>


            <Col xs="12" md="4">
              <Row className="no-gutters justify-content-center">
                <Link to="/support">
                    <Button className="green-button mr-2">Support</Button>
                </Link>

                <Link to="/payments">
                    <Button>Payments</Button>
                </Link>
              </Row>
            </Col>
        </Row>
        <p style={{textAlign:`center`, padding:`50px`, marginBottom:`0`}}>© 2019 Connor Jaksik All Rights Reserved. Here's our Privacy Policy.</p>
    </div>
)

export default Footer