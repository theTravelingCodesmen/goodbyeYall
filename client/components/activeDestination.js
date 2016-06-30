'use strict'

import React from 'react';
import D3CacheGraph from './d3CacheGraph';
import FlightData from './flightData';
import { connect } from 'react-redux';
import numberToMonth from '../helper/number_to_month';
import airportToCity from '../helper/airport_to_city';
import BootStrapModal from './bootstrapModals';


class ActiveDestination extends React.Component {
	

	_countryButtonOrBust() {

		if(this.props.country === 'United States'){
			return ''
			}
		else {
			return(
			<BootStrapModal bTitle='IMPORTANT! Country Travel info' popoverLink={''}>

			<div>Languages: {this.props.lang.map(obj => {
				return <div>{obj.language}</div>
			}) }
			</div>
			<div>Electric Plugs: {this.props.plugs.map(element => {
				return <div>{element}</div>
			}) }</div>
			<div>Calling Code: {this.props.callingCode}</div>
			<div>Vaccinations: {this.props.vaccinations.map(obj => {
				return <p> {obj.name}</p>
			})  }
			</div>
			<div>Currecny Name: {this.props.currencyName }</div>
			<div>currencyRate/USD: {this.props.currencyRate}</div>
			<div>Water Saftey:{this.props.water}</div>
		</BootStrapModal>
			)
		}
	}




	render() {
		return(	
			<div className='active-photo-container' style={{'backgroundImage': 'url(' + this.props.next_image_url + ')'}}>
				<div className='intro'>
					<h1 className='destination-name'>{this.props.title}</h1>
					<h3 className='destination-location'>{this.props.city_name}</h3>
					<p className='destination-info'> {this.props.intro}</p>
				</div>
				<div className='flight-info-container'>
					<FlightData airport_code={this.props.airport_code}/>
					<div className='flight-details'>
						<p className='dates'>{'Leaving ' + airportToCity[localStorage.getItem('originairport')] + ' ' + numberToMonth[this.props.bookingDetails.outboundDate.slice(5,7)] + ' ' + this.props.bookingDetails.outboundDate.slice(8,10) + ' and returning ' + numberToMonth[this.props.bookingDetails.inboundDate.slice(5,7)] + ' ' + this.props.bookingDetails.inboundDate.slice(8,10)}</p>
						<h3 className='active-price'>{this.props.bookingDetails.price.toFixed(2)}</h3>
						<p className='time-ago'>{Math.round((Date.now() - new Date(this.props.bookingDetails.created_at))/(60*60*1000)) + ' hours ago'}</p>
						<a className='btn btn-primary' href={this.props.bookingDetails.deepLink} target='_blank'>BUY NOW</a>
						<div>
							<a href="https://www.skyscanner.net" target="_blank"><p>Powered By</p><img src="/assets/images/Skyscanner-Logo-Charcoal.png"/></a>
						</div>
							{this._countryButtonOrBust()}
					</div>
				</div>
			</div>
		)
	}
}

export default ActiveDestination;
/*<p className="historical-weather"> Average temperature for this period: hi {this.props.temperatures.high}&deg;F low {this.props.temperatures.low}&deg;F</p>*/





