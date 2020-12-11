import { combineReducers } from 'redux'
import {
  productsReducer,
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer
} from "./productReduser";
import {
  userRegisterReducer,
  userLoginReducer
} from './userReducers'

const allReducers = combineReducers({
  productsTopList: productsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  productReviewCreate: productReviewCreateReducer,
})

export default allReducers;