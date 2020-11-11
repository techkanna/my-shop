import { combineReducers } from 'redux'
import { productsReducer, productListReducer, productDetailsReducer } from "./productReduser";

const allReducers = combineReducers({
  productsTopList: productsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer
})

export default allReducers;