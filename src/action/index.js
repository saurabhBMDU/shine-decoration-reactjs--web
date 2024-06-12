import axios from 'axios';
import {
  FETCH_DATA_SUCCESS,
} from './actionType';
import { API_URL } from '../service/api';

export const fetchData = () => {
  return dispatch => {
    axios.get(`${API_URL}/mobileApi/register`)
      .then(response => {
        const { data: { message, status } = {} } = response;
        console.log("res--", response);
        if (status) {
          dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: { status, message }
          });
        } else {
          return { message, status }
        }
      })
  };
};
