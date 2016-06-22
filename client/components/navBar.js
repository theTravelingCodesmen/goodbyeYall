'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends React.Component{
  render(){
    return (
    <div className="container">
      <Navbar className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to={{pathname:'/'}}><div>GoodByeYall </div></LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{pathname:'/how'}}><NavItem eventKey={2} href="#">How it Works</NavItem></LinkContainer>
          <LinkContainer to={{pathname:'/meetthedevs'}}><NavItem eventKey={3} href="#">Meet the Devs</NavItem></LinkContainer>
          <NavDropdown eventKey={3} title="Travel Packages" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><LinkContainer to={{pathname:'/package/seven-wonder'}}><div>Seven Wonders of the World</div></LinkContainer></MenuItem>
            <MenuItem eventKey={3.2}><LinkContainer to={{pathname:'/package/seven-natural-wonder'}}><div>Seven Natural Wonders of the World</div></LinkContainer></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      {this.props.children}
    </div>


  )};
};

export default NavBar;



          // <MenuItem divider />
          // <MenuItem eventKey={3.3}>Separated link</MenuItem>