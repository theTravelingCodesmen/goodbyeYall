'use strict'

import React from 'react';
import {Button} from 'react-bootstrap';

class Logout extends React.Component{
	render(){
		return (
			<Button onClick={this.props.onClick} className="pull-right btn btn-danger">logout</Button>
		)
	}
}


export default Logout;