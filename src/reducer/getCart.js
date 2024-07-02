import { GET_CART, ADD_TO_CART } from "../action/actionType";

const initialState = {
  loading: false,
  data: {
    products: [],
    totalQuantity: 0, 
  },
  error: ''
};

const getCartReducer = (state = initialState, action) => {
  console.log(action.type, 'from getCart reducer');
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        data: action.payload,
        error: '',
        loading: false
      };
    case ADD_TO_CART:
      return {
        ...state,
        data: {
          ...state.data,
          totalQuantity: state.data.totalQuantity + action.payload.quantity, 
        error: ''
      }
    }
    default:
      return state;
  }
};

export default getCartReducer;
