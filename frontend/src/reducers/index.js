import { combineReducers } from 'redux'
import { productsReducer, productListReducer, productDetailsReducer } from "./productReduser";
import { userRegisterReducer } from './userReducers'

const allReducers = combineReducers({
  productsTopList: productsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userRegister: userRegisterReducer
})

export default allReducers;