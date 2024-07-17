import axios from "axios";
import { API_URL } from "../service/api";
import { ADD_TO_SUMMARY, GET_ORDER_SUMMARY, UPDATE_SUMMARY_QUANTITY } from "./actionType";
import { toast } from "react-toastify";


export  const addSingleToOrderSummary = (productId) => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            console.log('please log in')
            return
        }
        
        try {
                    const response = await fetch(`${API_URL}/mobileApi/summary/order-summary/${productId}`,{
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                      
                    if(response.status ===200){
                        const data = await response.json()
                        const { message } = data.data;             
                        dispatch({
                            type:ADD_TO_SUMMARY,
                        })
                        toast.success('added single product to order summary')
                    } else {
                        console.error(response.statusText)
                    }
        } catch (error) {
            toast.error(error)
        }


    }
}



export const getOrderSummary = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            console.error('please login')
            return
        }
        try {
            const response = await axios.get(`${API_URL}/mobileApi/summary/order-summary`,{
                headers:{
                    'Authorization' : `Bearer ${token}`,
                    "Content-Type" : 'application/json'
                }
             })
             if(response.status = 200){
                const { result , message} = response.data;
                dispatch({
                    type:GET_ORDER_SUMMARY,
                    payload:result
             })
             console.log(result)
            } else {
                console.log('something wrong in getsummary')
            }
    }catch(error){
        console.error(error)
    }
    }
}


export const updateOrderSummary = (productId,quantity) => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            console.error('please login');
            return
        }
        try {
            const reqBody = { quantity:quantity}
            const response = await fetch(`${API_URL}/mobileApi/summary/order-summary/${productId}`,{
                method:'PUT',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(reqBody)
            })
            console.log(response,'ressppppp update')

            if(response.status === 200){
                const data = response.json();
                const {result, message} = data.data;
                dispatch({
                    type:UPDATE_SUMMARY_QUANTITY,
                    payload:result
                })
                console.log(result,'summary udpate')
            } else {
                throw Error ( response)
            }
        } catch (error) {
            toast.error(error)
        }
    }
}