export function selectDestination (destination){
    //selectBook is an action creator, it need to return an action
    //{type: , payload: }
    return {
        type: 'DESTINATION_SELECTED',
        payload: destination
    }
}