import { API_URL } from "../service/api";
import { toast } from "react-toastify";
import { FILTER_PRODUCTS } from "./actionType";

export const filterProducts = (key,value,api='default') => {
    return async dispatch => {
        let endpoint;
        if(api==='default'){
            endpoint = `${key}=${value}`;
        }else if(api ==='price'){
            endpoint = `page=1&maxPrice=${key}&minPrice=${value}`
        }else if ( api === 'Categories'){
            const categories = Array.isArray(value) ? value.join(',') : value; // Handle multiple categories
            endpoint = `page=1&${key}=${categories}`;
        }else if  (api === 'color'){
            const colors = Array.isArray(value) ? value.join(',') : value;
            endpoint = `page=1&${key}=${colors}`
        }
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_URL}/mobileApi/product/filter-product?${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` }) // Add token header if available
                }
            });
           

            if (!response.ok) {
                throw new Error('Failed to fetch filtered products');
            }

            const data = await response.json();
             const {statusCode , result,message} = data;
              if(statusCode ===200){
            dispatch({
                type: FILTER_PRODUCTS,
                payload: result
            });
            console.log(result,'from filter')
            toast.success(message)
        }

        } catch (error) {
            console.error('Error fetching filtered products:', error);
           toast.error(error)
        }
    };
};
