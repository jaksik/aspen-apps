import React from 'react'
import { Link } from "gatsby"
import { Row, Col, Button } from 'reactstrap';
import './footer.css'

const Footer = () => (
    <div className="footer-wrapper">
        <div className="footer-container pb-0">
            <Row className="no-gutters" style={{ minHeight: `20vh` }}>
                <Col xs="12" sm="4" lg="3">
                    <h3 className="footer-title">About Us</h3>
                    <Link className="footer-item" to="/about/"><p>Our Sory</p></Link>
                    <Link className="footer-item" to="/contact/"><p>Contact Us</p></Link>
                    <Link className="footer-item" to="/legal/cookie-policy/"><p>Cookie Policy</p></Link>
                    <Link className="footer-item" to="/legal/privacy-policy/"><p>Privacy Policy</p></Link>
                </Col>

                <Col xs="12" sm="4" lg="3">
                    <h3 className="footer-title">Our Services</h3>
                    <Link className="footer-item" to="/web-design/"><p>Web Design</p></Link>
                    <Link className="footer-item" to="/consulting/"><p>Tech Consulting</p></Link>
                </Col>

                <Col xs="12" md="4" lg="3">
                    <h3 className="footer-title">Connect</h3>
                    <p className="footer-item">720-469-9516</p>
                    <p className="footer-item">connorjaksik@gmail.com</p>
                    <p className="footer-item">Boulder, CO</p>
                </Col>

            </Row>

            <Row className="no-gutters mt-5">
                <Col xs="12">
                    <p style={{ textAlign: `center`, fontSize: `13px`, width: `100%`, bottom: `0` }} className="mt-5 mt-md-0 mb-0">© 2019 Aspen Applications All Rights Reserved.</p>
                </Col>
            </Row>
        </div>

    </div>
)

export default Footer