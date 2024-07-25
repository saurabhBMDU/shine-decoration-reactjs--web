import { FORTGOT_OTP_SUCCESS, FORTGOT_OTP_FAILED} from '../action/actionType';

const initialState = {
  loading: false,
  data: [],
  error: null
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case FORTGOT_OTP_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FORTGOT_OTP_FAILED:
      return {...state,error:action.payload}
    default:
      return state;
  }
};

export default authreducer;
