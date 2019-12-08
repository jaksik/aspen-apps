import React from "react"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
import '../styles/index.css'

const AboutPage = () => {

    return (
        <Layout>

            <SEO title="About" keywords={[`aspen`, `applications`, `web`, `mobile`, `app`, `development`]} />
            <div className="page-container">
                <Row className="no-gutters mt-5 mb-5">
                    <Col xs="12" xl="6">
                    <h2 className="red-font page-title">Our Mission</h2>
                    <p className="page-text pr-xl-2">
                        To provide our clients with the tools they need to stay competitive in the digital ecosystem, and nothing that they don't need.
                    </p>
                    </Col>
                    <div className="w-100"></div>
                    <Col xs="12" xl="6">
                        <h2 className="red-font page-title">Inspired by Nature, Driven by Passion</h2>
                        <p className="page-text pr-xl-2">
                            At Aspen Apps, we strive to make all of our products as simple and elegant as nature its self.
                        We believe that technology should be created as an intuitive tool that makes life easier. Not something that is complex and creates confusion.
                        We're also passionate about helping people, their business, and ultimately their quality of life. That's why we focus on providing our clients with the tools they need 
                        to stay competitive in the digital age and nothing that they don't need.
                        </p>
                    </Col>
                    <Col xs="12" xl="6">
                        <h2 className="red-font page-title">Founded by Connor Jaksik</h2>
                        <p className="page-text">
                            In 2005, Connor Jaksik wrote his first lines of code. Well, if you've ever used MySpace chances are you've written code as well.
                            However, instead of stopping after making the coolest portfolio ever, Connor started learning how to make his own websites.
                            He became obsessed with the idea that he could essentially talk to the computer through code and create any kind of application that he wanted.
                            Realizing the power and potential of this he's been passionate about keeping up with the latest technological trends ever since.
                            Fast forward to 2019, Connor began to realize how out dated many websites are for the local businesses in his community.
                            Putting his knowledge and skills to work, he founded Aspen Applications LLC, a web and mobile app development business that focusses
                            on providing its clients with the latest and greatest technology to stay competitive in the digital age and nothing that they don't need.
                        </p>
                    </Col>
                </Row>
            </div>

            <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

        </Layout>
    )
}

export default AboutPage
