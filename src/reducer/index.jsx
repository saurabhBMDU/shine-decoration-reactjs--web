import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';
import productdetailReducer from './productdetailReducer';
import categoryReducer from './categoryReducer';
import getCartReducer from './getCart';


const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer,
    productDetails: productdetailReducer,
    categories:categoryReducer,
    CartData : getCartReducer,
   
});

export default rootReducer;
