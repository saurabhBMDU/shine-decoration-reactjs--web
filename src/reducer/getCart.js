import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART } from "../action/actionType";

const initialState = {
  loading: false,
  data: {
    cartItems: [  ],
    totalQuantity: 0, 
  },
  error: ''
};

const getCartReducer = (state = initialState, action) => {
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
    case UPDATE_CART :
      const updatedProducts = state.data?.cartItems.map(product => {
        if (product.product.id === action.payload.productId) {
          return {
            ...product,
            product:{quantity:action.payload}
          };
        }
        return product;
      });

      const previousQuantity = state.data.cartItems.find(product => product.product.id === action.payload.productId)?.product.quantity || 0;
      const quantityDifference = action.payload.quantity - previousQuantity;

      return {
        ...state,
        data: {
          ...state.data,
          cartItems: updatedProducts,
          totalQuantity: state.data.totalQuantity + quantityDifference,
        },
        error: ''
      };
  case DELETE_FROM_CART: 
        const updateCartItem = state.data?.cartItems.map(item => item.product._id === action.payload.productId)
  return {
    ...state,
     data: {
      ...state.data, 
      cartItems: updateCartItem,
      totalQuantity: state.data.totalQuantity - action.payload.quantity,
      error: ''
      }
  }
    default:
      return state;
  }
};

export default getCartReducer;
