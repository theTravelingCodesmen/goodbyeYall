'use strict'
import axios from 'axios';

export const FETCH_PACKAGE = 'FETCH_PACKAGE'; 

export function fetchPackage (package_name){
	axios.defaults.headers.common['originAirport'] = localStorage.getItem('originAirport');
	console.log('line 8 fetchPackage.js', axios.defaults.headers.common['originAirport']);
	let destinations = axios.get('/packages/selectpackage/'+package_name)
										.then(function(obj){return {data: obj.data, package_name:package_name}});
  return {
    type: FETCH_PACKAGE,
    payload: destinations
  }
}
