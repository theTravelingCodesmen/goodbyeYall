'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AirportDropdown from '../containers/airportDropdown';

class NavBar extends React.Component{
  componentWillMount(){
    localStorage.setItem('originairport', (localStorage.getItem('originairport')|| "HOUA-sky"));
  }
  render(){
    return (
    <div className="container">
      <Navbar className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand className="logo">
            <LinkContainer to={{pathname:'/'}}><div><img src='/assets/images/logo.png'/><div>GoodbyeYall</div></div></LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer className="navbar-button" to={{pathname:'/HowItWorks'}}><NavItem eventKey={2} href="#">How it Works</NavItem></LinkContainer>
          <LinkContainer className="navbar-button" to={{pathname:'/MeetTheDevs'}}><NavItem eventKey={3} href="#">Meet the Devs</NavItem></LinkContainer>
          <NavDropdown className="navbar-button" eventKey={3} title="Travel Packages" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><LinkContainer to={{pathname:'/Package/Seven Wonders'}} className="navbar-button"><div>Seven Wonders</div></LinkContainer></MenuItem>
            <MenuItem eventKey={3.2}><LinkContainer to={{pathname:'/Package/Seven Natural Wonders'}} className="navbar-button"><div>Seven Natural Wonders</div></LinkContainer></MenuItem>
            <MenuItem eventKey={3.3}><LinkContainer to={{pathname:'/Package/Global Explorer'}} className="navbar-button"><div>Global Explorer</div></LinkContainer></MenuItem>
            <MenuItem eventKey={3.4}><LinkContainer to={{pathname:'/Package/American Cities'}} className="navbar-button"><div>American Cities</div></LinkContainer></MenuItem>
          </NavDropdown>
          <AirportDropdown / >
          <LinkContainer className="navbar-button" to={{pathname:'/Preferences'}}><NavItem eventKey={4} href="#">Preferences</NavItem></LinkContainer>
          <LinkContainer className="navbar-button" to={{pathname:'/login'}}><NavItem eventKey={2} href="#"><img src="/assets/images/facebookLoginBtn.png" /></NavItem></LinkContainer>
        </Nav>
      </Navbar>
      {this.props.children}
    </div>
  )};
};

export default NavBar;
