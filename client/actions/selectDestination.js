// import axios from 'aixos';

//action to selec a destination from landing page
export const SELECT_DESTINATION = 'SELECT_DESTINATION';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';


// const URL = // whater... 

export function selectDestination (destination){
    //selectBook is an action creator, it need to return an action
    //{type: , payload: }
	    // const url = `${URL}lsdkjflsdjf`;

	    // request = axios.get(url);
	    let request = { data: 'Something...'};

    return {
        type: SELECT_DESTINATION,
        payload: request
    }
}

export function toggleActive (id) {

	return {
		type: TOGGLE_ACTIVE,
		payload: request
	}
}