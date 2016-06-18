'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedDestination } from '../actions/selectDestination';


class PassiveDestination extends React.Component {
	render() {
		return(	
			//change className to passiveDestination - then do CSS stuff
			<img className='chichen' src={this.props.main_image_url} onClick={(()=>console.log(this.props._id))}/>
		) 
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectedDestination }, dispatch);
}

// function mapStateToProps(state){
// 	return { destination: state.props }
// }
export default connect(null, mapDispatchToProps)(PassiveDestination);
