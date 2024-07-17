import { ADD_TO_SUMMARY, GET_ORDER_SUMMARY, UPDATE_SUMMARY_QUANTITY } from "../action/actionType";


const intialState = {
    data: {},
    error:null,
    loading:true,
}

const orderSummaryReducer = (state=intialState,action) => {
    switch(action.type){
        case GET_ORDER_SUMMARY: {
            return {
                ...state,
                data:action.payload,
                loading:false
            }
        }
        case UPDATE_SUMMARY_QUANTITY:{
            return {
                ...state,
                data:action.payload,
                loading:false
            }
        }
        default: return state;
    }
}

export default orderSummaryReducer;