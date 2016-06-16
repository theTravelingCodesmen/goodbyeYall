'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoRoll from '../components/photoRoll'


class CardBox extends React.Component {
	render() {
		return(
			<div className='container'>

					<CardTitle className='card-title col-md-12' />


					<PhotoRoll className='row' />


			</div>

		)
	}
	//Currently hard-coded, will accept a package_group arguement on click event
	_getDestinations(){

		const destinationsList = [
			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/petra.png', next_image_url: 
			'/assets/images/petra.jpeg'
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   }
	  ]

		return destinationsList.map((obj,index) => {
			if(index === 0){
				obj.currentlyActivePhoto = true;
				//rename img urls 
				return <ActivePhoto 
					title={obj.title} 
					airport_code={obj.airport_code} 
					country={obj.country} 
					city_name={obj.city_name} 
					intro={obj.intro} 
					package_group={obj.package_group} 
					main_image_url={obj.main_image_url} 
					next_image_url={obj.next_image_url}
				/>
			}
			else{
				obj.currentlyActivePhoto = false;
				return <PassivePhoto 
					title={obj.title} 
					airport_code={obj.airport_code} 
					country={obj.country} 
					city_name={obj.city_name} 
					intro={obj.intro} 
					package_group={obj.package_group} 
					main_image_url={obj.main_image_url} 
					next_image_url={obj.next_image_url}
				/>
			}
		})
	}



}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;
