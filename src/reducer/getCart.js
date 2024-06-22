import { GET_CART } from "../action/actionType"

const initialState = {
  loading:false,
  data:[],
  error:''


}

const getCartReducer = (state=initialState ,action) => {
    console.log(action.type,'from getcart reducer')
    switch(action.type){
        case GET_CART :
            return{
                data:action.payload,
                error:''
            };
            default:
                return state;

    }
}

export default getCartReducer