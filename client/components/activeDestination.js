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
				<div className='col-md-6 flight-details'>
					<h3>{this.props.bookingDetails.price}</h3>
					<a className='btn btn-primary' href={this.props.bookingDetails.deepLink} target='_blank'>BUY NOW</a>
				</div>
				<FlightData />
			</div>
		)
	}
}

export default ActiveDestination;
