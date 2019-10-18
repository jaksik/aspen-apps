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
            <NavbarBrand className="start-navitem font-weight-bold" href="/" style={{color:`#f03517`}}>{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar >
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                       <a style={{ color: `black` }}>Services</a>
                    </DropdownToggle>
                    <DropdownMenu>
                        <Link to="services/website-design" className="nav-item">
                            <DropdownItem>
                                Website Desgin
                            </DropdownItem>
                        </Link>
                        <Link to="services/website-maintenance" className="nav-item">
                            <DropdownItem>
                                Website Maintenance
                            </DropdownItem>
                        </Link>
                        {/* <Link to="services/app-development" className="nav-item">
                            <DropdownItem>
                                Application Development
                            </DropdownItem>
                        </Link> */}
                        <Link to="services/custom-coding" className="nav-item">
                            <DropdownItem>
                                Custom Coding
                            </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/portfolio/">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/process/">Process</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink style={{color:`black`}} href="/company/">Company</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`black`}} href="/news/">News</NavLink>
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