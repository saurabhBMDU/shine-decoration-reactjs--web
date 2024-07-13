import { ADD_TO_SUMMARY } from "../action/actionType";


const intialState = {
    data: {},
    error:null,
    loading:true,
}

const orderSummaryReducer = (state=intialState,action) => {
    switch(action.type){
        case ADD_TO_SUMMARY: {
            return {
                ...state,
                data:{cartItems:action.payload},
                loading:false
            }
        }
        default: return state;
    }
}

export default orderSummaryReducer;