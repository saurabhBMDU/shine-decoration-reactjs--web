
import { API_URL } from "../service/api"
import { GET_CART } from "./actionType"
import { toast } from "react-toastify"




export const getCart = () => {
    return  dispatch => {
        try {
            const token = localStorage.getItem('token')
            if(!token) {
                toast.error('user is not Authorised')
                return ;
            }
             fetch(`${API_URL}/mobileApi/cart/cart`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then((response)=>{
                const {data:{message ,statusCode} = {}} = response
               
                   console.log(response ,'from the getcart action');
                   if(statusCode ===200){
                       console.log('hello');
                       dispatch({
                           type:GET_CART,
                           payload:response.data.result,
                       })
                       toast.success(message);
                   }else{
                       toast.error(message,'failed to get cartData');
                   }
            }).catch(error=>{
                throw error(error)
            })
        } catch (error) {
            if (error.response) {
                if (error.response && error.response.data) {
                    const { message } = error.response.data;
                    toast.error(message);
                } else {
                    toast.error('Failed to fetch cart data');
                }
            }
        }
    }

}