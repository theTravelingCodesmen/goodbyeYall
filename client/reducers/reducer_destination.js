'use strict'
import axios from "axios"
import { SET_ACTIVE_DESTINATION } from '../actions/setActiveDestination';
import {FETCH_PACKAGE} from '../actions/fetchPackage'

let INITIAL_STATE = { passive: [], active: []};

export default function (state = INITIAL_STATE, action) {
	console.log(state)
  switch (action.type){
		case SET_ACTIVE_DESTINATION:
    	let newState = {};
			newState.passive = state.passive.concat(state.active)
			newState.active = newState.passive.filter((obj) => {return obj.id === action.payload})
			newState.passive = newState.passive.filter((obj) => {return obj.id !== action.payload})
    	return newState
		case FETCH_PACKAGE:
			return { passive: action.payload.passive, active: action.payload.active }
		default:
			return state
	}
}