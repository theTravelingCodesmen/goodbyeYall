'use strict'

export const FETCH_PACKAGE = 'FETCH_PACKAGE'; 

export function fetchPackage (destinations){
  return {
    type: FETCH_PACKAGE,
    payload: destinations
  }
}
