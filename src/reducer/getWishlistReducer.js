import { GET_WISHLIST } from "../action/actionType"


const intialState = {
    loading:true,
    error:null,
    data:[],
}


 const getWhishlistReducer = (state=intialState, action)=> {
    switch (action.type){
        case GET_WISHLIST:
            return{...state, data:action.payload,loading:false};
            default:
                return state;
    };
};

export default getWhishlistReducer;