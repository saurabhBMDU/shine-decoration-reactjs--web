import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';
import productdetailReducer from './productdetailReducer';
import categoryReducer from './categoryReducer';
import getCartReducer from './getCart';
import SearchResultReducer from './searchlistReducer';
import getWhishlistReducer from './getWishlistReducer';
import getUserReducer from './getUserDetailsReducer';


const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer,
    productDetails: productdetailReducer,
    categories:categoryReducer,
    CartData : getCartReducer,
    searchResult:SearchResultReducer,
    WishlistData:getWhishlistReducer,
    getUser:getUserReducer,
   
});

export default rootReducer;
