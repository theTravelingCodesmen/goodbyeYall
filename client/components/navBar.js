'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends React.Component{
  componentWillMount(){
    localStorage.setItem('originairport', (localStorage.getItem('originairport')|| "HOUA-sky"));
  }
  handleSelect(airport) {
    localStorage.setItem('originairport', airport);
    // alert(`selected ${airport}`);
  }
  render(){
    return (
    <div className="container">
      <Navbar className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand className="logo">
            <LinkContainer to={{pathname:'/'}}><div>GoodbyeYall</div></LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer className="navbar-button" to={{pathname:'/How it Works'}}><NavItem eventKey={2} href="#">How it Works</NavItem></LinkContainer>
          <LinkContainer className="navbar-button" to={{pathname:'/Meet the Devs'}}><NavItem eventKey={3} href="#">Meet the Devs</NavItem></LinkContainer>
          <NavDropdown className="navbar-button" eventKey={3} title="Travel Packages" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><LinkContainer to={{pathname:'/package/Seven Wonders'}} className="navbar-button"><div>Seven Wonders</div></LinkContainer></MenuItem>
            <MenuItem eventKey={3.2}><LinkContainer to={{pathname:'/package/Seven Natural Wonders'}} className="navbar-button"><div>Seven Natural Wonders</div></LinkContainer></MenuItem>
          </NavDropdown>
          <NavDropdown className="navbar-button" eventKey={4} title="Set your airport" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1} onClick={this.handleSelect.bind(null, "DFWA-sky")}><div className="navbar-button">DFWA-sky</div></MenuItem>
            <MenuItem eventKey={4.2} onClick={this.handleSelect.bind(null, "HOUA-sky")}><div className="navbar-button">HOUA-sky</div></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      {this.props.children}
    </div>
  )};
};

export default NavBar;