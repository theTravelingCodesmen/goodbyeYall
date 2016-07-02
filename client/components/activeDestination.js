'use strict'

import React from 'react';
import FlightData from './flightData';
import { connect } from 'react-redux';
import numberToMonth from '../helper/number_to_month';
import airportToCity from '../helper/airport_to_city';
import BootStrapModal from './dynamicModals';


class ActiveDestination extends React.Component {
	
	_plugPictureInserter(element) {
		return(
			<div>
				<img className='plug' src={'/assets/images/plugs/' + element.toLowerCase() + '-btn-top.png'}></img>
				<img className='plug' src={'/assets/images/plugs/' + element.toLowerCase() + '-btn-bottom.png'}></img>
			</div>
		)
	}
	_countryButtonOrBust() {
		if(this.props.country === 'United States'){
			return ''
		}
		else {
			return(
			<BootStrapModal item='Travel Information' bTitle={this.props.country + ' Info'} popoverLink={''}>
				<div className='info-block'><div className='aD-modal-title'>Languages: </div>{this.props.lang.map(obj => {
					return <div className='content'>{obj.language}</div>
				}) }
				</div>
				<div className='info-block'><div className='aD-modal-title'>Currency Name: </div>{this.props.currencyName }</div>
				<div className='info-block'><div className='aD-modal-title'>Currency Rate/USD: </div>{ Number(this.props.currencyRate).toFixed(2)}</div>
				<div className='info-block'><div className='aD-modal-title'>Calling Code: </div>{this.props.callingCode}</div>
				<div className='info-block'><div className='aD-modal-title'>Water Consumption: </div>{this.props.water === 'not safe' ? 'Bottled': 'Tap'}</div>
				<div className='info-block'><div className='aD-modal-title'>Vaccinations: </div>{this.props.vaccinations.map(obj => {
					return <div className='content'> {obj.name}</div>
				})  }
				</div>
				<div className='electric-block'>
				<div><div className='aD-modal-title'>Electric Plugs: </div></div><div className='electric-block'>{this.props.plugs.map(element => {
					return <div className='plug'>{element} {this._plugPictureInserter(element)}</div> 
				}) }</div>
				</div>
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
						<div className='test'>
							<a href='https://www.skyscanner.net' target='_blank'><p className='powered-by'>Powered By</p><img className='skyscanner-logo' src='/assets/images/Skyscanner-Logo-Charcoal.png'/></a>
						</div>
						<div className='country-info-button'>
							{this._countryButtonOrBust()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ActiveDestination;
/*<p className="historical-weather"> Average temperature for this period: hi {this.props.temperatures.high}&deg;F low {this.props.temperatures.low}&deg;F</p>*/





