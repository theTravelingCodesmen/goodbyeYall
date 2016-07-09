'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveDestination } from '../actions/setActiveDestination';


class PassiveDestination extends React.Component {
	render() {
		return(	
			<div className='passive-photo' onClick={()=>this.props.setActiveDestination(this.props._id)} style={{'backgroundImage': 'url(' + this.props.main_image_url + ')'}}>
				<span className='passive-price'>{"$" + Math.round(this.props.price)}</span>
			</div>
		) 
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setActiveDestination: setActiveDestination }, dispatch);
}

// 'export' is for enzyme testing, 'export default' is for regular react functionality
export { PassiveDestination, setActiveDestination }

export default connect(null, mapDispatchToProps)(PassiveDestination);