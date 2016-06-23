'use strict'

export const SET_AIRPORT = 'SET_AIRPORT'; 

export function setAirport (airport){
	//airport is the string
  return {
    type: SET_AIRPORT,
    payload: airport
  }
}
