import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
  class Mainnav extends React.Component {
    constructor(props) {
      super(props);
      console.log("props", props)
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
        <div style={{color:`black`}} style={{zIndex:`3`}}>
          <Navbar className="text-black" color="light" light expand="md">
            <div style={{maxWidth:`2000px`, width:`100%`, margin:`0 auto`, display:`flex`}}>
            <div className="nav-container">

            <NavbarBrand className="font-weight-bold" href="/" style={{color:`#f03517`}}>{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar >
                <NavItem>
                  <NavLink style={{color:`black`}} href="/web-design/">Web Design</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/our-work/">Work</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/process/">Process</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/about/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="end-navitem" style={{color:`black`}} href="/contact/">Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
            </div>
          </Navbar>
        </div>
      );
    }
  }


export default Mainnav