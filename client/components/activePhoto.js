'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '../components/intro'
import D3CacheGraph from '../components/d3CacheGraph'
import FlightData from '../components/flightData'

class ActivePhoto extends React.Component {
	render() {
		return(	
			<div className={this.props.className}  >
				<Intro className={'intro'} />
				<D3CacheGraph className='d-three-cache' />
				<FlightData className='flight' />
			</div>

		)
	}
}

export default ActivePhoto;
