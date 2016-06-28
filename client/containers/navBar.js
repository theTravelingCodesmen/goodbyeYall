'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AirportDropdown from './airportDropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IS_LOGGED_IN, changeLogin } from '../actions/isloggedIn';
import Logout from '../components/logout';



class NavBar extends React.Component{
  componentWillMount(){
    localStorage.setItem('originairport', (localStorage.getItem('originairport')|| "HOUA-sky"));
    console.log(this.props.isLoggedIn + ' line 17')
  }

  logout(){
    alert('logging out')
    localStorage.removeItem('goodbyeyall.fb_id');
    this.props.changeLogin(false);
    window.location.assign('/');
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
          </NavDropdown>
          <AirportDropdown / >
          { this.props.isLoggedIn ? <LinkContainer className="navbar-button" to={{pathname:'/Preferences'}}><NavItem eventKey={4} href="#">Preferences</NavItem></LinkContainer>:null}
         { !this.props.isLoggedIn ? <a href='http://www.facebook.com/dialog/oauth?client_id=1071311906250508&scope=email&response_type=token&redirect_uri=http://localhost:4000/Preferences'>login</a>: <Logout onClick={this.logout.bind(this)}/>}
        </Nav>
      </Navbar>
      {this.props.children}
    </div>
  )};
};

function mapStateToProps ( state ){
  return {
    isLoggedIn: state.isLoggedIn.isLoggedIn
  }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({ changeLogin: changeLogin }, dispatch)
}


 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

//<LinkContainer className="navbar-button" to={{pathname:'http://www.facebook.com/dialog/oauth?client_id=1071311906250508s&scope=email&response_type=token&redirect_uri=http://localhost:4000/Preferences'}}><NavItem eventKey={2} href="#"><img src="/assets/images/facebookLoginBtn.png" /></NavItem></LinkContainer>
