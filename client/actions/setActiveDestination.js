export const SET_ACTIVE_DESTINATION = 'SET_ACTIVE_DESTINATION'; 

export function setActiveDestination (_id){
    return {
        type: SET_ACTIVE_DESTINATION,
        payload: _id
    }
}
