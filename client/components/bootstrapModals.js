'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Popover, Tooltip, Modal, OverlayTrigger, Button, } from 'react-bootstrap';

//  

const BootStrapModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

	render() {

//============================Instructions===============================
//Button Label
// this.props.bTitle

//Dev type (frontend/backend/fullstack)
//this.props.devType

//Languages
//this.props.languages

//Bio
//this.props.bodyText

//Person
//{this.props.person}

//Personal Statement
//{this.props.personalStatement}

//Popover title
//{this.props.popOverTitle}

	  let popover = <Popover title={this.props.popOverTitle}>{this.props.languages}</Popover>;
	  
	  return (
	    <div>
	    	<Button bsSize="small" onClick={this.open}>
	        {this.props.bTitle}
	      </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
        	        <Modal.Header closeButton>
	          <Modal.Title>{this.props.person}</Modal.Title>
	        </Modal.Header>
	        	        <Modal.Body>
	          <h4>{this.props.devType}</h4>
	          <p>{this.props.personalStatement}</p>

	          <h4>Technical Skills</h4>
	          <p>I have used <OverlayTrigger overlay={popover}><a href="#">Coding Languages</a></OverlayTrigger></p>

	          <hr />

	          <h4>This is my story</h4>
	          <p>{this.props.bodyText}</p>
	        </Modal.Body>	

	        <Modal.Footer>
	          <Button onClick={this.close}>Close</Button>
	        </Modal.Footer>

	      </Modal>
	    </div>
	  );
	}


	})
	export default BootStrapModal

	     //not being used 
	  // let tooltip = <Tooltip>wow.</Tooltip>;
	          // <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>