'use strict'
import axios from "axios"
import { SET_ACTIVE_DESTINATION } from '../actions/setActiveDestination';

let INITIAL_STATE={};
axios.get('/packages/selectpackage/Seven Wonders of the World')
	.then(function(data){
		console.log(data)
		INITIAL_STATE.active=data.data.slice(0,1);
		INITIAL_STATE.passive=data.data.slice(1);
	})

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