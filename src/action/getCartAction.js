
import { API_URL } from "../service/api";
import { GET_CART } from "./actionType";
import { toast } from "react-toastify";

export const getCart = () => {
    return dispatch => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('User is not authorised');
                return;
            }
            fetch(`${API_URL}/mobileApi/cart/cart`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                return response.json(); // Parse response as JSON
            }).then((data) => {
                const { message, statusCode } = data;
                if (statusCode === 200) {
                    dispatch({
                        type: GET_CART,
                        payload: data.result,
                    });
                    toast.success(message);
                } else {
                    toast.error(message, 'Failed to get cart data');
                }
            }).catch(error => {
                throw error;
            });
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
