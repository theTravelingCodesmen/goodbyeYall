'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '../components/intro'
import d3CacheGraph from '../components/d3CacheGraph'
import FlightData from '../components/flightData'

class ActivePhoto extends React.Component {
	render() {
		return(	
			<div className={this.props.className} src={'/assets/images/' + this.props.src} >
				<Intro className={'intro'} />
				<d3CacheGraph className={'d-three'} />
				<FlightData className={'flight'} />
			</div>

		)
	}
}

export default ActivePhoto;
