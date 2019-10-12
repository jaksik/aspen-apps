import React from "react"
import "./navbar.css"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
  
  class Mainnav extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div style={{color:`white`}} style={{zIndex:`3`}}>
          <Navbar className="text-white" color="light" light expand="md">
            <NavbarBrand className="start-navitem" href="/" style={{color:`black`}}>{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar >
              <NavItem>
                  <NavLink style={{color:`black`}} href="/portfolio/">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/services/">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/process/">Process</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink style={{color:`white`}} href="/company/">Company</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/news/">News</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink className="end-navitem" style={{color:`black`}} href="/contact/">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


export default Mainnav