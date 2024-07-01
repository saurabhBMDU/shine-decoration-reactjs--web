import { GET_WISHLIST, MOVE_TO_CART, REMOVE_FROM_WISHLIST } from "../action/actionType"


const intialState = {
    loading:true,
    error:null,
    data:undefined,
}


 const getWhishlistReducer = (state=intialState, action)=> {
    switch (action.type){
        case GET_WISHLIST:
            return{...state, data:action.payload,loading:false};
        case REMOVE_FROM_WISHLIST:
            console.log('Product removed', action.payload);
            return {
                ...state,
                data: {
                    ...state.data,
                    products: state.data.products.filter(product => product._id !== action.payload)
                }
            };
        case MOVE_TO_CART:
            return {
                ...state.data,
                products:state.data.products.filter(product => product._id !== action.payload)
            }

            default:
                return state;
    };
 
};

export default getWhishlistReducer;