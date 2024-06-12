import { REGISTER_SUCCES } from '../action/actionType';

const initialState = {
  loading: false,
  data: [],
  user: null
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCES:
      return { ...state, user: action.payload, error: null };
    default:
      return state;
  }
};

export default authreducer;
