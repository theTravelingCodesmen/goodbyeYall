export default function (state = null, action){
    switch (action.type){
        case "DEST_SELECTED":
            return action.payload
    }
    //else dont care about other action
    return state
}