import { GET_CATEGORY } from '../action/actionType';

const initialState = {
  loading: false,
  data: [],
  user: null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, categories: action.payload, error: null };
    default:
      return state;
  }
};

export default categoryReducer;