'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem }from 'react-bootstrap';
import MissionStatement from './missionStatement';
import { Link } from 'react-router';


class NavBar extends React.Component{
  render(){

    return (
    <Navbar className="navbar-fixed-top">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">GoodByeYall </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}>Home</NavItem>
        <Link to='/mission' className='btn'><NavItem eventKey={2} href="#">How it Works</NavItem></Link>
        <NavItem eventKey={3} href="#">Meet the Devs</NavItem>
        <NavDropdown eventKey={3} title="Travel Packages" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Seven Wonders of the World</MenuItem>
          <MenuItem eventKey={3.2}>Seven Natural Wonders of the World</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

  )};
};

export default NavBar;



          // <MenuItem divider />
          // <MenuItem eventKey={3.3}>Separated link</MenuItem>
