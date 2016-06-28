'use strict'

// Do not mutate constant
export const IS_LOGGED_IN ='IS_LOGGED_IN';

export function changeLogin(bool){
	return {
		type: IS_LOGGED_IN,
		payload: bool
	}
}
