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



// export const register = (form) => {
//   return async (dispatch) => {
//     try {
//       const response = await registerData(form);
//       console.log("res--", response);
//       const { data: { message, statusCode, result } = {} } = response;
//       if (statusCode === 200) {
//         dispatch({
//           type: REGISTER_SUCCES,
//           payload: result
//         });
//         toast.success(message);
//       }
//     } catch (error) {
//       if (error.response) {
//         const { data: { message } } = error.response;
//         toast.error(message);
//       } else {
//         toast.error('An unexpected error occurred. Please try again.');
//       }
//     }
//   };
// };