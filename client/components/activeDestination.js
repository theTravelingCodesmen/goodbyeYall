'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import D3CacheGraph from './d3CacheGraph'
import FlightData from './flightData'

class ActiveDestination extends React.Component {
	render() {
		return(	
			<div className='row active-photo-container'>
			<div className='intro'>
				<h3>{this.props.city_name + ', ' + this.props.country}</h3>
				<p> {this.props.intro}</p>
			</div>
				<D3CacheGraph />
				<FlightData />
			</div>

		)
	}
}

export default ActiveDestination;
