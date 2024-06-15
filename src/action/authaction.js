import { API_URL } from '../service/api';
import axios from 'axios';
import {
  REGISTER_SUCCES,
} from './actionType';
import { toast } from 'react-toastify';


export const doRegister = (form, callback) => {
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
          if (callback) callback();
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


export const doLogin = (form, callback) => {
  return (dispatch) => {
    axios.post(`${API_URL}/mobileApi/login`, form)
      .then(response => {
         const { data } = response;
        const { message, statusCode } = data;

        if (statusCode === 200) {
          const jwtToken = data.result.user.jwtToken;
          localStorage.setItem('token', jwtToken);
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data.result,
          });
          toast.success(message);
          if (callback) callback();
        } else {
          toast.error(message);
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


export const forgotPassword = (form, callback) => {
  return dispatch => {
    axios.post(`${API_URL}/mobileApi/forget-password`, form)
      .then(response => {
         const { data: { message, statusCode } = {} } = response;
        if (statusCode === 200) {
          dispatch({
            type: REGISTER_SUCCES,
            payload: response.data.result
          });
          toast.success(message);
          if (callback) callback();
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


export const otpVerification = (form, callback) => {
  return dispatch => {
    axios.post(`${API_URL}/mobileApi/otp-verify`, form)
      .then(response => {
        console.log("res--", response);
        const { data: { message, statusCode } = {} } = response;
        if (statusCode === 200) {
          dispatch({
            type: REGISTER_SUCCES,
            payload: response.data.result
          });
          toast.success(message);
          if (callback) callback();
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