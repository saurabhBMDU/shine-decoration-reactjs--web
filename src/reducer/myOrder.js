import { GET_MY_ORDER } from "../action/actionType"




const intialState = {
    data:{},
    loading: false,
    error: null
}

const MyordersReducer = (state=intialState,action)=>{
    switch(action.type){
        case GET_MY_ORDER:{
            return {...state,loading:true,error:null,data:action.payload}
        }

            default : return state
    }
}

export default MyordersReducer