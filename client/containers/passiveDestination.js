'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveDestination } from '../actions/setActiveDestination';


class PassiveDestination extends React.Component {
	render() {
		return(	
			<img className='chichen' src={this.props.main_image_url} onClick={()=>this.props.setActiveDestination(this.props._id)}/>
		) 
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setActiveDestination: setActiveDestination }, dispatch);
}

export default connect(null, mapDispatchToProps)(PassiveDestination);
