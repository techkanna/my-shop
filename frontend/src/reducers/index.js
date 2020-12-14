import { combineReducers } from 'redux'
import { cartReducer } from "./cardReducers";
import {
  productsReducer,
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer
} from "./productReduser";
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer
} from './userReducers'

const allReducers = combineReducers({
  productsTopList: productsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userDetails: userDetailsReducer,
})

export default allReducers;