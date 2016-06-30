'use strict'

// Do not mutate constant
export const IS_FETCHING ='IS_FETCHING';

export function changeFetching(bool){
	return {
		type: IS_FETCHING,
		payload: bool
	}
}
