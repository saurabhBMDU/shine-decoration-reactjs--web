import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../service/api";

export const checkWishlist = async (productId) => {
    return async dispatch =>{
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('please login');
                return;
            }
            const response = await axios.get(`${API_URL}/mobileApi/remove-from-wishlist/${productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const data = await response.json();
                const { statusCode, message, result } = data;
                console.log(data, 'product found in check wishlist');
                if (statusCode === 200) {
                    
                } else {
                    toast.error('error in check wishlist', result);
                }
            } else {
                const errorData = await response.data;
                throw new Error(errorData.message || 'error in check wishlist request');
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }
    
}


export const removeFromWishlist = (productId)=>{
    return async dispatch =>{
        try {
            const token = localStorage.getItem('token');
            console.log(token , 'this from remove wihslist')
            if (!token) {
                toast.error('please login');
                return;
            }
            const response = await axios.put(`${API_URL}/mobileApi/wishlist/remove-from-wishlist/${productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const data = await response.json();
                const { statusCode, message, result } =  data;
                console.log(data, 'product not removed from wishlist error');
                if (statusCode === 200) {
                    toast.success('product removed from wishlist')
                    
                } else {
                    toast.error('error in remove from wishlist', result);
                }
            } else {
                const errorData = await response.data;
                throw new Error(errorData.message || 'error in remove from wishlist request');
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }
}