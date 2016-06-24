import { combineReducers } from 'redux';
import Destination from './reducer_destination'
import Airport from './reducer_airport'

const rootReducer = combineReducers({
	destinations: Destination,
	airport:Airport
});

export default rootReducer;