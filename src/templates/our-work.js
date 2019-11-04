import React from "react"
import { graphql, Link} from "gatsby"
import { Row, Col } from "reactstrap"
import PortfolioCard from "../components/portfolio-card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider-button"
export default ({ data }) => {
  const projects = data.markdownRemark.frontmatter.projects
  console.log("info: ", data);

  return (
    <Layout>
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />        
        <div className="page-container">
            <h1 className="red-font page-title" style={{textAlign:`center`}}>Our Work</h1>
            <Row className="no-gutters">
                {projects.map((project, index) => {
                    console.log("project on work: ", project)
                    return (
                        <PortfolioCard project={project} key={index} cardKey={index}/>             
                    )
                })}
            </Row>
            <Row className="no-gutters">
       <Col xs="12" xl="6" className="pr-3">
            <h2 className="red-font page-title">Let's Build Something Great Together</h2>
            <p className="page-text pr-xl-2">We love web design and building websites. But we hate haggling. That's why we're going to break from tradition and just tell you our prices. Almost no other web developers list prices on their websites, which we think is kind of obnoxious of them. Makes it hard for you, the customer, to shop. <Link to="/web-design/">Web Design</Link> </p>
            
          </Col>
          <Col xs="12" xl="6">
          <h2 className="red-font page-title">Our Process</h2>
            <p className="page-text">Uniquely, we provide free, no-obligation web designs. We won't let you hire us until you're in love with your new website design. That's the only way we know of to guarantee a happy client every time. It also eliminates any risk of you hiring us and not getting what you want. <Link to="about">See Our Process</Link> </p>
         
          </Col>
       </Row>
        </div>
     
        <Divider title="PORTFOLIO" subtitle="Need Proof?" button="Contact Us" address="/contact" />

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        projects {
            description
            address
            image {
                childImageSharp {
                  fluid(maxWidth: 786) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            title
        }
      }
    }
  }
`