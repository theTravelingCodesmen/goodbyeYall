mport { combineReducers } from 'redux';
import Destination from './reducer_destination';
import DestinationData from './reducer_destination_data'

const rootReducer = combineReducers({
        destination: Destination,
        destinationData:DestinationData
});

export default rootReducer;