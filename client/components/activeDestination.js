'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './intro'
import D3CacheGraph from './d3CacheGraph'
import FlightData from './flightData'

class ActiveDestination extends React.Component {
	render() {
		return(	
			<div className='row active-photo-container'>
				<Intro />
				<D3CacheGraph />
				<FlightData />
			</div>

		)
	}
}

export default ActiveDestination;
