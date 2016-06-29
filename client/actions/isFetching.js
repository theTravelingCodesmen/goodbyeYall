'use strict'

// Do not mutate constant
export const IS_FETCHING ='IS_FETCHING';

export function changeFetching(bool){
	console.log('line 7 isFetching running with input',bool)
	return {
		type: IS_FETCHING,
		payload: bool
	}
}
