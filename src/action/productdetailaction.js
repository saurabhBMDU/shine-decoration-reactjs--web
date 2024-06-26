import { API_URL } from '../service/api';
import axios from 'axios';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_PRODUCT_DETAILS,
  UPDATE_CART,
} from './actionType';
import { ToastContainer, toast } from 'react-toastify';
import { type } from '@testing-library/user-event/dist/type';


export const addWishList = (productId) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("User is not authenticated");
        return;
      }
      const response = await fetch(`${API_URL}/mobileApi/wishlist/add-to-wishlist/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log('data', response);
        const { message, statusCode, result } = data;

        if (statusCode === 200) {
          dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: result
          });
          toast.success(message);
        } else {
          toast.error("Failed to add to wishlist: " + message);
        }
      } else {
        const errorData = await response.json();
        console.log('data', errorData);
        toast.error(errorData.message || 'An unexpected error occurred');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error("An unexpected error occurred");
    }
  };
};



export const addtoCart = ({productId,quantity}) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');
      console.log('this token from addtocart',token)
      if (!token) {
        toast.error("User is not authenticated");
        return;
      }
      const requestBody = {
        productId: productId,
        quantity:quantity,
      };
      const response = await fetch(`${API_URL}/mobileApi/cart/add-to-cart/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        const { message, statusCode, result } = data;

        if (statusCode === 200) {
          dispatch({
            type:ADD_TO_CART,
            payload: result
          });
          toast.success(message);
        } else {
          toast.error("Failed to add to Cart: " + message);
        }
      } else {
        const errorData = await response.json();
        console.log('data', errorData);
        toast.error(errorData.message || 'An unexpected error occurred ');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error("An unexpected error occurred");
    }
  };
};




export const updateCart = ({productId,quantity}) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');
      console.log('this token from addtocart',token)
      if (!token) {
        toast.error("User is not authenticated");
        return;
      }
      const requestBody = {
        productId: productId,
        quantity:quantity,
      };
      const response = await fetch(`${API_URL}/mobileApi/cart/update-cart/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        const { message, statusCode, result } = data;

        if (statusCode === 200) {
          dispatch({
            type:UPDATE_CART,
            payload: result
          });
          toast.success(message);
        } else {
          toast.error("Failed to add to Cart: " + message);
        }
      } else {
        const errorData = await response.json();
        console.log('data', errorData);
        toast.error(errorData.message || 'An unexpected error occurred ');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error("An unexpected error occurred");
    }
  };
};








export const getProductDetails = (id) => {

  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/admin/product/product/${id}`);
      const { data: { message, statusCode, result } = {} } = response;
      if (statusCode === 200) {
        dispatch({
          type: GET_PRODUCT_DETAILS,
          payload: result
        });
      } else {
        toast.error("Registration failed: " + message);
      }
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
};