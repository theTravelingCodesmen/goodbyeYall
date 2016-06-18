import { SELECT_DESTINATION, TOGGLE_ACTIVE } from '../actions/selectDestination';

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
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/petra.png', next_image_url: 
			'/assets/images/petra.jpeg'
	   }] }

export default function (state = INITIAL_STATE, action) {
   //  switch (action.type){
   //  case SELECT_DESTINATION:
   //  	return { ...state, selectedDestination: action.payload.data }
   //  // case TOGGLE_ACTIVE:
   //  // 	return {...state, active: action.payload.data}
   //  default:
   //  	return state;
   //  //else dont care about other action
  	// }
  	return state
}