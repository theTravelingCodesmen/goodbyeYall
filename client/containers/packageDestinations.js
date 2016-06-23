'use strict'
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import PassiveDestination from './passiveDestination';
import ActiveDestination from '../components/activeDestination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {FETCH_PACKAGE, fetchPackage} from '../actions/fetchPackage';

// this componenet need to listen to the state.
// in the initial state, it should render the hard coded data

class PackageDestinations extends React.Component {
	componentWillMount(){
		return axios.get(`/packages/selectpackage/${this.props.package_name}`)
	}
	render() {
		return(
			<div className='package-view'>
				<div className='photo-roll' >
				{
					this.props.passive.map( (dest, i) => {
						return <PassiveDestination 
							key={i}
							_id = {dest.id}
							main_image_url = {dest.main_image_url}
							price = {dest.bookDetails.price}
						/>
					})
				}
				</div>

					{
						this.props.active.map( (dest, i) => {
							return <ActiveDestination 
								key={i}
								_id = {dest.id}
								title={dest.title} 
								airport_code={dest.airport_code} 
								country={dest.country} 
								city_name={dest.city_name} 
								intro={dest.intro} 
								package_group={dest.package_group} 
								next_image_url={dest.next_image_url}
								bookingDetails={dest.bookDetails}
							/>
						})
					}

			</div>
		)
	}
}


function mapDispatchToProps( dispatch ){
	return bindActionCreators({fetchPackage: fetchPackage}, dispatch)
}

export default connect(null, mapDispatchToProps)(PackageDestinations);
