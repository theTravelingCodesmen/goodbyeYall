'use strict'
import axios from 'axios';

export const FETCH_PACKAGE = 'FETCH_PACKAGE'; 

export function fetchPackage (package_name){
	let destinations = axios.get('/packages/selectpackage/'+package_name)
										.then(function(obj){return {data: obj.data, package_name:package_name}});
  return {
    type: FETCH_PACKAGE,
    payload: destinations
  }
}
