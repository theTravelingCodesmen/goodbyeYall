import { SET_ACTIVE_DESTINATION } from '../actions/setActiveDestination';

const INITIAL_STATE = { passive: [
			
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:3, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   {id:4, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:5, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   {id:6, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   			{id:7, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   }
	  ],
	  //TODO active just map to one object, not array of one obj
	 active: [{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "axxxxxxx", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/petra.png', next_image_url: 
			'/assets/images/petra.jpeg'
	   }] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
    case SET_ACTIVE_DESTINATION: 
    	let newState = {};
    	newState.passive = INITIAL_STATE.passive.concat(INITIAL_STATE.active)
    	newState.active = newState.passive.filter((obj)=>{return obj.id === action.payload})
    	newState.passive = newState.passive.filter((obj)=>{return obj.id !== action.payload})
    	return newState
  	default:
  		return state
	}
}