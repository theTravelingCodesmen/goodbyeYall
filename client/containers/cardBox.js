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
		console.log('line 21 containers/cardBox.js this.props.params.package_name', this.props.params.package_name);
		return axios.get(`/packages/selectpackage/${this.props.params.package_name}`)
			.then(function(data){
				console.log(data)
				let INITIAL_STATE = {};
				INITIAL_STATE.active = data.data.slice(0,1);
				INITIAL_STATE.passive = data.data.slice(1);
				return INITIAL_STATE;
			})
			.then(this.props.fetchPackage)
			.catch(err=>console.log(err))
			///add closeDb function at end
	}
	componentDidUpdate(){
		console.log('line 35 containers/cardBox.js this.props.params.package_name', this.props.params.package_name);
		return axios.get(`/packages/selectpackage/${this.props.params.package_name}`)
			.then(function(data){
				console.log(data)
				let INITIAL_STATE = {};
				INITIAL_STATE.active = data.data.slice(0,1);
				INITIAL_STATE.passive = data.data.slice(1);
				return INITIAL_STATE;
			})
			.then(this.props.fetchPackage)
			.catch(err=>console.log(err))
			///add closeDb function at end
	}
	render() {
		console.log('line 49 containers/cardBox.js params of package/:package_name', this.props.params.package_name);
		return(			
			<div className='seven-view'>
				<CardTitle title={this.props.package_name} className='card-title' /> 
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