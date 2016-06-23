'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PackageDestinations from './packageDestinations'
import axios from 'axios'
import {createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {FETCH_PACKAGE, fetchPackage} from '../actions/fetchPackage'

const createStoreWithMiddleware = applyMiddleware(
	promise
	)(createStore);

class CardBox extends React.Component {
	componentWillMount(){
		this.setState({'cachedAirport': localStorage.getItem('originairport')});
		this.props.fetchPackage(`${this.props.params.package_name}`)
	}
	componentDidUpdate(){
		console.log(this.state.cachedAirport);
		if (this.props.params.package_name !== this.props.package_name){
			this.props.fetchPackage(`${this.props.params.package_name}`)
		}
	}
	render() {
		console.log('line 49 containers/cardBox.js params of package/:package_name', this.props.params.package_name);
		return(			
			<div className='seven-view'>
				<CardTitle title={this.props.package_name} /> 
				<PackageDestinations  active={this.props.active} passive={this.props.passive} package_name={this.props.params.package_name} className='row' />
			</div>
		)
	}
}

function mapStateToProps ( state ){
	return {
		passive: state.destinations.passive,
		active: state.destinations.active,
		package_name:state.destinations.package_name
	}
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({fetchPackage: fetchPackage}, dispatch)
}


 
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);