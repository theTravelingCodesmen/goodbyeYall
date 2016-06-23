'use strict'
import axios from "axios"
import { SET_AIRPORT } from '../actions/setAirport';


let INITIAL_STATE = { originairport: localStorage.getItem('originairport')|| "HOUA-sky" };

export default function (state = INITIAL_STATE, action) {
	console.log(state)
  switch (action.type){
		case SET_AIRPORT:
    	let newState = {};
    	newState.originairport = action.payload
    	return newState
		default:
			return state
	}
}