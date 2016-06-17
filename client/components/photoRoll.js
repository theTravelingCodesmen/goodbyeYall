'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import PassiveDestination from './passiveDestination'
import ActiveDestination from './activeDestination'


class PhotoRoll extends React.Component {
	

// this is an array of objects that needs to have its props assigned to component props


// this function creates an array of componets with the correct props asigned
	findActive() {
		const destinations = [
			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/petra.png', next_image_url: 
			'/assets/images/petra.jpeg', currentlyActivePhoto: true
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:3, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   {id:4, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:5, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   {id:6, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:7, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   }
	  ]
		// this._getDestinations();
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
		const destinations = [
			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/petra.png', next_image_url: 
			'/assets/images/petra.jpeg', currentlyActivePhoto: true
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:3, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   {id:4, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:5, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   {id:6, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   },
	   			{id:7, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg', currentlyActivePhoto: false
	   }
	  ]
		// this._getDestinations();
		return destinations.map( (obj) => {
			if(!obj.currentlyActivePhoto){
				return <PassiveDestination
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



	// _handleClick(  )



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

export default PhotoRoll;
