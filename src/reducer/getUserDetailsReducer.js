import { GET_PROFILE } from "../action/actionType";


const intialState = {
    user:null,
    loading:true,
    error:null
}

const getUserReducer = (state = intialState,action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {...state , user:action.payload ,loading:false}
            default:
                return state
}
}

export default getUserReducer;