'use strict'

export const SET_AIRPORT = 'SET_AIRPORT'; 

/**
 * Action fired to when a user sets origin airport
 * @param {bool} airport - is origin airport selected by user
 */

export function setAirport (airport){
  return {
    type: SET_AIRPORT,
    payload: airport
  }
}
