'use strict'
import axios from "axios"
import { SET_AIRPORT } from '../actions/setAirport';


let INITIAL_STATE = { originairport: localStorage.getItem('originairport')|| "HOUA-sky" };

export default function (state = INITIAL_STATE, action) {
	// console.log('line 9 reducers/reducers_airport.js state is',state);
	// console.log('line 10 reducers/reducers_airport.js action is',action);
  switch (action.type){
		case SET_AIRPORT:
    	let newState = {};
    	newState.originairport = action.payload;
    	return newState
		default:
			return state
	}
}