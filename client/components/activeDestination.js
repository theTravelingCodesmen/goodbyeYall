'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import D3CacheGraph from './d3CacheGraph';
import FlightData from './flightData';
import { connect } from 'react-redux';
import numberToMonth from '../helper/number_to_month';
import airportToCity from '../helper/airport_to_city';


class ActiveDestination extends React.Component {
	
	render() {
		return(	
			<div className='active-photo-container' style={{'backgroundImage': 'url(' + this.props.next_image_url + ')'}}>
				<div className='intro'>
					<h3>{this.props.city_name + ', ' + this.props.country}</h3>
					<p> {this.props.intro}</p>
				</div>
				<div className='flight-info-container'>
					<FlightData airport_code={this.props.airport_code}/>
					<div className='flight-details'>
						<p className='dates'>{'Leaving ' + airportToCity[localStorage.getItem('originairport')] + ' on ' + numberToMonth[this.props.bookingDetails.outboundDate.slice(5,7)] + ' ' + this.props.bookingDetails.outboundDate.slice(8,10) + ' and returning on ' + numberToMonth[this.props.bookingDetails.inboundDate.slice(5,7)] + ' ' + this.props.bookingDetails.inboundDate.slice(8,10)}</p>
						<h3 className='active-price'>{this.props.bookingDetails.price.toFixed(2)}</h3>
						<p className='time-ago'>{Math.round((Date.now() - new Date(this.props.bookingDetails.created_at))/(60*60*1000)) + ' hours ago'}</p>
						<a className='btn btn-primary' href={this.props.bookingDetails.deepLink} target='_blank'>BUY NOW</a>
						<div>
							<p>Powered By</p><img src="/assets/images/Skyscanner-Logo-Charcoal.png"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ActiveDestination;
/*<p className="historical-weather"> Average temperature for this period: hi {this.props.temperatures.high}&deg;F low {this.props.temperatures.low}&deg;F</p>*/
