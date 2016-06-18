'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import PassiveDestination from './passiveDestination'
import ActiveDestination from '../components/activeDestination'
// import FetchDestinations from '../components/destinationsFetch'

import { connect } from 'react-redux';

// this componenet need to listen to the state.
// in the initial state, it should render the hard coded data

class PackageDestinations extends React.Component {
	
	componentWillMount(){
		//db call to render stored info...
	}


	render() {
		return(
			<div className='row' className='photo-roll'>
				<div className='photo-roll' >
				{
					this.props.passive.map(function(dest, i){
						return <PassiveDestination 
							key={i}
							_id = {dest.id}
							main_image_url = {dest.main_image_url}
						/>
					})
				}
				</div>
				<div>
					{
						this.props.active.map(function(dest, i){
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
							/>
						})
					}
				</div>
			</div>
		)
	}

}


function mapStateToProps ( state ){
	return {
		passive: state.destinations.passive,
		active: state.destinations.active
	}
}



export default connect(mapStateToProps)(PackageDestinations);
