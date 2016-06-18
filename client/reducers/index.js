import { combineReducers } from 'redux';
import Destination from './reducer_destination'

const rootReducer = combineReducers({
	destinations: Destination
});

export default rootReducer;