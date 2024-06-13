import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer
});

export default rootReducer;
