import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';
import productdetailReducer from './productdetailReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer,
    productDetails: productdetailReducer,
});

export default rootReducer;
