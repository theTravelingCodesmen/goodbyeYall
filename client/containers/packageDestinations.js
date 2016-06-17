'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import PassiveDestination from '../components/passiveDestination'
import ActiveDestination from '../components/activeDestination'


class PackageDestinations extends React.Component {
	

// this is an array of objects that needs to have its props assigned to component props


// this function creates an array of componets with the correct props asigned
	findActive() {
		let destinations = this.props.getDestinations()

		return destinations.map( (obj) => {
			if(obj.currentlyActivePhoto){
				return <ActiveDestination 
					key={obj.id}
					title={obj.title} 
					airport_code={obj.airport_code} 
					country={obj.country} 
					city_name={obj.city_name} 
					intro={obj.intro} 
					package_group={obj.package_group} 
					main_image_url={obj.main_image_url} 
					next_image_url={obj.next_image_url}
					currentlyActivePhoto={obj.currentlyActivePhoto}
				/>
			}
		})
	}

	findPassive() {
		// const destinations = getDestinations();
		let destinations = this.props.getDestinations()
		return destinations.map( (obj , i) => {
			if(!obj.currentlyActivePhoto){
				return <PassiveDestination
					key={i} 
					_id = {obj.id}
					title={obj.title} 
					airport_code={obj.airport_code} 
					country={obj.country} 
					city_name={obj.city_name} 
					intro={obj.intro} 
					package_group={obj.package_group} 
					main_image_url={obj.main_image_url} 
					next_image_url={obj.next_image_url}
					currentlyActivePhoto={obj.currentlyActivePhoto}
				/>
			}
		})
	}
	render() {

		const passiveDestinations = this.findPassive();
 		const activeDestination = this.findActive();
		return(
			<div className='row photo-roll'>
				<div className='photo-roll' >
					{passiveDestinations}
				</div>
				<div>
					{activeDestination}
				</div>
			</div>
		)
	}
}

export default PackageDestinations;
