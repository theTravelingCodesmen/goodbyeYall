'use strict'

export const SET_AIRPORT = 'SET_AIRPORT'; 

export function setAirport (airport){
	//airport is the string
	// console.log('line 7 setAirport.js', airport)
  return {
    type: SET_AIRPORT,
    payload: airport
  }
}
