import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';
import productdetailReducer from './productdetailReducer';
import categoryReducer from './categoryReducer';


const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer,
    productDetails: productdetailReducer,
    categories:categoryReducer,
   
});

export default rootReducer;
