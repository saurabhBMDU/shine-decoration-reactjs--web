import axios from "axios"
import { API_URL } from "../service/api"
import { GET_MY_ORDER } from "./actionType"

export const myOrderAction = ()=>{
    return async dispatch => {
       try {
             const token = localStorage.getItem('token')
             const response = await axios.get(`${API_URL}/mobileApi/order/order`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            console.log(response,'response of my order')

             if(response.status===200){
                const {data:{result}={}} = response;
                dispatch({
                    type:GET_MY_ORDER,
                    payload:result
                })
             }else{
                throw Error(response)
             }

       } catch (error) {
          console.log(error.message)
       }
    }
}