import { API_URL } from '../service/api';
import axios from 'axios';
import {
  REGISTER_SUCCES,
} from './actionType';
import { toast } from 'react-toastify';




export const register = (form) => {
  return dispatch => {
    axios.post(`${API_URL}/mobileApi/register`, form)
      .then(response => {
        console.log("res--", response);
        const { data: { message, statusCode } = {} } = response;
        if (statusCode === 200) {
          dispatch({
            type: REGISTER_SUCCES,
            payload: response.data.result
          });
          toast.success(message);
        } else {
          toast.error("Registration failed: " + message);
        }
      })
      .catch(error => {
        if (error.response) {
          const { data: { message } } = error.response;
          toast.error(message);
        } else {
          return error
        }
      });
  };
};


export const doLogin = (form) => {
  return dispatch => {
    axios.post(`${API_URL}/mobileApi/login`, form)
      .then(response => {
        console.log("res toen ka--", response.data.result.user.jwtToken);
        const { data } = response;
        const { message, statusCode } = data;

        if (statusCode === 200) {  // Assuming 200 is the success code
          const jwtToken = data.result.user.jwtToken;
          localStorage.setItem('token', jwtToken);
          dispatch({
            type: 'LOGIN_SUCCESS', // Define this action type in your reducer
            payload: data.result
          });
          toast.success(message);
        } else {
          toast.error(message); // Changed from success to error for failure case
        }
      })
      .catch(error => {
        if (error.response) {
          const { message } = error.response.data; // Corrected the destructuring of message
          toast.error(message);
        } else {
          toast.error('An unexpected error occurred');
        }
      });
  };
};