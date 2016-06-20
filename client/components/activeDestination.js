'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import D3CacheGraph from './d3CacheGraph';
import FlightData from './flightData';
import { connect } from 'react-redux';


class ActiveDestination extends React.Component {
	
	render() {
		return(	
			<div className='active-photo-container' style={{'backgroundImage': 'url(' + this.props.next_image_url + ')'}}>
				<div className='intro'>
					<h3>{this.props.city_name + ', ' + this.props.country}</h3>
					<p> {this.props.intro}</p>
				</div>
				<FlightData />
			</div>
		)
	}
}

export default ActiveDestination;
