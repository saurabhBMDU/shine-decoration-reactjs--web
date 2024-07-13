import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import productReducer from './productReducer';
import productdetailReducer from './productdetailReducer';
import categoryReducer from './categoryReducer';
import getCartReducer from './getCart';
import SearchResultReducer from './searchlistReducer';
import getWhishlistReducer from './getWishlistReducer';
import getUserReducer from './getUserDetailsReducer';
import recentProuductsReducer from './recentProductsReducer';
import filterReducer from './filterReducer';
import orderSummaryReducer from './orderSummary';



const rootReducer = combineReducers({
    data: dataReducer,
    productData: productReducer,
    productDetails: productdetailReducer,
    categories:categoryReducer,
    CartData : getCartReducer,
    searchResult:SearchResultReducer,
    WishlistData:getWhishlistReducer,
    getUser:getUserReducer,
    recentProducts:recentProuductsReducer,
    filteredProducts:filterReducer,
    OrderSummary:orderSummaryReducer,
});

export default rootReducer;
