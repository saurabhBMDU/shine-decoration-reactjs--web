import { FaTruckLoading } from "react-icons/fa";
import { BEST_PRODUCTS } from "../action/actionType";

const initialState = {
    products:{
        topSellingProducts:null,
    },
    loading:true,
    error:null
}

const newProductsReducer = (state=initialState,action) =>{
    switch (action.type){
        case BEST_PRODUCTS:{
            return {...state,}
        }
        default: 
        return state
    }
}

export default newProductsReducer