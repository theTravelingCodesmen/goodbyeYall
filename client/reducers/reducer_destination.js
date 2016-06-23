'use strict'
import axios from "axios"
import { SET_ACTIVE_DESTINATION } from '../actions/setActiveDestination';
import {FETCH_PACKAGE} from '../actions/fetchPackage'

let INITIAL_STATE = { passive: [], active: [], package_name:''};

export default function (state = INITIAL_STATE, action) {
	console.log(state)
  switch (action.type){
		case SET_ACTIVE_DESTINATION:
    	let newState = {};
    	newState.package_name = state.package_name;
			newState.passive = (state.passive.slice()).concat(state.active.slice());
			newState.active = newState.passive.filter((obj) => {return obj.id === action.payload})
			newState.passive = newState.passive.filter((obj) => {return obj.id !== action.payload})
    	return newState
		case FETCH_PACKAGE:
			return { passive: action.payload.data.slice(0,-1) , active: action.payload.data.slice(-1), package_name:action.payload.package_name }
		default:
			return state
	}
}