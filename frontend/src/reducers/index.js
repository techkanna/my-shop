import isLogged from "./isLogged";
import products from "./products";
import productReduser from "./productReduser";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  isLogged,
  products,
  productList: productReduser
})

export default allReducers;